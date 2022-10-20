import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Swal from "sweetalert2";



export default function EditResult(props) {
    const editDetails = props.location.state;
    console.log(props.location.state);

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
            subjectCode2: editDetails.subjectCode2,
            subjectName2: editDetails.subjectName2,
            results2: editDetails.resutls2,
            subjectCode3: editDetails.subjectCode3,
            subjectName3: editDetails.subjectName3,
            results3: editDetails.results3,
            subjectCode4: editDetails.subjectCode4,
            subjectName4: editDetails.subjectName4,
            results4: editDetails.results4,
            
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
            <div className="form1"  style={{border: 'solid', width:'70%', margin: '4rem auto'}}>
                    <h1 style={{textAlign: "center"}}>Update Result</h1>
                    {/* <hr className='hrLine' /> */}
                    <hr/>
                    <form onSubmit={e => onSubmit(e)}>
                    <div className="row">
                    <div className="column">
                        <div className="form-group"style={{marginBottom: '15px', width:'100%', marginTop: '200px'}}>
                        <b> <label for="registrationId">Registration Number</label> </b>
                            <input
                                type="text"
                                className="form-control"
                                id="registrationId"
                                name="registrationId"
                                value={proData.registrationId}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        </div>


                        <div className="column">
                        <div className="form-group" style={{marginBottom: '15px', width:'80%', marginTop: '210px', marginLeft: '200px'}}>
                        <b><label for="studentName">Student Name</label></b>
                            <input

                                type="text"
                                className="form-control"
                                id="studentName"
                                name="studentName"
                                value={proData.studentName}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        </div>

                         <div>
                            <div className="form-check" style={{width:'20%',  marginBottom: '15px', marginTop:'-160px' }}>
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


                        <div className="column">
                        <div className="form-group" style={{marginBottom: '15px', width:'100%', marginTop: '10px'}}>
                        <b> <label for="name">Subject Code1</label> </b>
                                <br />
                                <select
                                    value={proData.subjectCode}
                                    name="subjectCode"
                                    onChange={onInputChange}  >
                                    <option selected>Select</option>
                                    <option>SE1000 </option>
                                    <option>DS3000 </option>
                                    <option>IT2000</option>
                                </select>
                            </div>
                        </div>


                        <div className="column">
                        <div className="form-group" style={{marginBottom: '15px', width:'100%', marginTop: '10px', marginLeft:'100px'}}>
                        <b> <label for="name">Subject Name 1</label> </b>
                                <br />
                                <select
                                    value={proData.subjectName}
                                    name="subjectName"
                                    onChange={onInputChange}  >
                                    <option selected>Select</option>
                                    <option>Algorithms</option>
                                    <option>Software Architecture</option>
                                    <option>Database Management</option>
                                    <option>Artificial Intelligence</option>
                                    <option>Machine Learning</option>
                                    <option>Cloud Computing</option>
                                    <option>Big Data</option>
                                    <option>Internet of Things</option>
                                    <option>Software Testing</option>
                                </select>
                            </div>
                        </div>



                        <div className="column">
                        <div className="form-group" style={{marginBottom: '15px', width:'100%', marginTop: '10px', marginLeft:'200px'}}>
                        <b><label for="results">Result</label></b>  <br/>
                            <input
                                type="text"
                                className="form-control"
                                id="results"
                                name="results"
                                value={proData.results}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        </div>
                        </div>


{/*                              2                                                             */}
                          <div className="column">
                        <div className="form-group" style={{marginBottom: '15px', width:'100%', marginTop: '-150px'}}>
                        <b> <label for="name">Subject Code 2</label> </b>
                                <br />
                                <select
                                    value={proData.subjectCode2}
                                    name="subjectCode2"
                                    onChange={onInputChange}  >
                                    <option selected>Select</option>
                                    <option>SE1000 </option>
                                    <option>DS3000 </option>
                                    <option>IT2000</option>
                                </select>
                            </div>
                        </div>


                        <div className="column">
                        <div className="form-group" style={{marginBottom: '15px', width:'100%', marginTop: '-150px', marginLeft:'100px'}}>
                        <b> <label for="name">Subject Name 2</label> </b>
                                <br />
                                <select
                                    value={proData.subjectName2}
                                    name="subjectName2"
                                    onChange={onInputChange}  >
                                    <option selected>Select</option>
                                    <option>Algorithms</option>
                                    <option>Software Architecture</option>
                                    <option>Database Management</option>
                                    <option>Artificial Intelligence</option>
                                    <option>Machine Learning</option>
                                    <option>Cloud Computing</option>
                                    <option>Big Data</option>
                                    <option>Internet of Things</option>
                                    <option>Software Testing</option>
                                </select>
                            </div>
                        </div>



                        <div className="column">
                        <div className="form-group" style={{marginBottom: '15px', width:'100%', marginTop: '-150px', marginLeft:'200px'}}>
                        <b><label for="results">Result</label></b>  <br/>
                            <input
                                type="text"
                                className="form-control"
                                id="results"
                                name="results2"
                                value={proData.results2}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        </div>
                      {/*                          3                                            */}
                      <div className="column">
                        <div className="form-group" style={{marginBottom: '15px', width:'100%',  marginTop: '-20px', marginLeft:'-620px'}}>
                        <b> <label for="subjectCode3">Subject Code 3</label> </b>
                                <br />
                                <select
                                    value={proData.subjectCode3}
                                    name="subjectCode3"
                                    onChange={onInputChange}  >
                                    <option selected>Select</option>
                                    <option>SE1000 </option>
                                    <option>DS3000 </option>
                                    <option>IT2000</option>
                                </select>
                            </div>
                        </div>


                        <div className="column">
                        <div className="form-group" style={{marginBottom: '15px', width:'100%', marginTop: '-20px', marginLeft:'-520px'}}>
                        <b> <label for="subjectName3">Subject Name 3</label> </b>
                                <br />
                                <select
                                    value={proData.subjectName3}
                                    name="subjectName3"
                                    onChange={onInputChange}  >
                                    <option selected>Select</option>
                                    <option>Algorithms</option>
                                    <option>Software Architecture</option>
                                    <option>Database Management</option>
                                    <option>Artificial Intelligence</option>
                                    <option>Machine Learning</option>
                                    <option>Cloud Computing</option>
                                    <option>Big Data</option>
                                    <option>Internet of Things</option>
                                    <option>Software Testing</option>
                                </select>
                            </div>
                        </div>



                        <div className="column">
                        <div className="form-group" style={{marginBottom: '15px', width:'100%',marginTop: '-320px', marginLeft:'600px'}}>
                        <b><label for="results3">Result</label></b>  <br/>
                            <input
                                type="text"
                                className="form-control"
                                id="results3"
                                name="results3"
                                value={proData.results3}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        </div>
                     

                     {/*                           4                                             */}
                     <div className="column">
                        <div className="form-group" style={{marginBottom: '15px', width:'100%',marginTop: '-190px', marginLeft:'-200px'}}>
                        <b> <label for="name">Subject Code 4</label> </b>
                                <br />
                                <select
                                    value={proData.subjectCode4}
                                    name="subjectCode"
                                    onChange={onInputChange}  >
                                    <option selected>Select</option>
                                    <option>SE1000 </option>
                                    <option>DS3000 </option>
                                    <option>IT2000</option>
                                </select>
                            </div>
                        </div>


                        <div className="column">
                        <div className="form-group" style={{marginBottom: '15px', width:'100%',marginTop: '-190px', marginLeft:'-110px'}}>
                        <b> <label for="name">Subject Name 4</label> </b>
                                <br />
                                <select
                                    value={proData.subjectName4}
                                    name="subjectName"
                                    onChange={onInputChange}  >
                                    <option selected>Select</option>
                                    <option>Algorithms</option>
                                    <option>Software Architecture</option>
                                    <option>Database Management</option>
                                    <option>Artificial Intelligence</option>
                                    <option>Machine Learning</option>
                                    <option>Cloud Computing</option>
                                    <option>Big Data</option>
                                    <option>Internet of Things</option>
                                    <option>Software Testing</option>
                                </select>
                            </div>
                        </div>



                        <div className="column">
                        <div className="form-group" style={{marginBottom: '15px', width:'100%',marginTop: '-190px', marginLeft:'-10px'}}>
                        <b><label for="results">Result</label></b>  <br/>
                            <input
                                type="text"
                                className="form-control"
                                id="results"
                                name="results"
                                value={proData.results4}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        </div>
                    
                           

                        <button className="buttonUpdate">Update Results</button>


                        <button className="buttonDelete" type="reset" style={{ marginLeft: '100px' }}> Clear  </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

