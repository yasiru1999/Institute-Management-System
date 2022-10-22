import React, { useState}  from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './NoticeSession.css'
import HeaderBar from '../LecMaterials/HeaderBar';


export default function NoticeSession_Create() {

    const {id} = useParams("");

    const [noticeSession, setNoticeSession] = useState({
        moduleNo:id, category:"", topic:"", description:"", otherDetails:"" 
    });

    const resetForm = () => {
        setNoticeSession({ moduleNo:id, category:"", topic:"", description:"", otherDetails:"" });
    }

    function sendData(e){
        e.preventDefault();
        axios.post("http://localhost:5001/noticeSessions/create", noticeSession).then(() => {
            alert("Successfully Created");
            resetForm();
        }).catch((err) => {
            alert(err)
        });
    }

    const onChange = e => {
        setNoticeSession({ ...noticeSession, [e.target.name]: e.target.value });
    }

    return(
        <div>
             <div><HeaderBar/></div>

            <div className="btn-group">        
                <a  href={`/allViewNS/${id}`}><button className="button">View Notice/Sessions</button></a>
                <button className="button1">Student View</button>
            </div>

            <br/> <br/> <br/> <br/>

            <div className='formStyle'>
            <center><h2>Notice/Session Creation</h2></center>
            <div className="form1">
            
            <form onSubmit={sendData} action="/post" method="post">

            <input type="text" className="form-control" id="name" name='moduleNo'
                value={noticeSession.moduleNo}
                onChange={onChange} required disabled></input>
			
				<b><label htmlFor="name">Select Category</label></b>
				<select name='category' value={noticeSession.category}
                onChange={onChange} required>
				  <option value="">None</option>
                  <option value="Notice">Notice</option>
                  <option value="Session">Session</option> 
				</select>
				
				<b><label for="name">Enter Topic</label></b>
                <input type="text" className="form-control" id="name" placeholder="Topic.." name='topic'
                value={noticeSession.topic}
                onChange={onChange} required></input> 
				
				<b><label for="name">Enter Content</label><br/></b>
                <input type="text" className="form-control" id="name" placeholder="Content.." name='description'
                value={noticeSession.description}                        
                 onChange={onChange} required></input> 
				 
				<b><label for="name">Enter Other Details</label><br/></b>
                <input type="text" className="form-control" id="name" placeholder="Other details.." name='otherDetails'
                value={noticeSession.otherDetails}                           
                  onChange={onChange} required></input> 

                <div className='btS'>	
				<button className='buttonSubmit' type="submit">Publish</button>
				</div>
			</form>
		</div>
        </div>

    </div>


    )
}