import React from 'react';
import { Menu } from 'antd';
import '../Sections/Navbar.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item className="leftbtn" key="mail">
      <a  href="/">Home</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu
