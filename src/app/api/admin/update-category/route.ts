import { connect } from "@/dbConfig/dbconfig";
import Category from "@/models/category.model";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function PATCH(request: NextRequest, response: NextResponse) {
    try {
        const reqBody = await request.json()
        const { title, slug, description, id } = reqBody
    } catch (error: any) {
        return NextResponse.json({
            status: 500,
            message: error.message
        })
    }
}
