import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../Urls/Urls";
import { Link } from "react-router-dom";


const CategoryPage = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch categories on component mount
    useEffect(() => {
        axios
            .get(`${BASE_URL}/get-categories`,)
            .then((response) => {
                console.log("categories list", response);
                setCategories(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        console.log(id);
        if (window.confirm('Are you sure want to delete ')) {

            axios.post(`${BASE_URL}/delete-category`, { id }, { withCredentials: true }).then((response) => {
                console.log('delete', response);

                if (response.data.status) {
                    setCategories(response.data.categories)
                    alert(response.data.message)
                }
            })
        }
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Category Management</h1>

            {/* Display Categories */}
            <div className="bg-white shadow-md rounded-md p-4">
                <Link to={"/add-categories"}>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                        Add Category
                    </button>
                </Link>
                <h2 className="text-xl font-semibold mb-4">Category List</h2>
                {loading ? (
                    <p className="text-gray-500">Loading categories...
                        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                        </svg>
                        </p>

                ) : categories.length > 0 ? (
                    <ul className="space-y-4">
                        {categories.map((category, index) => (

                            <li
                                key={category.id}
                                className="flex items-center space-x-4"
                            >

                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-16 h-16 object-cover rounded-md"
                                />
                                <div>
                                    <h3 className="text-lg font-bold">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-500">
                                        Link: {category.linkTo}
                                    </p>
                                </div>
                                <div onClick={() => handleDelete(category.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                                </div>

                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No categories added yet.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
