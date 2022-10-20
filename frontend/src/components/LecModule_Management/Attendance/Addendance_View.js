import React, { useState, useEffect}  from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
//import './NoticeSession.css'
import HeaderBar from '../LecMaterials/HeaderBar';
import GenerateAttendancePdf from './Attendance_Repo';
import './Attendance.css'

export default function Attendance_View() {

    const {id} = useParams("");
    const stuName = localStorage.getItem('name');

    const [attendanceList, SetattendanceList] = useState([]);
    const [curDate, setcurDate] = useState();

    useEffect(() => {
        const getDetailsList = async() => {
            try {
                const AttResults = await axios.get(`http://localhost:5001/attendance/getAttendance/${id}`)
                SetattendanceList(AttResults.data);
            } catch(err) {
                console.log(err);
            }
        }
        getDetailsList()
    },[]);

    function SearchAttendance() {
        axios.get(`http://localhost:5001/attendance/filterAttendance/${id}?curDate=${curDate}`)
            .then(res => {
                console.log(res.data)
                SetattendanceList(res.data)
            }).catch(err => console.error(err))
    }

    
    return(
        <div>
            <div><HeaderBar/></div>

            <div className="btn-group">
                <a  href={`/homeLecMat/${id}`}><button className="button">Module Home</button></a>
                <button className="button1">Student View</button>
            </div>

            <br/> <br/> <br/> <br/>

            <div className='viewTags'>
                <u><b><h3 className=" fw-bolder mb-4">Student Attendance</h3></b></u>
            </div>
            <br/> <br/>
           <div>
                <form className="">
                    <div className='searchInput'>
                        <input className="" type="date" aria-label="Search" name="curDate"
                            value={curDate} onChange={e => setcurDate(e.target.value)}/>             
                        <button className="" onClick={() => { SearchAttendance(curDate) }}>Search</button>
                    </div>
                </form>
            </div>
            <br/>

           

            <div className='tablePadding'>
                <table className="table ">
                    <thead className='tableHeader'>
                    <tr  key={"1"}>
                        <th> Date </th>
                        <th> student Name </th>
                        <th> Session </th>
                        <th> Feedback </th>
                    </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                    {
                        attendanceList.map((atten, id) => (
                            <tr key={id}>
                                <td>{atten.curDate}</td>
                                <td>{atten.studentName}</td>
                                <td>{atten.session}</td>
                                <td>{atten.feedback}</td>    
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div> 

            <br/> <br/>

            <div className='btn-grodiv'>
                <div className="btn-gro">
                    <button className="button2" onClick={() => GenerateAttendancePdf(attendanceList,id)}>Download Report</button>
                    <button className="button3"> Clear </button>
                </div>
            </div>
            
    </div>


    )
}