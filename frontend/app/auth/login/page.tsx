import ButtonInput from "@/app/components/ButtonInput";
import Card from "@/app/components/Card";
import TextInput from "@/app/components/TextInput";

export default function Login() {
    return (
        <div className="bg-white w-full min-h-screen flex flex-col items-center justify-center gap-5">
            <div>
                <h1 className="text-4xl font-bold text-center text-gray-800">Bookink!</h1>
                <p className="text-md text-center text-gray-800">Booking semua dengan mudah :)</p>
            </div>
            <Card className="w-100 gap-5">
                <h1 className="text-left w-full text-xl font-bold text-gray-800">Selamat datang kembali!</h1>

                <TextInput className="w-full" placeholder="Username" />
                <TextInput className="w-full" placeholder="Password" type="password" />

                <div className="flex flex-col w-full h-full justify-end gap-3 mt-6">
                    <ButtonInput className="w-full">Login</ButtonInput>
                    <p className="text-md text-right text-gray-800">Belum punya akun? <a href="/auth/register" className="text-orange-500 font-bold">Daftar disini!</a></p>
                </div>
            </Card>
        </div>
    );
}