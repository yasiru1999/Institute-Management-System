import React, {useState} from "react"
import axios from "axios";
// import Swal from "sweetalert2";
// import swal from 'sweetalert';
//  import{ useHistory } from "react-router";import FormGroup from '@mui/material/FormGroup';




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
  <div className="form-check">
                            <label for="name">Select Category</label><br/>
                            <select onChange={(e) =>{
                                setCourseId(e.target.value);
                            }}>
                                <option>None</option>
                                <option>Notice</option>
                                <option>Session</option>    
                            </select> 
                        </div>
  
  
</div>
 

    )
}


