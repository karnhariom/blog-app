import mongoose from "mongoose";

const blogCategorySchems = new mongoose.Schema({
    title: {
        type: String,
        unique: [true, "Category already exists."],
        required: [true, "Title field is required"]
    },
    slug: {
        type: String,
        required: [true, "Slug is required"],
        unique: [true, "Link is taken"]
    },
    description: {
        type: String,
    }
    // categoryImage: {
    //     type: String,
    //     required: [true, "Category Image is required"]
    // }
}, { timestamps: true })

const Category = mongoose.models.categories || mongoose.model("categories", blogCategorySchems)

export default Category