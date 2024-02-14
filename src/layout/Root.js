import { Container, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";

const Root = () => {
   const cartProducts = useSelector(state => state.cart)
   return (
      <>
         <Navbar sticky="top" className="bg-secondary">
            <Container>
               <Link to={"/"}>Home</Link>
               <Link to={"/cart"}>Cart - {cartProducts.length}</Link>
            </Container>
         </Navbar>
         <Outlet />
      </>
   );
};

export default Root;
