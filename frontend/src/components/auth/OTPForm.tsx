import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { Field, FieldDescription } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { ArrowRight } from "lucide-react"
import { toast } from "@/components/ui/toast"
import { Spinner } from "@/components/ui/spinner"
import type { OTPFormProps, OTPErrors } from "@/types/auth"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"


export function OTPForm({ setAuthStep, token }: OTPFormProps) {
    const navigate = useNavigate()
    const [ otp, setOtp ] = useState("")
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState<OTPErrors>()

    const formValidation = (): OTPErrors => {
        const errors: OTPErrors = {}

        if (!otp.trim()) {
            errors.otp = "وارد کردن کد تایید الزامی می‌باشد"
        }
        return errors
    }

    const handleVerify2FA = async (event: React.SubmitEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()

        const errors = formValidation()
        if (Object.keys(errors).length > 0) {
            setError(errors)
            return
        }

        try {
            setLoading(true)
            const response = await fetch('http://localhost:8000/verify-2fa/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    code: otp,
                    token: token
                })
            })
            const data = await response.json()
            console.log(data)

            if (!response.ok) {
                toast.add({
                    type: "error",
                    description: data.general,
                })
                return
            }

            // Login user to system
            console.log(data)
            toast.add({
                type: "success",
                description: "ورود شما با موفقیت انجام شد",
            })
            navigate("/")

        } catch(error) {
            toast.add({
                type: "error",
                description: "خطا در برقراری ارتباط با سرور",
            })

        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleVerify2FA}>
            <div className="flex items-center gap-2 mb-8">
                <Button onClick={ () => setAuthStep("login") } variant="ghost" className="px-2">
                    <ArrowRight className="size-4" />
                </Button>
                <Link to="/" className='flex items-end gap-2'>
                    <img className='w-[25px]' src="../public/logo.svg" alt="logo" />
                    <span className='font-bold'>جیـکاپیـــک</span>
                </Link>
            </div>
            <div className="space-y-1.5">
                <h1 className="font-black text-3xl">ورود | ثبت نام</h1>
                <p className="text-text-secondary text-sm">ورود به سامانه جیکاپیک، امکان ورود به صورت احرازهویت دوعاملی</p>
            </div>
            <p className="text-lg font-bold mt-8">کد تایید را وارد کنید</p>
            <div className="flex flex-col gap-5 mt-4">
                <Field>
                    <InputOTP id="digits-only" className="w-full" maxLength={6} value={otp} onChange={setOtp} pattern={REGEXP_ONLY_DIGITS}>
                        <InputOTPGroup className="flex-row-reverse w-full gap-2 !ring-0 !outline-none">
                            <InputOTPSlot index={0} aria-invalid={!!error?.otp} className="w-full flex-1 h-12 text-lg rounded-lg border" />
                            <InputOTPSlot index={1} aria-invalid={!!error?.otp} className="w-full flex-1 h-12 text-lg rounded-lg border" />
                            <InputOTPSlot index={2} aria-invalid={!!error?.otp} className="w-full flex-1 h-12 text-lg rounded-lg border" />
                            <InputOTPSlot index={3} aria-invalid={!!error?.otp} className="w-full flex-1 h-12 text-lg rounded-lg border" />
                            <InputOTPSlot index={4} aria-invalid={!!error?.otp} className="w-full flex-1 h-12 text-lg rounded-lg border" />
                            <InputOTPSlot index={5} aria-invalid={!!error?.otp} className="w-full flex-1 h-12 text-lg rounded-lg border" />
                        </InputOTPGroup>
                    </InputOTP>
                    {error?.otp && <FieldDescription className="text-right">{error?.otp}</FieldDescription>}
                </Field>
                <p className="text-xs text-center text-text-secondary my-5">ارسال مجدد کد تا ۸۳ ثانیه دیگر</p>
                {!loading ? <Button type="submit" className='text-white p-4'>تایید و ادامه</Button> :
                    <Button disabled className='text-white p-4'>
                        <Spinner data-icon="inline-start" />
                        در حال ورود به سامانه ...
                    </Button>}
            </div>
        </form>
    )
}