import React, {useState} from 'react';
import { Menu, Icon, Badge } from 'antd';
import axios from 'axios';
import '../Sections/Navbar.css';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import { FaRegUserCircle } from 'react-icons/fa';

function RightMenu(props) {
    const user = useSelector(state => state.user)
    const name = localStorage.getItem("name");

    const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu className="rightbtn" mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login">SignIn</a>
        </Menu.Item>
        {/*<Menu.Item key="app">*/}
        {/*  <a href="/register">SignUp</a>*/}
        {/*</Menu.Item>*/}
      </Menu>
    )
  } else if(user.userData && user.userData.isAdmin){
    return (
      <Menu className="rightbtn" mode={props.mode}>

        <Menu.Item key="history">
          <a href="/register">Register User</a>
        </Menu.Item>

        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  } else{
      return (
          <Menu className="rightbtn" mode={props.mode}>

              <Menu.Item  key="logout">
                  <h3>{name}</h3>
                  <a className="rightbtnLogout" onClick={logoutHandler}>Logout</a>
              </Menu.Item>

              <Menu.Item key="cart">
              <Badge>
                  <a href="/user" style={{color:'#667777'}}>
                      <FaRegUserCircle style={{fontSize: 35}} />
                  </a>
              </Badge>
          </Menu.Item>
          </Menu>
      )
  }
}

export default withRouter(RightMenu);
