import React, { Component } from 'react';
import { FaGem, FaBell } from "react-icons/fa";
import learn from './../resources/assets/LearMore.png'

class UserExplore extends Component{
    constructor(props){
        super(props)

        
    }


    render() {
        return (
            <div class="containerright">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <input  type="search" placeholder="Search" aria-label="Search"></input>
                        <div> <FaBell /> </div>
                        <div class="dropdown">
                            <a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle user-action">
                                <img class = "loginImage" src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg" class="bi bi-person" alt="Avatar"></img>
                            </a> 
                        </div>
                        
                </nav>

                <div>
                    <div class="row">
                        <div class="col-6 col-sm-3">Course Completed</div>
                        <div class="col-6 col-sm-3">Courses in Progress</div>
                    </div>
                </div>

                <p>Your statistics</p>

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