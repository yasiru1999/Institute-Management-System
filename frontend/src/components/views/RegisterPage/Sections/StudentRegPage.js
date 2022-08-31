import React from "react";
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { withRouter } from "react-router";
import { registerUser } from "../../../../_actions/user_actions";
import { useDispatch } from "react-redux";

import {
  Form,
  Input,
  Button,
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
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

function StudentRegPage(props) {
  const dispatch = useDispatch();
  return (

    <Formik

      initialValues={{
        StudentID: '',
        name: '',
        email: '',
        registeredCourse: '',
        contactNumber: '',
        Gender: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={Yup.object().shape({
        StudentID: Yup.string()
          .required('ID is required'),
        name: Yup.string()
          .required('Name is required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        registeredCourse: Yup.string()
            .required('Registered Course is required'),
        contactNumber: Yup.string()
            .required('Contact Number is required'),
        Gender: Yup.string()
            .required('Gender is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            StudentID: values.StudentID,
            name: values.name,
            email: values.email,
            registeredCourse: values.registeredCourse,
            contactNumber: values.contactNumber,
            Gender: values.Gender,
            password: values.password,
            // image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`
          };

          dispatch(registerUser(dataToSubmit)).then(response => {
            if (response.payload.success) {
              props.history.push("/login");
            } else {
              alert(response.payload.err.errmsg)
            }
          })

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
          <div className="">
            <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} >

              <Form.Item required label="Student ID">
                <Input
                  id="StudentID"
                  placeholder="Enter Student ID"
                  type="text"
                  value={values.StudentID}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.StudentID && touched.StudentID ? 'text-input error' : 'text-input'
                  }
                />
                {errors.StudentID && touched.StudentID && (
                  <div className="input-feedback">{errors.StudentID}</div>
                )}
              </Form.Item>

              <Form.Item required label="Name">
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

              <Form.Item required label="Email" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                <Input
                  id="email"
                  placeholder="Enter Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </Form.Item>

              <Form.Item required label="Registered Course">
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

              <Form.Item required label="contactNumber">
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

              <Form.Item required label="Gender">
                <Input
                    id="Gender"
                    placeholder="Enter Gender"
                    type="text"
                    value={values.Gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.Gender && touched.Gender ? 'text-input error' : 'text-input'
                    }
                />
                {errors.Gender && touched.Gender && (
                    <div className="input-feedback">{errors.Gender}</div>
                )}
              </Form.Item>


              <Form.Item required label="Password" hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              <Form.Item required label="Confirm" hasFeedback>
                <Input
                  id="confirmPassword"
                  placeholder="Enter your confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="input-feedback">{errors.confirmPassword}</div>
                )}
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default withRouter(StudentRegPage);
