import Secondbar from "../SecondBar/secondbar";
import Topbar from "../Topbar/topbar";
import {Container, Row, Col, Button} from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import details from '../ProductDetails/img/product-16.jpg'
import './productdetails.css'
import {useState, useEffect, useContext} from 'react';
import { MyContext } from '../../MyContext';

function Productdetails () {
  const { productData, setProductData } = useContext(MyContext);
  const {badge, setBadge} = useContext(MyContext);
  const {addCart, setAddCart} = useContext(MyContext);

  const [productImage, setProductImage] = useState('')
  const  [productName, setProductName] = useState('')
  const  [productAuthor, setproductAuthor] = useState('')
  const   [productPrice, setProductPrice] = useState('')
  const   [productDescription, setProductDescription] = useState('')
  const   [id, setId] = useState('')



    const location = useLocation();
    const params = new URLSearchParams(location.search);
    let num = params.get('id');
    num = parseInt(num, 10);


    // console.log(productData)
    useEffect(()=>{
      productData.map((product) => {
        if (num === product.id){
          setProductImage(product.productImage)
          setProductName(product.productName)
          setproductAuthor(product.productAuthor)
          setProductPrice(product.productPrice)
          setProductDescription( product.productDescription)
        }


      })
    }, [])



    let cart = {productImage, productName, productPrice, id, count: 1}

    const handleAddToCart = () => {
      setAddCart((addCart) => [...addCart, cart]);
      setBadge((b) => b + 1);
    }



    return (
        <>
     <Container>
        <Topbar />
        <Secondbar />
        <Row>
            <>
          <Col xs={4}>
            <div style={{ height: '30rem', width: '80rem'}} className="bg-primary mt-4 description-holder" >
            <img className="ms-5 mt-5" src={productImage} style={{ height: '24rem', width: '18rem'}} />
            </div>
            </Col>
            <Col xs={6} className="mt-5">
            <h1 className="mt-5">{productName}</h1>
            <p>{productAuthor}</p>
            <h3 className="mt-3 mb-3"> {productPrice}</h3>
            <p style={{width:'30rem'}} className="mt-4 mb-4">{productDescription}</p>
            <Button variant="light" onClick={handleAddToCart}>Add to Cart</Button>
            </Col>
            </>
        </Row>

     </Container>
     </>
    )
    
}

export default Productdetails