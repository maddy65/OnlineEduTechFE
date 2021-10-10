import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OnlineedutecServices from './../services/OnlineedutecServices'
import avtar from './../resources/assets/Avtar.png'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { FaArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";





import TabContent from 'react-bootstrap/TabContent'

class UserCourse extends Component{
    constructor(props){
        super(props)
        this.state = {
            userName: "",
            allCourse : [],
            mostPopular : [],
            topRated : [],
            theNewest : []
        };
        
    }


    componentDidMount(){
        OnlineedutecServices.getUsers().then((res)=>{
            this.setState({userName:res.data[0].fristName})
        });

        OnlineedutecServices.getCourses().then((res)=>{
            this.setState({allCourse:res.data})
        });
    }
    render() {
        return (
            <div class="containerleft">
                    <div class="jumbotron jumbotron-fluid " >
                        <div class="container">
                            <div class="row">
                                <div class="col-6 col-sm-3">
                                    <div> Hello {this.state.userName}</div>
                                    <div> It’s good to see you again. </div>
                                </div>
                                <div class="col-6 col-sm-3">
                                <img  src={avtar} ></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="jumbotron jumbotron-fluid ">
                        <div class="container">
                            <div class="row">
                                <div class="co.l-6 col-sm-3">
                                    <div> CourseName</div>
                                    <div> Author </div>
                                </div>
                                <div class="co.l-6 col-sm-3">
                                    <div style={{ width: 50, height: 50 }}>
                                        <CircularProgressbar value= {66} />
                                    </div>
                                </div>
                                <div class="co.l-6 col-sm-3">
                                    <div><FaArrowAltCircleLeft /></div>
                                </div>
                                <div class="co.l-1 col-sm-3">
                                <div><FaRegArrowAltCircleRight /></div>
                                </div>
                               
                                    
                                
                            </div>
                        </div>
                    </div>

                    <div>Courses</div>
                    

                    
                    <Tabs>
                        <TabList>
                            <Tab>All Courses</Tab>
                            <Tab>The Newest</Tab>
                            <Tab> Top Rated </Tab>
                            <Tab> Most popular</Tab>
                        </TabList>

                        <TabPanel>
                            {this.state.allCourse.map(allCourse => (
                                <div class="container">
                                <div class="row">
                                    <div class="col-6 col-sm-3">
                                        <div> {allCourse.name}</div>
                                        <div> {allCourse.author} </div>
                                    </div>
                                    <div class="col-6 col-sm-3">
                                        <div> {allCourse.duration}</div>
                                    </div>
                                    <div class="col-6 col-sm-3">
                                        <div> {allCourse.rating}</div>
                                    </div>
                                    <div class="col-6 col-sm-3">
                                         <button type="button" >View Courses</button>
                                    </div>
                                </div>
                            </div>


                            ))}

                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
            </div>
        );
    }
}

export default UserCourse