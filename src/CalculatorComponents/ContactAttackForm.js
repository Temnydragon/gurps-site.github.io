import React, { Component } from 'react';
import HitZone from './HitZone';

class ContactAttackForm extends Component {
    constructor(props) {
        super(props)
        this.state = {modifierZone: '0', attackType: 'base-attack', nonMainhandCheck: false}
        this.handleAttackTypeChange = this.handleAttackTypeChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlenonMainhandCheck = this.handlenonMainhandCheck.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        //this.setState(this.computeDiceRollResult)
    }

    handleAttackTypeChange(event){
      this.setState({
        attackType : event.target.value
      })
    }

    handleRadioZoneChange = e => { 
        this.setState({ modifierZone: e.target.value }) 
        this.setState(this.ComputEffectiveSkill)
    };
    
    handlenonMainhandCheck(event) {
        if(this.state.nonMainhandCheck === true) {
            this.setState({nonMainhandCheck : false})
        }
        else {
            this.setState({nonMainhandCheck : true})
        }

        /*const { nonMainhandCheck } = this.state
        alert (`
            Well : ${nonMainhandCheck}
        `)*/
        //this.setState({nonMainhandCheck : !event.target.checked})
    }

    render() {
        return (
        <form className='form-block' onSubmit={this.handleSubmit}>
            <section className='main-content--box topmargin'>
                <h1 className="text-style--title textblock-center">Калькулятор GURPS</h1>
                <p className='text-style--maintext main-content--text bordernone textlinebreak'>
                    {'**всплывающее окно с подсказкой по модулю Контактных атак'}
                </p>
            </section>

            <section className='calculator-box'>
                <div className='borderedbottom-block'>
                    <div className="skill-box">
                        <label for="basikskill-id" className="text-style--maintext textblock-center">Базовое умение персонажа</label>
                        <input className="text-style--maintext" type="number" name="basikskill" id="basikskill-id" value={this.state.basikskill} onChange={this.handleChange}/>
                    </div>
                </div>

                <h2 className="text-style--subtitle">Тип атаки</h2>

                <select className='select-css' value={this.state.attackType} onChange={this.handleAttackTypeChange}>
                    <option value="base-attack">Атака</option>
                    <option value="move-and-attack">Движение и атака</option>
                    <option value="all-out-attack-accurate">Тотальная атака (точная)</option>
                    <option value="all-out-attack-double">Тотальная атака (двойная)</option>
                    <option value="all-out-attack-strong">Тотальная атака (сильная)</option>
                </select>

                <h2 className="text-style--subtitle borderedtop-subtitle">Модификаторы атаки</h2>

                <section className='gridcontainer-contactmodifiers'>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <input type='checkbox' checked={this.state.nonMainhandCheck} name='non-mainhand-checkbox' id='non-mainhand-checkbox-id' onChange={this.handlenonMainhandCheck}/>
                        <label htmlFor='non-mainhand-checkbox-id' className='text-style--maintext'>
                            Атака не основной рукой
                        </label>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <input type='checkbox' checked={this.state.nonMainhandCheck} name='non-mainhand-checkbox' id='non-mainhand-checkbox-id' onChange={this.handlenonMainhandCheck}/>
                        <label htmlFor='non-mainhand-checkbox-id' className='text-style--maintext'>
                            Серьёзный отвлекающий фактор
                        </label>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <input type='checkbox' checked={this.state.nonMainhandCheck} name='non-mainhand-checkbox' id='non-mainhand-checkbox-id' onChange={this.handlenonMainhandCheck}/>
                        <label htmlFor='non-mainhand-checkbox-id' className='text-style--maintext'>
                            Серьёзный отвлекающий фактор
                        </label>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <input type='checkbox' checked={this.state.nonMainhandCheck} name='non-mainhand-checkbox' id='non-mainhand-checkbox-id' onChange={this.handlenonMainhandCheck}/>
                        <label htmlFor='non-mainhand-checkbox-id' className='text-style--maintext'>
                            Умеренный отвлекающий фактор
                        </label>
                    </div>
                </section>

                <h2 className="text-style--subtitle borderedtop-subtitle">Зона попадания</h2>

                <section className="gridcontainer-allhitzones">
                    <div>
                    <HitZone zoneId={'eyeszone-id'} zoneValue={'-9'} labelText={'Глаза'} checkFlag={false} onRadioClick={this.handleRadioZoneChange}/>
                    <HitZone zoneId={'skullzone-id'} zoneValue={'-7'} labelText={'Череп'} checkFlag={false} onRadioClick={this.handleRadioZoneChange}/>
                    <HitZone zoneId={'facezone-id'} zoneValue={'-5'} labelText={'Лицо'} checkFlag={false} onRadioClick={this.handleRadioZoneChange}/>
                    <HitZone zoneId={'neckzone-id'} zoneValue={'-5'} labelText={'Шея'} checkFlag={false} onRadioClick={this.handleRadioZoneChange}/>
                    <HitZone zoneId={'torsozone-id'} zoneValue={'0'} labelText={'Торс'} checkFlag={false} onRadioClick={this.handleRadioZoneChange}/>
                    <HitZone zoneId={'organszone-id'} zoneValue={'-3'} labelText={'Органы'} checkFlag={false} onRadioClick={this.handleRadioZoneChange}/>
                    </div>
                    <div>
                    <HitZone zoneId={'armzone-id'} zoneValue={'-2'} labelText={'Рука'} checkFlag={false} onRadioClick={this.handleRadioZoneChange}/>
                    <HitZone zoneId={'handzone-id'} zoneValue={'-4'} labelText={'Кисть'} checkFlag={false} onRadioClick={this.handleRadioZoneChange}/>
                    <HitZone zoneId={'groinzone-id'} zoneValue={'-3'} labelText={'Пах'} checkFlag={false} onRadioClick={this.handleRadioZoneChange}/>
                    <HitZone zoneId={'legzone-id'} zoneValue={'-2'} labelText={'Нога'} checkFlag={false} onRadioClick={this.handleRadioZoneChange}/>
                    <HitZone zoneId={'feetzone-id'} zoneValue={'-4'} labelText={'Ступня'} checkFlag={false} onRadioClick={this.handleRadioZoneChange}/>
                    </div>
                </section>
                
                <h2 className="text-style--subtitle borderedtop-subtitle" >Результат</h2>

                <div>
                    <div className="skill-box" >
                        <label for="effectiveskill-id" className="text-style--maintext textblock-center">Эффективное умение персонажа</label>
                        <input className="text-style--maintext" type="number" name="effectiveskill" id="effectiveskill-id" value={this.state.effectiveskill} readOnly />
                    </div>
                    <div className="diceroll-box">
                        <button type="submit" name="dicerollbutton" id="dicerollbutton-id" className="text-style--buttontext">Бросок успеха</button>
                        <output name="dicerollresult" id="dicerollresult-id" className="text-style--maintext textblock-center">{this.state.diceRollResult}</output>
                    </div>
                </div>
            </section>
        </form>
        )
    }
}

export default ContactAttackForm;