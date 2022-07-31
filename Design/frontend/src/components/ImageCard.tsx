import React from 'react';

interface IImageCard {
    title: string,
    textPreview: string,
    img: string
}

const ImageCard: React.FC<IImageCard> = (props) => {

    return (
        <div className="w-[310px]">
            <img src={props.img} width={"390px"} className={`border-2 rounded-lg`} />
            <p>
                <p className=" font-semibold">{props.title}</p>
                {props.textPreview}
            </p>
        </div>
    )
}

export default ImageCard;