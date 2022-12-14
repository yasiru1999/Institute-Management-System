import React, {useEffect, useState} from "react";
import Axios from "axios";
import {useHistory, withRouter} from "react-router-dom";
import GeneratePdf from "./PaymentReport";
import download from "downloadjs";



function AdminPayments() {

    const [Payments, setPayments] = useState([]);
    const history = useHistory();
    const[filter,setFilter] = useState('');

    useEffect(() => {
        Axios.get('http://localhost:5001/pay/getPayment')
            .then(response => {
                console.log(response.data);
                setPayments(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    const downloadFile = async(link) => {
        console.log(link);
        await Axios.get(`http://localhost:5001/paymentSlips/`+link)
            .then(response => {

                console.log(response);
                return download(response.data, link ,"image/png");

            }).catch(error => {
                console.log(error);
            })
    }

    function approvedChange(ID,approval){
        const submit = {
            ID: ID,
            isPanelMember: approval
        }

        console.log(submit);

        Axios.put(`http://localhost:5001/pay/approvePayment/${ID}`,submit).then(response => {
            if(response.data.success){
                alert("Success");
            }else{
                console.log(response.data.error);
            }
        })
    }

    async function deletePayment(item) {
        console.log(item.ID);
        if(window.confirm('Delete this Payment details ?')){
        await Axios.delete(`http://localhost:5001/pay/deletePayment/${item._id}`).then((res)=>{
            console.log(res)
            alert("Delete  Successfully");
        });}
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
                <h1 style={{ textAlign: 'left' }}>  Student Payments </h1>
            </div>
            <div>
                <input onChange={(e) => setFilter(e.target.value)} />
            </div>
            {/*<input type="text" className="form-control" value={filter} onChange={searchText.bind(this)}/>*/}
            <hr/>
            <div style={{ width:'98%',  margin: '4rem auto'}}>
                <table>
                    <thead>
                    <tr style={{backgroundColor:'#4682b4'}}>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Amount</th>
                        <th>Bank Slip</th>
                        <th>Date</th>
                        <th>Respond</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Payments.filter(Payments => Payments.isApproved === false).map((item,key)=>{
                        return(
                            <tr key = {key}>
                                <td>
                                    <center>{item.StudentID}</center>
                                </td>
                                <td>
                                    <center>{item.StudentName}</center>
                                </td>
                                <td>
                                    <center>{item.PhoneNo}</center>
                                </td>
                                <td>
                                    <center>{item.Email}</center>
                                </td>
                                <td>
                                    <center>{item.RegisteredCourse}</center>
                                </td>
                                <td>
                                    <center>{item.PaymentAmount}</center>
                                </td>
                                <td>
                                    <center onClick={() => downloadFile(item.PaymentSlip)}>{item.PaymentSlip}</center>
                                </td>
                                <td>
                                    <center>{item.PaymentDate}</center>
                                </td>
                                <td><center><button style={{backgroundColor:'#4682b4'}} onClick={() => {approvedChange(item._id,true); window.location.reload()}} >Respond</button></center></td>
                                <td><center><button style={{backgroundColor:'#ff9800'}} onClick={() => {history.push({pathname: "/updatePaymentDetails", state:{payment:item}})}} >Update</button></center></td>
                                <td><center><button style={{backgroundColor:'red'}} onClick={() => {deletePayment(item); window.location.reload()}}>Delete</button></center></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <br/>
                <button style={{marginLeft: '1000px',backgroundColor:'#4682b4'}} onClick={() => GeneratePdf(Payments.filter(Payments => Payments.isApproved === false))}>Generate Report</button>
            </div>

            <div >
                <h1 style={{ textAlign: 'left' }}>  Approved Student Payments </h1>
            </div>
            <hr/>
            <div style={{ width:'98%',  margin: '4rem auto'}}>
                <table>
                    <thead>
                    <tr style={{backgroundColor:'#4682b4'}}>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Amount</th>
                        <th>Bank Slip</th>
                        <th>Date</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Payments.filter(Payments => Payments.isApproved === true).map((item,key)=>{
                        return(
                            <tr key = {key}>
                                <td>
                                    <center>{item.StudentID}</center>
                                </td>
                                <td>
                                    <center>{item.StudentName}</center>
                                </td>
                                <td>
                                    <center>{item.PhoneNo}</center>
                                </td>
                                <td>
                                    <center>{item.Email}</center>
                                </td>
                                <td>
                                    <center>{item.RegisteredCourse}</center>
                                </td>
                                <td>
                                    <center>{item.PaymentAmount}</center>
                                </td>
                                <td>
                                    <center onClick={() => downloadFile(item.PaymentSlip)}>{item.PaymentSlip}</center>
                                </td>
                                <td>
                                    <center>{item.PaymentDate}</center>
                                </td>
                                <td><center><button style={{backgroundColor:'#ff9800'}} onClick={() => {history.push({pathname: "/updatePaymentDetails", state:{payment:item}})}} >Update</button></center></td>
                                <td><center><button style={{backgroundColor:'red'}} onClick={() => {deletePayment(item); window.location.reload()}} >Delete</button></center></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            <br/>
                <button style={{marginLeft: '1000px',backgroundColor:'#4682b4'}} onClick={() => GeneratePdf(Payments.filter(Payments => Payments.isApproved === true))}>Generate Report</button>
            </div>

        </div>
    )
}

export default AdminPayments;