import React, { useState}  from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
//import './NoticeSession.css'
import HeaderBar from '../LecMaterials/HeaderBar';

export default function Attendance_Create() {

    const {id} = useParams("");
    const stuName = localStorage.getItem('name');

    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    const fullDate = year +"-" + month +"-" + date;

    const [attendance, setAttendance] = useState({
        curDate:fullDate, studentName:stuName, moduleName:id, session:"", feedback:"None" 
    });

    const resetForm = () => {
        setAttendance({ curDate:fullDate, studentName:stuName, moduleName:id, session:"", feedback:"None" });
    }

    function sendData(e){
        e.preventDefault();
        axios.post("http://localhost:5001/attendance/create", attendance).then(() => {
            alert("Successfully Submitted");
            resetForm();
        }).catch((err) => {
            alert(err)
        });
    }

    const onChange = e => {
        setAttendance({ ...attendance, [e.target.name]: e.target.value });
    }

    
    return(
        <div>
             <div><HeaderBar/></div>

            <div className="btn-group">        
                <a  href={`/stuHome/${id}`}><button className="button">Module Home</button></a>
            </div>

            <br/> <br/> <br/> <br/>

            <div className='formStyle'>
            <center><h2>Student attendance Form</h2></center>
            <div className="form1">
            
            <form onSubmit={sendData} action="/post" method="post">
                <input type="text" className="form-control" id="name" name='curDate'
                value={attendance.curDate}
                onChange={onChange} required disabled></input>

                <b><label htmlFor="name">Student Name*</label></b>
                <input type="text" className="form-control" id="name" name='studentName'
                value={attendance.studentName}
                onChange={onChange} required disabled></input>

                <b><label htmlFor="name">Subject*</label></b>
                <input type="text" className="form-control" id="name" name='moduleName'
                value={attendance.moduleName}
                onChange={onChange} required disabled></input>
			
				<b><label htmlFor="name">Select Session*</label></b>
				<select name='session' value={attendance.session}
                onChange={onChange} required>
                    <option value="">None</option>
                    <option value="Session One">Session One</option>
                    <option value="Session Two">Session Two</option>
				</select>
				
				<b><label htmlFor="name">Feedback</label></b>
                <input type="text" className="form-control" id="name" placeholder="Your feedback.." name='feedback'
                value={attendance.feedback}
                onChange={onChange}></input> 

                <div className='btS'>	
				<button className='buttonSubmit' type="submit">Submit</button>
				</div>
			</form>
		</div>
        </div>

    </div>


    )
}