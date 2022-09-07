import React from 'react';
import { Menu } from 'antd';
import {Link} from "react-router-dom";
import '../Sections/Navbar.css';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item className="leftbtn" key="mail">
      <a  href="/">Home</a>
    </Menu.Item>
    
    <Menu.Item className="leftbtn" key="mails">
     <a  href={`/createNS/It2005`}>Software Engineering</a>
    </Menu.Item>

  </Menu>


  const user = useSelector(state => state.user)

  if (user.userData && !user.userData.isAuth) {
    return (
        <Menu mode={props.mode}>
          <Menu.Item className="leftbtn" key="mail">
            <a  href="/">Home</a>
          </Menu.Item>
        </Menu>
    )
  } else if(user.userData && user.userData.isAdmin) {
    return (
        <Menu mode={props.mode}>
          <Menu.Item className="leftbtn" key="mail">
            <a  href="/">Admin</a>
          </Menu.Item>
        </Menu>
    )
  } else if(user.userData && user.userData.isStudent) {
    return (
        <Menu mode={props.mode}>
          <Menu.Item className="leftbtn" key="mail">
            <a  href="/">Home</a>
          </Menu.Item>

            <SubMenu className="leftbtn" key="UserManagement" title="User Management">
                <Menu.Item key="UserManagement">
                    <a href="/">Update/Delete Users</a>
                </Menu.Item>
                <Menu.Item key="UserManagement">
                    <a href="/">Approved Supervisors</a>
                </Menu.Item>
                <Menu.Item key="UserManagement">
                    <a href="/">Add panel members </a>
                </Menu.Item>
                <Menu.Item key="UserManagement">
                    <a href="/">Allocate panel members </a>
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
  } else {
    return (
        <Menu mode={props.mode}>
          <Menu.Item className="leftbtn" key="mail">
            <a  href="/">Lecturer</a>
          </Menu.Item>
        </Menu>
    )
  }
}

export default withRouter(LeftMenu);
