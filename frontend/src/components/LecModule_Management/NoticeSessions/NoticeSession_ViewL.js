import React, { useState, useEffect}  from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import './NoticeSession.css'
import { Link } from 'react-router-dom';
import HeaderBar from '../LecMaterials/HeaderBar';


export default function NoticeSession_ViewL() {

    const {id} = useParams("");
    const history = useHistory();
    const [noticeList, setNoticeList] = useState([]);
    const [sessionList, setSessionList] = useState([]);

    const [userRouter, setUserRouter] = useState([]);

    useEffect(() => {
        const getDetailsList = async() => {
            try {
                const NoticeResults = await axios.get(`http://localhost:5001/noticeSessions/getNotices/${id}`)
                setNoticeList(NoticeResults.data);
                const sessionResults = await axios.get(`http://localhost:5001/noticeSessions/getSessions/${id}`)
                setSessionList(sessionResults.data);
            } catch(err) {
                console.log(err);
            }
        }
        getDetailsList()
    },[]);

    const deleteDetail = async (ids) => {
        try {
            const res = await axios.delete(`http://localhost:5001/noticeSessions/delete/${ids}`)
            alert("Successfully Deteted");
        } catch (err) {
            alert("Failed to delete");
            console.log(err);
        }
    }

    return(
        <div>

            <div><HeaderBar/></div>

            <div className="btn-group">
                <a  href={`/createNS/${id}`}><button className="button">Create Notice/Sessions</button></a>
                <button className="button1">Student View</button>
            </div>

            <br/> <br/> <br/> <br/>

            <div className='viewTags'>
                <u><b><h3 className=" fw-bolder mb-4">Notices</h3></b></u>
            </div>

            <div className='tablePadding'>
                <table className="table ">
                    <thead className='tableHeader'>
                    <tr  key={"1"}>
                        <th> Topic </th>
                        <th> Description </th>
                        <th> Other Details </th>
                        <th> Actions </th>
                    </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                    {
                        noticeList.map((notice, id) => (
                            <tr key={id}>
                                <td>{notice.topic}</td>
                                <td>{notice.description}</td>
                                <td>{notice.otherDetails}</td>

                                <td>
                                    <Link to={`/updateNS/${notice._id}`}><button className='buttonUpdate'>Update</button></Link>
                                    <Link onClick={() => {deleteDetail(notice._id);  window.location.reload()}}><button className='buttonDelete'>Delete</button></Link>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>

            <br/><br/><br/><br/>

            <div className='viewTags'>
                <u><b><h3 className=" fw-bolder mb-4">Sessions</h3></b></u>
            </div>

            <div className='tablePadding'>
                <table className="table ">
                    <thead className='tableHeader'>
                    <tr  key={"1"}>
                        <th> Topic </th>
                        <th> Description </th>
                        <th> Other Details </th>
                        <th> Actions </th>
                    </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                    {
                        sessionList.map((session, id) => (
                            <tr key={id}>
                                <td>{session.topic}</td>
                                <td>{session.description}</td>
                                <td>{session.otherDetails}</td>

                                <td>
                                    <Link to={`/updateNS/${session._id}`}><button className='buttonUpdate'>Update</button></Link>
                                    <Link onClick={() => {deleteDetail(session._id);  window.location.reload()}}><button className='buttonDelete'>Delete</button></Link>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>





        </div>
    )

}
