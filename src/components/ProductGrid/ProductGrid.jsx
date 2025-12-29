import ProductItem from '@components/ProductItem/ProductItem';
import React, { useEffect, useState } from 'react';
import { message, Spin, Button } from 'antd';
import { BASE_URL } from '@components/SectionHomeCollection/SectionHomeCollection';
import Modal from 'antd/es/modal/Modal';

function ProductGrid({ type, category }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [open, setOpen] = useState(false);

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
                message.error('có lỗi xảy ra');
            }
        } catch {
            message.error('có lỗi xảy ra');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [category, type]);

    const handleOpen = product => {
        setSelectedProduct(product);
        setOpen(true);
    };

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center'>
                {products.map((p, index) => (
                    <ProductItem
                        key={index}
                        image={p.image}
                        type={p.type}
                        showCategory={false}
                        name={p.name}
                        price={p.price}
                        onClick={() => handleOpen(p)}
                    />
                ))}
                {products.length === 0 && (
                    <p className='text-gray-400'>
                        Chưa có sản phẩm cho mục này
                    </p>
                )}
                {loading && <Spin size='large' percent='auto' fullscreen />}
            </div>
            <Modal
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                centered
            >
                {selectedProduct && (
                    <div className='flex flex-col items-center space-y-4'>
                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.name}
                            className='w-40 h-40 object-cover rounded-md shadow-md'
                        />
                        <h2 className='text-xl font-semibold'>
                            {selectedProduct.name}
                        </h2>
                        <p className='text-gray-600'>{selectedProduct.type}</p>
                        <p className='text-lg font-bold text-[#ED7542] '>
                            {selectedProduct.price} đ
                        </p>
                        <Button
                            type='primary'
                            className='bg-[#ED7542]! border-none! text-white! hover:bg-[#d95f2f]! py-5! px-10!'
                        >
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                )}
            </Modal>
        </>
    );
}

export default ProductGrid;
