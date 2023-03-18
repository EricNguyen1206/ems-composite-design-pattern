import connectdb from "@/utils/connectdb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        console.log("CONNECTING TO MONGO");
        await connectdb();
        console.log("CONNECTED TO MONGO");

        // console.log("CREATING DOCUMENT");
        // const test = await Test.create(req.body);
        // console.log("CREATED DOCUMENT");

        return NextResponse.json("Success");
    } catch (error) {
        console.log(error);
        return NextResponse.json("Error");
    }
}
