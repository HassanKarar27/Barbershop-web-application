import React from 'react'

interface IButton {
    title: string,
}
const Button: React.FC<IButton> = (props) => {
    return (
        <button className="
        border-0 p-4
         bg-slate-300
          text-slate-500
           hover:bg-blue-600
            hover:text-slate-100
            transition-all
            duration-500 rounded-md">
            { props.title}</button>
    );
}

export default Button;