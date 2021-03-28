import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
const [products, setProducts] = useState([])

useEffect(() => {
  const fetchProducts = async () => {
    const { data } = await axios.get('/api/products')

    setProducts(data)
  }

  fetchProducts()
}, [])

  return (
    <>
      <h1>LATEST PRODUCTS</h1>
      <Row>
        {products.map((product) => (
          <Col md={6} lg={3} key={product._id}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
