import { connect } from "@/dbConfig/dbconfig";
import Category from "@/models/category.model";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function DELETE(request: NextRequest, response: NextResponse) {
    try {
        const reqBody = await request.json()
        const { categoryId } = reqBody
        const category = await Category.findById(categoryId)
        if(!category){
            return NextResponse.json({
                msg: "Category not found"
            })
        }
        await Category.findByIdAndDelete(categoryId);
        return NextResponse.json({
            msg: "Category deleted successfully",
            category
        })
    } catch (error: any) {
        return NextResponse.json({
            status: 500,
            message: error.message
        })
    }

}