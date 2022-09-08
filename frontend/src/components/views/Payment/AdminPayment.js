import React, {useState} from "react";
import {Button, Form, Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import Axios from "axios";


function AdminPayments(props) {

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
                    <input type="datetime-local" value={paymentDate} onChange={handleSelectDate} />
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

export default AdminPayments;