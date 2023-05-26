import React from 'react';

class HitZone extends React.Component {
    render () {
        return (
            <div className="gridcontainer-hitzone">
                <input type="radio" name="zone" id={this.props.zoneId} value={this.props.zoneValue}  onChange={this.props.onRadioClick} />
                <label htmlFor={this.props.zoneId} className='text-style--maintext'>{this.props.labelText}</label>
                <p className='text-style--paragraphzonemodifier'>{this.props.zoneValue}</p>
            </div>
        )
    }
}

export default HitZone;