import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, removeFromCart, clearCart } from "../rtk/cart-slice";

const Cart = () => {
   const products = useSelector((state) => state.cart);
   const dispatch = useDispatch();

   const totalPrice = products.reduce((total, product) => {return total + (product.price * product.quantity)},0)

   return (
      <Container className="my-3">
         <Row className="mb-3 flex-column">
            <Col className="mb-3 d-flex justify-content-start">
               <Button variant="danger" onClick={() => dispatch(clearCart())}>
                  Clear Cart
               </Button>
            </Col>
            <Col>
               <p className="fs-3">Total: {totalPrice.toFixed(2)} $</p>
            </Col>
         </Row>
         <Row className="g-3 justify-content-center">
            {products.map((product) => (
               <Col key={product.id} style={{ flex: "0" }}>
                  <Card style={{ width: "18rem", height: "580px" }}>
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
                        <div className="quantity fs-3 no-select">
                           Quantity:{" "}
                           <span
                              className="text-danger"
                              role="button"
                              onClick={() =>
                                 dispatch(
                                    changeQuantity({
                                       id: product.id,
                                       incrementQuantity: false,
                                    })
                                 )
                              }
                           >
                              -
                           </span>{" "}
                           {product.quantity}{" "}
                           <span
                              className="text-success"
                              role="button"
                              onClick={() =>
                                 dispatch(
                                    changeQuantity({
                                       id: product.id,
                                       incrementQuantity: true,
                                    })
                                 )
                              }
                           >
                              +
                           </span>
                        </div>
                        <Card.Text>
                           {product.description.slice(0, 50) + "..."}
                        </Card.Text>
                        <Button
                           variant="danger"
                           onClick={() => dispatch(removeFromCart(product.id))}
                        >
                           Remove from Cart
                        </Button>
                     </Card.Body>
                  </Card>
               </Col>
            ))}
         </Row>
      </Container>
   );
};

export default Cart;
