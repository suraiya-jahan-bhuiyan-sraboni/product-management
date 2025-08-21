"use client"
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Hero() {
    const { data: session } = useSession();
    return <div>
        <section className="relative py-20 lg:py-32 overflow-hidden border-b-2 border-amber-400">
            <div className="absolute inset-0 bg-amber-500 opacity-10"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="flex justify-center mb-6">
                        <div className="flex items-center flex-wrap justify-center space-x-2 bg-amber-700/10 dark:bg-amber-100/10 px-4 py-2 rounded-full  text-amber-700 dark:text-amber-300">
                            <Sparkles className="h-4 w-4 " />
                            <span className="text-sm font-medium ">New Product Management Platform</span>
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                        <span className="block text-foreground">Manage Your</span>
                        <span className="block bg-gradient-primary bg-clip-text text-amber-400 dark:text-amber-300">
                            Products Effortlessly
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-10">
                        Discover, manage, and showcase your products with our intuitive platform.
                        Built for modern businesses who value simplicity and efficiency.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/products">
                            <Button size="lg" className="dark:bg-amber-300 bg-amber-500 font-bold  hover:bg-amber-600 hover:opacity-90 transition-all duration-300 shadow-elegant">
                                View Products
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href={session ? "/dashboard/add-products" : "/login"}>
                            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
}