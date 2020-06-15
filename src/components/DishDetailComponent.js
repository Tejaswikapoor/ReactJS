import React, { Component } from 'react';
//import {Media} from 'reactstrap';
import {Card,CardImg, CardImgOverlay,CardText,CardBody,CardTitle,BreadcrumbItem,Breadcrumb, CardHeader,Button} from 'reactstrap';
import {Link } from 'react-router-dom';

//   function RenderDish({dish}){
//     if (dish != null)
//     return(
        
//     );
//     else
//     return(
//         <div></div>
//     )
    
// }

 
   
    

      class DishDetail extends Component{
          constructor(props){
              super(props)
                  this.state={
                    showComment:false,
                    showReceipe:true,
                  }
              this.toggleShowRecipe=this.toggleShowRecipe.bind(this);
              this.toggleShowComment=this.toggleShowComment.bind(this);
          }
          toggleShowRecipe(){
              this.setState({
                  showReceipe:true,
                  showComment:false
              })
          }
          toggleShowComment(){
            this.setState({
                showReceipe:false,
                showComment:true
            })
        }
          render(){
        const comm=this.props.comment.map((data)=>{
            return(
            <Card >
           
              <CardBody>
                  <div className="row">
                      <div className="col-10">
                              <CardHeader>{data.author}</CardHeader>
                              <CardText>
                                     {data.comment}
                             </CardText>
                              <CardText>{data.date}</CardText>
                         </div>
                         <div className="col-2 display-4 mt-2">
                             <span className="fa fa-user-circle">

                             </span>
                         </div>
                 </div>

              </CardBody>
       </Card>
            )
    })
return(
        <div className="container ">
          <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem> <Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>
                       {this.props.dish.name}
                    </h3>
                    <hr/>
                </div>
              
            </div>
<div className="row">
             <div className=" col-md-3 m-1 ">
             <Card >
            <CardImg width="100%" top src={this.props.dish.image}  />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
            <Button className="btn btn-block bg-info" onClick={this.toggleShowRecipe}>Show Reciepe </Button>
            <Button className="btn btn-block bg-info" onClick={this.toggleShowComment}>Show comment</Button>
        </Card>
            </div>
       {this.state.showComment &&
            <div className="col-md-8 mb-2">
                    {comm}
              </div>
          }
          {this.state.showReceipe &&
          <div className="col-md-8 mb-2">
                <Card>
                    <CardHeader>Ingredients</CardHeader>
                    <CardBody>
                        {this.props.dish.ingredients.map(data=>{
                            return(
                            <CardText><span className="fa fa-circle mr-2"></span>{data}</CardText>
                            )
                        })}
                    </CardBody>
                </Card>
                <Card className="mt-2"> 
                    <CardHeader>Instructions</CardHeader>
                    <CardBody>
                        {this.props.dish.instructions.map(data=>{
                            return(
                            <CardText><span className="fa fa-circle mr-2"></span>{data}</CardText>
                            )
                        })}
                    </CardBody>
                </Card>
         </div>
         }
         </div>
   </div>
)
      }
    

    }

export default DishDetail;