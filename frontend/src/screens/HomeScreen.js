import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

const HomeScreen = () => {
  return (
    <>
      <h1>LATEST PRODUCTS</h1>
      <Row>
        {products.map((product) => (
          <Col md={6} lg={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
