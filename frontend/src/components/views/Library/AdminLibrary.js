import React, {useEffect, useState} from "react";
import Axios from "axios";
import {useHistory, withRouter} from "react-router-dom";
import GeneratePdf from "./LibraryReport";


function AdminLibrary() {

    const [Library, setLibrary] = useState([]);
    const history = useHistory();
    const[filter,setFilter] = useState('');

    useEffect(() => {
        Axios.get('http://localhost:5001/library/getLibraryDoc')
            .then(response => {
                console.log(response.data);
                setLibrary(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    // function approvedChange(ID,approval){
    //     const submit = {
    //         ID: ID,
    //         isPanelMember: approval
    //     }
    //
    //     console.log(submit);
    //
    //     Axios.put(`http://localhost:5001/pay/approvePayment/${ID}`,submit).then(response => {
    //         if(response.data.success){
    //             alert("Success");
    //         }else{
    //             console.log(response.data.error);
    //         }
    //     })
    // }

    async function deleteLibrary(item) {
        console.log(item.ID);
        await Axios.delete(`http://localhost:5001/library/deleteLibraryDoc/${item._id}`).then((res)=>{
            console.log(res)
            alert("Delete  Successfully");
        });
    }

    // const searchText = (event) =>{
    //     setFilter(event.target.value);
    // }
    // let Payments = data.filter(item =>{
    //     return Object.keys(item).some(key =>
    //         item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    //     )
    // });

    return(
        <div style={{ width: '98%', margin: '6rem auto' }}>
            <div>
                <h1 style={{ textAlign: 'left' }}>  Library </h1>
            </div>
            {/*<input type="text" className="form-control" value={filter} onChange={searchText.bind(this)}/>*/}
            <hr/>
            <div style={{ width:'98%',  margin: '4rem auto'}}>
                <table>
                    <thead>
                    <tr>
                        <th>Related Course</th>
                        <th>Topic</th>
                        <th>Link</th>
                        <th>File</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Library.filter(Library => Library.isApproved === false).map((item,key)=>{
                        return(
                            <tr key = {key}>
                                <td>
                                    <center>{item.RelatedCourse}</center>
                                </td>
                                <td>
                                    <center>{item.Topic}</center>
                                </td>
                                <td>
                                    <center>{item.Link}</center>
                                </td>
                                <td>
                                    <center>{item.UploadFile}</center>
                                </td>
                                <td>
                                    <center>{item.Author}</center>
                                </td>
                                <td>
                                    <center>{item.Date}</center>
                                </td>
                                <td><center><button onClick={() => {history.push({pathname: "/updatePaymentDetails", state:{Library:item}})}} >Update</button></center></td>
                                <td><center><button onClick={() => {deleteLibrary(item); window.location.reload()}}>Delete</button></center></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <br/>
                <button style={{marginLeft: '1000px'}} onClick={() => GeneratePdf(Library.filter(Library => Library.isApproved === false))}>Generate Report</button>
            </div>


        </div>
    )
}
export default AdminLibrary;