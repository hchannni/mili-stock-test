import axios from "axios";
import React, { useState } from "react";

const ProductForm: React.FC = () => {
    const [formData, setFormData] = useState({
        productTitle: "",
        productPrice: 0,
        productStock: 0,
        image: undefined,
        category: "",
        isDiscountedProduct: false,
        isNewProduct: false,
        isPopularProduct: false,
        productDiscountPrice: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLInputElement>) => {
        const { name, value, type } = e.target;

        // Handle checkboxes
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prevData) => ({
                ...prevData,
                [name]: checked,
            }));
        }
        // Handle file inputs
        else if (type === "file") {
            const files = (e.target as HTMLInputElement).files;
            setFormData((prevData) => ({
                ...prevData,
                [name]: files && files.length > 0 ? files[0] : null,
            }));
        }
        // Handle other input types (text, number, etc.)
        else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        console.log('onsubmit triggered!')
        e.preventDefault();

        const formDataForSubmission = new FormData();

        formDataForSubmission.append("productTitle", formData.productTitle);
        formDataForSubmission.append("productPrice", formData.productPrice.toString());
        formDataForSubmission.append("productStock", formData.productStock.toString());
        formDataForSubmission.append("category", formData.category);
        formDataForSubmission.append("isDiscountedProduct", formData.isDiscountedProduct.toString());
        formDataForSubmission.append("isNewProduct", formData.isNewProduct.toString());
        formDataForSubmission.append("isPopularProduct", formData.isPopularProduct.toString());
        formDataForSubmission.append("productDiscountPrice", formData.productDiscountPrice.toString());

        // Check if image is defined before appending it
        if (formData.image) {
            formDataForSubmission.append("image", formData.image as Blob, "image.jpeg");
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_DONG10_BASEURL}/product/create`, formDataForSubmission);
            // Handle the response, e.g., show a success message to the user
            console.log("Product created successfully:", response.data);
        } catch (error) {
            // Handle errors, e.g., display validation errors or a failure message
            console.error("Error creating product:", error);
        }
    };

    return (
        <div>
            <h2>Product Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Product Title:
                    <input
                        type="text"
                        name="productTitle"
                        value={formData.productTitle}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Product Price:
                    <input
                        type="number"
                        name="productPrice"
                        value={formData.productPrice}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Product Stock:
                    <input
                        type="number"
                        name="productStock"
                        value={formData.productStock}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Category:
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Is Discounted Product:
                    <input
                        type="checkbox"
                        name="isDiscountedProduct"
                        checked={formData.isDiscountedProduct}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Is New Product:
                    <input
                        type="checkbox"
                        name="isNewProduct"
                        checked={formData.isNewProduct}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Is Popular Product:
                    <input
                        type="checkbox"
                        name="isPopularProduct"
                        checked={formData.isPopularProduct}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Product Discount Price:
                    <input
                        type="number"
                        name="productDiscountPrice"
                        value={formData.productDiscountPrice}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Image:
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProductForm;