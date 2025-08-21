"use client";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Star, Eye, Search } from 'lucide-react';

import { useEffect, useState } from "react";
import { Toaster } from "sonner";


export default function Products() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("/api/products");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    //console.log(products)
    const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    if (loading) return <div className="text-center py-20 text-xl">Loading products...</div>;
    return <div className="py-20">
        <Toaster position="top-right" richColors />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    Our <span className="bg-gradient-primary bg-clip-text text-amber-400">Products</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Discover our complete collection of products designed to enhance your lifestyle
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>

                <div className="flex gap-2 flex-wrap">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(category)}
                            className={selectedCategory === category ? "dark:bg-amber-400" : ""}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                    <Card key={product._id} className="group hover:shadow transition-all duration-300 border-0 shadow-sm">
                        <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <CardHeader className="pb-4">
                            <div className="flex items-center justify-between mb-2">
                                <Badge variant="secondary">{product.category}</Badge>
                                <div className="flex items-center space-x-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm font-medium">{product.ratings}</span>
                                </div>
                            </div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                {product.name}
                            </CardTitle>
                            <CardDescription className="text-base">
                                {product.description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="pt-0">
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-primary">
                                    ${product.price}
                                </span>
                                <Link href={`/products/${product._id}`}>
                                    <Button variant="outline" size="sm" className="group-hover:bg-amber-500 group-hover:dark:bg-amber-300 hover:bg-amber-500 hover:dark:bg-amber-300 hover:text-secondary group-hover:text-secondary  group-hover:font-bold transition-colors">
                                        <Eye className="h-4 w-4 mr-2" />
                                        View Details
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
                </div>
            )}
        </div>
    </div>
}