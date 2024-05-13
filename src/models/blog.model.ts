import mongoose, { Schema } from "mongoose";

const blogSchems = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    slug: {
        type: String,
        required: [true, "Slug is required"],
        unique: [true, "Link is taken"]
    },
    // featuredImage: {
    //     type: String,
    //     required: [true, "Featured Image is required"]
    // },
    category: {
        type: Schema.Types.ObjectId,
        ref: "categories"
    },
    content: {
        type: String
    }
})

const Blogs = mongoose.models.blogs || mongoose.model("blogs", blogSchems)

export default Blogs