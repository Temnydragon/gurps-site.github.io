import React, { Component } from 'react';
import './ImageStyles.css'

function Annotation (props) {
    return (
        <>
            <div className='gridcontainer-annotationblock'>
                <section className='gridcontainer--mainimagetext'>
                    <h1 className='text-style--mainimage_title'>{props.hText}</h1>
                    <p className='text-style--mainimage_text textlinebreak'>{props.description}</p>
                </section>
                <img className="image-style--mainimage" src={props.image} alt={props.altText} title={props.TitleText}></img>
            </div>
        </>
    )
}

export default Annotation