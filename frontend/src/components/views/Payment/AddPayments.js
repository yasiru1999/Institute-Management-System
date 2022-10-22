import React, {useState} from "react";
import {Button, Form, Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import Axios from "axios";


function AddPayments(props) {

    const [studentID, setStudentID] = useState("");
    const [studentName, setStudentName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [email, setEmail] = useState("");
    const [registeredCourse, setRegisteredCourse] = useState("");
    const [paymentAmount, setPaymentAmount] = useState("");

    const [paymentSlip, setPaymentSlip] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    let [paymentsDate, setPaymentDate] = useState("");

    const fileChangeHandler = (event) => {
        setPaymentSlip(event.target.files[0]);
        setIsFilePicked(true);
    };

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

        if (!studentID || !studentName || !phoneNo || !registeredCourse || !paymentAmount || !paymentAmount || !isFilePicked) {
            return alert('fill all the fields first!')
        }

        const variables = {
            StudentID: studentID,
            StudentName: studentName,
            PhoneNo: phoneNo,
            Email:email,
            RegisteredCourse: registeredCourse,
            PaymentAmount:paymentAmount,
            PaymentSlip: paymentSlip.name,
            PaymentDate : paymentsDate,
            isApproved: false
        }

        const formData = new FormData();
        formData.append('file',paymentSlip);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        Axios.post('http://localhost:5001/pay/addPayment', variables)
            .then(response => {
                Axios.post("http://localhost:5001/pay/addPaymentSlip",formData,config)
                    .then(() => {
                        if (response.data.success) {
                            alert('Payment Slip Successfully Uploaded')
                            props.history.push('/')
                        } else {
                            alert('Failed to upload Payment Slip')
                        }

                    }).catch((error) => {
                    alert(error.message);
                });

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
                        required
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
                        type='email'
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

                    <label>*Upload Bank Slip :</label>
                    <Input
                        type={"file"}
                        name="file"
                        onChange={fileChangeHandler}
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

                    <Button style={{marginLeft: '300px',backgroundColor:'#4682b4'}} onClick={onSubmit}>
                        Submit
                    </Button>

                </Form>

            </div>

        </div>
    )
}

export default AddPayments;