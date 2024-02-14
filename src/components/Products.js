import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../rtk/cart-slice";
import { fetchProducts } from "../rtk/products-slice";

const Products = () => {
   const products = useSelector((state) => state.products);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchProducts());
   }, [dispatch]);

   return (
      <Container className="my-3">
         <Row className="g-3 justify-content-center">
            {products.map((product) => (
               <Col key={product.id} style={{ flex: "0" }}>
                  <Card style={{ width: "18rem", height: "550px" }}>
                     <Card.Img
                        variant="top"
                        src={product.image}
                        style={{ height: "300px" }}
                     />
                     <Card.Body className="d-flex flex-column justify-content-between align-items-start">
                        <Card.Title>
                           {product.title.slice(0, 40) + "..."}
                        </Card.Title>
                        <span style={{ fontSize: "30px" }}>
                           {product.price}$
                        </span>
                        <Card.Text>
                           {product.description.slice(0, 50) + "..."}
                        </Card.Text>
                        <Button
                           variant="primary"
                           onClick={() => dispatch(addToCart(product))}
                        >
                           Add to Cart
                        </Button>
                     </Card.Body>
                  </Card>
               </Col>
            ))}
         </Row>
      </Container>
   );
};

export default Products;
