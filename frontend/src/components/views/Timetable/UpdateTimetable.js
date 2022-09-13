import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Swal from "sweetalert2";



export default function EditTimetable(props) {
    console.log(props.location.state);
    const editDetails= props.location.state;

    // const [TimetableList, setTimetable] = useState([]);

    const [proData, setData] = useState(
        {
            courseId: editDetails.courseId,
            subjectId: editDetails.subjectId,
            examType: editDetails.examType,
            date: editDetails.date,
            time: editDetails.time,
            hallNumber: editDetails.hallNumber,
        }

    );

    const { courseId, subjectId, examType, date, time, hallNumber } = proData;

    const onInputChange = e => {
        setData({ ...proData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadTimetable();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:5001/timetable/update/${props.match.params.id}`, proData);
        Swal.fire({
            title: "Updated Successfully",
            icon: 'success',
        });
        props.history.push("/all");
    };

    const loadTimetable = async () => {
        const result = await axios.get(`http://localhost:5001/timetable/${props.match.params.id}`);
        setData(result.data);
    };

    useEffect(() => {
        setData(editDetails);
    }, [editDetails]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-50 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">Update Timetable</h1>
                    <form onSubmit={e => onSubmit(e)}>


                        <div>
                            <div className="form-check" style={{marginBottom: '15px'}}>
                                <label for="name">Course Name</label><br/>
                                <select onChange={(e) =>{
                                    setData((dt) => ({ ...dt, courseId: (e.target.value) }));
                                }}  >

                                    <option>SE1000 - Software Engineering</option>
                                    <option>DS3000 - Data Science</option>
                                    <option>IT2000 - Information Technology</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <div className="form-check" style={{marginBottom: '15px'}}>
                                <label for="name">Subject ID and Name</label><br/>
                                <select onChange={(e) =>{
                                    setData((dt) => ({ ...dt, subjectId: (e.target.value) }));
                                }}>
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


                        <div>
                            <div className="form-check" style={{marginBottom: '15px'}}>
                                <label for="name">Exam Type</label><br/>
                                <select onChange={(e) =>{
                                    setData((dt) => ({ ...dt, examType: (e.target.value) }));
                                }}>
                                    <option>Mid</option>
                                    <option>Final</option>
                                    <option>Assignment</option>
                                    <option>Lab</option>
                                    <option>Quiz</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group" style={{marginBottom: '15px', width: '300px', marginLeft: '20px'}}>
                            <label style={{marginBottom: '5px'}}>Date</label>
                            <input type="date" className="form-control" name="date" placeholder="Enter Date" value={date} onChange={(e) => {
                                setData((dt) => ({ ...dt, date: (e.target.value) }));
                            }}/>
                        </div>

                        <div className="form-group" style={{marginBottom: '15px', width: '300px', marginLeft: '20px'}}>
                            <label style={{marginBottom: '5px'}}>Time</label>
                            <input type="time" className="form-control" name="time" placeholder="Enter Time" value={time} onChange={(e) => {
                                setData((dt) => ({ ...dt, time: (e.target.value) }));
                            }}/>
                        </div>


                        <div>
                            <div className="form-check" style={{marginBottom: '15px'}}>
                                <label for="name">Hall Number</label><br/>
                                <select onChange={(e) =>{
                                    setData((dt) => ({ ...dt, hallNumber: (e.target.value) }));
                                }}>
                                    <option>Hall A3b </option>
                                    <option>Hall A4c</option>
                                    <option>Hall A5d</option>
                                    <option>Hall A6e</option>
                                </select>
                            </div>
                        </div>

                        <button className="btn btn-warning">Update Timetable</button>

                        <button className="btn btn-danger" type="reset" style={{ marginLeft: '100px'}}> Clear  </button>

                    </form>
                </div>
            </div>
        </div>
    );
}





