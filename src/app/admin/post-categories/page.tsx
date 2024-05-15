"use client"
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addCategory, deleteCategory, getCategories } from '../_redux/postApi'
import Link from 'next/link'

const PostCategory = () => {

    const dispatch: any = useDispatch()
    const { categories } = useSelector((state: any) => state.posts, shallowEqual)

    const initialValues = {
        title: "",
        slug: "",
        description: ""
    }

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, {resetForm}) => {
            const data: any = {
                title: values.title,
                slug: values.slug,
                description: values.description,
            };
            const res = await dispatch(addCategory(data))
            console.log('add res: ', res);
            if(!res.error){
                resetForm()
            }
        }
    });


    const updateSlug = (value: String) => {
        return value.toLowerCase().replace(/\s+/g, '-');
    };

    const handleTitleChange = (e: any) => {
        formik.handleChange(e);
        formik.setFieldValue('slug', updateSlug(e.target.value));
    };

    useEffect(() => {
        ; (
            async () => {
                const res = await dispatch(getCategories())
            }
        )()
    }, [])


    const deletePostCategory = async (id: any) => {
        const data = {
            categoryId: id
        }
        console.log("data", data)
        const response = await dispatch(deleteCategory(data))
        console.log('response: ', response);
    }

    return (
        <div className='cat-page'>
            <div className="pg-title container">
                <h3>Categories</h3>
            </div>
            <div className="cat-container container">
                <div className="add-category">
                    <h3 className='sub-title'>Add Category</h3>
                    <form onSubmit={formik.handleSubmit} className='common-form'>
                        <div className="inp-box">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={formik.values.title}
                                onChange={handleTitleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className="inp-box">
                            <label htmlFor="slug">Slug</label>
                            <input
                                type="text"
                                name="slug"
                                id="slug"
                                value={formik.values.slug}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                readOnly
                            />
                        </div>
                        <div className="inp-box">
                            <label htmlFor="description">Add description</label>
                            <textarea
                                name="description"
                                id="description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                rows={4}
                            />
                        </div>
                        <button type="submit">Add Category</button>
                    </form>
                </div>
                <div className="all-categories">
                    <h3 className='sub-title'>All Categories</h3>
                    <table className='cat-table'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Slug</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories && categories.map((item: any) => {
                                return (
                                    <tr key={item._id}>
                                        <td>{item.title}</td>
                                        <td>{item.description || "-"}</td>
                                        <td>{item.slug}</td>
                                        <td>
                                            <button onClick={() => deletePostCategory(item._id)}>Delete</button>
                                            <button> <Link href={`/admin/post-categories/${item._id}`}> Edit</Link></button>
                                            <button>View</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PostCategory
