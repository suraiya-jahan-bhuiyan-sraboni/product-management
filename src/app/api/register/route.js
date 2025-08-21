import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";


export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, password } = body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({ email, password: hashedPassword });
    await user.save();

    return new Response(JSON.stringify({ success: true, user }), { status: 201 });
  } catch (error) {
    console.error("❌ Error in register:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}