import React from 'react';
import {Card, CardBody ,CardText ,CardTitle ,CardImg, CardSubtitle, CardDeck} from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom';
function RenderCard({items}){
return(
    
    <Card className="homeCard text-dark" >
        <CardImg src={items.image} alt={items.name}/>
        <CardBody>
            <CardTitle>
                {items.name}
            </CardTitle>
                {items.designation ? <CardSubtitle>{items.designation}</CardSubtitle>:null}
            <CardText>{items.description}</CardText>
        </CardBody>
    </Card>
);
}

function Home(props){
return(
    
    <div className="container">

    
        <div className="row mt-4 " >
                        <Carousel  showThumbs={false} infiniteLoop={true} autoPlay={true} interval={2000} showStatus={false} showArrows={false} stopOnHover={false} height={"30%"} >

                            <div>
                                <img className="homeCard" src={process.env.PUBLIC_URL + '/assets/images/3.jpg'} height="100%" width="100%"/>
                            </div>
                            <div>
                                <img className="homeCard" src={process.env.PUBLIC_URL + '/assets/images/2.jpg'} height="100%" width="100%"/>
                            </div>
                            <div>
                                <img className="homeCard" src={process.env.PUBLIC_URL + '/assets/images/4.jpg'} height="100%" width="100%"/>
                            </div>
                            <div>
                                <img className="homeCard" src={process.env.PUBLIC_URL + '/assets/images/1.jpg'} height="100%" width="100%"/>
                            </div>
                            
                        </Carousel>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 text-center">
                           <h2>
                                Featured 
                                         </h2>
                          <hr className="rounded"/>
                        </div>
                    </div>   
        <div className="row align-items-start mb-4">
            <CardDeck>
               
            <div className="col-12 col-md m-1 ">
            <Link to="/menu/0" >
                <RenderCard  items={props.dish}/>
                </Link>
            </div>
           
            <div className="col-12 col-md m-1">
                <RenderCard items={props.promo}/>
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard items={props.leaders}/>
            </div>
            </CardDeck>
        </div>
        <div className="row align-items-start mb-4">
            <CardDeck>
            <div className="col-12 col-md m-1 ">
                <RenderCard items={props.dish}/>
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard items={props.promo}/>
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard items={props.leaders}/>
            </div>
            </CardDeck>
        </div>
    </div>
)
}
export default Home;