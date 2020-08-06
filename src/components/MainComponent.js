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
import AboutUs from './AboutUsComponent';

import {  withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {FetchAllDishes,FetchAllComments,storeDishId} from '../redux/ActionCreator'

const mapStateToProps= state =>{
  return{
      dishes:state.Dishes.dishes,
      comments:state.Dishes.comments,
      selectedDishId:state.Dishes.selectedDishId,
      isloading:state.Dishes.isloading
  }
}

const mapDispatchToProps=(dispatch)=>({
  FetchAllDishes:()=>dispatch(FetchAllDishes()),
  FetchAllComments:(dishid)=>dispatch(FetchAllComments(dishid)),
  storeDishId:(dishid)=>dispatch(storeDishId(dishid)),

})
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            promo:PROMOTIONS,
            leaders:LEADERS,
            comments:COMMENTS,
            // selectedDishid:parseInt(this.props.match.params.id)
            //selectedDish:null

            

        }
    }
   
    componentDidMount(){
       this.props.FetchAllDishes(); 
      
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
      // console.log(parseInt(this.props.dishes[0]._id))
        return (
          
         <DishDetail dish={ this.props.dishes.filter((dish)=> parseInt(dish._id)=== parseInt(match.params.id))[0]}
        // comment={this.state.comments.filter((comment)=> comment.dishId===parseInt(match.params.id,10))}
        FetchAllComments= {this.props.FetchAllComments}
        FetchAllDishes={this.props.FetchAllDishes}
        isloading={this.props.isloading}
        />
        )
    

   }

  return (
    
      <div>
       <Header/>
       <Switch>
         <Route path='/home' component={HomePage}/>
         <Route exact path='/menu' component={()=> <Menu dishes={this.state.dishes} adishes={this.props.dishes} storeDishId={this.props.storeDishId}/>}/>
         <Route path='/menu/:id' component={DishWithID}/>
         <Route exact path='/contactus' component={Contact}/>
        
         <Route path='/dishdetail' component={()=><ShowDish dishes={this.state.adishes}/>} />
       <Route exact path='/aboutus' component={AboutUs}/>

       <Route Redirect='/home' component={HomePage}/>
       </Switch>
      {/* <Menu  dishes={DISHES}  onClick={(dishId)=>{this.onDishSelect(dishId)} }/>
      <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/> */}
      <Footer/>
      </div>
    ); 
};
}


export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));

