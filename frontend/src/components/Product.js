import React from "react";
import { Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded product" key={product.id}>
      <Link to={`/product/${product._id}`}>
        <CardImg src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link class="title" to={`/product/${product._id}`}>
            <Card.Title as="div">
            <strong>{product.name}</strong>
            </Card.Title>
        </Link>
        
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text className="price" as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
