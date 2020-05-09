import React, {Component} from 'react';
//import {Media} from 'reactstrap';
import {Card,CardImg, CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';


class DishDetail extends Component{

    constructor(props){
        super(props);
       
        this.state={
          //  selectedDish:this.props.selectedDish
        }
    }
  renderDish(dish){
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
    );
}

render(){
    return(
        <div className="container ">
        <div className="row col-md-3 m-1 ">
       
       {this.renderDish(this.props.dish)}
      </div>
   </div>
    );
    
    }

}
export default DishDetail;