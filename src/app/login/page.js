import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
    return <div>
        <div className="min-h-screen flex items-center justify-center bg-gradient-secondary py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                <Card className="shadow shadow-amber-600 dark:shadow-amber-400 border-0">
                    <CardHeader className="text-center pb-8">
                        <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
                        <CardDescription className="text-base">
                            Sign in to your account to manage your products
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form className="space-y-6">
                            {/* {error && (
                                <Alert variant="destructive">
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )} */}

                            <div className="space-y-2">
                                <Label htmlFor="email">Email address</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="demo@example.com"
                                        //value={email}
                                        //onChange={(e) => setEmail(e.target.value)}
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
                                        //value={password}
                                        //onChange={(e) => setPassword(e.target.value)}
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full dark:bg-amber-300 bg-amber-500  font-bold"
                            //disabled={isLoading}
                            >
                                {/* {isLoading ? 'Signing in...' : ''} */}Sign In
                            </Button>
                        </form>

                        <p className="text-center text-sm mt-4">
                            Don’t have an account?{" "}
                            <Link href="/register" className="text-amber-700 dark:text-amber-400 hover:underline">
                                Sign up here
                            </Link>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
}