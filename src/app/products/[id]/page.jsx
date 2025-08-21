"use client"

import { notFound } from "next/navigation";
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";


export default  function ProductDetails({ params }) {
    const {id }=  use(params)
    const [product, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`/api/products/${id}`);
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
    //console.log(product)

    if (!product) {
        return notFound();
    }
    if (loading) return <div className="text-center py-20 text-xl">Loading product...</div>;
    return <div className="max-w-4xl mx-auto py-12">
        <div className="grid md:grid-cols-2 gap-8 bg-amber-300/10 rounded-lg sm:p-6  ">
            {/* Product Image */}
            <div className="rounded-lg overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="w-full h-auto md:h-full object-cover border "
                />
            </div>

            {/* Product Details */}
            <div className="px-6 pb-6 sm:p-0">
                <Badge variant="default" className="mb-2  bg-amber-700/10 dark:bg-amber-100/10  text-amber-700 dark:text-amber-300">
                    {product.category}
                </Badge>
                <h1 className="text-3xl text-amber-400 dark:text-amber-300 font-bold mb-4">{product.name}</h1>

                <div className="flex items-center space-x-2 mb-4">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg font-medium">{product.ratings}</span>
                </div>

                <p className="text-primary mb-6">{product.description}</p>

                <div className="text-2xl font-bold text-amber-600 mb-6">
                    ${product.price}
                </div>

                <Button className="px-6 py-2 rounded">
                    Add to Cart
                </Button>
            </div>
        </div>
    </div>
}