import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Swal from "sweetalert2";



export default function EditResult(props) {
    const editDetails = props.location.state;

    const [proData, setData] = useState({});

    const onInputChange = e => {
        setData({ ...proData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setData({
            registrationId: editDetails.registrationId,
            studentName: editDetails.studentName,
            courseId: editDetails.courseId,
            subjectCode: editDetails.subjectCode,
            subjectName: editDetails.subjectName,
            results: editDetails.results,
            
        })

    }, [editDetails])

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:5001/result/update/${props.match.params.id}`, proData);
        Swal.fire({
            title: "Updated Successfully",
            icon: 'success',
        });
        props.history.push("/allResult");
    };




    return (
        <div className="container" style={{ margin: '6rem auto' }}>
            <div className="row">
            <div className="form1"  style={{border: 'solid', width:'80%', margin: '4rem auto'}}>
                    <h1 style={{textAlign: "center"}}>Update Result</h1>
                    {/* <hr className='hrLine' /> */}
                    <hr/>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="registrationId">Registration ID</label>
                            <input
                                type="text"
                                className="form-control"
                                id="registrationId"
                                name="registrationId"
                                value={proData.registrationId}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="studentName">Student Name</label>
                            <input

                                type="text"
                                className="form-control"
                                id="studentName"
                                name="studentName"
                                value={proData.studentName}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="courseId">Course ID</label>
                            <input

                                type="text"
                                className="form-control"
                                id="courseId"
                                name="courseId"
                                value={proData.courseId}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subjectCode">Subject Code</label>
                            <input

                                type="text"
                                className="form-control"
                                id="subjectCode"
                                name="subjectCode"
                                value={proData.subjectCode}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subjectName">Subject Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="subjectName"
                                name="subjectName"
                                value={proData.subjectName}
                                onChange={e => onInputChange(e)}
                            />  
                        </div>
                        <div className="form-group">
                            <label htmlFor="results">Results</label>
                            <input
                                type="text"                   
                                className="form-control"
                                id="results"
                                name="results"
                                value={proData.results}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

