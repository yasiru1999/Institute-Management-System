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

        if (subjectId.trim().length === 0) {
            setErrorMsg(() => {
                return 'Subject Id must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (examType.trim().length === 0) {
            setErrorMsg(() => {
                return 'Exam Type must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (date.trim().length === 0) {
            setErrorMsg(() => {
                return 'Date must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (time.trim().length === 0) {
            setErrorMsg(() => {
                return 'Time must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (hallNumber.trim().length === 0) {
            setErrorMsg(() => {
                return 'Hall Number must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        const newTimetable = {
            courseId,
            subjectId,
            examType,
            date,
            time,
            hallNumber,
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
                <div className="form1"  style={{border: 'solid', width:'80%',  margin: '4rem auto'}}>
                    <h1 style={{textAlign: "center"}}>Add Timetable</h1>
                    {/* <hr className='hrLine'/> */}
                    <hr/>
                    <form  style={{ width: '100%', margin: '2rem auto'}} onSubmit={sendData} action="/post" method = "post" noValidate >

                        <div className="selectCourse">
                            <div className="form-check" style={{marginBottom: '15px'}}>
                               <b> <label for="name">Course Name</label> </b>
                               <br/>
                                <select onChange={(e) =>{
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
                                <select onChange={(e) =>{
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
                               <b> <label for="name">Hall Number</label>  </b> <br/>
                                <select onChange={(e) =>{
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

                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px'}}>
                                <b><label for="name">Exam Type</label></b><br/>
                                <select onChange={(e) =>{
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
                    </div>







                    <div className="row">
                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px'}}>
                              <b>  <label for="name">Subject and name</label>  </b> <br/>
                                <select onChange={(e) =>{
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
                               <b> <label for="name">Hall Number</label>  </b> <br/>
                                <select onChange={(e) =>{
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

                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px'}}>
                                <b><label for="name">Exam Type</label></b><br/>
                                <select onChange={(e) =>{
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
                    </div>





                    <div className="row">
                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px'}}>
                              <b>  <label for="name">Subject and name</label>  </b> <br/>
                                <select onChange={(e) =>{
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
                               <b> <label for="name">Hall Number</label>  </b> <br/>
                                <select onChange={(e) =>{
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

                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px'}}>
                                <b><label for="name">Exam Type</label></b><br/>
                                <select onChange={(e) =>{
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
                    </div>







                    <div className="row">
                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px'}}>
                              <b>  <label for="name">Subject and name</label>  </b> <br/>
                                <select onChange={(e) =>{
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
                               <b> <label for="name">Hall Number</label>  </b> <br/>
                                <select onChange={(e) =>{
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

                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px'}}>
                                <b><label for="name">Exam Type</label></b><br/>
                                <select onChange={(e) =>{
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
                    </div>





                    <div className="row">
                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px'}}>
                              <b>  <label for="name">Subject and name</label>  </b> <br/>
                                <select onChange={(e) =>{
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
                               <b> <label for="name">Hall Number</label>  </b> <br/>
                                <select onChange={(e) =>{
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

                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px'}}>
                                <b><label for="name">Exam Type</label></b><br/>
                                <select onChange={(e) =>{
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
                    </div>




                        <div className='btS'>
                            <button className="buttonSubmit" type="submit" onClick={(e)=>sendData(e)}>
                                {/* <i className="far fa-check-square"></i> */}
                                &nbsp; Save
                            </button>
                        </div>

                        <div className='btS'>
                            <button className="buttonDelete" type="reset">Clear </button>
                        </div>
                       

                    </form>
                </div>

            </div>

            <div>

            </div>

        </div>
    )
}








// import React, {useState} from "react"
// import axios from "axios";
// import Swal from "sweetalert2";
// import{ useHistory } from "react-router";



// export default function AddTimetable() {
//     const [courseId, setCourseId] = useState("");
//     const [subjectId, setSubjectId] = useState("");
//     const [examType, setExamType] = useState("");
//     const [date, setDate] = useState("");
//     const [time, setTime] = useState("");
//     const [hallNumber, setHallNumber] = useState("");


//     const [visibility, setVisibility] = useState(false);
//     const [errorMsg, setErrorMsg] = useState('');


//     const history = useHistory();


//     const changeModalVisibilityHandler = (state) => {
//         setVisibility(state);
//     };


//     function sendData(e) {
//         e.preventDefault();



//         if (courseId.trim().length === 0) {
//             setErrorMsg(() => {
//                 return 'Course Id must be a Filled.'
//             })
//             changeModalVisibilityHandler(true)
//             return;
//         }

//         if (subjectId.trim().length === 0) {
//             setErrorMsg(() => {
//                 return 'Subject Id must be a Filled.'
//             })
//             changeModalVisibilityHandler(true)
//             return;
//         }

//         if (examType.trim().length === 0) {
//             setErrorMsg(() => {
//                 return 'Exam Type must be a Filled.'
//             })
//             changeModalVisibilityHandler(true)
//             return;
//         }

//         if (date.trim().length === 0) {
//             setErrorMsg(() => {
//                 return 'Date must be a Filled.'
//             })
//             changeModalVisibilityHandler(true)
//             return;
//         }

//         if (time.trim().length === 0) {
//             setErrorMsg(() => {
//                 return 'Time must be a Filled.'
//             })
//             changeModalVisibilityHandler(true)
//             return;
//         }

//         if (hallNumber.trim().length === 0) {
//             setErrorMsg(() => {
//                 return 'Hall Number must be a Filled.'
//             })
//             changeModalVisibilityHandler(true)
//             return;
//         }

//         const newTimetable = {
//             courseId,
//             subjectId,
//             examType,
//             date,
//             time,
//             hallNumber,
//         };

//         axios.post("http://localhost:5001/timetable/add", newTimetable).then(() => {
//             Swal.fire({
//                 title: "Added Successfully",
//                 icon: 'success',
//             });

//         }).catch((err) => {
//             Swal.fire({
//                 title: err,
//                 icon: 'error',
//             });
//         })

//     }

//     const gotoAdd = ()=>{
//         let path = "/";
//         history.push(path);
//     }


//     return (

//         <div className="container">
//             <div className="row">
//                 <div className="col-md-50 mt-4 mx-auto">
//                     <h1 className="h3 mb-3 font-weight-normal">Add Timetable</h1>

//                     <form className="needs-validation" onSubmit={sendData} action="/post" method = "post" noValidate >

//                         <div>
//                             <div className="form-check" style={{marginBottom: '15px'}}>
//                                 <label for="name">Course Name</label><br/>
//                                 <select onChange={(e) =>{
//                                     setCourseId(e.target.value);
//                                 }}>
//                                     <option selected>Select</option>
//                                     <option>SE1000 - Software Engineering</option>
//                                     <option>DS3000 - Data Science</option>
//                                     <option>IT2000 - Information Technology</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <div>
//                             <div className="form-check" style={{marginBottom: '15px'}}>
//                                 <label for="name">Subject ID and Name</label><br/>
//                                 <select onChange={(e) =>{
//                                     setSubjectId(e.target.value);
//                                 }}>
//                                     <option selected>Select</option>
//                                     <option>IT2030 - Algorithms</option>
//                                     <option>SE1030 - Software Architecture</option>
//                                     <option>SE1040 - Database Management</option>
//                                     <option>IT2040 - Artificial Intelligence</option>
//                                     <option>DS3060 - Machine Learning</option>
//                                     <option>DS3070 - Cloud Computing</option>
//                                     <option>DS3080 - Big Data</option>
//                                     <option>IT2050 - Internet of Things</option>
//                                     <option>SE1050 - Software Testing</option>


//                                 </select>
//                             </div>
//                         </div>


//                         <div>
//                             <div className="form-check" style={{marginBottom: '15px'}}>
//                                 <label for="name">Exam Type</label><br/>
//                                 <select onChange={(e) =>{
//                                     setExamType(e.target.value);
//                                 }}>
//                                     <option selected>Select</option>
//                                     <option>Mid</option>
//                                     <option>Final</option>
//                                     <option>Assignment</option>
//                                     <option>Lab</option>
//                                     <option>Quiz</option>
//                                 </select>
//                             </div>
//                         </div>


//                         <div className="form-group" style={{marginBottom: '15px', width: '300px', marginLeft: '20px' }}>
//                             <label style={{marginBottom: '5px'}}>Date</label>
//                             <input type="date" className="form-control" name="date" placeholder="Enter Date" value={date} onChange={(e) => {
//                                 setDate(e.target.value);
//                             }}/>
//                         </div>

//                         <div className="form-group" style={{marginBottom: '15px', width: '300px', marginLeft: '20px'}}>
//                             <label style={{marginBottom: '5px'}}>Time</label>
//                             <input type="time" className="form-control" name="time" placeholder="Enter Time" value={time} onChange={(e) => {
//                                 setTime(e.target.value);
//                             }}/>
//                         </div>



//                         <div>
//                             <div className="form-check" style={{marginBottom: '15px'}}>
//                                 <label for="name">Hall Number</label><br/>
//                                 <select onChange={(e) =>{
//                                     setHallNumber(e.target.value);
//                                 }}>
//                                     <option selected>Select</option>
//                                     <option>Hall A3b </option>
//                                     <option>Hall A4c</option>
//                                     <option>Hall A5d</option>
//                                     <option>Hall A6e</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <button className="btn btn-success" type="submit" style={{marginTop: '15px'}} onClick={(e)=>sendData(e)}>
//                             <i className="far fa-check-square"></i>
//                             &nbsp; Save
//                         </button>


//                         <button className="btn btn-danger" type="reset" style={{marginTop: '15px', marginLeft: '120px'}}> Clear  </button>


//                     </form>
//                 </div>

//             </div>

//             <div>

//             </div>

//         </div>
//     )
// }
