import React, {useState} from "react"
import axios from "axios";
// import Swal from "sweetalert2";
// import swal from 'sweetalert';
//  import{ useHistory } from "react-router";


export default function AddTimetable() {
    const [courseId, setCourseId] = useState("");
    const [subjectId, setSubjectId] = useState("");
    const [examType, setExamType] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [hallNumber, setProductHallNumber] = useState("");
   

    const [visibility, setVisibility] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    // const history = useHistory();

    const changeModalVisibilityHandler = (state) => {
        setVisibility(state);
    };


    function sendData(e) {
        e.preventDefault();

        const newTimetable = {  
            courseId,
            subjectId,
            examType,
            date,
            time,
            hallNumber,
        };

        axios.post("http://localhost:5001/timetable/add", newTimetable).then(() => {
        }).catch((err) => {
            setErrorMsg(err.response.data.error);
            changeModalVisibilityHandler(true);
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">Add Timetable</h1>
                    <form className="needs-validation" noValidate>
                        <div className="form-group" style={{marginBottom: '15px'}}>
                            <label style={{marginBottom: '5px'}}>Course ID</label>
                            <input type="text" className="form-control" name="courseId" placeholder="Enter Course ID" value={courseId} onChange={(e) => {
                                setCourseId(e.target.value);
                            }}/>
                        </div>

                        <div className="form-group" style={{marginBottom: '15px'}}>
                            <label style={{marginBottom: '5px'}}>Subject ID</label>
                            <input type="text" className="form-control" name="subjectId" placeholder="Enter Subject ID" value={subjectId} onChange={(e) => {
                                setSubjectId(e.target.value);
                            }}/>
                        </div>

                        <div className="form-group" style={{marginBottom: '15px'}}>
                            <label style={{marginBottom: '5px'}}>Exam Type</label>
                            <input type="text" className="form-control" name="examType" placeholder="Enter Exam Type" value={examType} onChange={(e) => {
                                setExamType(e.target.value);
                            }}/>
                        </div>

                        <div className="form-group" style={{marginBottom: '15px'}}>
                            <label style={{marginBottom: '5px'}}>Date</label>
                            <input type="date" className="form-control" name="date" placeholder="Enter Date" value={date} onChange={(e) => {
                                setDate(e.target.value);
                            }}/>
                        </div>

                        <div className="form-group" style={{marginBottom: '15px'}}>
                            <label style={{marginBottom: '5px'}}>Time</label>
                            <input type="time" className="form-control" name="time" placeholder="Enter Time" value={time} onChange={(e) => {
                                setTime(e.target.value);
                            }}/>
                        </div>
                            
                        <div className="form-group" style={{marginBottom: '15px'}}>
                            <label style={{marginBottom: '5px'}}>Hall Number</label>
                            <input type="text" className="form-control" name="hallNumber" placeholder="Enter Hall Number" value={hallNumber} onChange={(e) => {
                                setProductHallNumber(e.target.value);
                            }}/>
                        </div>

                        <button className="btn btn-success" type="submit" style={{marginTop: '15px'}} onClick={sendData}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Save
                        </button>
                    </form>
                </div>
            </div>
    
        </div>
    )
}


