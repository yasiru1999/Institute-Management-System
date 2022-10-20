import React, {useState} from "react"
import axios from "axios";
import Swal from "sweetalert2";
import{ useHistory } from "react-router";
import './Result.css';


export default function AddResult() {
    const [registrationId, setRegistrationId] = useState("");
    const [studentName, setStudentName] = useState("");
    const [courseId, setCourseId] = useState("");
    const [subjectCode, setSubjectCode] = useState("");
    const [subjectName, setSubjectName] = useState("");
    const [results, setResults] = useState("");


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
                return 'Registration Id must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (studentName.trim().length === 0) {  
            setErrorMsg(() => {
                return 'Student Name must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (courseId.trim().length === 0) {
            setErrorMsg(() => {
                return 'Course Id must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (subjectCode.trim().length === 0) {
            setErrorMsg(() => {
                return 'Subject Code must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (subjectName.trim().length === 0) {
            setErrorMsg(() => {
                return 'Subject Name must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        if (results.trim().length === 0) {
            setErrorMsg(() => {
                return 'Results must be a Filled.'
            })
            changeModalVisibilityHandler(true)
            return;
        }

        const newResult = {
            registrationId,
            studentName,
            courseId,
            subjectCode,
            subjectName,
            results,

        };
        console.log(newResult);

        axios.post("http://localhost:5001/result/add", newResult).then(() => {
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
                <div className="form1"  style={{border: 'solid', width:'70%',  margin: '4rem auto', height: '70%'}}>
                    <h1 style={{textAlign: "center"}}>Add Examination Result</h1>
                    {/* <hr className='hrLine'/> */}
                    <hr/>
                    <form  style={{ width: '100%', margin: '2rem auto'}} onSubmit={sendData} action="/post" method = "post" noValidate >


{/*                                   registration number                      */}
                    <div className="row">
                    <div className="column">
                    <div className="form-group" style={{marginBottom: '15px', width:'100%', marginTop: '190px'}}>
                       <b> <label for="registrationId">Registration Number</label> </b>
                        <input type="text"
                       className="form-check"
                        id="registrationId" placeholder="Enter Registration Number"
                          onChange={(e) => {
                        setRegistrationId(e.target.value);    }}/>
                       </div>
                        </div>

    {/*                                Student Name                                           */}
                       <div className="column">
                        <div className="form-group"style={{marginBottom: '15px', width:'80%', marginTop: '190px', marginLeft: '300px'}}>
                        <b><label for="studentName">Student Name</label></b>
                        <input type="text"
                       className="form-check"
                        id="studentName" placeholder="Enter Student Name"
                        onChange={(e) => {
                       setStudentName(e.target.value); }}/>
                       </div>
                       </div>


        {/*                          Course Name                            */}
                        
                        <div className="selectCourse">
                            <div className="form-check" style={{marginBottom: '15px', marginTop: '-200px'}}>
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
                  
{/*                                        Subject Code                   */}
                    
                       <div className="column">
                        <div className="selectSubjectCode">
                            <div className="form-check" style={{marginBottom: '15px'}}>
                               <b> <label for="name"> Subject Code 1 </label> </b>
                                <select onChange={(e) =>{
                                    setSubjectCode(e.target.value);
                                }}>
                                    <option selected>Select</option>
                                    <option>SE1000 - Software Engineering</option>
                                    <option>DS3000 - Data Science</option>
                                    <option>IT2000 - Information Technology</option>
                                </select>
                            </div>
                        </div>
                    
                    
{/*                                  Subject Name                                 */}
            
                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px', width:'800%', marginLeft: '300px', marginTop:'-100px'}}>
                              <b>  <label for="name">Subject Name 1</label>  </b> <br/>
                                <select onChange={(e) =>{
                                    setSubjectName(e.target.value);
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

{/*                             Result                                     */}
                      
                      <div className="column">
                         <div className="form-group"style={{marginBottom: '15px', width:'600%',marginLeft: '500px', marginTop:'-100px'}}>
                      <b><label for="results">Result</label></b>  <br/>
                        <input type="text"
                       className="form-check"
                        id="results" placeholder="Enter Result"
                        onChange={(e) => {
                       setResults(e.target.value); }}/>
                       </div> 
                       </div> 

                     
                    </div>
                    </div>





                    {/*                                           2                              */}
                    
                    <div className="column">
                        <div className="selectSubjectCode">
                            <div className="form-check" style={{marginBottom: '15px',marginTop:'-200px'}}>
                               <b> <label for="name"> Subject Code 2 </label> </b>
                                <select onChange={(e) =>{
                                    setSubjectCode(e.target.value);
                                }}>
                                    <option selected>Select</option>
                                    <option>SE1000 - Software Engineering</option>
                                    <option>DS3000 - Data Science</option>
                                    <option>IT2000 - Information Technology</option>
                                </select>
                            </div>
                        </div>
                    
                    
{/*                                  Subject Name                                 */}
            
                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px', width:'800%', marginLeft: '300px', marginTop:'-100px'}}>
                              <b>  <label for="name">Subject Name 2</label>  </b> <br/>
                                <select onChange={(e) =>{
                                    setSubjectName(e.target.value);
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

{/*                             Result                                     */}
                      
                      <div className="column">
                         <div className="form-group"style={{marginBottom: '15px', width:'600%',marginLeft: '500px', marginTop:'-100px'}}>
                      <b><label for="results">Result</label></b>  <br/>
                        <input type="text"
                       className="form-check"
                        id="results" placeholder="Enter Result"
                        onChange={(e) => {
                       setResults(e.target.value); }}/>
                       </div> 
                       </div> 

                     
                    </div>




{/*                                           3                                               */}

                        <div className="column">
                        <div className="selectSubjectCode">
                            <div className="form-check" style={{marginBottom: '15px',marginTop:'-100px', marginLeft: '-200px', width:'100%'}}>
                               <b> <label for="name"> Subject Code 3</label> </b>
                                <select onChange={(e) =>{
                                    setSubjectCode(e.target.value);
                                }}>
                                    <option selected>Select</option>
                                    <option>SE1000 - Software Engineering</option>
                                    <option>DS3000 - Data Science</option>
                                    <option>IT2000 - Information Technology</option>
                                </select>
                            </div>
                        </div>
                    
                    
{/*                                  Subject Name                                 */}
            
                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px', width:'800%', marginLeft: '90px', marginTop:'-100px'}}>
                              <b>  <label for="name">Subject Name 3</label>  </b> <br/>
                                <select onChange={(e) =>{
                                    setSubjectName(e.target.value);
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

{/*                             Result                                     */}
                      
                      <div className="column">
                         <div className="form-group"style={{marginBottom: '15px', width:'600%',marginLeft: '300px', marginTop:'-100px'}}>
                      <b><label for="results">Result</label></b>  <br/>
                        <input type="text"
                       className="form-check"
                        id="results" placeholder="Enter Result"
                        onChange={(e) => {
                       setResults(e.target.value); }}/>
                       </div> 
                       </div> 

                     
                    </div>



{/*                                                  4                                               */}
                        <div className="column">
                        <div className="selectSubjectCode">
                            <div className="form-check" style={{marginBottom: '15px',marginTop:'-1px',marginLeft: '-410px',width:'100%' }}>
                               <b> <label for="name"> Subject Code 4 </label> </b>
                                <select onChange={(e) =>{
                                    setSubjectCode(e.target.value);
                                }}>
                                    <option selected>Select</option>
                                    <option>SE1000 - Software Engineering</option>
                                    <option>DS3000 - Data Science</option>
                                    <option>IT2000 - Information Technology</option>
                                </select>
                            </div>
                        </div>
                    
                    
{/*                                  Subject Name                                 */}
            
                        <div className="column">
                            <div className="form-check" style={{marginBottom: '15px', width:'800%', marginLeft: '-115px', marginTop:'-100px'}}>
                              <b>  <label for="name">Subject Name 4</label>  </b> <br/>
                                <select onChange={(e) =>{
                                    setSubjectName(e.target.value);
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

{/*                             Result                                     */}
                      
                      <div className="column">
                         <div className="form-group"style={{marginBottom: '15px', width:'600%',marginLeft: '100px', marginTop:'-100px'}}>
                      <b><label for="results">Result</label></b>  <br/>
                        <input type="text"
                       className="form-check"
                        id="results" placeholder="Enter Result"
                        onChange={(e) => {
                       setResults(e.target.value); }}/>
                       </div> 
                       </div> 

                     
                    </div>



                        {/* <div className='btS'style={{width: '10px',marginTop : '-700px'}}> */}
                            <button className="buttonSubmit" type="submit" onClick={(e)=>sendData(e)} style={{ width: '200px', marginLeft: '300px', marginTop : '-500px'}}>
                                {/* <i className="far fa-check-square"></i> */}
                                &nbsp; Save
                            </button>
                        

                        {/* <div className='btS' style={{  marginTop : '-500px'}}>
                            <button className="buttonDelete" type="reset" >Clear </button>
                        </div>  */}
                       

                    </form>
                </div>

            </div>

            <div>

            </div>

        </div>
    )
}




