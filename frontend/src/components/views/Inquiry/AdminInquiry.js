import React, {useEffect, useState} from "react";
import Axios from "axios";
import {useHistory, withRouter} from "react-router-dom";
import GeneratePdf from "./InquiryReport";


function AdminPayments() {

    const [Inquiries, setInquiries] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:5001/inquiry/getInquiry')
            .then(response => {
                console.log(response.data);
                setInquiries(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    function approvedChange(ID,approval){
        const submit = {
            ID: ID,
            isRespond: approval
        }

        console.log(submit);

        Axios.put(`http://localhost:5001/inquiry/approveInquiry/${ID}`,submit).then(response => {
            if(response.data.success){
                alert("Success");
            }else{
                console.log(response.data.error);
            }
        })
    }

    async function deleteInquiry(item) {
        console.log(item.ID);
        await Axios.delete(`http://localhost:5001/inquiry/deleteInquiry/${item._id}`).then((res)=>{
            console.log(res)
            alert("Delete  Successfully");
        });
    }


    return(
        <div style={{ width: '98%', margin: '6rem auto' }}>
            <div>
                <h1 style={{ textAlign: 'left' }}>  Inquires </h1>
            </div>
            {/*<input type="text" className="form-control" value={filter} onChange={searchText.bind(this)}/>*/}
            <hr/>
            <div style={{ width:'98%',  margin: '4rem auto'}}>
                <table>
                    <thead>
                    <tr style={{backgroundColor:'#4682b4'}}>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Category</th>
                        <th>Student Id</th>
                        <th>Inquiry</th>
                        <th>Respond</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Inquiries.filter(Inquiries => Inquiries.isRespond === false).map((item,key)=>{
                        return(
                            <tr key = {key}>
                                <td>
                                    <center>{item.FirstName}</center>
                                </td>
                                <td>
                                    <center>{item.LastName}</center>
                                </td>
                                <td>
                                    <center>{item.PhoneNumber}</center>
                                </td>
                                <td>
                                    <center>{item.Email}</center>
                                </td>
                                <td>
                                    <center>{item.InquiryCategory}</center>
                                </td>
                                <td>
                                    <center>{item.StudentID}</center>
                                </td>
                                <td>
                                    <center>{item.Inquiry}</center>
                                </td>
                                <td><center><button style={{backgroundColor:'#4682b4'}} onClick={() => {approvedChange(item._id,true); window.location.reload()}} >Respond</button></center></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <br/>
                <button style={{marginLeft: '1000px',backgroundColor:'#4682b4'}} onClick={() => GeneratePdf(Inquiries.filter(Inquiries => Inquiries.isRespond === false))}>Generate Report</button>
            </div>

            <div >
                <h1 style={{ textAlign: 'left' }}>  Responded Inquiries </h1>
            </div>
            <hr/>
            <div style={{ width:'98%',  margin: '4rem auto'}}>
                <table>
                    <thead>
                    <tr style={{backgroundColor:'#4682b4'}}>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Category</th>
                        <th>Student Id</th>
                        <th>Inquiry</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Inquiries.filter(Inquiries => Inquiries.isRespond === true).map((item,key)=>{
                        return(
                            <tr key = {key}>
                                <td>
                                    <center>{item.FirstName}</center>
                                </td>
                                <td>
                                    <center>{item.LastName}</center>
                                </td>
                                <td>
                                    <center>{item.PhoneNumber}</center>
                                </td>
                                <td>
                                    <center>{item.Email}</center>
                                </td>
                                <td>
                                    <center>{item.InquiryCategory}</center>
                                </td>
                                <td>
                                    <center>{item.StudentID}</center>
                                </td>
                                <td>
                                    <center>{item.Inquiry}</center>
                                </td>
                                <td><center><button style={{backgroundColor:'red'}} onClick={() => {deleteInquiry(item); window.location.reload()}}>Delete</button></center></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <br/>
                <button style={{marginLeft: '1000px',backgroundColor:'#4682b4'}} onClick={() => GeneratePdf(Inquiries.filter(Payments => Payments.isRespond === true))}>Generate Report</button>
            </div>

        </div>
    )
}

export default AdminPayments;