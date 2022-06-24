import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Formik } from "formik";
import Grid from '@material-ui/core/Grid';

const Contacts = () => {

    const [successMessage, setSuccessMessage] = useState("")
    const serviceId = "service_hcc7f2h";
    const templateId = "template_iyntbcd";
    const userId = "user_pVWzOTDctaIp9le8gZc8Y";
    
    const onSubmit = (data) => {
        console.log(userId)
        emailjs.send(serviceId, templateId, {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            description: data.description
        },
            userId).then(() => {
                setSuccessMessage("Form sent successfully!")
            }).catch(err => console.error(`Something went wrong ${err}`));
    }

    return (
        <div className="contacts" id="contact">
            <h1 className="text-center">Contact me</h1>
            <p>Let's have a chat or a coffee!</p>
            <p>I will never share your personal information with anyone because I'm not a jerk.</p>
            <div className="success-message text-center">{successMessage}</div>
            <Grid container spacing={2}>

           <div className="container">
                <Formik
                    initialValues={{ name: "", email: "", phone: "", subject: "", description: "" }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        if (!values.name)
                        {
                            errors.name = 'Required';
                        } else if ( values.name.length > 20)
                        {
                            errors.name = "Must be less than 20 characters";
                        }

                        if(!values.phone)
                        {
                            errors.phone = 'Required';
                        } else if (values.phone.length > 11){
                            errors.phone = "Must be a valid phone number with no dashes ex. 1234567891";
                        }

                        if(!values.subject)
                        {
                            errors.subject = 'Required';
                        } else if(values.subject.length > 100)
                        {
                            errors.subject = "Must be less than 100 characters";
                        }

                        if(!values.description) 
                        {
                            errors.description = "Required";
                        } else if(values.description < 300)
                        {
                            errors.description = "Must be less than 300 characters";
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {onSubmit(values);}}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                        
                            <div className="row">
                
                                <div className="col-md-6 col-xs-12">

                                    <div className="text-center">

                                        <input type="text"
                                            id="name"
                                            className="form-control"
                                            placeholder="Name"
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                        <div className="line"></div>
                                    </div>
                                    <span className="error-message">{errors.name && touched.name && errors.name} </span>

                                    <div className="text-center">
                                        <input type="text"
                                            id="phone"
                                            className="form-control"
                                            placeholder="Phone Number"
                                            name="phone"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phone}
                                        />
                                        <div className="line"></div>
                                    </div>
                                    <span className="error-message">{errors.phone && touched.phone && errors.phone}</span>

                                    <div className="text-center">
                                        <input
                                            id="email"
                                            type="text"
                                            className="form-control"
                                            placeholder="Email Address"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        <div className="line"></div>
                                    </div>
                                    <span className="error-message">{errors.email && touched.email && errors.email}</span>

                                    <div className="text-center">
                                        <input
                                            id="subject"
                                            type="text"
                                            className="form-control"
                                            placeholder="Subject"
                                            name="subject"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.subject}
                                        />
                                                 <div className="line"></div>
                                    </div>
                                    <span className="error-message"> {errors.subject && touched.subject && errors.subject}</span>
                                </div>
  
                                <div className="col-md-6 col-xs-12">
                                    <div className="text-center">
                                        <textarea
                                            type="text"
                                            id="description"
                                            className="form-control"
                                            placeholder="Description"
                                            name="description"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.description}
                                        />
                                        <div className="line"></div>
                                    </div>
                                    <span className="error-message">{errors.description && touched.description && errors.description}</span>

                                    <div className="text-center"></div>
                                    <button className="btn-main-offer contact-btn" type="submit" disabled={isSubmitting}>Contact Me</button>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
                </div>
            </Grid>
        </div>
    )
}





export default Contacts
