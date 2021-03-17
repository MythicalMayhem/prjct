import React from 'react'
import logo1 from './bgimg1.jpg'
import logo2 from './bgimg2.jpg'
import logo3 from './bgimg3.jpg'
import Carousel from 'react-bootstrap/Carousel'
import Randompg from './Randompg'

const Karousel = () => {
  const style = {height:"11cm",width:"11cm"}
  const div = { display:"flex",felxDirection:"row",
                alignItems:"center",justifyContent:"center",marginTop:"2cm"}
  return (
           <div style={div}>
             <div>
             <Carousel style={{width:"20cm",height:"11.1cm"}} >
              <Carousel.Item style={{border:"3px solid yellow"}}>
                <img
                  className="d-block w-100"
                  src={logo1}
                  alt="First slide"
                  style={style}
                />
                <Carousel.Caption style={{color:"white"}}>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>


                <Carousel.Item style={{border:"3px solid yellow"}}>
                <img
                  className="d-block w-100"
                  src={logo2}
                  alt="First slide"
                  style={style}
                />
                <Carousel.Caption style={{color:"white"}}>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              
              <Carousel.Item style={{border:"3px solid yellow"}}>
                <img
                  className="d-block w-100"
                  src={logo3}
                  alt="First slide"
                  style={style}
                />
                <Carousel.Caption style={{color:"white"}}>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
           </Carousel>
             </div>
             <div>
               <Randompg  />
             </div>
           </div>            
    )
}

export default Karousel
