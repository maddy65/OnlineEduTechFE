import React, { Component } from 'react';
import { ProSidebar, Menu, MenuItem,  SidebarHeader, SidebarFooter, SidebarContent} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaUser } from "react-icons/fa";
import { FiHome, FiLogOut, FiSettings, FiMail  } from "react-icons/fi";


class SideBar extends Component{
    constructor(props){
        super(props)

        
    }


    render() {
        return (
           <div className='sidebar'>
                <ProSidebar collapsed={true}>
                    <SidebarHeader className="logotext">
                        <p>F.</p>
                    </SidebarHeader>
                    <SidebarContent>
                        
                        <Menu iconShape="square">
                            <MenuItem icon={<FiHome />}></MenuItem>
                            <MenuItem icon={<FaUser />}></MenuItem>
                            <MenuItem icon={<FaGem />}></MenuItem>
                            <MenuItem icon={<FiMail />}></MenuItem>
                            <MenuItem icon={<FiSettings />}></MenuItem>
                        </Menu>
                    </SidebarContent>    
                    <SidebarFooter>
                        <Menu iconShape="square">
                        <MenuItem icon={<FiLogOut />}></MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>

           </div>
        );
    }
}

export default SideBar