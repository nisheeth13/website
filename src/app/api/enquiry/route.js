import Enquiry from "@/models/Enquiry";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    const { name, email, message } = await request.json();
     await connect();

  
    const newEnquiry = new Enquiry({
        name,
        email,
        message,
    });

    try {
        await newEnquiry.save();
        return new NextResponse("Enquiry has been created", {
        status: 201,
        });
    } catch (err) {
        return new NextResponse(err.message, {
        status: 500,
        });
    }

}