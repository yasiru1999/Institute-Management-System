import React, {useState, useEffect}  from 'react';
import { Menu } from 'antd';
import {Link} from "react-router-dom";
import '../Sections/Navbar.css';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {

    const [moduleNames, setModuleNames] = useState([]);
    const course = localStorage.getItem('registeredCourse');

    useEffect(() => {
        const getDetailsList = async() => {
            try {
                const res = await axios.get(`http://localhost:5001/module/getOneCourse/${course}`)
                setModuleNames(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getDetailsList()
    },[]);

  const user = useSelector(state => state.user)

  if (user.userData && !user.userData.isAuth) {
    return (
        //For Not Logged in user
        <Menu mode={props.mode}>
          <Menu.Item className="leftbtn" key="mail">
            <a  href="/">Home</a>

          </Menu.Item>
            <Menu.Item className="leftbtn" key="inquiry">
                <a  href="/inquiryDefault">Support</a>
            </Menu.Item>
            {/*<Menu.Item className="leftbtn" key="inquiry">*/}
            {/*    <a  href="/inquiry">Inquiry</a>*/}
            {/*</Menu.Item>*/}


        </Menu>
    )
  } else if(user.userData && user.userData.isAdmin) {
    return (
        //For Admin
        <Menu mode={props.mode}>
          <Menu.Item className="leftbtn" key="mail">
            <a  href="/">Admin</a>
          </Menu.Item>

            <SubMenu className="leftbtn" key="AdminPayment" title="Payment">
                <Menu.Item key="addPayment">
                    <a href="/payment">Payment Form</a>
                </Menu.Item>
                <Menu.Item key="PaymentDetails">
                    <a href="/paymentDetails">Payment Details</a>
                </Menu.Item>
            </SubMenu>

            <SubMenu className="leftbtn" key="AdminInquiry" title="Inquiry">
                <Menu.Item key="addPayment">
                    <a href="/inquiry">Inquiry Form</a>
                </Menu.Item>
                <Menu.Item key="PaymentDetails">
                    <a href="/inquiryDetails">Inquiry Details</a>
                </Menu.Item>
            </SubMenu>
            <SubMenu className="leftbtn" title="Users">
                <Menu.Item key="viewUsers">
                    <a href="/AllUsers">View All Users</a>
                </Menu.Item>
            </SubMenu>
            <SubMenu className="leftbtn" title="Courses">
                <Menu.Item key="viewCourses">
                    <a href="/AddNewCourse">Add New Course</a>
                </Menu.Item>
                <Menu.Item key="viewCourses">
                    <a href="/ViewAllModules">View Courses</a>
                </Menu.Item>
            </SubMenu>

            <SubMenu className="leftbtn" title="Library">
                <Menu.Item key="libraryDoc">
                    <a href="/library">Add New Library resource</a>
                </Menu.Item>
                <Menu.Item key="libraryDoc">
                    <a href="/libraryDetails">View Library resource</a>
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
  } else if(user.userData && user.userData.isStudent) {
    return (
        //For Student
        <Menu mode={props.mode}>
          <Menu.Item className="leftbtn" key="mail">
            <a  href="/">Home</a>
          </Menu.Item>

            <SubMenu className="leftbtn" key="exam" title="Examinations">
                <Menu.Item key="results">
                    <a href="/sallResult">Exam Results</a>
                </Menu.Item>
                <Menu.Item key="viewExam">
                    <a href="/sall">Exam Timetable</a>
                </Menu.Item>
            </SubMenu>

            <Menu.Item className="leftbtn" key="library">
                <a  href="/libraryContent">Libraries</a>
            </Menu.Item>
            
            {/*<SubMenu className="leftbtn" key="modules" title="My Courses">*/}
            {/*    <Menu.Item key="se">*/}
            {/*        <a href="/">Software Engineering</a>*/}
            {/*    </Menu.Item>*/}
            {/*    <Menu.Item key="ds">*/}
            {/*        <a href="/">Data Science</a>*/}
            {/*    </Menu.Item>*/}
            {/*    <Menu.Item key="it">*/}
            {/*        <a href="/">Information Technology</a>*/}
            {/*    </Menu.Item>*/}
            {/*</SubMenu>*/}
            {/*<SubMenu className="leftbtn" key="modules" title="My Courses">
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

            <Menu.Item className="leftbtn" key="payment">
                <a  href="/payment">Payment</a>
    </Menu.Item>*/}
               <Menu.Item key="results">
               <a href={`/stuHome/${moduleNames.subject1}`}>{moduleNames.subject1}</a>
               </Menu.Item>
               <Menu.Item key="viewExam">
                   <a href={`/stuHome/${moduleNames.subject2}`}>{moduleNames.subject2}</a>
               </Menu.Item>
                <Menu.Item key="viewExam">
                   <a href={`/stuHome/${moduleNames.subject3}`}>{moduleNames.subject3}</a>
               </Menu.Item>
               <Menu.Item key="viewExam">
                  <a href={`/stuHome/${moduleNames.subject4}`}>{moduleNames.subject4}</a>
                </Menu.Item>
            </SubMenu> */}

        </Menu>


    )
  } else {
    return (
        //for Lecturer
        <Menu mode={props.mode}>
          <Menu.Item className="leftbtn" key="mail">
            <a  href="/">Home</a>
          </Menu.Item>


            <SubMenu className="leftbtn" key="exam" title="Examinations">
                <Menu.Item key="results">
                    <a href="/allResult">Exam Results</a>
                </Menu.Item>
                <Menu.Item key="viewExam">
                    <a href="/all">Exam Timetable</a>
                </Menu.Item>
            </SubMenu>

              {/*<SubMenu className="leftbtn" key="subj" title="My courses">
              <Menu.Item key="results">
                 <a href={`/homeLecMat/${moduleNames.subject1}`}>{moduleNames.subject1}</a>
              </Menu.Item>
            <Menu.Item key="viewExam">
               <a href={`/homeLecMat/${moduleNames.subject2}`}>{moduleNames.subject2}</a>
              </Menu.Item>
            <Menu.Item key="viewExam">
                <a href={`/homeLecMat/${moduleNames.subject3}`}>{moduleNames.subject3}</a>
             </Menu.Item>
               <Menu.Item key="viewExam">
              <a href={`/homeLecMat/${moduleNames.subject4}`}>{moduleNames.subject4}</a>
               </Menu.Item>
            </SubMenu> */}
                
        </Menu>
    )
  }
}

export default withRouter(LeftMenu);