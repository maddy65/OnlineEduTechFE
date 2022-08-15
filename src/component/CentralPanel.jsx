import React, { Component } from 'react';
import UserCourse from './UserCourse'
import UserExplore from './UserExplore'
import SideBar from './SideBar'


class CentralPanel extends Component{
    constructor(props){
        super(props)

        
    }


    render() {
        return (

            <div class="container">
              
                <div class="row">
                    <div class="col">
                        <UserCourse />
                    </div>
                    <div class="col">
                        <UserExplore />
                    </div>
                </div>
            </div>

          
        );
    }
}

export default CentralPanel