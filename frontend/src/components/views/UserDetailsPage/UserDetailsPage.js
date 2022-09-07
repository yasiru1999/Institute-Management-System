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
                <Row gutter={16}>
                    <Title level={4}>Group ID : {User._id}</Title>
                    <Col className="gutter-row" span={12}>
                        <Divider orientation="left">Horizontal</Divider>fffff
                        <Title level={4}>Student 1</Title>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Title level={4}>Student 2</Title>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                        <p>
                            test
                        </p>
                    </Col>
                </Row>
            </Fragment>
        </div>

    // <div style={{maxWidth:'700px',margin:'2rem auto'}}>
    //         <Fragment>
    //             <Divider/>
    //             <Row gutter={16}>
    //                 <Title level={4}>Group ID : {User._id}</Title>
    //                 <Col className="gutter-row" span={6}>
    //                     <Title level={4}>Student 1</Title>
    //                     <p>
    //                         test
    //                     </p>
    //                     <p>
    //                         test
    //                     </p>
    //                     <p>
    //                         test
    //                     </p>
    //                 </Col>
    //                 <Col className="gutter-row" span={6}>
    //                     <Title level={4}>Student 2</Title>
    //                     <p>
    //                         test
    //                     </p>
    //                     <p>
    //                         test
    //                     </p>
    //                     <p>
    //                         test
    //                     </p>
    //                 </Col>
    //                 <Col className="gutter-row" span={6}>
    //                     <Title level={4}>Student 3</Title>
    //                     <p>
    //                         test
    //                     </p>
    //                     <p>
    //                         test
    //                     </p>
    //                     <p>
    //                         test
    //                     </p>
    //                 </Col>
    //                 <Col className="gutter-row" span={6}>
    //                     <Title level={4}>Student 4</Title>
    //                     <p>
    //                         test
    //                     </p>
    //                     <p>
    //                         test
    //                     </p>
    //                     <p>
    //                         test
    //                     </p>
    //                 </Col>
    //             </Row>
    //         </Fragment>
    // </div>
    )
}

export default UserDetailsPage
