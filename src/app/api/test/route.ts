import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";

export async function GET() {
  const dbStatus = await dbConnect();
  
  return NextResponse.json({ data: "hello" });
}
