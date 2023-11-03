import React, { useState } from "react";
import '../../styles/contact.css'
import emailjs from '@emailjs/browser'
import Response from "../Response";
import Loader from "../Loader";



export default function Contact() {

    const [responseMsg, setResponseMsg] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    async function submitHandler(event) {

        event.preventDefault();

        const data = {
            from_name: event.target.name.value,
            email_id: event.target.email.value,
            message: event.target.msg.value,
        };



        const S_id = import.meta.env.VITE_serviceId;
        const T_id = import.meta.env.VITE_templateId;
        const P_key = import.meta.env.VITE_publicKey;
        console.log('Hii i am at line no : 54')

        console.log('service id : ', T_id)


        setLoading(true);

        emailjs.send(S_id, T_id, data, P_key)
            .then(function (response) {

                console.log('Email sent:', response);
                event.target.name.value = '';
                event.target.email.value = '';
                event.target.msg.value = '';

                setIsSuccess(true);
                setResponseMsg('Successful! Your Message Sent');
                setTimeout(() => {
                    setIsSuccess(false);
                    setResponseMsg('');
                }, 5000);

            }, function (error) {
                console.error('Email error:', error);
                setIsSuccess(false);
                setResponseMsg('Failed! Error Occurred at my side');
            })
            .finally(() => {
                setLoading(false); // Hide the loader when the response is received
                setTimeout(() => {
                    setIsSuccess(false);
                    setResponseMsg('');
                }, 5000);
            });
    }


    return (
        <>
            <div className='contactt'>
                <h1>
                    Thanks for taking the time to reach <br /> out. How can We help you
                    today?
                </h1>
                {loading && <Loader load ={loading}/>}
                {isSuccess && <Response msg={responseMsg} cl={isSuccess} />}
                <div className='html_form'>
                    <form method="post" onSubmit={submitHandler} className='innerform'>
                        <div className='per_info'>
                            <div className='name'>
                                {" "}
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" required min='3' placeholder="John" />
                            </div>
                            <div className='email'>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" required min='5' placeholder="example@gmail.com" />
                            </div>
                        </div>
                        <div className='msg'>
                            <label htmlFor="msg">Message</label>
                            <textarea name="msg" id="msg" rows="5" required min='10' placeholder="Hi Hello..."></textarea>
                        </div>

                        <input type="submit" value="Submit" className='my_btn' />
                    </form>
                </div>
            </div>
        </>
    );
}
