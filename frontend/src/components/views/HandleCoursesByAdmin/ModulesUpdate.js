import React, {useEffect, useState} from "react";
import {Button, Form, Input} from "antd";
import Axios from "axios";
import {useLocation} from "react-router-dom";



function ModulesUpdate(props) {

    const [ID,setID] = useState("");
    const [moduleNo,setModuleNo] = useState("");
    const [moduleName,setModuleName] = useState("");
    const [subject1, setSubject1] = useState("");
    const [subject2, setSubject2] = useState("");
    const [subject3, setSubject3] = useState("");
    const [subject4, setSubject4] = useState("");

    const location = useLocation();

    useEffect(() =>{
        setID(location.state.module._id)
        setModuleNo(location.state.module.moduleNo)
        setModuleName(location.state.module.moduleName)
        setSubject1(location.state.module.subject1)
        setSubject2(location.state.module.subject2)
        setSubject3(location.state.module.subject3)
        setSubject4(location.state.module.subject4)
    },[location])


    const onModuleNuChange = (event) => {
        setModuleNo(event.currentTarget.value)
    }

    const onModuleNameChange = (event) => {
        setModuleName(event.currentTarget.value)
    }
    const onSubject1Change = (event) => {
        setSubject1(event.currentTarget.value)
    }
    const onSubject2Change = (event) => {
        setSubject2(event.currentTarget.value)
    }
    const onSubject3Change = (event) => {
        setSubject3(event.currentTarget.value)
    }
    const onSubject4Change = (event) => {
        setSubject4(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        // if (!studentID || !studentName || !phoneNo || !registeredCourse || !paymentAmount || !paymentAmount) {
        //     return alert('fill all the fields first!')
        // }

        const variables = {
            moduleNo: moduleNo,
            moduleName: moduleName,
            subject1: subject1,
            subject2:subject2,
            subject3: subject3,
            subject4:subject4
        }


        Axios.put(`http://localhost:5001/module/updateCourse/${ID}`, variables)
            .then(response => {
                if (response.data) {
                    alert('Conference Successfully Edited')
                    props.history.push('/ViewAllModules')
                } else {
                    alert('Failed to edit Conference')
                }
            })

    }

    return(
        <div style={{ width: '98%', margin: '6rem auto' }}>
            <div >
                <h1 style={{ textAlign: 'left' }}>  Update User Details </h1>
            </div>
            <hr/>

            <div style={{border: 'solid', width:'50%',  margin: '4rem auto'}}>
                <Form style={{ width: '50%', margin: '4rem auto'}} onSubmit={onSubmit} >

                    <label>*Course ID :</label>
                    <Input
                        onChange={onModuleNuChange}
                        value={moduleNo}
                    />
                    <br />
                    <br />

                    <label>*Course Name :</label>
                    <Input
                        onChange={onModuleNameChange}
                        value={moduleName}
                    />
                    <br />
                    <br />

                    <label>*Subject 1 :</label>
                    <Input
                        onChange={onSubject1Change}
                        value={subject1}
                    />
                    <br />
                    <br />

                    <label>*Subject 2 :</label>
                    <Input
                        onChange={onSubject2Change}
                        value={subject2}
                    />
                    <br />
                    <br />

                    <label>*Subject 3  :</label>
                    <Input
                        onChange={onSubject3Change}
                        value={subject3}
                    />
                    <br />
                    <br />

                    <label>*Subject 4  :</label>
                    <Input
                        onChange={onSubject4Change}
                        value={subject4}
                    />

                    <br />
                    <br />


                    <Button style={{marginLeft: '300px'}} onClick={onSubmit}>
                        Update
                    </Button>

                </Form>

            </div>

        </div>
    )
}

export default ModulesUpdate;