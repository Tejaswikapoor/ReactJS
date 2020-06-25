import React from 'react';
//import {Media} from 'reactstrap';
import {Card,CardImg, CardImgOverlay,CardText,CardBody,CardTitle, Breadcrumb, BreadcrumbItem, CardDeck} from 'reactstrap';
import { Link } from 'react-router-dom';
function RenderMenuItem({dish,onClick,storeDishId}){
    // storeDishId(parseInt(dish._id));
    return(
    <Card  className="mb-4" >
        <Link to={`/menu/${dish._id}`}>
        <CardImg className="alignfoodCard" witdh="100%" src={dish.image} alt={dish.name}/>

        <CardImgOverlay >
                <CardTitle heading > {dish.name}</CardTitle>         
        </CardImgOverlay>
        </Link>
    </Card>
    )
    
}
   const Menu=(props)=>{
    const menu=props.adishes.map((dish)=>{
        return(
            <div key={dish.id} className="col-12 col-md-6 mt-2">
               <RenderMenuItem dish={dish} storeDishId={props.storeDishId} />
            </div>
        );
    });
    return(
        
        <div className="container">
            <div className="row mt-2" >
                <Breadcrumb>
                    <BreadcrumbItem> <Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>
                        Menu
                    </h3>
                    <hr className="rounded"/>
                </div>
            </div>
            <div className="row">
                <CardDeck>
                {menu}
                </CardDeck>
               
                  
             </div>
             
                
        </div>

    );
   }
  
       
  
export default Menu;