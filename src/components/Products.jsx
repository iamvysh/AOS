
import { useEffect, useState } from 'react';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import AOS from "aos"
import 'aos/dist/aos.css'


const Products = () => {


    const [Products,setProduct]=useState([])
    const getProducts= async()=>{
      const response= await fetch('https://dummyjson.com/products')
    const result=await response.json()
     setProduct([...result.products])
              
    }
  useEffect(()=>{
    getProducts()
  },[])

  useEffect(()=>{
    AOS.init()
  })

console.log(Products);

  return (
    <>

        {Products.map((item)=>(
            
        

     <MDBContainer className="my-5 text-center " key={item.id}>
      

      <MDBRow className="d-flex justify-content-center" >
        <MDBCol md="10" lg="10" className="mb-4 ">
          <MDBCard style={{boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" >
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src={item.images[0]}
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      <span className="badge bg-primary ms-2">New</span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">{item.title}</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>{item.category}</p>
              </a>
              <h6 className="mb-3">${item.price}</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
       
      </MDBRow>
    </MDBContainer>

       ))}


</>
      
    
  )
}

export default Products
