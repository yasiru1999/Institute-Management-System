import React, { useState, useEffect}  from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import './NoticeSession.css'


export default function NoticeSession_Create() {

    //const {module} = useParams("");   
    const module = "IT2001";
 
    /*const [noticeList, setNoticeList] = useState({
        moduleNo:"", category:"", topic:"", description:"", otherDetails:""
    });*/
    const [noticeList, setNoticeList] = useState([]);
    const [sessionList, setSessionList] = useState([]);

   /* const [sessionList, setSessionList] = useState({
        moduleNo:"", category:"", topic:"", description:"", otherDetails:""
    });*/
    
    useEffect(() => {
        const getDetailsList = async() => {
            try {
                const NoticeResults = await axios.get(`http://localhost:5001/noticeSessions/getNotices/${module}`)
                setNoticeList(NoticeResults.data);
                const sessionResults = await axios.get(`http://localhost:5001/noticeSessions/getSessions/${module}`)
                setSessionList(sessionResults.data);
            } catch(err) {
                console.log(err);
            }
        }
        getDetailsList()
    },[]);

    return(
        <div>
            <br/><br/><br/><br/>
            <div className='groupTable'>
            <div className="container shadow py-5 ">
            <h3 className=" fw-bolder mb-4"><center>Notices in Module no: <b>{module}</b></center></h3>
                <table className="table ">
                    <thead className='table-dark'>
                        <tr  key={"1"}>
                            <th> Module No</th>
                            <th> Category </th>
                            <th> Topic </th>
                            <th> Description </th>
                            <th> Other Details </th>
                        </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                    {
                        noticeList.map((notice, id) => (
                            <tr key={id}>
                                <td>{notice.moduleNo}</td>
                                <td>{notice.category}</td>
                                <td>{notice.topic}</td>
                                <td>{notice.description}</td>
                                <td>{notice.otherDetails}</td>

                                <td>
                                    <button>View</button>
                                </td>                        
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

            </div>
            </div>





            <br/><br/><br/><br/>
            <div className='groupTable'>
            <div className="container shadow py-5 ">
            <h3 className=" fw-bolder mb-4"><center>Sessions in Module no: <b>{module}</b></center></h3>
                <table className="table ">
                    <thead className='table-dark'>
                        <tr  key={"1"}>
                            <th> Module No</th>
                            <th> Category </th>
                            <th> Topic </th>
                            <th> Description </th>
                            <th> Other Details </th>
                        </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                    {
                        sessionList.map((session, id) => (
                            <tr key={id}>
                                <td>{session.moduleNo}</td>
                                <td>{session.category}</td>
                                <td>{session.topic}</td>
                                <td>{session.description}</td>
                                <td>{session.otherDetails}</td>

                                <td>
                                    <button>View</button>
                                </td>                        
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

            </div>
            </div>



        </div>
    )

}