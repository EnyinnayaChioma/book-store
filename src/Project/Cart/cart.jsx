import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Topbar from "../Topbar/topbar";
import Secondbar from "../SecondBar/secondbar";
import Demo from "./img/cart.jpg";
import "./cart.css"
import { useContext } from "react";
import { MyContext } from "../../MyContext";

function Cart () {
    const {badge, setBadge} = useContext(MyContext);
    const {addCart, setAddCart} = useContext(MyContext);

    const handleIncreaseItem = (data) => {
        const increaseCount = addCart.map((item) => {
            console.log(data.id)
            if (item.id === data.id){
                return {...item, count: item.count + 1}
            }
            return item;
        })
        setAddCart(increaseCount);
        setBadge((b) => b + 1);
    }

    const handleDecreaseItem = (data) => {
        const decreaseCount = addCart.map((item) => {
            if (item.id === data.id){
                return {...item, count: item.count - 1}
            }
            return item;
        })
        setAddCart(decreaseCount);
        setBadge((b) => b - 1)
    }

    const handleRemoveItem = (data) => {
        const updateArr = addCart.filter((item) => item.id != data.id)
        setAddCart(updateArr);
    }



    return(
        <>
         <Topbar />
         <Secondbar />
         <Container>
            <Row>
                <Col>
                <div className="background mt-5 mb-5">
            <h1 className="d-flex justify-content-center text-align-center ">
                Cart
            </h1>
            </div>
                </Col>
            </Row>
            
            <Row className="mb-5" >
                <Col xs={4}> Product </Col>
                <Col xs={2}>Price</Col>
                <Col xs={2}>Quantity</Col>
                <Col xs={2}>Total</Col>
                <Col xs={2}></Col>
            </Row>
            {addCart.map((data) => {
                return (
                    <>
                    <Row >
                        <Col xs={4}> <img src={data.productImage} className="mb-5"  style={{width: '15rem', height: '2Orem' }}/> 
                        <p>{data.productName}</p>
                        </Col>
                        <Col xs={2}>{data.productPrice}</Col>
                        <Col xs={2}>
                            <ButtonGroup className="me-2" aria-label="First group">
                                <Button variant="primary" onClick={() => handleIncreaseItem(data)}>+</Button>
                                <Button variant="light">{data.count}</Button>
                                <Button variant="primary" onClick={() => handleDecreaseItem(data)}>-</Button>
                            </ButtonGroup>
                        </Col>
                        <Col xs={2}>₦4000</Col>
                        <Col > <Button variant="primary" onClick={() => handleRemoveItem(data)} >Remove Item</Button>
                        </Col>
            </Row>
            <hr />
                    </>
                )
            })}
            

             <hr />
            <Row className="mb-3">
                <Col xs={8}>
                CART TOTAL
                </Col>
                <Col xs={2}>
                ₦8000
                </Col>
            </Row>
            <hr />
            <Row >
                <Col className="d-flex justify-content-center mt-5">
                <Button variant="primary">CHECKOUT ( ₦30000)</Button>
                </Col>
            </Row>
         </Container>
        </>
    )
}

export default Cart;