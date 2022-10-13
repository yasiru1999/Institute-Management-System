// import React, {useState} from "react"
// import axios from "axios";
// import Swal from "sweetalert2";
// import{ useHistory } from "react-router";
// import './Timetable.css';



// export default function AddResult() {
//     const [registrationId, setRegistrationId] = useState("");
//     const [studentName, setStudentName] = useState("");
//     const [courseId, setCourseId] = useState("");
//     const [subjectCode, setSubjectCode] = useState("");
//     const [subjectName, setSubjectName] = useState("");
//     const [result, setResult] = useState("");
   

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
//                 return 'Registration Id must be a Filled.'
//             })
//             changeModalVisibilityHandler(true)
//             return;
//         }

//         if (studentName.trim().length === 0) {  
//             setErrorMsg(() => {
//                 return 'Student Name must be a Filled.'
//             })
//             changeModalVisibilityHandler(true)
//             return;
//         }

//         if (courseId.trim().length === 0) {
//             setErrorMsg(() => {
//                 return 'Course Id must be a Filled.'
//             })
//             changeModalVisibilityHandler(true)
//             return;
//         }

//         if (subjectCode.trim().length === 0) {
//             setErrorMsg(() => {
//                 return 'Subject Code must be a Filled.'
//             })
//             changeModalVisibilityHandler(true)
//             return;
//         }

//         if (subjectName.trim().length === 0) {
//             setErrorMsg(() => {
//                 return 'Subject Name must be a Filled.'
//             })
//             changeModalVisibilityHandler(true)
//             return;
//         }

//         if (result.trim().length === 0) {
//             setErrorMsg(() => {
//                 return 'Result must be a Filled.'
//             })
//             changeModalVisibilityHandler(true)
//             return;
//         }

//         const newResult = {
//             registrationId,
//             studentName,
//             courseId,
//             subjectCode,
//             subjectName,
//             result,

//         };

//         axios.post("http://localhost:8070/result/add", newResult).then(() => {
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
        
//         <div className="container" style={{  margin: '6rem auto' }}>
//             <div >
//                 <div className="form1"  style={{border: 'solid', width:'80%',  margin: '4rem auto'}}>
//                     <h1 style={{textAlign: "center"}}>Add Examination Reult</h1>
//                     {/* <hr className='hrLine'/> */}
//                     <hr/>
//                     <form  style={{ width: '100%', margin: '2rem auto'}} onSubmit={sendData} action="/post" method = "post" noValidate >

//                         <div className="selectRegistrationId">
//                             <div className="form-check" style={{marginBottom: '15px'}}>
//                                <b> <label for="name">Registration Number</label> </b>
//                                <br/>
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

//                         <div className="form-group">

// <label for="productDescription">Product Description</label>
// <input type="text"
//        className="form-check"

//        id="productDescription" placeholder="Enter Product Description"
//        onChange={(e) => {
//            setProductDescription(e.target.value);

//        }}/>


// </div>
//                         <div className="selectCourse">
//                             <div className="form-check" style={{marginBottom: '15px'}}>
//                                <b> <label for="name">Course Name</label> </b>
//                                <br/>
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
                    

//                         <div className="selectCourse">
//                             <div className="form-check" style={{marginBottom: '15px'}}>
//                                <b> <label for="name">Course Name</label> </b>
//                                <br/>
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
                    
                    







//                     <div className="row">
//                         <div className="column">
//                             <div className="form-check" style={{marginBottom: '15px'}}>
//                               <b>  <label for="name">Subject and name</label>  </b> <br/>
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

                      

//                         <div className="column">
//                             <div className="form-check" style={{marginBottom: '15px'}}>
//                                 <b><label for="name">Exam Type</label></b><br/>
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
                     
//                     </div>

                                    
                    




//                         {/* <div className='btS'style={{width: '10px',marginTop : '-700px'}}> */}
//                             <button className="buttonSubmit" type="submit" onClick={(e)=>sendData(e)} style={{ width: '200px', marginLeft: '80px', marginTop : '-700px'}}>
//                                 {/* <i className="far fa-check-square"></i> */}
//                                 &nbsp; Save
//                             </button>
                        

//                         <div className='btS' style={{  marginTop : '-500px'}}>
//                             <button className="buttonDelete" type="reset" >Clear </button>
//                         </div>
                       

//                     </form>
//                 </div>

//             </div>

//             <div>

//             </div>

//         </div>
//     )
// }




