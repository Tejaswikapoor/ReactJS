import React, {Component} from 'react';
//import {Media} from 'reactstrap';
import {Card,CardImg, CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
import DishDetail from './DishDetailComponent';
class Menu extends Component{
    constructor(props){
        super(props);

        this.state={
            selectedDish:null
        }


    }

    onDishSelect(dish){
        this.setState({selectedDish:dish});
    }
  
    render(){
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-3 m-1">
                    {/* <Media tag="li"> */}
            <Card key={dish.id} 
            onClick={()=>{this.onDishSelect(dish)}}>
                            <CardImg witdh="100%" src={dish.image} alt={dish.name}/>
                    
                        <CardImgOverlay >
                            <CardTitle heading > {dish.name}</CardTitle>          
                       </CardImgOverlay>
                      
                    </Card>
                    {/* </Media> */}
                </div>
            );
        });
        return(
            
            <div className="container">
                <div className="row">
    
                    {menu}
                      
                 </div>
                   <div className="row">
                  <div  className="col-12 col-md-3 m-1">
                  <DishDetail dish={this.state.selectedDish}/>
                  </div>
                </div>
            </div>

        );
    }
}
export default Menu;