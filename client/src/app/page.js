"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:4000/products");
    const data = await res.json();
    setProductList(data.productList);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {productList.map((item) => (
        <div key={item.productId}>
          <h2><Link href="">{item.productName}</Link></h2>
          {/* Add more details or components to display */}
        </div>
      ))}
    </div>
  );
};

export default Page;
