import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field"
import { toast } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { Checkbox } from "@/components/ui/checkbox"
import type { LoginInputs, LoginErrors, LoginFormProps } from "@/types/auth"


export function LoginFrom({ setAuthStep, setTwoFactorToken }: LoginFormProps) {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState<LoginInputs>({ email: "", password: "" })
    const [error, setError] = useState<LoginErrors>()
    const [loading, setLoading] = useState<boolean>(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target
        setInputs((prev) => ({ ...prev, [name]: value }))
        setError((prev) => ({ ...prev, [name]: undefined }))
    }

    const formValidation = (): LoginErrors => {
        const errors: LoginErrors = {}
        if (!inputs.email.trim()) {
            errors.email = "وارد کردن آدرس ایمیل الزامی است"
        }
        if (!inputs.password.trim()) {
            errors.password = "وارد کردن رمزعبور الزامی است"
        }
        return errors
    }

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()
        
        const errors = formValidation()
        if (Object.keys(errors).length > 0) {
            setError(errors)
            return
        }

        try {
            setLoading(true)
            const response = await fetch('http://localhost:8000/login/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: inputs.email,
                    password: inputs.password
                })
            })
            const data = await response.json()

            if (!response.ok) {
                toast.add({
                    type: "error",
                    description: data.general,
                })
                return
            }

            if (data.requires_2fa) {
                setAuthStep("otp")
                setTwoFactorToken(data.token)
                toast.add({
                    type: "success",
                    description: "کد تائید برای شما ارسال گردید",
                })
                return
            }

            // Login user to system
            toast.add({
                type: "success",
                description: "ورود شما با موفقیت انجام شد",
            })
            navigate("/")

        } catch (error) {
            toast.add({
                type: "error",
                description: "خطا در برقراری ارتباط با سرور",
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Link to="/" className='flex items-end gap-2 mb-8'>
                <img className='w-[25px]' src="../public/logo.svg" alt="logo" />
                <span className='font-bold'>جیـکاپیـــک</span>
            </Link>
            <div className="space-y-1.5">
                <h1 className="font-black text-3xl">ورود | ثبت نام</h1>
                <p className="text-text-secondary text-sm">ورود به سامانه جیکاپیک، امکان ورود به صورت احرازهویت دوعاملی</p>
            </div>
            <p className="text-text-secondary text-sm mt-8">
                سلام!<br />
                برای ورود به سامانه لطفا آدرس ایمیل و رمزعبور خود را وارد نمایید
            </p>
            <div className="flex flex-col gap-5 mt-8">
                <Field data-invalid={!!error?.email}>
                    <FieldLabel htmlFor="email">آدرس ایمیل</FieldLabel>
                    <Input onChange={handleChange} value={inputs.email} id="email" name="email" type="email" aria-invalid={!!error?.email} />
                    {error?.email && <FieldDescription className="text-right">{error?.email}</FieldDescription>}
                </Field>
                <Field data-invalid={!!error?.password}>
                    <FieldLabel htmlFor="password">رمزعبور</FieldLabel>
                    <Input onChange={handleChange} value={inputs.password} id="password" name="password" type="password" aria-invalid={!!error?.password} />
                    {error?.password && <FieldDescription className="text-right">{error?.password}</FieldDescription>}
                </Field>
                <div className="flex gap-2">
                    <Checkbox id="remember-me" />
                    <FieldLabel htmlFor="remember-me">مرا به خاطر بسپار</FieldLabel>
                </div>
                {!loading ? <Button type="submit" className='text-white p-4'>ورود</Button> :
                    <Button disabled className='text-white p-4'>
                        <Spinner data-icon="inline-start" />
                        در حال بررسی ...
                    </Button>}
            </div>

        </form>
    )
}