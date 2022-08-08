import React from 'react'

interface IInput {
    type: 'text' | 'password' | 'tel' | 'email';
    className?: string
    name: string;
    value?: string;
    placeholder?: string;
    error?: string;

}

const Input: React.FC<IInput> = (props) => {

    return (
        <div>
            <input
                type={props.type}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder ?? ""}
                className={`border-[1px] w-full border-slate-400 border-solid p-3 mb-1 text-center`}
            />
            <div>
                {props.error ?? ""}
            </div>
        </div>
    )
}

export default Input;