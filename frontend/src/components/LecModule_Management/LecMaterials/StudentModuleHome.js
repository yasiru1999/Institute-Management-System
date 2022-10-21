import React, { useState, useEffect}  from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import download from 'downloadjs'

export default function StudentModuleHome() {
 
    const {id} = useParams("");

    const history = useHistory();
    const [noticeList, setNoticeList] = useState([]);
    const [sessionList, setSessionList] = useState([]);
    const [lecFileList, setLecFileList] = useState([]);

    useEffect(() => {
        const getDetailsList = async() => {
            try {
                const NoticeResults = await axios.get(`http://localhost:5001/noticeSessions/getNotices/${id}`)
                setNoticeList(NoticeResults.data);
                const sessionResults = await axios.get(`http://localhost:5001/noticeSessions/getSessions/${id}`)
                setSessionList(sessionResults.data);
                const lecMatResults = await axios.get(`http://localhost:5001/lecMaterial/getLectures/${id}`)
                setLecFileList(lecMatResults.data);
            } catch(err) {
                console.log(err);
            }
        }
        getDetailsList()
    },[]);

    const downloadFile = async(file) => {
        console.log(file);
        await axios.get(`http://localhost:5001/lecFiles/`+file)
            .then(response => {
    
                console.log(response);
                return download(response.data, `${file}.pdf`, "image/pdf");
            }).catch(error => {
                console.log(error);
            })
    }
  
    return(
        <div>

            <div><HeaderBar/></div>

            <div className="btn-group">               
                <a  href={`/addAtte/${id}`}><button className="button">Submit Attendance</button></a>
            </div>
            <br/> <br/> <br/> <br/>
            <div class="row">
                <div class="column1" >
                    <div>
                        <u><b><h3>Lecture Sessions</h3></b><br/></u>
                        <div>
                            {
                            sessionList.map((session, id) => (
                                <div key={id} class="card">
                                    <div class="container">
                                        <h4>{session.topic}</h4>
                                        <p>{session.description}</p>
                                        <p>Session link : <p className='linksColor'>{session.otherDetails}</p></p>
                                    </div>
                                </div>  
                            ))}
                        </div>
                    </div>

                    <br/> <br/>
                    <div>
                        <u><b><h3>Lecture Materials</h3></b><br/></u>
                        <div>
                            {
                            lecFileList.map((material, id) => (
                                <div key={id} className="card">
                                    <div className="container">
                                        <h4>{material.title}</h4>

                                        <p >File download here..<p onClick={() => downloadFile(material.lecFile)} className='file linksColor1' >{material.lecFile}</p></p>
                                        <p>Video link : <p className='linksColor'>{material.link}</p></p>
                                    </div>
                                </div>  
                            ))}
                        </div>
                    </div>
                </div>

                <div class="column2" >
                    <div class="vl"></div>
                </div>

                <div class="column3" >
                    <u><b><h3>Notices</h3></b><br/></u>
                    <div>
                        {
                        noticeList.map((notice, id) => (
                            <div key={id} class="card2">
                                <div class="container">
                                    <h3 className='noticeTopic'>{notice.topic}</h3>
                                    <p>{notice.description}</p>
                                    <p>{notice.otherDetails}</p>
                                </div>
                            </div>  
                        ))}
                    </div>
                </div>
            </div>

            <br/> <br/> <br/> <br/><br/> 
            

            
        </div>
    )

}