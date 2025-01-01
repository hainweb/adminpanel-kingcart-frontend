import React, { useEffect, useState } from 'react';
import { BASE_URL, IMG_URL } from '../Urls/Urls';
import { useParams ,useNavigate} from 'react-router-dom';
import axios from 'axios';

const OrderedProducts = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${BASE_URL}/ordered-products/${id}`, { withCredentials: true }).then((response) => {
            console.log('order',response);
            
            setProducts(response.data);
        });
    }, [id]);

    const navigate=useNavigate()

    return (
        <section className="min-h-screen bg-gray-100 py-8">
            <div className="mb-6">
                
            </div>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Ordered Products</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-undo-2"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                className="w-full h-[20rem]"
                                src={product.product.thumbnailImage}
                                alt={product.product.Name}
                            />
                            <div className="p-4">
                                <h5 className="text-lg font-semibold text-gray-800">{product.product.Name}</h5>
                                <p className="text-sm text-gray-600">Category: {product.product.Category}</p>
                                <p className="text-sm text-gray-600">Price: ₹{product.product.Price}</p>
                                <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OrderedProducts;
