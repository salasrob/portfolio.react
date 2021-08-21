import React, {useState} from "react";
import emailjs, { send } from  "emailjs-com";
import {useForm} from "react-hook-form";

const Contacts = () => {

const [successMessage, setSuccessMessage] = useState("")
const { register, handleSubmit, errors } = useForm();
    

const serviceId=""
const templateId=""
const userId = ""

const onSubmit = (data, r )  =>{
emailjs.send(serviceId, templateId, {
    name:data.name,
    phone:data.phone,
    email:data.email,
    subject:data.subject,
    description:data.description
},
userId)
r.target.reset()
}

const sendEmail = (serviceId, templateId, variables, userId) =>{
    emailjs.sendForm(serviceId, templateId, variables, userId)
    .then(() => {
        setSuccessMessage("Form sent successfully!")
    })
    .catch( err => console.error(`Something went wrong ${err}`));

}


    return (
        <div className="contacts">
            <h1 className="text-center">Contact me</h1>
            <p>Please fill out the form and describe your project needs</p>
            <span className="success-message">{successMessage}</span>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">

                        <div className="text-center">

                        <input type="text"
                            id="name"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            {...register("name",{
                                     required:"Please enter a name",
                                     maxLength:{
                                         value:20,
                                         message:"Please enter a name with fewer than 20 characters"
                                     }
                                 })
                             }/>
                        <div className="line"></div>
                        </div>
{/* <span className="error-message">{errors.name && errors.name.message}</span> */}
                        <div className="text-center">
                        <input type="text"
                            id="phone"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone" 
                            {...register("name",{
                                required:"Please enter a name",
                                maxLength:{
                                    value:20,
                                    message:"Please enter a name with fewer than 20 characters"
                                }
                            })
                        }/>
                        <div className="line"></div>
                        </div>
                        {/* <span className="error-message">{errors.name && errors.name.message}</span> */}
                        <div className="text-center">
                        <input
                            id="email"
                            type="text"
                            className="form-control"
                            placeholder="Email Address"
                            name="email"
                            {...register("name",{
                                required:"Please enter a name",
                                maxLength:{
                                    value:20,
                                    message:"Please enter a name with fewer than 20 characters"
                                }
                            })
                        } />
                        <div className="line"></div>
                        </div>
                        {/* <span className="error-message">{errors.name && errors.name.message}</span> */}
                        <div className="text-center">
                        <input
                            id="subject"
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject" 
                            {...register("name",{
                                required:"Please enter a name",
                                maxLength:{
                                    value:20,
                                    message:"Please enter a name with fewer than 20 characters"
                                }
                            })
                        }/>
                    </div>
                    <div className="line"></div>
                    </div>
                    {/* <span className="error-message">{errors.name && errors.name.message}</span> */}
   
                    <div className="col-md-6 col-xs-12">
                    <div className="text-center">
                        <textarea
                            type="text"
                            id="description"
                            className="form-control"
                            placeholder="Description"
                            name="description"
                            {...register("name",{
                                required:"Please enter a name",
                                maxLength:{
                                    value:20,
                                    message:"Please enter a name with fewer than 20 characters"
                                }
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        {/* <span className="error-message">{errors.name && errors.name.message}</span> */}
                        <div className="text-center"></div>
                        <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                        
                    </div>
                    
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
