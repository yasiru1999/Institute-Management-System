import React, {useState} from "react"
import axios from "axios";
import Swal from "sweetalert2";
import{ useHistory } from "react-router";
import './Timetable.css';



export default function AddTimetable() {
    const [courseId, setCourseId] = useState("");
    const [subjectId, setSubjectId] = useState("");
    const [examType, setExamType] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [hallNumber, setHallNumber] = useState("");


    const [subjectId2, setSubjectId2] = useState("");
    const [examType2, setExamType2] = useState("");
    const [date2, setDate2] = useState("");
    const [time2, setTime2] = useState("");
    const [hallNumber2, setHallNumber2] = useState("");

    
    const [subjectId3, setSubjectId3] = useState("");
    const [examType3, setExamType3] = useState("");
    const [date3, setDate3] = useState("");
    const [time3, setTime3] = useState("");
    const [hallNumber3, setHallNumber3] = useState("");

    
    const [subjectId4, setSubjectId4] = useState("");
    const [examType4, setExamType4] = useState("");
    const [date4, setDate4] = useState("");
    const [time4, setTime4] = useState("");
    const [hallNumber4, setHallNumber4] = useState("");


    const [visibility, setVisibility] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');


    const history = useHistory();


    const changeModalVisibilityHandler = (state) => {
        setVisibility(state);
    };


    function sendData(e) {
        e.preventDefault();



        if (courseId.trim().length === 0) {
            setErrorMsg(() => {
                return 'Course Id must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (subjectId.trim().length ===  0||subjectId2.trim().length ===  0 ||subjectId3.trim().length ===  0 ||subjectId4.trim().length ===  0) {
            setErrorMsg(() => {
                return 'Subject Id must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (examType.trim().length === 0 || examType2.trim().length === 0 || examType3.trim().length === 0 || examType4.trim().length === 0) {
            setErrorMsg(() => {
                return 'Exam Type must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (date.trim().length === 0 || date2.trim().length === 0 || date3.trim().length === 0 || date4.trim().length === 0) {
            setErrorMsg(() => {
                return 'Date must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (time.trim().length === 0 || time2.trim().length === 0 || time3.trim().length === 0 || time4.trim().length === 0) {
            setErrorMsg(() => {
                return 'Time must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (hallNumber.trim().length === 0||hallNumber2.trim().length ===   0 ||hallNumber3.trim().length ===   0 ||hallNumber4.trim().length ===   0) {
            setErrorMsg(() => {
                return 'Hall Number must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        const newTimetable = {
            courseId,
            subjectId,
            subjectId2,
            subjectId3,
            subjectId4,
            examType,
            examType2,
            examType3,
            examType4,
            date,
            date2,
            date3,
            date4,
            time,
            time2,
            time3,
            time4,
            hallNumber,
            hallNumber2,
            hallNumber3,
            hallNumber4
        };

        axios.post("http://localhost:5001/timetable/add", newTimetable).then(() => {
            Swal.fire({
                title: "Added Successfully",
                icon: 'success',
            });

        }).catch((err) => {
            Swal.fire({
                title: err,
                icon: 'error',
            });
        })

    }

    const gotoAdd = ()=>{
        let path = "/";
        history.push(path);
    }


    return (
        
        <div className="container" style={{  margin: '6rem auto' }}>
            <div >
                <div className="form1"  style={{border: 'solid', width:'70%', margin: '4rem auto' }}>
                    {/* ,maxHeight: '1200px' */}
                    <h1 style={{textAlign: "center"}}>Add Timetable</h1>
                    {/* <hr className='hrLine'/> */}
                    <hr/>
                    <form  style={{ width: '100%', margin: '2rem auto'}} onSubmit={sendData} action="/post" method = "post" noValidate >

                        <div className="selectCourse">
                            <div className="form-check" style={{marginBottom: '15px'}}>
                               <b> <label for="name">Course Name</label> </b>
                               <br/>
                                <select value={courseId} onChange={(e) =>{
                                    setCourseId(e.target.value);
                                }}>
                                    <option selected>Select</option>
                                    <option>SE1000 - Software Engineering</option>
                                    <option>DS3000 - Data Science</option>
                                    <option>IT2000 - Information Technology</option>
                                </select>
                            </div>
                        </div>
                    







                    <div className="row">
                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px'}}>
                              <b>  <label for="name">Subject and name</label>  </b> <br/>
                                <select value={subjectId} onChange={(e) =>{
                                    setSubjectId(e.target.value);
                                }}>
                                    <option selected>Select</option>
                                    <option>IT2030 - Algorithms</option>
                                    <option>SE1030 - Software Architecture</option>
                                    <option>SE1040 - Database Management</option>
                                    <option>IT2040 - Artificial Intelligence</option>
                                    <option>DS3060 - Machine Learning</option>
                                    <option>DS3070 - Cloud Computing</option>
                                    <option>DS3080 - Big Data</option>
                                    <option>IT2050 - Internet of Things</option>
                                    <option>SE1050 - Software Testing</option>
                                </select>
                            </div>
                        </div>

                       

                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px'}}>
                                <b><label for="name">Exam Type</label></b><br/>
                                <select value={examType} onChange={(e) =>{
                                    setExamType(e.target.value);
                                }}>
                                    <option selected>Select</option>
                                    <option>Mid</option>
                                    <option>Final</option>
                                    <option>Assignment</option>
                                    <option>Lab</option>
                                    <option>Quiz</option>
                                </select>
                            </div>
                        </div>

                        <div className="column dateTime">
                            <div className="form-group " style={{marginBottom: '15px', width: '300px', marginLeft: '20px' }}>
                            <b> <label style={{marginBottom: '5px'}}>Date</label> </b> <br/>
                                <input type="date" className="form-control" name="date" placeholder="Enter Date" value={date} onChange={(e) => {
                                    setDate(e.target.value);
                                }}/>
                            </div>
                        </div>

                        <div className="column dateTime">
                            <div className="form-group" style={{marginBottom: '55px', width: '300px', marginLeft: '20px'}}>
                            <b>  <label style={{marginBottom: '5px'}}>Time</label> </b> <br/>
                                <input type="time" className="form-control" name="time" placeholder="Enter Time" value={time} onChange={(e) => {
                                    setTime(e.target.value);
                                }}/>
                            </div>
                        </div>    
                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px'}}>
                               <b> <label for="name">Hall Number</label>  </b> <br/>
                                <select value={hallNumber} onChange={(e) =>{
                                    setHallNumber(e.target.value);
                                }}>
                                    <option selected>Select</option>
                                    <option>Hall A3b </option>
                                    <option>Hall A4c</option>
                                    <option>Hall A5d</option>
                                    <option>Hall A6e</option>
                                </select>
                            </div>
                        </div>                    
                    </div>




{/*                         2                                                                 */}


                    <div className="row">
                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px' ,marginTop : '-150px'}}>
                              <b>  <label for="name">Subject and name</label>  </b> <br/>
                                <select value={subjectId2} onChange={(e) =>{
                                    setSubjectId2(e.target.value);
                                }}>
                                    <option selected>Select</option>
                                    <option>IT2030 - Algorithms</option>
                                    <option>SE1030 - Software Architecture</option>
                                    <option>SE1040 - Database Management</option>
                                    <option>IT2040 - Artificial Intelligence</option>
                                    <option>DS3060 - Machine Learning</option>
                                    <option>DS3070 - Cloud Computing</option>
                                    <option>DS3080 - Big Data</option>
                                    <option>IT2050 - Internet of Things</option>
                                    <option>SE1050 - Software Testing</option>
                                </select>
                            </div>
                        </div>

                        

                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px',marginTop : '-150px'}}>
                                <b><label for="name">Exam Type</label></b><br/>
                                <select value={examType2} onChange={(e) =>{
                                    setExamType2(e.target.value);
                                }}>
                                    <option selected>Select</option>
                                    <option>Mid</option>
                                    <option>Final</option>
                                    <option>Assignment</option>
                                    <option>Lab</option>
                                    <option>Quiz</option>
                                </select>
                            </div>
                        </div>

                        <div className="column dateTime">
                            <div className="form-group " style={{marginBottom: '15px', width: '300px', marginLeft: '20px' ,marginTop : '-150px'}}>
                            <b> <label style={{marginBottom: '5px'}}>Date</label> </b> <br/>
                                <input type="date" className="form-control" name="date" placeholder="Enter Date" value={date2} onChange={(e) => {
                                    setDate2(e.target.value);
                                }}/>
                            </div>
                        </div>

                        <div className="column dateTime">
                            <div className="form-group" style={{marginBottom: '55px', width: '300px', marginLeft: '20px',marginTop : '-150px'}}>
                            <b>  <label style={{marginBottom: '5px'}}>Time</label> </b> <br/>
                                <input type="time" className="form-control" name="time" placeholder="Enter Time" value={time2} onChange={(e) => {
                                    setTime2(e.target.value);
                                }}/>
                            </div>
                        </div>   
                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px',marginTop : '-150px'}}>
                               <b> <label for="name">Hall Number</label>  </b> <br/>
                                <select value={hallNumber2} onChange={(e) =>{
                                    setHallNumber2(e.target.value);
                                }}>
                                    <option selected>Select</option>
                                    <option>Hall A3b </option>
                                    <option>Hall A4c</option>
                                    <option>Hall A5d</option>
                                    <option>Hall A6e</option>
                                </select>
                            </div>
                        </div>                     
                    </div>




 



{/*                                                          3                                             */}


                    <div className="row">
                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px',marginTop : '-275px'}}>
                              <b>  <label for="name">Subject and name</label>  </b> <br/>
                                <select value={subjectId3} onChange={(e) =>{
                                    setSubjectId3(e.target.value);
                                }}>
                                    <option selected>Select</option>
                                    <option>IT2030 - Algorithms</option>
                                    <option>SE1030 - Software Architecture</option>
                                    <option>SE1040 - Database Management</option>
                                    <option>IT2040 - Artificial Intelligence</option>
                                    <option>DS3060 - Machine Learning</option>
                                    <option>DS3070 - Cloud Computing</option>
                                    <option>DS3080 - Big Data</option>
                                    <option>IT2050 - Internet of Things</option>
                                    <option>SE1050 - Software Testing</option>
                                </select>
                            </div>
                        </div>

                       

                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px',marginTop : '-275px'}}>
                                <b><label for="name">Exam Type</label></b><br/>
                                <select value={examType3} onChange={(e) =>{
                                    setExamType3(e.target.value);
                                }}>
                                    <option selected>Select</option>
                                    <option>Mid</option>
                                    <option>Final</option>
                                    <option>Assignment</option>
                                    <option>Lab</option>
                                    <option>Quiz</option>
                                </select>
                            </div>
                        </div>

                        <div className="column dateTime">
                            <div className="form-group " style={{marginBottom: '15px', width: '300px', marginLeft: '20px',marginTop : '-275px' }}>
                            <b> <label style={{marginBottom: '5px'}}>Date</label> </b> <br/>
                                <input type="date" className="form-control" name="date" placeholder="Enter Date" value={date3} onChange={(e) => {
                                    setDate3(e.target.value);
                                }}/>
                            </div>
                        </div>

                        <div className="column dateTime">
                            <div className="form-group" style={{marginBottom: '55px', width: '300px', marginLeft: '20px',marginTop : '-275px'}}>
                            <b>  <label style={{marginBottom: '5px'}}>Time</label> </b> <br/>
                                <input type="time" className="form-control" name="time" placeholder="Enter Time" value={time3} onChange={(e) => {
                                    setTime3(e.target.value);
                                }}/>
                            </div>
                        </div>    

                         <div className="column">
                            <div className="form-check" style={{marginBottom: '15px',marginTop : '-275px'}}>
                               <b> <label for="name">Hall Number</label>  </b> <br/>
                                <select value={hallNumber3} onChange={(e) =>{
                                    setHallNumber3(e.target.value);
                                }}>
                                    <option selected>Select</option>
                                    <option>Hall A3b </option>
                                    <option>Hall A4c</option>
                                    <option>Hall A5d</option>
                                    <option>Hall A6e</option>
                                </select>
                            </div>
                        </div>                    
                    </div>



{/*                                       4                                                 */}

                    <div className="row">
                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px',marginTop : '-400px'}}>
                              <b>  <label for="name">Subject and name</label>  </b> <br/>
                                <select value={subjectId4} onChange={(e) =>{
                                    setSubjectId4(e.target.value);
                                }}>
                                    <option selected>Select</option>
                                    <option>IT2030 - Algorithms</option>
                                    <option>SE1030 - Software Architecture</option>
                                    <option>SE1040 - Database Management</option>
                                    <option>IT2040 - Artificial Intelligence</option>
                                    <option>DS3060 - Machine Learning</option>
                                    <option>DS3070 - Cloud Computing</option>
                                    <option>DS3080 - Big Data</option>
                                    <option>IT2050 - Internet of Things</option>
                                    <option>SE1050 - Software Testing</option>
                                </select>
                            </div>
                        </div>

                        

                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px', marginTop : '-400px'}}>
                                <b><label for="name">Exam Type</label></b><br/>
                                <select value={examType4} onChange={(e) =>{
                                    setExamType4(e.target.value);
                                }}>
                                    <option selected>Select</option>
                                    <option>Mid</option>
                                    <option>Final</option>
                                    <option>Assignment</option>
                                    <option>Lab</option>
                                    <option>Quiz</option>
                                </select>
                            </div>
                        </div>

                        <div className="column dateTime">
                            <div className="form-group " style={{marginBottom: '15px', width: '300px', marginLeft: '20px',marginTop : '-400px' }}>
                            <b> <label style={{marginBottom: '5px'}}>Date</label> </b> <br/>
                                <input type="date" className="form-control" name="date" placeholder="Enter Date" value={date4} onChange={(e) => {
                                    setDate4(e.target.value);
                                }}/>
                            </div>
                        </div>

                        <div className="column dateTime">
                            <div className="form-group" style={{marginBottom: '55px', width: '300px', marginLeft: '20px',marginTop : '-400px'}}>
                            <b>  <label style={{marginBottom: '5px'}}>Time</label> </b> <br/>
                                <input type="time" className="form-control" name="time" placeholder="Enter Time" value={time4} onChange={(e) => {
                                    setTime4(e.target.value);
                                }}/>
                            </div>
                        </div>   
                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px',marginTop : '-400px'}}>
                               <b> <label for="name">Hall Number</label>  </b> <br/>
                                <select value={hallNumber4} onChange={(e) =>{
                                    setHallNumber4(e.target.value);
                                }}>
                                    <option selected>Select</option>
                                    <option>Hall A3b </option>
                                    <option>Hall A4c</option>
                                    <option>Hall A5d</option>
                                    <option>Hall A6e</option>
                                </select>
                            </div>
                        </div>                     
                    </div>


                        {/* <div className='btS'style={{width: '10px',marginTop : '-700px'}}> */}
                            <button className="buttonSubmit" type="submit" onClick={(e)=>sendData(e)} style={{marginLeft: '250px',width:'20%', backgroundColor:'#4682b4', marginTop : '-800px'}}>
                                {/* <i className="far fa-check-square"></i> */}
                                &nbsp; Save
                            </button>
                        

                       
                            <button className="buttonDelete" style={{  marginTop : '-500px',marginLeft: '200px',width:'20%'}} type="reset" >Clear </button>
                        
                       

                    </form>
                </div>

            </div>

            <div>

            </div>

        </div>
    )
}




