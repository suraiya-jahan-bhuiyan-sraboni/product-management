import mongoose from "mongoose";

export async function connectDB() {
  try {
   mongoose.connect(process.env.NEXT_MONGO_URI, {
      bufferCommands: false,
    }).then((mongoose) => {
      console.log("✅ MongoDB Connected");
      return mongoose;
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw new Error("MongoDB connection failed");
  }
}
