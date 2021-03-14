import React from 'react';
import { useSelector } from "react-redux";
import { Container, Card } from "semantic-ui-react";
import ProductItem from "../components/ProductItem";

function Products() {
  const products = useSelector(state => state.products);
  return (
    <Container>
      <Card.Group>
        {products.map(product => <ProductItem key={product.id} product={product}/>)}
      </Card.Group>
    </Container>
  );
}

export default Products;
