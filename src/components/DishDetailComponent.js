import React, { Component } from 'react';
//import {Media} from 'reactstrap';
import {Card,CardImg, CardImgOverlay,CardText,CardBody,CardTitle,BreadcrumbItem,Breadcrumb, CardHeader,Button,Modal,ModalBody,ModalHeader,Form,FormFeedback,Label,Col,Input,FormGroup} from 'reactstrap';
import {Link, withRouter } from 'react-router-dom';
import swal from 'sweetalert';
      class DishDetail extends Component{
          constructor(props){
              super(props)
                  this.state={
                    showComment:false,
                    showReceipe:true,
                    name:"",
                    feedback:""
                  }
                  this.toggleModal=this.toggleModal.bind(this);
              this.toggleShowRecipe=this.toggleShowRecipe.bind(this);
              this.toggleShowComment=this.toggleShowComment.bind(this);
              this.handleInputChange=this.handleInputChange.bind(this);
              this.addComment=this.addComment.bind(this);
          }
          toggleModal() {
            this.setState({
                isModalOpen:!this.state.isModalOpen,
            })}
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
        handleInputChange(event){
            this.setState({
                [event.target.name]:event.target.value
            })
        }
        addComment(){
            const myjson={
            "rating":4,
            "comment":this.state.feedback,
            "author":this.state.name

            }
            console.log(myjson)
            const url = "http://localhost:3000/dishes/"+this.props.match.params.id+"/comments";
            return fetch(url, {
                method: 'POST',
                headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
                    },
                     body: JSON.stringify(myjson)
            }).then((response) => {
                response.json().then((jsonResponse) => {
                    if(jsonResponse==='{}') {
                        swal(jsonResponse);
                        //  console.log(jsonResponse)
                    }
                    else {
                        swal({
                            title:  "COMMENT SAVED.THANK YOU FOR YOUR COMMENT!",
                            icon: "success"
                        });
                        // alert(jsonResponse["context"]["entity"]["documentId"])
                        
                    }
                })});
        
        }
        componentDidMount(){
            // this.props.FetchAllComments((this.props.dish._id))
        }
          render(){
        const comm=this.props.dish.comments.map((data)=>{
            return(
            <Card >
           
              <CardBody>
                  <div className="row">
                      <div className="col-10">
                              <CardHeader>{data.author}</CardHeader>
                              <CardText>
                                     {data.comment}
                             </CardText>
                              <CardText>{data.updatedAt}</CardText>
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
                    <Button className="btn btn-block bg-info" onClick={this.toggleModal}>Add Comment </Button>
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
         <Modal isOpen={this.state.isModalOpen} toggle={this.state.toggleModal}>
                    <ModalHeader toggle={this.state.toggleModal}>
                        <h5>Please add comment</h5>
                    </ModalHeader>
                    <ModalBody>
                    <Form  >
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="name"
                                        placeholder=" Name"
                                         value={this.state.name}
                                         onChange={this.handleInputChange}
                                        // onBlur={this.handleblur('firstname')} 
                                        // valid={errorss.firstname ===''}
                                        // invalid={errorss.firstname!==''}
                                        
                                         />
                                    {/* <FormFeedback>{errorss.firstname}</FormFeedback> */}
                                </Col>
                            </FormGroup>
               
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Give your Feedback </Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="feedback"
                                        rows="12"
                                       value={this.state.feedback}
                                        onChange={this.handleInputChange}
                                        />
                                    
                                </Col>
                            </FormGroup> 
                            <FormGroup row>
                                <Col md={{size:4,offset:2}}>
                                    <Button className="btn btn-block" onClick={this.addComment} color="primary">Send</Button>
                                </Col>
                                <Col md={{size:4,offset:2}}>
                                    <Button className="btn btn-block"  color="primary" onClick={this.toggleModal}>Close</Button>
                                </Col>
                            </FormGroup>

                        </Form>
                        
                    </ModalBody>
                </Modal>
   </div>

)
      }
    

    }

export default withRouter(DishDetail);