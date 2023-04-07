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


/*
            <section class="gridcontainer-allhitzones">
                <div>
                  <HitZone zoneId={'eyeszone-id'} zoneValue={'-9'} labelText={'Глаза'} checkFlag={'false'} />
                  <HitZone zoneId={'skullzone-id'} zoneValue={'-7'} labelText={'Череп'} checkFlag={'false'} />
                  <HitZone zoneId={'facezone-id'} zoneValue={'-5'} labelText={'Лицо'} checkFlag={'false'} />
                  <HitZone zoneId={'neckzone-id'} zoneValue={'-5'} labelText={'Шея'} checkFlag={'false'} />
                  <HitZone zoneId={'torsozone-id'} zoneValue={'0'} labelText={'Торс'} checkFlag={'true'} />
                  <HitZone zoneId={'organszone-id'} zoneValue={'-3'} labelText={'Органы'} checkFlag={'false'} />
                </div>
                <div>
                  <HitZone zoneId={'armzone-id'} zoneValue={'-2'} labelText={'Рука'} checkFlag={'false'} />
                  <HitZone zoneId={'handzone-id'} zoneValue={'-4'} labelText={'Кисть'} checkFlag={'false'} />
                  <HitZone zoneId={'groinzone-id'} zoneValue={'-3'} labelText={'Пах'} checkFlag={'false'} />
                  <HitZone zoneId={'legzone-id'} zoneValue={'-2'} labelText={'Нога'} checkFlag={'false'} />
                  <HitZone zoneId={'feetzone-id'} zoneValue={'-4'} labelText={'Ступня'} checkFlag={'false'} />
                </div>
            </section>
*/