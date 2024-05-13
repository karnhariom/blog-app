import { connect } from "@/dbConfig/dbconfig";
import Category from "@/models/category.model";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(request: NextRequest, response: NextResponse) {
    try {
        const categories = await Category.find({})

        return NextResponse.json({
            categories
        })

    } catch (error: any) {
        return NextResponse.json({
            status: 500,
            message: error.message
        })
    }

}