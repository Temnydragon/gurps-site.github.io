import React from 'react';

function HitZone (props){
        return (
            <div className="gridcontainer-hitzone">
                <input type="radio" name="zone" id={props.zoneId} value={props.zoneValue}  onChange={props.onRadioClick} />
                <label htmlFor={props.zoneId} className='text-style--maintext'>{props.labelText}</label>
                <p className='text-style--paragraphzonemodifier'>{props.zoneValue}</p>
            </div>
        )
}

export default HitZone;