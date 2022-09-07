import React, {useEffect, useState, Fragment} from "react";
import Axios from 'axios'
import { Typography, Divider,Row,Col } from "antd";
import { useDispatch } from 'react-redux';
import {FaRegUserCircle} from "react-icons/fa";
import "./UserDetailsPage.css";

const { Title, Text } = Typography;

function UserDetailsPage(props) {
    const dispatch = useDispatch();
    const userId = localStorage.getItem('userId');
    const [User, setUser] = useState([])

    useEffect(() => {
        Axios.get(`/api/users/user_by_id?id=${userId}&type=single`)
            .then(response => {
                setUser(response.data[0])
            })

    }, [])

    return (
        <div className="postPage" style={{ width: '100%', padding: '5rem 4rem' }}>
            <div style={{ display: 'flex' }}>
                <FaRegUserCircle style={{fontSize: 55,color: "black"}} />
                <h3 style={{marginLeft: '30px', fontSize:20}}>{User.name}</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

            </div>
            <br />
            <Fragment>
                <Divider/>
                <Row gutter={86}>
                    {/*<Title level={4}>Group ID : {User._id}</Title>*/}
                    <Col className="gutter-row" span={12}>
                        <fieldset style={{border: '1px solid #000'}}>
                            <legend>AAA</legend>
                            <div style={{background:'#ffffff',border: '5px solid red',padding:'8px 10px'}}>
                                <Divider orientation="left">Personal Info</Divider>
                                <h4>Name</h4>
                                <p>{User.name}</p>
                                <h4>Email</h4>
                                <p>{User.email}</p>
                                <h4>Contact Number</h4>
                                <p>{User.contactNumber}</p>
                                <h4>Gender</h4>
                                <p>{User.Gender}</p>
                            </div>
                        </fieldset>

                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div style={{background:'#0092ff',padding:'8px 10px'}}>
                            <Divider orientation="left">Course Details</Divider>
                            <h4>ID</h4>
                            <p>{User.UserID}</p>
                            <h4>Course Name</h4>
                            <p>{User.registeredCourse}</p>
                            <h4>Module Names</h4>
                            <p>Module 1</p>
                        </div>
                    </Col>
                </Row>
            </Fragment>
        </div>

    // <div style={{maxWidth:'700px',margin:'2rem auto'}}>

    // </div>
    )
}

export default UserDetailsPage
