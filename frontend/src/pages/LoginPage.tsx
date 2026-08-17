import { Link } from "react-router"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"


export function LoginPage() {
    return (
        <section className="grid lg:grid-cols-2 items-center h-screen">
            <div className="flex items-center justify-center h-full">
                <form>
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
                        <Field>
                            <FieldLabel htmlFor="email">آدرس ایمیل</FieldLabel>
                            <Input id="email" type="email" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="password">رمزعبور</FieldLabel>
                            <Input id="password" type="password" />
                        </Field>
                        <div className="flex gap-2">
                            <Checkbox id="remember-me" />
                            <FieldLabel htmlFor="remember-me">مرا به خاطر بسپار</FieldLabel>
                        </div>
                        <Button className='text-white p-4'>ورود</Button>
                    </div>
                </form>
            </div>
            <div className="hidden relative overflow-hidden h-full lg:flex items-center justify-center [background-image:radial-gradient(rgba(129,140,248,0.18)_1px,transparent_1px),linear-gradient(160deg,#1A2142_0%,#10152A_100%)] [background-size:24px_24px,100%_100%] [background-repeat:repeat,no-repeat]">
                <div className="w-[350px] h-[350px] rounded-full absolute blur-[160px] bg-primary right-0 bottom-0"></div>
                <img className="w-[500px] select-none" src="../public/img/login.png" alt="login image" />
                <div className="w-[350px] h-[350px] rounded-full absolute blur-[160px] bg-info left-0 top-0"></div>
            </div>
        </section>
    )
}