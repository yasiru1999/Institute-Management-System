import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import moment from "moment";


export default function EditTimetable(props) {
    const editDetails = props.location.state;

    const [proData, setData] = useState({});

    const onInputChange = e => {
        setData({ ...proData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setData({
            courseId: editDetails.courseId,
            subjectId: editDetails.subjectId,
            subjectId2: editDetails.subjectId2,
            subjectId3: editDetails.subjectId3,
            subjectId4: editDetails.subjectId4,
            examType: editDetails.examType,
            examType2: editDetails.examType2,
            examType3: editDetails.examType3,
            examType4: editDetails.examType4,
            date: moment(editDetails.date).format('YYYY-MM-DD'),
            date2: moment(editDetails.date2).format('YYYY-MM-DD'),
            date3: moment(editDetails.date3).format('YYYY-MM-DD'),
            date4: moment(editDetails.date4).format('YYYY-MM-DD'),
            time: editDetails.time,
            time2: editDetails.time2,
            time3: editDetails.time3,
            time4: editDetails.time4,
            hallNumber: editDetails.hallNumber,
            hallNumber2: editDetails.hallNumber2,
            hallNumber3: editDetails.hallNumber3,
            hallNumber4: editDetails.hallNumber4
        })

    }, [editDetails])

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:5001/timetable/update/${props.match.params.id}`, proData);
        Swal.fire({
            title: "Updated Successfully",
            icon: 'success',
        });
        props.history.push("/all");
    };




    return (
        <div className="container" style={{ margin: '6rem auto' }}>
            <div className="row">
            <div className="form1"  style={{border: 'solid', width:'80%', margin: '4rem auto'}}>
                    <h1 style={{textAlign: "center"}}>Update Timetable</h1>
                    {/* <hr className='hrLine' /> */}
                    <hr/>
                    <form onSubmit={e => onSubmit(e)}>
                        <div>
                            <div className="form-check" style={{width:'40%',  marginBottom: '15px' }}>
                                <b> <label for="name">Course Name</label> </b>
                                <br />
                                <select
                                    value={proData.courseId}
                                    name="courseId"
                                    onChange={onInputChange}  >
                                    <option>SE1000 - Software Engineering</option>
                                    <option>DS3000 - Data Science</option>
                                    <option>IT2000 - Information Technology</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                        <div className="column">
                            <div className="form-check" style={{ marginBottom: '15px' }}>
                                <b><label for="name">Subject ID and Name</label> </b><br />
                                <select
                                    value={proData.subjectId}
                                    name="subjectId"
                                    onChange={onInputChange}>
                                    <option>IT2030 - Algorithms</option>
                                        <option>IT2040 - Artificial Intelligence</option>
                                        <option>IT2050 - Internet of Things</option>
                                        <option>IT2060 - Engineering Mechanics</option>
                                        <option>SE1030 - Software Architecture</option>
                                        <option>SE1040 - Database Management</option>
                                        <option>SE1050 - Software Testing</option>
                                        <option>SE1060 - Software Project Management</option>
                                        <option>DS3060 - Machine Learning</option>
                                        <option>DS3070 - Cloud Computing</option>
                                        <option>DS3080 - Big Data</option>
                                        <option>DS3090 - Data Analytics</option>
                                </select>
                            </div>
                        </div>


                        <div className="column">
                            <div className="form-check" style={{ marginBottom: '15px' }}>
                                <b>  <label for="examType">Exam Type</label> </b> <br />
                                <select
                                    value={proData.examType}
                                    name="examType"
                                    onChange={onInputChange}>
                                    <option>Mid</option>
                                    <option>Final</option>
                                    <option>Assignment</option>
                                    <option>Lab</option>
                                    <option>Quiz</option>
                                </select>
                            </div>
                        </div>

                        <div className="column">
                        <div className="form-group" style={{ marginBottom: '15px', width: '300px', marginLeft: '20px' }}>
                            <b> <label style={{ marginBottom: '5px' }}>Date</label> </b> <br />
                            <input type="date" className="form-control" name="date" placeholder="Enter Date" value={proData.date} onChange={onInputChange} />
                        </div>
                        </div>

                        <div className="column">
                        <div className="form-group" style={{ marginBottom: '15px', width: '300px', marginLeft: '20px' }}>
                            <b><label style={{ marginBottom: '5px' }}>Time</label></b> <br />
                            <input type="time" className="form-control" name="time" placeholder="Enter Time" value={proData.time} onChange={onInputChange} />
                        </div>
                        </div>
                        


                        <div className="column">
                            <div className="form-check" style={{ marginBottom: '15px' }}>
                                <b> <label for="hallNumber">Hall Number</label></b><br />
                                <select
                                    value={proData.hallNumber}
                                    name="hallNumber"
                                    onChange={onInputChange}>
                                    <option>Hall A3b </option>
                                    <option>Hall A4c</option>
                                    <option>Hall A5d</option>
                                    <option>Hall A6e</option>
                                </select>
                            </div>
                        </div>
                        </div>










                        <div className="row"  >
                        <div className="column">
                            <div className="form-check" style={{ marginBottom: '15px',marginTop : '-150px'  }}>
                                <b><label for="subjectId2">Subject ID and Name</label> </b><br />
                                <select
                                    value={proData.subjectId2}
                                    name="subjectId2"
                                    onChange={onInputChange}>
                                    <option>IT2030 - Algorithms</option>
                                        <option>IT2040 - Artificial Intelligence</option>
                                        <option>IT2050 - Internet of Things</option>
                                        <option>IT2060 - Engineering Mechanics</option>
                                        <option>SE1030 - Software Architecture</option>
                                        <option>SE1040 - Database Management</option>
                                        <option>SE1050 - Software Testing</option>
                                        <option>SE1060 - Software Project Management</option>
                                        <option>DS3060 - Machine Learning</option>
                                        <option>DS3070 - Cloud Computing</option>
                                        <option>DS3080 - Big Data</option>
                                        <option>DS3090 - Data Analytics</option>
                                </select>
                            </div>
                        </div>


                        <div className="column">
                            <div className="form-check" style={{ marginBottom: '15px',marginTop : '-150px'  }}>
                                <b>  <label for="examType2">Exam Type</label> </b> <br />
                                <select
                                    value={proData.examType2}
                                    name="examType2"
                                    onChange={onInputChange}>
                                    <option>Mid</option>
                                    <option>Final</option>
                                    <option>Assignment</option>
                                    <option>Lab</option>
                                    <option>Quiz</option>
                                </select>
                            </div>
                        </div>

                        <div className="column">
                        <div className="form-group" style={{ marginBottom: '15px', width: '300px', marginLeft: '20px' ,marginTop : '-150px' }}>
                            <b> <label style={{ marginBottom: '5px' }}>Date</label> </b> <br />
                            <input type="date" className="form-control" name="date2" placeholder="Enter Date" value={proData.date2} onChange={onInputChange} />
                        </div>
                        </div>

                        <div className="column">
                        <div className="form-group" style={{ marginBottom: '15px', width: '300px', marginLeft: '20px',marginTop : '-150px'  }}>
                            <b><label style={{ marginBottom: '5px' }}>Time</label></b> <br />
                            <input type="time" className="form-control" name="time2" placeholder="Enter Time" value={proData.time2} onChange={onInputChange} />
                        </div>
                        </div>
                        


                        <div className="column">
                            <div className="form-check" style={{ marginBottom: '15px' ,marginTop : '-150px'  }}>
                                <b> <label for="hallNumber2">Hall Number</label></b><br />
                                <select
                                    value={proData.hallNumber2}
                                    name="hallNumber2"
                                    onChange={onInputChange}>
                                    <option>Hall A3b </option>
                                    <option>Hall A4c</option>
                                    <option>Hall A5d</option>
                                    <option>Hall A6e</option>
                                </select>
                            </div>
                        </div>
                        </div>













                        <div className="row">
                        <div className="column">
                            <div className="form-check" style={{ marginBottom: '15px' ,marginTop : '-275px'  }}>
                                <b><label for="subjectId3">Subject ID and Name</label> </b><br />
                                <select
                                    value={proData.subjectId3}
                                    name="subjectId3"
                                    onChange={onInputChange}>
                                    <option>IT2030 - Algorithms</option>
                                        <option>IT2040 - Artificial Intelligence</option>
                                        <option>IT2050 - Internet of Things</option>
                                        <option>IT2060 - Engineering Mechanics</option>
                                        <option>SE1030 - Software Architecture</option>
                                        <option>SE1040 - Database Management</option>
                                        <option>SE1050 - Software Testing</option>
                                        <option>SE1060 - Software Project Management</option>
                                        <option>DS3060 - Machine Learning</option>
                                        <option>DS3070 - Cloud Computing</option>
                                        <option>DS3080 - Big Data</option>
                                        <option>DS3090 - Data Analytics</option>
                                </select>
                            </div>
                        </div>


                        <div className="column">
                            <div className="form-check" style={{ marginBottom: '15px' ,marginTop : '-275px'  }}>
                                <b>  <label for="examType3">Exam Type</label> </b> <br />
                                <select
                                    value={proData.examType3}
                                    name="examType3"
                                    onChange={onInputChange}>
                                    <option>Mid</option>
                                    <option>Final</option>
                                    <option>Assignment</option>
                                    <option>Lab</option>
                                    <option>Quiz</option>
                                </select>
                            </div>
                        </div>

                        <div className="column">
                        <div className="form-group" style={{ marginBottom: '15px', width: '300px', marginLeft: '20px' ,marginTop : '-275px'  }}>
                            <b> <label style={{ marginBottom: '5px' }}>Date</label> </b> <br />
                            <input type="date" className="form-control" name="date3" placeholder="Enter Date" value={proData.date3} onChange={onInputChange} />
                        </div>
                        </div>

                        <div className="column">
                        <div className="form-group" style={{ marginBottom: '15px', width: '300px', marginLeft: '20px' ,marginTop : '-275px' }}>
                            <b><label style={{ marginBottom: '5px' }}>Time</label></b> <br />
                            <input type="time" className="form-control" name="time3" placeholder="Enter Time" value={proData.time3} onChange={onInputChange} />
                        </div>
                        </div>
                        


                        <div className="column">
                            <div className="form-check" style={{ marginBottom: '15px' ,marginTop : '-275px'  }}>
                                <b> <label for="hallNumber3">Hall Number</label></b><br />
                                <select
                                    value={proData.hallNumber3}
                                    name="hallNumber3"
                                    onChange={onInputChange}>
                                    <option>Hall A3b </option>
                                    <option>Hall A4c</option>
                                    <option>Hall A5d</option>
                                    <option>Hall A6e</option>
                                </select>
                            </div>
                        </div>
                        </div>










                        <div className="row">
                        <div className="column">
                            <div className="form-check" style={{ marginBottom: '15px', marginTop : '-400px'  }}>
                                <b><label for="subjectId4">Subject ID and Name</label> </b><br />
                                <select
                                    value={proData.subjectId4}
                                    name="subjectId4"
                                    onChange={onInputChange}>
                                    <option>IT2030 - Algorithms</option>
                                        <option>IT2040 - Artificial Intelligence</option>
                                        <option>IT2050 - Internet of Things</option>
                                        <option>IT2060 - Engineering Mechanics</option>
                                        <option>SE1030 - Software Architecture</option>
                                        <option>SE1040 - Database Management</option>
                                        <option>SE1050 - Software Testing</option>
                                        <option>SE1060 - Software Project Management</option>
                                        <option>DS3060 - Machine Learning</option>
                                        <option>DS3070 - Cloud Computing</option>
                                        <option>DS3080 - Big Data</option>
                                        <option>DS3090 - Data Analytics</option>
                                </select>
                            </div>
                        </div>


                        <div className="column">
                            <div className="form-check" style={{ marginBottom: '15px',marginTop : '-400px'  }}>
                                <b>  <label for="examType4">Exam Type</label> </b> <br />
                                <select
                                    value={proData.examType4}
                                    name="examType4"
                                    onChange={onInputChange}>
                                    <option>Mid</option>
                                    <option>Final</option>
                                    <option>Assignment</option>
                                    <option>Lab</option>
                                    <option>Quiz</option>
                                </select>
                            </div>
                        </div>

                        <div className="column">
                        <div className="form-group" style={{ marginBottom: '15px', width: '300px', marginLeft: '20px' ,marginTop : '-400px' }}>
                            <b> <label style={{ marginBottom: '5px' }}>Date</label> </b> <br />
                            <input type="date" className="form-control" name="date4" placeholder="Enter Date" value={proData.date4} onChange={onInputChange} />
                        </div>
                        </div>

                        <div className="column">
                        <div className="form-group" style={{ marginBottom: '15px', width: '300px', marginLeft: '20px',marginTop : '-400px'  }}>
                            <b><label style={{ marginBottom: '5px' }}>Time</label></b> <br />
                            <input type="time" className="form-control" name="time4" placeholder="Enter Time" value={proData.time4} onChange={onInputChange} />
                        </div>
                        </div>
                        


                        <div className="column">
                            <div className="form-check" style={{ marginBottom: '15px',marginTop : '-400px'  }}>
                                <b> <label for="hallNumber4">Hall Number</label></b><br />
                                <select
                                    value={proData.hallNumber4}
                                    name="hallNumber4"
                                    onChange={onInputChange}>
                                    <option>Hall A3b </option>
                                    <option>Hall A4c</option>
                                    <option>Hall A5d</option>
                                    <option>Hall A6e</option>
                                </select>
                            </div>
                        </div>
                        </div>








                        

                        <button className="buttonUpdate">Update Timetable</button>


                        <button className="buttonDelete" type="reset" style={{ marginLeft: '100px' }}> Clear  </button>

                    </form>
                </div>
            </div>
        </div>
    );
}





