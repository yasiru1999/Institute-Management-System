import React, {useState} from "react";
import moment from "moment";
import Select from "react-select";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import {Form, Input, Button, Radio,} from 'antd';
import Axios from "axios";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const Gender = [
    {value:'Male',label:'Male'},
    {value:'Female',label:'Female'}
];

function LecturerRegPage(props) {

    const dispatch = useDispatch();

    const [gender, setGender] = useState('');

    const onChangeGender = ({ target: { value } }) => {
        console.log('radio1 checked', value);
        setGender(value);
    };

    return (

        <Formik

            initialValues={{
                moduleName: '',
                moduleNo: '',
                subject1: '',
                subject2: '',
                subject3: '',
                subject4: ''
            }}
            validationSchema={Yup.object().shape({
                moduleName: Yup.string()
                    .required('Course Name is required'),
                moduleNo: Yup.string()
                    .required('Course Number is required'),
                subject1: Yup.string()
                    .required('subject 1 is required'),
                subject2: Yup.string()
                    .required('subject 2 is required'),
                subject3: Yup.string()
                    .required('subject 3 is required'),
                subject4: Yup.string()
                    .required('subject 4 is required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {

                    let dataToSubmit = {
                        moduleName: values.moduleName,
                        moduleNo: values.moduleNo,
                        subject1: values.subject1,
                        subject2: values.subject2,
                        subject3: values.subject3,
                        subject4: values.subject4,
                    };
                    console.log(dataToSubmit);
                    Axios.post('http://localhost:5001/module/addCourse', dataToSubmit)
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

                    setSubmitting(false);
                }, 500);
            }}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = props;
                return (
                    <div className="" style={{ width: '98%', margin: '6rem auto' }}>
                        <div>
                            <h1 style={{ textAlign: 'left' }}>  All Users </h1>
                        </div>
                        <hr/>
                        <Form style={{ width: '60%',marginLeft:'220px', alignItems: 'center'}} {...formItemLayout} onSubmit={handleSubmit} >

                            <Form.Item style={{}} required label="Course ID">
                                <Input
                                    id="UserID"
                                    placeholder="Enter Lecturer ID"
                                    type="text"
                                    value={values.UserID}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.UserID && touched.UserID ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.UserID && touched.UserID && (
                                    <div className="input-feedback">{errors.UserID}</div>
                                )}
                            </Form.Item>

                            <Form.Item required label="Course Name">
                                <Input
                                    id="name"
                                    placeholder="Enter Name"
                                    type="text"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.name && touched.name ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.name && touched.name && (
                                    <div className="input-feedback">{errors.name}</div>
                                )}
                            </Form.Item>

                            <Form.Item required label="Subject 1">
                                <Input
                                    id="registeredCourse"
                                    placeholder="Enter registeredCourse"
                                    type="text"
                                    value={values.registeredCourse}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.registeredCourse && touched.registeredCourse ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.registeredCourse && touched.registeredCourse && (
                                    <div className="input-feedback">{errors.registeredCourse}</div>
                                )}
                            </Form.Item>

                            <Form.Item required label="Subject 2">
                                <Input
                                    id="contactNumber"
                                    placeholder="Enter contactNumber"
                                    type="text"
                                    value={values.contactNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.contactNumber && touched.contactNumber ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.contactNumber && touched.contactNumber && (
                                    <div className="input-feedback">{errors.contactNumber}</div>
                                )}
                            </Form.Item>

                            <Form.Item required label="Subject 3">
                                <Input
                                    id="contactNumber"
                                    placeholder="Enter contactNumber"
                                    type="text"
                                    value={values.contactNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.contactNumber && touched.contactNumber ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.contactNumber && touched.contactNumber && (
                                    <div className="input-feedback">{errors.contactNumber}</div>
                                )}
                            </Form.Item>

                            <Form.Item required label="Subject 4">
                                <Input
                                    id="contactNumber"
                                    placeholder="Enter contactNumber"
                                    type="text"
                                    value={values.contactNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.contactNumber && touched.contactNumber ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.contactNumber && touched.contactNumber && (
                                    <div className="input-feedback">{errors.contactNumber}</div>
                                )}
                            </Form.Item>

                            <Form.Item {...tailFormItemLayout}>
                                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                                    Register
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
};

export default withRouter(LecturerRegPage);
