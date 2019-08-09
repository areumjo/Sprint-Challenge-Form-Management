import React from 'react';
import { Form, Field, withFormik } from 'formik';

const Registration = () => {
    return (
        <div className="register-form">
            <p>Register here</p>
            <Form>
                <Field type="text" name="username" placeholder="Username" />
                <Field type="password" name="password" placeholder="Paswword" />
            </Form>
        </div>
    )
}

const FormikForm = withFormik({

})(Registration)

export default FormikForm;