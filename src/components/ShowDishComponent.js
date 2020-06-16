import { React, Component } from "react";
import  Header  from './HeaderComponent';

class ShowDish extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <image></image>
                    </div>
                </div>
                
            </div>
            
        )
    }

}
export default ShowDish;