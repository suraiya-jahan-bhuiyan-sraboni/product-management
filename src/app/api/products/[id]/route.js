import {connectDB} from "@/lib/mongodb";
import Product from '@/models/Product';

export async function GET(req, { params }) {
    try {

        console.log(params)

        await connectDB();

        const product = await Product.findById(params.id);
        console.log(product)
        if (!product) {
            return Response.json({ error: "Product not found" }, { status: 404 });
        }

        return Response.json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        return Response.json({ error: "Failed to fetch product" }, { status: 500 });
    }
}
