import React, {useEffect, useState} from "react";
import Axios from "axios";
import {useHistory, withRouter} from "react-router-dom";
import { FaEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
// import GeneratePdf from "./AllUserReport";

function ViewAllModules() {

    const [AllCourses, setAllCourses] = useState([]);
    const history = useHistory();
    const[search,setSearch] = useState('');

    useEffect(() => {
        Axios.get('http://localhost:5001/module/getAllModules')
            .then(response => {
                console.log(response.data);
                setAllCourses(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    async function deletePayment(item) {
        console.log(item.ID);
        alert("Are you want to Delete ?");
        await Axios.delete(`http://localhost:5001/module/deleteModule/${item._id}`).then((res)=>{
            console.log(res)

        });
    }

    return(
        <div style={{ width: '98%', margin: '6rem auto' }}>
            <div>
                <h1 style={{ textAlign: 'left' }}>  All Courses </h1>
            </div>
            <hr/>
            <div style={{ width:'98%',  margin: '4rem auto'}}>
                <table>
                    <thead>
                    <tr style={{backgroundColor:'#4682b4'}}>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Subject 1</th>
                        <th>Subject 2</th>
                        <th>Subject 3</th>
                        <th>Subject 4</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {AllCourses.filter(AllCourses => AllCourses.moduleNo != null).map((item,key)=>{
                        return(
                            <tr key = {key}>
                                <td>
                                    <center>{item.moduleNo}</center>
                                </td>
                                <td>
                                    <center>{item.moduleName}</center>
                                </td>
                                <td>
                                    <center>{item.subject1}</center>
                                </td>
                                <td>
                                    <center>{item.subject2}</center>
                                </td>
                                <td>
                                    <center>{item.subject3}</center>
                                </td>
                                <td>
                                    <center>{item.subject4}</center>
                                </td>
                                <td><center><button style={{backgroundColor:'#ff9800'}} onClick={() => {history.push({pathname: "/ModulesUpdate", state:{module:item}})}} ><FaEdit /></button></center></td>
                                <td><center><button style={{backgroundColor:'red'}} onClick={() => {deletePayment(item); window.location.reload()}}><FaTrashAlt /></button></center></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>

            <hr/>
            {/*<button style={{marginLeft: '1000px',backgroundColor:'#4682b4',color:'white'}} onClick={() => GeneratePdf(AllUsers.filter(AllUsers => AllUsers.Role != "Admin"))}>Generate Report</button>*/}

        </div>
    )
}

export default ViewAllModules;