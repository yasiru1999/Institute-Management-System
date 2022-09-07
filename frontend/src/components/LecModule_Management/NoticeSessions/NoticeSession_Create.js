import React, { useState, useEffect}  from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import './NoticeSession.css'


export default function NoticeSession_Create() {

    //const {module} = useParams("");   
    const module = "IT2001";
    //const [moduleNos] = useState(module);  
    //const [moduleNos, setModule] = useState("IT2001");  
 
    const [category, setCategory] = useState("");
    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");
    const [otherDetails, setOtherDetails] = useState("");

    const resetForm = () => {
        setCategory({ category: ""});
        setTopic({topic: ""});
        setDescription({ description: ""});
        setOtherDetails({ otherDetails: ""});
    }


    function sendData(e){
        e.preventDefault();
        const newNoticeSession = {
            category, topic, description, otherDetails
        }
        axios.post("http://localhost:5001/noticeSessions/create", newNoticeSession).then(() => {
            alert("Successfully Created");
            resetForm();
        }).catch((err) => {
            alert(err)
        });
    }

    return(
        <div>
            <br/> <br/> <br/> <br/>
            <div class="btn-group">          
                <button class="button">View Notice/Sessions</button>
                <button class="button"><a  href={`/allView/IT2005`}>View Notice/Sessions</a></button>
                <button class="button1">Student View</button>
            </div>
            <div className='form1'>
            <div className="container shadow my-5 col-md-9 p-6 align-items-center">
                <div className=" d-flex flex-column align-items-center text-dark justify-content-center" >   
                <br/> <br/> <br/> <br/><br/> 
                    <h3> Module/Session Creation</h3>
                </div>
                    <form onSubmit={sendData} action="/post" method="post">
                        <div className="form-check">
                        <label for="name">Module No: <b>{module}</b></label>
                        </div>

                        <div className="form-check">
                            <label for="name">Select Category</label><br/>
                            <select onChange={(e) =>{
                                setCategory(e.target.value);
                            }}>
                                <option>None</option>
                                <option>Notice</option>
                                <option>Session</option>    
                            </select> 
                        </div>

                        <div className="form-check">
                            <label for="name">Enter Topic</label><br/>
                            <input type="text" className="form-control" id="name"                           
                            onChange={(e) =>{
                                setTopic(e.target.value);
                            }}></input> 
                        </div>

                        <div className="form-check">
                            <label for="name">Enter Content</label><br/>
                            <input type="text" className="form-control" id="name"                           
                            onChange={(e) =>{
                                setDescription(e.target.value);
                            }}></input> 
                        </div>

                        <div className="form-check">
                            <label for="name">Enter Other Details</label><br/>
                            <input type="text" className="form-control" id="name"                          
                            onChange={(e) =>{
                                setOtherDetails(e.target.value);
                            }}></input> 
                        </div>
                        <br/>
                        <button type="submit" class="btn btn-success w-100 rounded-pill">Publish</button>                  
                    </form>
            </div>
            </div>
        </div>


    )

}