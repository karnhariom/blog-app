import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(req: NextRequest) {
    const data = await req.formData()
    const file = data.get("image")
    if (!file) {
        return NextResponse.json({
            msg: "file not found"
        });
    }
    const bytedata = await file.arrayBuffer()
    const buffer = Buffer.from(bytedata);
    const path = `./public/uploads/${file.name}`;
    await writeFile(path, buffer);
    return NextResponse.json({
        file,
        msg: "File uploaded successfully"
    });
}