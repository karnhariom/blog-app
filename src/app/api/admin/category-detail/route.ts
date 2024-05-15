import { connect } from "@/dbConfig/dbconfig";
import Category from "@/models/category.model";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(request: NextRequest, response: NextResponse) {
    console.log("ujasdoinon")
    try {
        const reqBody = await request.json()
        const { categoryId } = reqBody
        console.log('categoryId: ', categoryId);
        const category = await Category.findById(categoryId)
        if(!category){
            return NextResponse.json({
                status: 400,
                msg: "Category not found"
            })
        }
        //  await Category.findByIdAndDelete(categoryId);
        return NextResponse.json({
            status: 200,
            msg: "Category deleted successfully",
            category
        })
    } catch (error: any) {
        return NextResponse.json({
            status: 500,
            msg: error.message
        })
    }

}