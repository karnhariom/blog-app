"use client"
import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';

export default function UpdateCategory() {
    const dispatch = useDispatch()
    const initialValues = {
        title: "",
        slug: "",
        description: ""
    }

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { resetForm }) => {
            const data: any = {
                title: values.title,
                slug: values.slug,
                description: values.description,
            };
            // const res = await dispatch(addCategory(data))
            // console.log('add res: ', res);
            // if (!res.error) {
            //     resetForm()
            // }
        }
    });


    const updateSlug = (value: String) => {
        return value.toLowerCase().replace(/\s+/g, '-');
    };

    const handleTitleChange = (e: any) => {
        formik.handleChange(e);
        formik.setFieldValue('slug', updateSlug(e.target.value));
    };
    return (
        <div>
            <div className="update-category">
                <h3 className='sub-title'>Update Category</h3>
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
        </div>
    )
}
