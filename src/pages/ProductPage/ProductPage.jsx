import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseGetData from '../../hooks/UseGetData';
import Loading from '../../components/Loading/Loading'

const ProductPage = () => {
    const [productData, , , ] = UseGetData();
    const { proId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (productData.length > 0) {
            const foundProduct = productData.find((p) => p.id === +proId);
            setProduct(foundProduct);
        }
    }, [productData, proId]);

    if (!product) {
        return <Loading/>;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            {/* Add other product details as needed */}
        </div>
    );
};

export default ProductPage;
