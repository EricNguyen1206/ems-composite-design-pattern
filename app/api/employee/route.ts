import EmployeeDB from "@/models/employee";
import connectdb from "@/utils/connectdb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    console.log("connecting...");
    await connectdb();
    console.log("connected!");
    const newEmployee = await EmployeeDB.find();
    // const res = await newEmployee.json();
    return NextResponse.json(newEmployee);
}
