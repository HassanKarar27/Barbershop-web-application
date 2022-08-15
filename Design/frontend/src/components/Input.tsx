import React from 'react';
import { ErrorMessage, Field, Form, Formik, FormikTouched } from 'formik';

interface IInput {
    type: 'text' | 'password' | 'tel' | 'email';
    className?: string
    name: string;
    placeholder?: string;
    error?: any;
    touch?: any
    errMessage?: string
}

const Input: React.FC<IInput> = (props) => {

    // "text-red-700 text-sm
    return (
        <div className={`w-full`}>
            <Field
                type={props.type}
                name={props.name}
                placeholder={props.placeholder ?? ""}
                className={`border-[1px] w-full border-slate-400 border-solid p-3 mb-1 text-center`}
            />
            {props.touch && props.error && <div className={"text-red-700 text-sm"}>{props.errMessage}</div>}
        </div>
    )
}

export default Input;