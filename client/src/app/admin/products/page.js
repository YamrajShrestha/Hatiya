"use client";

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import "../../css/form.css";
import Link from "next/link";

const SignupSchema = Yup.object().shape({
  productName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  brand: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  category: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  image: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ValidationSchemaExample = () => (
  <div className="con">
    <Image
      src="/logo.png"
      width={120}
      height={100}
      alt="Picture of the author"
      className="img"
    />
    <h2>Create New Products Here...</h2>
    <Formik
      initialValues={{
        productName: "",
        brand: "",
        category: "",
        price: "",
        description: "",
        image: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            className="input"
            name="productName"
            placeholder="Product name"
          />
          {errors.productName && touched.productName ? (
            <div>{errors.productName}</div>
          ) : null}
          <Field className="input" name="brand" placeholder="Brand name" />
          {errors.brand && touched.brand ? <div>{errors.brand}</div> : null}
          <Field
            className="input"
            name="category"
            placeholder="Product category"
          />
          {errors.category && touched.category ? (
            <div>{errors.category}</div>
          ) : null}
          <Field className="input" name="price" placeholder="Net price" />
          {errors.price && touched.price ? <div>{errors.price}</div> : null}
          <Field
            className="input"
            name="description"
            placeholder="Description"
          />
          {errors.description && touched.description ? (
            <div>{errors.description}</div>
          ) : null}
          <Field name="image" type="file" />
          {errors.image && touched.image ? <div>{errors.image}</div> : null}
          Go to <Link href="/">HOME</Link>
          <button type="submit">Save</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default ValidationSchemaExample;
