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

  const user = useSelector(state => state.user)

  if (user.userData && !user.userData.isAuth) {
    return (
        //For Not Logged in user
        <Menu mode={props.mode}>
          <Menu.Item className="leftbtn" key="mail">
            <a  href="/">Home</a>
          </Menu.Item>
        </Menu>
    )
  } else if(user.userData && user.userData.isAdmin) {
    return (
        //For Admin
        <Menu mode={props.mode}>
          <Menu.Item className="leftbtn" key="mail">
            <a  href="/">Admin</a>
          </Menu.Item>
        </Menu>
    )
  } else if(user.userData && user.userData.isStudent) {
    return (
        //For Student
        <Menu mode={props.mode}>
          <Menu.Item className="leftbtn" key="mail">
            <a  href="/">Home</a>
          </Menu.Item>

            <SubMenu className="leftbtn" key="modules" title="Modules">
                <Menu.Item key="se">
                    <a href="/">Software Engineering</a>
                </Menu.Item>
                <Menu.Item key="ds">
                    <a href="/">Data Science</a>
                </Menu.Item>
                <Menu.Item key="it">
                    <a href="/">Information Technology</a>
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
  } else {
    return (
        //for Lecturer
        <Menu mode={props.mode}>
          <Menu.Item className="leftbtn" key="mail">
            <a  href="/">Home</a>
          </Menu.Item>

            <SubMenu className="leftbtn" key="modules" title="Modules">
                <Menu.Item key="se">
                    <a href="/">Software Engineering</a>
                </Menu.Item>
                <Menu.Item key="ds">
                    <a href="/">Data Science</a>
                </Menu.Item>
                <Menu.Item key="it">
                    <a href="/">Information Technology</a>
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
  }
}

export default withRouter(LeftMenu);
