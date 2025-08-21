import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { Plus } from 'lucide-react';

export default function AddProducts() {
    return <div className='py-20'>
        <Card className="shadow shadow-amber-500 md:py-30 border max-w-5xl mx-auto md:px-20">
            <CardHeader className={"pb-10"}>
                <div className="flex items-center justify-center text-center flex-wrap space-x-2">
                    <Plus className="h-15 w-15 text-primary" />
                    <CardTitle className={"text-2xl md:text-5xl font-font "}>Add New Product</CardTitle>
                </div>
                <CardDescription className={"text-center"}>
                    Add a new product to your catalog with detailed information
                </CardDescription>
            </CardHeader>

            <CardContent className={"w-full md:max-w-5xl mx-auto"}>
                <form className="space-y-6 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Product Name</Label>
                            <Input
                                id="name"
                                placeholder="Enter product name"
                                //value={formData.name}
                                // onChange={(e) => handleInputChange('name', e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="price">Price ($)</Label>
                            <Input
                                id="price"
                                type="number"
                                step="0.01"
                                placeholder="0.00"
                                // value={formData.price}
                                // onChange={(e) => handleInputChange('price', e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select
                            //value={formData.category} 
                            // onValueChange={(value) => handleInputChange('category', value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="electronics">Electronics</SelectItem>
                                    <SelectItem value="wearables">Wearables</SelectItem>
                                    <SelectItem value="furniture">Furniture</SelectItem>
                                    <SelectItem value="accessories">Accessories</SelectItem>
                                    <SelectItem value="home">Home & Garden</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>



                    <div className="space-y-2">
                        <Label htmlFor="image">Image URL</Label>
                        <Input
                            id="image"
                            type="url"
                            placeholder="https://example.com/product-image.jpg"
                        // value={formData.image}
                        // onChange={(e) => handleInputChange('image', e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Enter product description"
                            //  value={formData.description}
                            //onChange={(e) => handleInputChange('description', e.target.value)}
                            rows={4}
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full "
                    // disabled={isSubmitting}
                    >
                        {/* {isSubmitting ? 'Adding Product...' : ''} */}
                        Add Product
                    </Button>
                </form>
            </CardContent>
        </Card>
    </div>
}