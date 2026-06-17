"use client";

import ButtonInput from "@/app/components/ButtonInput";
import Card from "@/app/components/Card";
import TextInput from "@/app/components/TextInput";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { register } from "@/app/lib/api";
import { getErrorMessage } from "@/utils/errors";


export default function Register() {
    const router = useRouter();
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        username: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (form.password !== form.confirmPassword) {
            setError('Password tidak cocok!');
            setLoading(false);
            return;
        }

        try {
            await register(form);
            router.push("/auth/login");
        } catch (error) {
            setError(getErrorMessage(error));
        } finally {
            setLoading(false);
        }

    }


    return (
        <div className="bg-white w-full min-h-screen flex flex-col items-center justify-center gap-5">
            <div>
                <h1 className="text-4xl font-bold text-center text-gray-800">Bookink!</h1>
                <p className="text-md text-center text-gray-800">Booking semua dengan mudah :)</p>
            </div>
            <Card className="w-120 gap-5">
                <h1 className="text-left w-full text-xl font-bold text-gray-800">Daftar sekarang!</h1>

                <div className="flex flex-row gap-5">
                    <TextInput className="w-full" placeholder="First Name" name="firstName" value={form.firstName} onChange={handleChange} required />
                    <TextInput className="w-full" placeholder="Last Name" name="lastName" value={form.lastName} onChange={handleChange} required />
                </div>
                <TextInput className="w-full" placeholder="Username" name="username" value={form.username} onChange={handleChange} required />
                <TextInput className="w-full" placeholder="Phone" name="phone" value={form.phone} onChange={handleChange} required />
                <TextInput className="w-full" placeholder="E-mail" type="email" name="email" value={form.email} onChange={handleChange} />

                <div className="flex flex-row gap-5">
                    <TextInput className="w-full" placeholder="Password" type="password" name="password" value={form.password} onChange={handleChange} required />
                    <TextInput className="w-full" placeholder="Confirm Password" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
                </div>

                <div className="flex flex-col w-full h-full justify-end gap-3 mt-6">
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <ButtonInput className="w-full" onClick={handleSubmit} disabled={loading}>
                        {loading ? 'Loading...' : 'Register'}
                    </ButtonInput>
                    <p className="text-md text-right text-gray-800">Sudah punya akun? <a href="/auth/login" className="text-orange-500 font-bold">Masuk!</a></p>
                </div>
            </Card>
        </div>
    );
}