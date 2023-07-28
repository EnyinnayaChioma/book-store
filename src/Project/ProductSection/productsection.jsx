import Container from 'react-bootstrap/Container';
import {Row, Col, Button, Card} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './productsection.css'
import { useContext } from 'react';
import { MyContext } from '../../MyContext';

function ProductSection (){
    const { productData, setProductData } = useContext(MyContext);
    //fetch
    useEffect(()=>{
        fetch('/shopData.json')
        .then((response) => response.json())
        .then((data)=>{

            setProductData(data);
        })
        .catch((err)=> console.log("error" + err));
    }, [])
   
    
    
    return(
        <>
        <Container>
            
            <Row className='mt-5 mb-5 product-section '> 
            
                <Col>
                <h2>BEST SELLING BOOKS</h2>
                </Col>
            </Row>

            {/* <div>
                obinna
                {productData.map((x) => {
                    return x.productName;
                })}
                console.log(productData);
            </div> */}


            <Row>
            {productData.map((data)=>{
             return   <Col xs={2}>
                    <Card className='product-card mb-4' style={{  height: '32rem' }}>
                        <Card.Img variant="top" src={data.productImage} style={{ width: '12rem', height: '15rem'}} />
                        
                        <Card.Body className='mt-4'>
                            <Card.Title style={{ height: '5rem'}} >{data.productName}</Card.Title>
                            <div className='mt-4'>
                            {data.productAuthor}
                            </div>
                            <div className='cardPrice mt-2'>₦ {data.productPrice}</div>
                            <Button className='mt-3' variant="primary" as={Link} to={`/Productdetails?id=${data.id}`}>Book Description</Button>
                        </Card.Body>
                    </Card>
                </Col>
                })}
            </Row>
        </Container>
        </>
    );
}

export default ProductSection;