import React, {useState} from "react";
import {Button, Form, Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import Axios from "axios";


function AddInquiry(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [inquiryCategory, setInquiryCategory] = useState("");
    const [inquiry, setInquiry] = useState("");
    const [studentID, setStudentID] = useState("");


    const onFirstNameChange = (event) => {
        setFirstName(event.currentTarget.value)
    }

    const onLastNameChange = (event) => {
        setLastName(event.currentTarget.value)
    }

    const onPhoneChange = (event) => {
        setPhone(event.currentTarget.value)
    }
    const onEmailChange = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onInquiryCategoryChange = (event) => {
        setInquiryCategory(event.currentTarget.value)
    }
    const onInquiryChange = (event) => {
        setInquiry(event.currentTarget.value)
    }

    const onStudentIDChange = (event) => {
        setStudentID(event.currentTarget.value)
    }


    const onSubmit = (event) => {
        event.preventDefault();

        if (!firstName || !lastName || !phone || !email || !inquiryCategory || !inquiry) {
            return alert('fill all the fields first!')
        }

        const variables = {
            StudentID: studentID,
            FirstName: firstName,
            LastName: lastName,
            PhoneNumber:phone,
            Email: email,
            InquiryCategory:inquiryCategory,
            Inquiry: inquiry,
            isRespond: false
        }

        Axios.post('http://localhost:5001/inquiry/addInquiry', variables)
            .then(response => {
                        if (response.data.success) {
                            alert('Inquiry  Successfully Uploaded')
                            props.history.push('/')
                        } else {
                            alert('Failed to upload Inquiry')
                        }

                    }).catch((error) => {
                    alert(error.message);
                });
    }

    return(
        <div style={{ width: '98%', margin: '6rem auto' }}>
            <div >
                <h1 style={{ textAlign: 'left' }}>  Inquiry Now </h1>
            </div>
            <hr/>

            <div style={{border: 'solid', width:'50%',  margin: '4rem auto'}}>
                <h2 style={{textAlign: "center"}}> Inquiry Form</h2>

                <hr/>

                <Form style={{ width: '50%', margin: '4rem auto'}} onSubmit={onSubmit} >

                    <label>*First Name :</label>
                    <Input
                        onChange={onFirstNameChange}
                        value={firstName}
                    />
                    <br />
                    <br />

                    <label>*Last Name :</label>
                    <Input
                        onChange={onLastNameChange}
                        value={lastName}
                    />
                    <br />
                    <br />

                    <label>*Phone Number :</label>
                    <Input
                        onChange={onPhoneChange}
                        value={phone}
                    />
                    <br />
                    <br />

                    <label>*Email :</label>
                    <Input
                        onChange={onEmailChange}
                        value={email}
                    />
                    <br />
                    <br />

                    <label>*Inquiry Category :</label>
                    <br/>
                    {/*<Input*/}
                    {/*    onChange={onRegisteredCourseChange}*/}
                    {/*    value={registeredCourse}*/}
                    {/*/>*/}
                    <select onChange={onInquiryCategoryChange}>
                        <option value={" "}>Select</option>
                        <option value={"Course Information"}>Course Information</option>
                        <option value={"Payments"}>Payments</option>
                        <option value={"Course related discussion"}>Course related discussion</option>
                        <option value={"Other"}>Other</option>
                    </select>
                    <br />
                    <br />

                    <label>*Student Id (optional) :</label>
                    <br/>
                    <input
                        onChange={onStudentIDChange}
                        value={studentID}
                    />
                    <br />
                    <br />

                    <label>*Inquiry :</label>
                    <TextArea
                        onChange={onInquiryChange}
                        value={inquiry}
                    />
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

export default AddInquiry;