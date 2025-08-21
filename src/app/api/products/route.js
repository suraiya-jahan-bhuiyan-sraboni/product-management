import Product from '@/models/Product';
import { connectDB } from '@/lib/mongodb';



export async function GET() {

  try {
    await connectDB();
    const products = await Product.find();
    //console.log(products)
    return  Response.json(products, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(req) {

  try {
    await connectDB();
    const body = await req.json();
    const { name, description, price, category, ratings, image } = body;


    if (!name || !price) {
      return Response.json({ error: "Name and price are required" }, { status: 400 });
    }

    const newProduct = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ratings: Number(ratings),
      image,
    });



    return Response.json(newProduct, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to create product" }, { status: 500 });
  }
}
