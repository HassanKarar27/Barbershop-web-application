import React from 'react';

interface IImageCard {
    title: string;
    textPreview: string;
    img: string;
}

const ImageCard: React.FC<IImageCard> = (props) => {

    return (
        <div className="w-full">
            <img src={props.img} width="100%" className={`border-1 object-cover object-center`} />
            <p>
                <p className=" font-semibold">{props.title}</p>
                {props.textPreview}
            </p>
        </div>
    )
}

export default ImageCard;