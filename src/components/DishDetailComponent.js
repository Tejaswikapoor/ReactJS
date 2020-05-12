import React from 'react';
//import {Media} from 'reactstrap';
import {Card,CardImg, CardImgOverlay,CardText,CardBody,CardTitle,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import {Link } from 'react-router-dom';

  function RenderDish({dish}){
    if (dish != null)
    return(
        <Card >
            <CardImg width="100%" top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
    else
    return(
        <div></div>
    )
    
}
      const DishDetail=(props)=>{
return(
        <div className="container ">
          <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem> <Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>
                       {props.dish.name}
                    </h3>
                    <hr/>
                </div>
              
            </div>

        <div className="row col-md-3 m-1 ">
       <RenderDish dish={props.dish}/>
      </div>
 
   </div>
)
      }
    



export default DishDetail;