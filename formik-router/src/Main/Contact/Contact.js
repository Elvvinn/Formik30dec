import React from 'react'

import { Field, Form, Formik } from 'formik'
function Contact() {
    return (
        <>

            <Formik initialValues={{
                name: "",
                surname: "",
                email: "",
                about: "",
                phone: "",
            }}
                onSubmit={(values) => {

                    console.log(values);
                }}>

                {
                    (props) =>
                    (

                        <Form id='formforadded'>

                            <Field name="name" id="all" />  <br /> <br />
                            <Field name="surname" id="all" /> <br /> <br />
                            <Field name="email" id="all" /> <br /> <br />
                            <Field name="about" id="all" /> <br /> <br />
                            <Field name="phone" id="all" /> <br /> < br />
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }

            </Formik>

        </>
    )
}

export default Contact