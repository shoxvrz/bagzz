import React, { useEffect, useState } from "react";
import axios from "axios";

const UseGetData = () => {
    const [productData, setProductData] = useState([]);
    const [visible, setVisible] = useState(6)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        setLoading(true);
        const { status, data } = await axios.get("https://dummyjson.com/products");
    
        if (status === 200 && data) {
          setProductData(data.products);
        }
        setLoading(false);
      };
    
      const loadMoreHandler = () => {
        setVisible((prev) => prev + 4);
      };

      return[productData, loadMoreHandler, visible, loading]
}

export default UseGetData