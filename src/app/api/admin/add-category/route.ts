import { connect } from "@/dbConfig/dbconfig";
import Category from "@/models/category.model";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const reqBody = await request.json()
        const { title, slug, description } = reqBody

        const category = await Category.findOne({ slug })

        if (category) {
            return NextResponse.json({
                msg: "Category already exists",
            })
        }

        const newCategory = new Category({
            title,
            slug,
            description
        })

        const savedCategory = await newCategory.save()

        return NextResponse.json({
            msg: "Category added successfully",
            status: 200,
            savedCategory
        })

    } catch (error: any) {
        return NextResponse.json({
            status: 500,
            message: error.message
        })
    }
}