"use-client"
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Eye } from 'lucide-react';
const mockProducts = [
    {
        id: '1',
        name: 'Premium Wireless Headphones',
        description: 'High-quality audio with noise cancellation technology for the ultimate listening experience.',
        price: 299.99,
        rating: 4.8,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
    },
    {
        id: '2',
        name: 'Smart Fitness Watch',
        description: 'Track your health and fitness goals with advanced monitoring and GPS capabilities.',
        price: 399.99,
        rating: 4.6,
        category: 'Wearables',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop'
    },
    {
        id: '3',
        name: 'Ergonomic Office Chair',
        description: 'Comfortable and supportive chair designed for long work sessions and better posture.',
        price: 599.99,
        rating: 4.9,
        category: 'Furniture',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
    }
];
export default function ProductsHighLights() {
    return <div>
        <section className="pb-20 bg-gradient-secondary">
            <div className="max-w-7xl mx-auto ">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Featured Products
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Discover our most popular products loved by customers worldwide
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockProducts.map((product) => (
                        <Card key={product.id} className="group hover:shadow-card transition-all duration-300 border-0 shadow-sm">
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
                                        <span className="text-sm font-medium">{product.rating}</span>
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
                                    <Link href={`/products/${product.id}`}>
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

                <div className="text-center mt-12">
                    <Link href="/products">
                        <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                            View All Products
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    </div>
}