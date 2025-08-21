"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import ModeToggle from "../mode-toggle";
import { redirect, usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { toast } from "sonner";


export default function Nav() {
    const { data: session } = useSession();

    const pathname = usePathname();
    const navItems = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: `${session ? "dashboard" : ""}`, href: "/dashboard/add-products" },
    ];
    
    const handleLogout = async () => {
        await signOut({ redirect: false });
        toast.success("Logged out successfully!");
        redirect("/");
    };

    return (
        <nav className="w-full border-b  bg-background fixed top-0 z-10 ">
            <div className="w-11/12 mx-auto flex py-4 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold flex items-center justify-center gap-2">
                    <Image src="/favicon.ico" alt="Logo"
                        width={40}
                        height={24}
                        className="rounded" />  Products
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <ModeToggle />
                    {!session && pathname !== "/login" && (
                        <Link href="/login">
                            <Button variant="default" size="sm">Login</Button>
                        </Link>
                    )}
                    {!session && pathname !== "/register" && (
                        <Link href="/register">
                            <Button variant="default" size="sm">Register</Button>
                        </Link>
                    )}
                    {session && (
                        <Link href="/">
                            <Button variant="default" size="sm" onClick={handleLogout}>Logout</Button>
                        </Link>
                    )}

                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center gap-2">
                    <ModeToggle />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-42 md:hidden" align="end">
                            {navItems.map((item) => (
                                <DropdownMenuItem key={item.href} asChild>
                                    <Link href={item.href} className="w-full">
                                        {item.label}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                            <DropdownMenuItem className={" "}>
                                {!session && pathname !== "/login" && (
                                    <Link href="/login">
                                        <Button variant="default" size="sm">Login</Button>
                                    </Link>
                                )}

                                {!session && pathname !== "/register" && (
                                    <Link href="/register">
                                        <Button variant="default" size="sm">Register</Button>
                                    </Link>
                                )}

                                {session && (
                                    <Link href="/">
                                        <Button variant="default" size="sm" onClick={handleLogout}>Logout</Button>
                                    </Link>
                                )}

                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    )
}
