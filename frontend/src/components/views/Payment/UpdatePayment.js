import React, {useEffect, useState} from "react";
import {Button, Form, Input} from "antd";
import Axios from "axios";
import {useLocation} from "react-router-dom";



function UpdatePayments(props) {

    const [ID,setId] = useState("");
    const [studentID, setStudentID] = useState("");
    const [studentName, setStudentName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [email, setEmail] = useState("");
    const [registeredCourse, setRegisteredCourse] = useState("");
    const [paymentAmount, setPaymentAmount] = useState("");

    let [paymentsDate, setPaymentDate] = useState("");

    const location = useLocation();

    useEffect(() =>{
        setId(location.state.payment._id)
        setStudentID(location.state.payment.StudentID)
        setStudentName(location.state.payment.StudentName)
        setPhoneNo(location.state.payment.PhoneNo)
        setEmail(location.state.payment.Email)
        setRegisteredCourse(location.state.payment.RegisteredCourse)
        setPaymentAmount(location.state.payment.PaymentAmount)
        setPaymentDate(location.state.payment.PaymentDate)
    },[location])


    console.log(location.state.payment.StudentID);

    const onStudentIDChange = (event) => {
        setStudentID(event.currentTarget.value)
    }

    const onStudentNameChange = (event) => {
        setStudentName(event.currentTarget.value)
    }

    const onPhoneNoChange = (event) => {
        setPhoneNo(event.currentTarget.value)
    }
    const onEmailChange = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onRegisteredCourseChange = (event) => {
        setRegisteredCourse(event.currentTarget.value)
    }
    const onPaymentAmountChange = (event) => {
        setPaymentAmount(event.currentTarget.value)
    }

    function handleSelectDate(event) {
        setPaymentDate(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (!studentID || !studentName || !phoneNo || !registeredCourse || !paymentAmount || !paymentAmount) {
            return alert('fill all the fields first!')
        }

        const variables = {
            StudentID: studentID,
            StudentName: studentName,
            PhoneNo: phoneNo,
            Email:email,
            RegisteredCourse: registeredCourse,
            PaymentAmount:paymentAmount,
            PaymentDate : paymentsDate,
        }


        Axios.put(`http://localhost:5001/pay/updatePayment/${ID}`, variables)
            .then(response => {
                if (response.data) {
                    alert('Conference Successfully Edited')
                    props.history.push('/paymentDetails')
                } else {
                    alert('Failed to edit Conference')
                }
            })

    }

    return(
        <div style={{ width: '98%', margin: '6rem auto' }}>
            <div >
                <h1 style={{ textAlign: 'left' }}>  Kingdom Institute Payment Portal </h1>
            </div>
            <hr/>

            <div style={{border: 'solid', width:'50%',  margin: '4rem auto'}}>
                <h2 style={{textAlign: "center"}}> Kingdom institute Payment Form</h2>

                <hr/>

                <Form style={{ width: '50%', margin: '4rem auto'}} onSubmit={onSubmit} >

                    <label>*Student Registered Number :</label>
                    <Input
                        onChange={onStudentIDChange}
                        value={studentID}
                    />
                    <br />
                    <br />

                    <label>*Student Name :</label>
                    <Input
                        onChange={onStudentNameChange}
                        value={studentName}
                    />
                    <br />
                    <br />

                    <label>*Phone Number :</label>
                    <Input
                        onChange={onPhoneNoChange}
                        value={phoneNo}
                    />
                    <br />
                    <br />

                    <label>*Email Address :</label>
                    <Input
                        onChange={onEmailChange}
                        value={email}
                    />
                    <br />
                    <br />

                    <label>*Registered Course :</label>
                    <Input
                        onChange={onRegisteredCourseChange}
                        value={registeredCourse}
                    />
                    <br />
                    <br />

                    <label>*Payment Amount  :</label>
                    <Input
                        onChange={onPaymentAmountChange}
                        value={paymentAmount}
                    />
                    <br />
                    <br />

                    <label>
                        Date :
                    </label>
                    <br/>
                    <input type="Date" value={paymentsDate} onChange={handleSelectDate} />
                    <br />
                    <br />

                    <Button style={{marginLeft: '300px'}} onClick={onSubmit}>
                        Submit
                    </Button>

                </Form>

            </div>

        </div>
    )
}

export default UpdatePayments;