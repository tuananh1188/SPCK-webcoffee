import ProductItem from '@components/ProductItem/ProductItem';
import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

const BASE_URL = 'https://693e793f12c964ee6b6d7672.mockapi.io';

function ProductGrid({ type, category }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${BASE_URL}/dataProducts`);
            const data = await res.json();

            if (Array.isArray(data)) {
                const filtered = data.filter(p => {
                    if (category) {
                        return (
                            p.type.toLowerCase() === type.toLowerCase() &&
                            p.category.toLowerCase() === category.toLowerCase()
                        );
                    }
                    return p.type.toLowerCase() === type.toLowerCase();
                });
                setProducts(filtered);
                setLoading(false);
            } else {
                alert(data);
            }
        } catch {
            // Noi xu ly loi
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [category, type]);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center'>
            {products.map((p, index) => (
                <ProductItem
                    key={index}
                    image={p.image}
                    type={p.type}
                    showCategory={false}
                    name={p.name}
                    price={p.price}
                />
            ))}
            {products.length === 0 && (
                <p className='text-gray-400'>Chưa có sản phẩm cho mục này</p>
            )}
            {loading && <Spin size='large' percent='auto' fullscreen />}
        </div>
    );
}

export default ProductGrid;
