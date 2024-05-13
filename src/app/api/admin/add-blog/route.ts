import { connect } from "@/dbConfig/dbconfig";
import Blogs from "@/models/blog.model";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const reqBody = await request.json()
        const { title, slug, category, content } = reqBody

        const blog = await Blogs.findOne({ slug })

        if (blog) {
            return NextResponse.json({
                msg: "Blog already exists",
            })
        }

        const newBlog = new Blogs({
            title,
            slug,
            category,
            content
        })

        const savedBlog = await newBlog.save()

        return NextResponse.json({
            msg: "Blog added successfully",
            status: 200,
            savedBlog
        })

    } catch (error: any) {
        return NextResponse.json({
            status: 500,
            message: error.message
        })
    }
}