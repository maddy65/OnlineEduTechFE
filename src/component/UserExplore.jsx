import React, { Component } from 'react';
import { FaGem, FaBell } from "react-icons/fa";
import learn from './../resources/assets/LearMore.png';
import OnlineedutecServices from './../services/OnlineedutecServices'

class UserExplore extends Component{
    constructor(props){
        super(props)
        this.state = {
            userName: "",
            courseComplted : "",
            courseInProgress : ""
        };
        
    }


    componentDidMount(){
        

        OnlineedutecServices.getUsers().then((res)=>{
            this.setState({
                courseComplted : res.data[0].completed,
                courseInProgress : res.data[0].inprogress
            
            })

        });
    }


    render() {
        return (
            <div class="containerright">
                <nav class="navbar navbar-expand-lg">
                        <input  type="search" placeholder="Search" aria-label="Search"></input>
                        <div className = "notification"> <FaBell /> </div>
                        <div class="dropdown">
                            <a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle user-action">
                                <img class = "loginImage" src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg" class="bi bi-person" alt="Avatar"></img>
                            </a> 
                        </div>
                        
                </nav>

                <div>
                    <div class="row ">
                        <div class="col-8 col-sm-6 course-display ">
                            <div class="row ">
                                <div class="col-8 col-sm-6 study-display">{this.state.courseComplted}</div>
                                <div class="col-8 col-sm-6 studydecdisplay">Course Completed</div>
                            </div>
                        </div>
                        <div class="col-8 col-sm-6 inprogress-display ">
                            
                                <div class="row ">
                                    <div class="col-8 col-sm-6 study-display">{this.state.courseInProgress}</div>
                                    <div class="col-8 col-sm-6 studydecdisplay">Courses in Progress</div>
                                </div>
                           
                            
                             
                        </div>
                    </div>
                </div>

                <p className="statisticsText">Your statistics</p>

                <div className = "learnMore"> 
                    <div className = "learnMoreText"> Learn Even More</div>
                    <div class="row">
                        <div class="col-6 ">Unlock premium features only for $9.99 per month. </div>
                        <div class="col-6">
                            <img  src={learn} ></img>
                         </div>
                        
                    </div>
                    <button type="button" class="btn btn-dark">Learn More</button>
                </div>


            </div>
           
            
            

        );
    }
}

export default UserExplore