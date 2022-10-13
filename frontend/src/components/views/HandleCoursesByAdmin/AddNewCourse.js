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
                                alert('Course  Successfully Added')
                                props.history.push('/')
                            } else {
                                alert('Failed to add Course')
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
                        <div className="" style={{ width: '80%', margin: '6rem auto',border: '5px solid red' }}>
                            <Form style={{ width: '60%',marginLeft:'220px', alignItems: 'center'}} {...formItemLayout} onSubmit={handleSubmit} >

                                <Form.Item style={{}} required label="Course ID">
                                    <Input
                                        id="moduleNo"
                                        placeholder="Enter Course ID"
                                        type="text"
                                        value={values.moduleNo}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.moduleNo && touched.moduleNo ? 'text-input error' : 'text-input'
                                        }
                                    />
                                    {errors.moduleNo && touched.moduleNo && (
                                        <div className="input-feedback">{errors.moduleName}</div>
                                    )}
                                </Form.Item>

                                <Form.Item required label="Course Name">
                                    <Input
                                        id="moduleName"
                                        placeholder="Enter Course Name"
                                        type="text"
                                        value={values.moduleName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.moduleName && touched.moduleName ? 'text-input error' : 'text-input'
                                        }
                                    />
                                    {errors.moduleName && touched.moduleName && (
                                        <div className="input-feedback">{errors.moduleName}</div>
                                    )}
                                </Form.Item>

                                <Form.Item required label="Subject 1">
                                    <Input
                                        id="subject1"
                                        placeholder="Enter subject 1"
                                        type="text"
                                        value={values.subject1}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.subject1 && touched.subject1 ? 'text-input error' : 'text-input'
                                        }
                                    />
                                    {errors.subject1 && touched.subject1 && (
                                        <div className="input-feedback">{errors.subject1}</div>
                                    )}
                                </Form.Item>

                                <Form.Item required label="Subject 2">
                                    <Input
                                        id="subject2"
                                        placeholder="Enter contactNumber"
                                        type="text"
                                        value={values.subject2}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.subject2 && touched.subject2 ? 'text-input error' : 'text-input'
                                        }
                                    />
                                    {errors.subject2 && touched.subject2 && (
                                        <div className="input-feedback">{errors.subject2}</div>
                                    )}
                                </Form.Item>

                                <Form.Item required label="Subject 3">
                                    <Input
                                        id="subject3"
                                        placeholder="Enter contactNumber"
                                        type="text"
                                        value={values.subject3}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.subject3 && touched.subject3 ? 'text-input error' : 'text-input'
                                        }
                                    />
                                    {errors.subject3 && touched.subject3 && (
                                        <div className="input-feedback">{errors.subject3}</div>
                                    )}
                                </Form.Item>

                                <Form.Item required label="Subject 4">
                                    <Input
                                        id="subject4"
                                        placeholder="Enter contactNumber"
                                        type="text"
                                        value={values.subject4}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.subject4 && touched.subject4 ? 'text-input error' : 'text-input'
                                        }
                                    />
                                    {errors.subject4 && touched.subject4 && (
                                        <div className="input-feedback">{errors.subject4}</div>
                                    )}
                                </Form.Item>

                                <Form.Item {...tailFormItemLayout}>
                                    <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                                        Register
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                );
            }}
        </Formik>
    );
};

export default withRouter(LecturerRegPage);
