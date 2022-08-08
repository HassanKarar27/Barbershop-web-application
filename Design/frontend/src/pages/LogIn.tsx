import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Footer from '../sections/Footer';
import HeaderSub from '../sections/HeaderSub';
import Section from '../sections/Section';
import { apiUrl } from '../api/api';

// import Notifier
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications, Store } from 'react-notifications-component'

import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { useMutation } from '@tanstack/react-query';



interface MyFormValues {
    username: string;
    password: string;
}



const LogIn = () => {

    // const navigate = useNavigate();

    // object validation form
    const SignInSchema = Yup.object({
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required')
    });

    // form fields initializer
    const initialValues: MyFormValues = { username: '', password: '' };

    const mutation = useMutation(async (login: MyFormValues) => {
        return await axios.post(`${apiUrl}/auth/signin/`, login);
    }, ({
        onSuccess: async (data, variables) => {
            //  await storage.saveToken(data.data);
            //  navigate("/home");
            console.log(data.data);
        },
        onError: (error, variable) => {
           // console.log(error);

            Store.addNotification({
                title: "Wonderful!",
                message: "teodosii@react-notifications-component",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              });
        }
    }));


    return (
        <div className="flex flex-col h-screen">
            <HeaderSub />

            <main className='grow' >

                <Section title='Enter your log in info'>
                    <div className="w-full pt-6 flex flex-row content-center justify-center">
                        {/* container start */}
                        <div className='text-left flex-1 text-slate-500'>
                            <p className='mb-2'><FaCheck className="inline" /> Access your appointments</p>
                            <p className='mb-2'><FaCheck className="inline" /> View your appointment history</p>
                            <p className='mb-2'><FaCheck className="inline" /> Manage all your current and future appointments in a single place</p>
                        </div>

                        {/* Formik stuff */}
                        <Formik
                            initialValues={initialValues}
                            validationSchema={SignInSchema}
                            onSubmit={async (values) => {

                                await mutation.mutateAsync({
                                    username: values.username,
                                    password: values.password
                                });
                            }}>

                            {({ errors, touched }) => (

                                <Form className='text-center flex flex-1 flex-col mx-1'>
                                    <Field
                                        placeholder='Enter your username'
                                        type={"text"}
                                        name={"username"}
                                        className="border-[1px] border-slate-400 border-solid p-3 mb-1 text-center"
                                    />
                                    {touched.username && errors.username && <div>{errors.username.toString()}</div>}

                                    <Field
                                        placeholder='Enter your password'
                                        type={"password"}
                                        name={"password"}
                                        className="border-[1px] border-slate-400 border-solid p-3 mb-2 text-center"
                                    />
                                    {touched.password && errors.password && <div>{errors.password.toString()}</div>}

                                    <br />

                                    <div className="flex flex-col gap-2 justify-center content-center">
                                        <Button title={'Log In'} type='submit' />
                                        <Link to={'register'} className={"w-full flex-1 hover:text-blue-500"}>Create an account</Link>
                                    </div>

                                </Form>
                            )}

                        </Formik>
                        {/* container ends */}
                    </div>

                </Section>
            </main>
            <Footer />
        </div>
    )
}

export default LogIn;