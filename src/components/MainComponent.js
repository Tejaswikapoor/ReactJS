import React, { Component } from 'react';

import Contact from './ContactComponent';
import Menu from './MenuComponent';
import {DISHES } from '../shared/dishes'
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import {COMMENTS} from '../shared/comments';
import {LEADERS } from '../shared/leaders';
import {PROMOTIONS } from '../shared/promotions';
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            promo:PROMOTIONS,
            leaders:LEADERS
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
    
  return (
    
      <div>
       <Header/>
       <Switch>
         <Route path='/home' component={HomePage}/>
         <Route exact path='/menu' component={()=> <Menu dishes={this.state.dishes}/>}/>
         <Route exact path='/contactus' component={Contact}/>
         <Route Redirect='/home'/>
       </Switch>
      {/* <Menu  dishes={DISHES}  onClick={(dishId)=>{this.onDishSelect(dishId)} }/>
      <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/> */}
      <Footer/>
      </div>
    ); 
};
}
export default Main;
