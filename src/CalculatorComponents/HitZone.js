import React from 'react';

class HitZone extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({checked: true})
    }
    render () {
        return (
            <div class="gridcontainer-hitzone">
                <input type="radio" name="zone" id={this.props.zoneId} value={this.props.zoneValue} onChange={this.handleClick}/>
                <label for={this.props.zoneId} className='text-style--maintext'>{this.props.labelText}</label>
                <p className='text-style--paragraphzonemodifier'>{this.props.zoneValue}</p>
            </div>
        )
    }
}

export default HitZone;