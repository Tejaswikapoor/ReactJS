import React,{Component } from 'react';
import { Card, CardBody, CardDeck } from 'reactstrap';

class AboutUs extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }
 render(){
     return(
         <div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <img src={process.env.PUBLIC_URL + '/assets/images/user.png'} height="100vh"/>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-8">
                    <p>My site is all about different variety of food and their recipes, it also contains review and preview of restraunts with their images and geographical indicators of different states for example Agra ka patha, tirupati laddu,etc

                        </p>
                    </div>
                    
                </div>
                <div className="row mt-4 ">
                        <div className="col-12 text-center ">
                            <h3 classname="">
                                What People Say
                            </h3>
                            <hr className="rounded"/>
                        </div>
                </div> 
                <div className="row  ">
                    <div className="col-12">
                        <CardDeck>
                        <Card className="mb-4 ">
                            <CardBody>
                            Your all recipes are awesome specially moti choor k laddoo and lauki ka halwa wah bhai wah<br/><br/> Neelam . S, Shukla
                            </CardBody>
                        </Card>
                     <Card className="mb-4">
                            <CardBody>
                            Mouth watering will definitely try sarsoo ka saag<br/><br/>Jyoti Bery </CardBody>
                        </Card>
                      <Card className="mb-4">
                            <CardBody>
                            Your all recipes are amazing specialy chilli manchurian<br/><br/>Archa Kapoor </CardBody>
                        </Card>
                       
                    </CardDeck>
                </div>
                </div>
             
                <div className="row  ">
                    <div className="col-12">
                        <CardDeck>
                        <Card className="mb-4 ">
                            <CardBody>
                            Your all recipes are awesome specially moti choor k laddoo and lauki ka halwa wah bhai wah<br/><br/> Neelam . S, Shukla
                            </CardBody>
                        </Card>
                     <Card className="mb-4">
                            <CardBody>
                            Mouth watering will definitely try sarsoo ka saag<br/><br/>Jyoti Bery </CardBody>
                        </Card>
                      <Card className="mb-4">
                            <CardBody>
                            Your all recipes are amazing specialy chilli manchurian<br/><br/>Archa Kapoor </CardBody>
                        </Card>
                       
                    </CardDeck>
                </div>
                </div>
             
                <div className="row  ">
                    <div className="col-12">
                        <CardDeck>
                        <Card className="mb-4 ">
                            <CardBody>
                            Your all recipes are awesome specially moti choor k laddoo and lauki ka halwa wah bhai wah<br/><br/> Neelam . S, Shukla
                            </CardBody>
                        </Card>
                     <Card className="mb-4">
                            <CardBody>
                            Mouth watering will definitely try sarsoo ka saag<br/><br/>Jyoti Bery </CardBody>
                        </Card>
                      <Card className="mb-4">
                            <CardBody>
                            Your all recipes are amazing specialy chilli manchurian<br/><br/>Archa Kapoor </CardBody>
                        </Card>
                       
                    </CardDeck>
                </div>
                </div>
            </div>
         </div>
     )
 }
}
export default AboutUs;