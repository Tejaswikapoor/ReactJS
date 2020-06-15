import React, { Component } from 'react';

import Contact from './ContactComponent';
import Menu from './MenuComponent';

import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import {COMMENTS} from '../shared/comments';
import {LEADERS } from '../shared/leaders';
import {PROMOTIONS } from '../shared/promotions';
import {DISHES } from '../shared/dishes';
import ShowDish  from './ShowDishComponent';

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            promo:PROMOTIONS,
            leaders:LEADERS,
            comments:COMMENTS
            //selectedDish:null

            

        }
    }
    
    
    // onDishSelect(dishId){
    //     this.setState({selectedDish:dishId});
    // }

    render(){
      const HomePage=()=>{
        return(
          <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
          promo={this.state.promo.filter((prom)=> prom.featured)[0]}
          leaders={this.state.leaders.filter((lead)=> lead.featured)[0]}
      
          />
        )
      }
    const DishWithID= ({match})=>{
        return (
         <DishDetail dish={ this.state.dishes.filter((dish)=> dish.id===parseInt(match.params.id,10))[0]}
        comment={this.state.comments.filter((comment)=> comment.dishId===parseInt(match.params.id,10))}
        />
        )
    

   }

  return (
    
      <div>
       <Header/>
       <Switch>
         <Route path='/home' component={HomePage}/>
         <Route exact path='/menu' component={()=> <Menu dishes={this.state.dishes}/>}/>
         <Route path='/menu/:id' component={DishWithID}/>
         <Route exact path='/contactus' component={Contact}/>
         <Route Redirect='/home'/>
         <Route path='/dishdetail' component={()=><ShowDish dishes={this.state.dishes}/>} />
       </Switch>
      {/* <Menu  dishes={DISHES}  onClick={(dishId)=>{this.onDishSelect(dishId)} }/>
      <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/> */}
      <Footer/>
      </div>
    ); 
};
}


export default Main;
