"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { redirect, useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { toast } from 'sonner';

export default function Register() {
    const { data: session, status } = useSession();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    
    if (status === "loading") {
        return <div className="text-center mt-20">Loading...</div>;
    }
    if (session) {
        redirect("/");
    }

    const handleRegister = async (e) => {
        setIsLoading(true)
        e.preventDefault();

        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();

        if (!res.ok) {
            setIsLoading(false)
            toast.error(data.error || "Registration failed");
            return;
        }

        const loginRes = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (loginRes?.error) {
            setIsLoading(false)
            toast.error(loginRes.error);
        } else {

            setIsLoading(false)
            toast.success("User Registered Successfully")
            redirect("/");
        }
    };
    return <div>
        <div className="min-h-screen flex items-center justify-center bg-gradient-secondary py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                <Card className="shadow shadow-amber-600 dark:shadow-amber-400 border-0">
                    <CardHeader className="text-center pb-8">
                        <CardTitle className="text-2xl font-bold">Create New Account</CardTitle>
                        <CardDescription className="text-base">
                            Sign Up into a new account to manage your products
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleRegister} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email address</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="demo@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full dark:bg-amber-300 bg-amber-500  font-bold"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Signing in...' : 'Sign Up'}
                            </Button>
                        </form>
                        <p className="text-center text-sm mt-4">
                            Already have an account?{" "}
                            <Link href="/login" className="text-amber-700 dark:text-amber-400 hover:underline">
                                Login here
                            </Link>
                        </p>


                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
}