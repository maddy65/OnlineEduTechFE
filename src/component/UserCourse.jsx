import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OnlineedutecServices from './../services/OnlineedutecServices'
import avtar from './../resources/assets/Avtar.png'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BiTimeFive } from "react-icons/bi";
import Player from "./Player";
import Modal from "react-responsive-modal";
import { FaArrowAltCircleLeft, FaRegArrowAltCircleRight, FaHotjar } from "react-icons/fa";





import TabContent from 'react-bootstrap/TabContent'

class UserCourse extends Component{
    constructor(props){
        super(props)
        this.state = {
            userName: "",
            allCourse : [],
            mostPopular : [],
            topRated : [],
            theNewest : [],
            open: false,
            videoUrl : '',
            courseName : '',
            author : ''
        };
        
    }


    componentDidMount(){
        OnlineedutecServices.getUsers().then((res)=>{
            this.setState({userName:res.data[0].fristName})
        });

        OnlineedutecServices.getCourses().then((res)=>{
            this.setState({allCourse:res.data})
            this.setState({author:res.data[0].name})
            this.setState({courseName:res.data[0].author})
            var ratingData = [...res.data];
            ratingData.sort((a, b) => b.rating - a.rating);
            this.setState({topRated:ratingData})
            var popularData = [...res.data];
            popularData.sort((a, b) => b.popularity - a.popularity);
            this.setState({mostPopular:popularData})
        });
    }

    
  


    openVideo = (event) => {
         this.setState({
                open: !this.state.open,
                videoUrl : event.target.value
        })
    };


    render() {
        
        return (
            <div class="containerleft">
                  
                        <div class="container greetings">
                            <div class="row">
                                <div class="col-8 col-sm-6">
                                    <div className="greetingHello"> Hello {this.state.userName} !</div>
                                    <div> It’s good to see you again. </div>
                                </div>
                                <div class="col-8 col-sm-6">
                                <img  src={avtar} ></img>
                                </div>
                            </div>
                        </div>
                 

                    
                        <div class="container countunue">
                            <div class="row">
                                <div class="co.l-6 col-sm-3 continueMargin">
                                    <div>{this.state.courseName}</div>
                                    <div> {this.state.author} </div>
                                </div>

                                <div class="co.l-2 col-sm-2 continueMargin">
                                    <div style={{ width: 50, height: 50, marginTop: 10 }}>
                                        <CircularProgressbar value= {66} />
                                
                                    </div>
                                </div>
                                <div class="co.l-6 col-sm-3">
                                <button type="button" class="btn btn-dark continuebutton">Continue</button>
                                </div>
                                <div class="co.l-2 col-sm-2 continueMargin">
                                    <div className = 'continueMargin'><FaArrowAltCircleLeft /></div>
                                </div>
                                <div class="co.l-2 col-sm-2 ">
                                <div className = 'continueMargin'><FaRegArrowAltCircleRight /></div>
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
                                <div class="container courseTabs">
                                    <div class="row">
                                        <div class="col-6 col-sm-3">
                                            <div className="viewcoursename"> {allCourse.name}</div>
                                            <div> {allCourse.author} </div>
                                        </div>
                                        <div class="col-6 col-sm-3">
                                            <div className="adjustHeight"> <BiTimeFive />{allCourse.duration}</div>
                                        </div>
                                        <div class="col-6 col-sm-3">
                                          
                                            <div className="adjustHeight">  <FaHotjar /> {allCourse.rating}</div>
                                        </div>
                                        <div class="col-6 col-sm-3">
                                            <button type="button" class="btn btn-secondary btn-sm adjustHeight" value={allCourse.videourl} onClick={this.openVideo}>view Course</button>
                                            <Player className="fill-window" open={this.state.open} toggleModal={this.openVideo} videoUrl = {this.state.videoUrl} /> 
                                        </div>
                                </div>
                            </div>


                            ))}

                        </TabPanel>
                        <TabPanel>
                            {this.state.allCourse.map(allCourse => (
                                    <div class="container courseTabs">
                                        <div class="row">
                                            <div class="col-6 col-sm-3">
                                                <div className="viewcoursename"> {allCourse.name}</div>
                                                <div> {allCourse.author} </div>
                                            </div>
                                            <div class="col-6 col-sm-3">
                                                <div className="adjustHeight"> <BiTimeFive />{allCourse.duration}</div>
                                            </div>
                                            <div class="col-6 col-sm-3">
                                            
                                                <div className="adjustHeight">  <FaHotjar /> {allCourse.rating}</div>
                                            </div>
                                            <div class="col-6 col-sm-3">
                                                <button type="button" class="btn btn-secondary btn-sm adjustHeight" value={allCourse.videourl} onClick={this.openVideo}>view Course</button>
                                                <Player className="fill-window" open={this.state.open} toggleModal={this.openVideo} videoUrl = {this.state.videoUrl} /> 
                                            </div>
                                    </div>
                                </div>


                            ))}
                        </TabPanel>


                        <TabPanel>
                            {this.state.topRated.map(allCourse => (
                                    <div class="container courseTabs">
                                        <div class="row">
                                            <div class="col-6 col-sm-3">
                                                <div className="viewcoursename"> {allCourse.name}</div>
                                                <div> {allCourse.author} </div>
                                            </div>
                                            <div class="col-6 col-sm-3">
                                                <div className="adjustHeight"> <BiTimeFive />{allCourse.duration}</div>
                                            </div>
                                            <div class="col-6 col-sm-3">
                                            
                                                <div className="adjustHeight">  <FaHotjar /> {allCourse.rating}</div>
                                            </div>
                                            <div class="col-6 col-sm-3">
                                                <button type="button" class="btn btn-secondary btn-sm adjustHeight" value={allCourse.videourl} onClick={this.openVideo}>view Course</button>
                                                <Player className="fill-window" open={this.state.open} toggleModal={this.openVideo} videoUrl = {this.state.videoUrl} /> 
                                            </div>
                                    </div>
                                </div>


                            ))}
                        </TabPanel>

                        <TabPanel>
                            {this.state.mostPopular.map(allCourse => (
                                    <div class="container courseTabs">
                                        <div class="row">
                                            <div class="col-6 col-sm-3">
                                                <div className="viewcoursename"> {allCourse.name}</div>
                                                <div> {allCourse.author} </div>
                                            </div>
                                            <div class="col-6 col-sm-3">
                                                <div className="adjustHeight"> <BiTimeFive />{allCourse.duration}</div>
                                            </div>
                                            <div class="col-6 col-sm-3">
                                            
                                                <div className="adjustHeight">  <FaHotjar /> {allCourse.rating}</div>
                                            </div>
                                            <div class="col-6 col-sm-3">
                                                <button type="button" class="btn btn-secondary btn-sm adjustHeight" value={allCourse.videourl} onClick={this.openVideo}>view Course</button>
                                                <Player className="fill-window" open={this.state.open} toggleModal={this.openVideo} videoUrl = {this.state.videoUrl} /> 
                                            </div>
                                    </div>
                                </div>


                            ))}
                        </TabPanel>

                    </Tabs>

                    </div>
        );
    }
}

export default UserCourse