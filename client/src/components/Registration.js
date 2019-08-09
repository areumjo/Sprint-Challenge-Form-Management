import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Registration = ({ values, touched, errors, status }) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
            console.log('Users info: ', users.filter(u => u.username.length>0))
        }
    }, [status]);
    
    // console.log('Users info: ', users.map(u => u.username))

    return (
        <div className="register-form">
            <h2>Register here</h2>
            <Form>
                <p className="form-content">Username: </p>
                    <Field type="text" name="username" placeholder="Username" />
                    {touched.username && errors.username && <p className="error">{errors.username}</p>}
                
                <p className="form-content">Passowrd: </p>
                    <Field type="password" name="password" placeholder="Paswword" />
                    {touched.password && errors.password && <p className="error">{errors.password}</p>}
                
                <button type="submit" data-testid="ok-button">Submit</button>
            </Form>
            {users.map(u => <p data-testid="ok-display" key={u.username}>{u.username}</p>)}
        </div>
    )
}

const FormikForm = withFormik({
    mapPropsToStatus(values) {
        return {
            username: values.username || '',
            password: values.password || ''
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().min(6, 'Password must be 6 characters or longer').required('Password is required')
    }),

    handleSubmit(values, { resetForm, setStatus, setErrors }) {
        console.log('Submit button clicked');
        axios.post("http://localhost:5000/api/register", values)
            .then(res => {
                console.log('API data: ', res.config.data);
                setStatus(JSON.parse(res.config.data));
                resetForm({})
            })
            .catch(err => console.log('API is down: ', err))
    }

})(Registration)

export default FormikForm;