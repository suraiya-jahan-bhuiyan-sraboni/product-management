
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return <footer className="bg-gray-900 text-gray-200 py-12">
        <div className="w-11/12 mx-auto px-4 ">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Logo & Description */}
                <div className=" space-y-4">
                    <div className="flex items-center gap-3">
                        <Image src="/favicon.ico" alt="Logo"
                        width={40}
                        height={24}
                        className="rounded" />
                    <h2 className="text-xl font-bold">Products</h2>
                    </div>
                    
                    <p className="text-gray-400 text-sm">
                        Manage your Products without any hustle with us!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-white transition">Home</a></li>
                        <li><a href="/products" className="hover:text-white transition">Products</a></li>
                        <li><a href="/add-products" className="hover:text-white transition">Add Products</a></li>
                       
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                    <p className="text-gray-400 text-sm mb-2">Subscribe for updates & offers</p>
                    <div className="flex space-x-2">
                        <Input type="email" placeholder="Enter your email" className="flex-1" />
                        <Button>Subscribe</Button>
                    </div>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://github.com" className="hover:text-white transition">
                            <Github size={24} />
                        </a>
                        <a href="https://twitter.com" className="hover:text-white transition">
                            <Twitter size={24} />
                        </a>
                        <a href="https://linkedin.com" className="hover:text-white transition">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Products. All rights reserved.
            </div>
        </div>
    </footer>
}