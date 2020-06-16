import React, { Component } from 'react';
import { Breadcrumb,BreadcrumbItem, Button,Form,FormGroup,Label,Input,Col,FormFeedback} from 'reactstrap';
import { Link } from 'react-router-dom';
class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched:{
            firstname: false,
            lastname: false,
            telnum: false,
            email: false,

            }
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleblur=this.handleblur.bind(this);
        this.validatess=this.validatess.bind(this);
    }

    handleblur=(field)=>(evt)=>{
        {this.setState({touched: {...this.state.touched,[field]:true}})
    }
}
     validatess(firstname,lastname,email,telnum){
        const errorss={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
        };
        if(this.state.touched.firstname && firstname.length <3){
            errorss.firstname=' First name should contains >3 chars';
        }
        if(this.state.touched.firstname && firstname.length >15){
            errorss.firstname=' First name should contains <15 chars';
        }
        if(this.state.touched.lastname && lastname.length <3){
            errorss.lastname=' last name should contains >3 chars';
        }
        if(this.state.touched.lastname && lastname.length >10){
            errorss.lastname=' last name should contains >3 chars';
        }
        const reg=/^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum)){
            errorss.telnum=' Tel number should contain numbers only';
        }
        if(this.state.touched.email && email.split('').filter(x=>x==='@').length!==1){
            errorss.email='Invalid Email';
        }
        return errorss;
    } 
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }


    handleSubmit(event){
        console.log("Current State is:" + JSON.stringify(this.state));
        alert("Current State is:" + JSON.stringify(this.state));
        event.preventDefault();

    }

    render(){
        const errorss=this.validatess(this.state.firstname,this.state.lastname,this.state.email,this.state.telnum);
    return(
        <div className="container">
            <div className="row mt-2">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem> Contact US</BreadcrumbItem>
                    
                </Breadcrumb>
                <div className="col-12">
                    <h3>
                    Contact US
                    </h3>
                    <hr/>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                   <div className="col-12">
                      <h3>Send us your Feedback</h3>
                   </div>
                    <div className="col-12 col-md-9">
                        <Form  onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleblur('firstname')} 
                                        valid={errorss.firstname ===''}
                                        invalid={errorss.firstname!==''}
                                        
                                         />
                                    <FormFeedback>{errorss.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleblur('lastname')} 
                                        valid={errorss.lastname ===''}
                                        invalid={errorss.lastname!==''}
                                        />
                                    <FormFeedback>{errorss.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Telephone Number</Label>
                                <Col md={10}>
                                    <Input type="text" id="telnum" name="telnum"
                                        placeholder="Number"
                                        value={this.state.telnum}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleblur('telnum')} 
                                        valid={errorss.telnum===''}
                                        
                                        invalid={errorss.telnum!==''}
                                        />
                                    <FormFeedback>{errorss.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="email" md={2}>email </Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleblur('email')} 
                                        valid={errorss.email === ''}
                                        invalid={errorss.email!==''}
                                        />
                                    <FormFeedback>{errorss.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            
                            <FormGroup row>
                                <Col md={{size:6,offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" onChange={this.handleInputChange} checked={this.state.agree}/>
                                            {' '} <strong> May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3,offset:1}}>
                                    <Input type="select" name="contactType" onChange={this.handleInputChange} value={this.state.contactType}>
                                        <option>Tel. Number </option>
                                        <option>Email</option>
                                        </Input>
                                </Col>
                            </FormGroup>
                        
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Give your Feedback </Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}
                                        />
                                    
                                </Col>
                            </FormGroup> 
                            <FormGroup row>
                                <Col md={{size:10,offset:2}}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </FormGroup>

                        </Form>

                    </div>
                </div>
            
        </div>
    );
    }
}

export default Contact;