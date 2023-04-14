import React, { Component } from 'react';
import HitZone from './HitZone';

class ContactAttackForm extends Component {
    constructor(props) {
        super(props)
        this.state = {basikskill:10, effectiveskill:10, attackType: 'base-attack', nonMainhandCheck: false, isCapturedCheck: false, bigShieldHold: false, evaluateModifier:0, shockModifier:0, modifierZone: '0'}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlenonMainhandCheck = this.handlenonMainhandCheck.bind(this)
        this.handleCapture = this.handleCapture.bind(this)
        this.handleShieldHold = this.handleShieldHold.bind(this)
        this.handleAttackTypeChange = this.handleAttackTypeChange.bind(this)
        this.handleEvaluate = this.handleEvaluate.bind(this)
        this.handleShock = this.handleShock.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        //this.setState(this.computeDiceRollResult)
    }

    handleChange(event){
        this.setState({
          [event.target.name] : event.target.value
        })
  
        this.setState(this.ComputEffectiveSkill)
    }
  
    ComputEffectiveSkill(state) {
        let notMainHandValue = 0;
        let isCapturedValue = 0;
        let bigShieldHoldValue = 0;

        if(state.nonMainhandCheck) {
            notMainHandValue = -4;
        }

        if(state.isCapturedCheck) {
            isCapturedValue = -4;
        }

        if(state.bigShieldHold) {
            bigShieldHoldValue = -2;
        }

        return {
          effectiveskill: parseInt(state.basikskill) + parseInt(state.modifierZone) + parseInt(state.evaluateModifier) + parseInt(state.shockModifier) + notMainHandValue + isCapturedValue + bigShieldHoldValue
        };
    }

    handleAttackTypeChange(event){
      this.setState({
        attackType : event.target.value
      })
    }
    
    handlenonMainhandCheck(event) {
        if(this.state.nonMainhandCheck === true) {
            this.setState({nonMainhandCheck : false})
        }
        else {
            this.setState({nonMainhandCheck : true})
        }

        this.setState(this.ComputEffectiveSkill)
    }

    handleCapture() {
        if(this.state.isCapturedCheck === true) {
            this.setState({isCapturedCheck : false})
        }
        else {
            this.setState({isCapturedCheck : true})
        }

        this.setState(this.ComputEffectiveSkill)
    }

    handleShieldHold() {
        if(this.state.bigShieldHold === true) {
            this.setState({bigShieldHold : false})
        }
        else {
            this.setState({bigShieldHold : true})
        }

        this.setState(this.ComputEffectiveSkill)
    }

    handleEvaluate(event) {
        this.setState({
            evaluateModifier : event.target.value
        })
        
        this.setState(this.ComputEffectiveSkill)
    }

    handleShock(event) {
        this.setState({
            shockModifier : event.target.value
        })
        
        this.setState(this.ComputEffectiveSkill)
    }

    handleRadioZoneChange = e => { 
        this.setState({ modifierZone: e.target.value }) 
        this.setState(this.ComputEffectiveSkill)
    };

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

                <h2 className="text-style--subtitle">Тип и особенности атаки</h2>

                <select className='select-css' value={this.state.attackType} onChange={this.handleAttackTypeChange}>
                    <option value="base-attack">Атака</option>
                    <option value="move-and-attack">Движение и атака</option>
                    <option value="all-out-attack-accurate">Тотальная атака (точная)</option>
                    <option value="all-out-attack-double">Тотальная атака (двойная)</option>
                    <option value="all-out-attack-strong">Тотальная атака (сильная)</option>
                </select>

                <h2 className="text-style--attackercondition">Основные модификаторы</h2>

                <section className='gridcontainer-contactmodifiers'>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='non-mainhand-checkbox-id' className='text-style--checkboxlabel'>
                            Атака не основной рукой (штраф -4)
                        </label>
                        <input type='checkbox' checked={this.state.nonMainhandCheck} name='non-mainhand-checkbox' id='non-mainhand-checkbox-id' onChange={this.handlenonMainhandCheck}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='captured-checkbox-id' className='text-style--checkboxlabel'>
                            Атакующий схвачен (штраф -4)
                        </label>
                        <input type='checkbox' checked={this.state.isCapturedCheck} name='captured-checkbox' id='captured-checkbox-id' onChange={this.handleCapture}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='bigshield-checkbox-id' className='text-style--checkboxlabel'>
                            Держит большой щит (штраф -2)
                        </label>
                        <input type='checkbox' checked={this.state.bigShieldHold} name='bigshield-checkbox' id='bigshield-checkbox-id' onChange={this.handleShieldHold}/>
                    </div>

                    <h3 className='text-style--attackercondition'>Факторы предыдущих ходов</h3>

                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='evaluate-id' className='text-style--checkboxlabel'>
                            Оценка противника (от 0 до +3)
                        </label>
                        <select className='smallselect' id='evaluate-id' value={this.state.evaluateModifier} onChange={this.handleEvaluate}>
                            <option value="0">+0</option>
                            <option value="1">+1</option>
                            <option value="2">+2</option>
                            <option value="3">+3</option>
                        </select>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='shock-id' className='text-style--checkboxlabel'>
                            Шок от травмы (от 0 до -4)
                        </label>
                        <select className='smallselect' id='shock-id' value={this.state.shockModifier} onChange={this.handleShock}>
                            <option value="0">+0</option>
                            <option value="-1">-1</option>
                            <option value="-2">-2</option>
                            <option value="-3">-3</option>
                            <option value="-4">-4</option>
                        </select>
                    </div>

                    <h3 className='text-style--attackercondition'>Поза атакующего</h3>

                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='standing-pose-id' className='text-style--checkboxlabel'>
                        Стоя (нет штрафа)
                        </label>
                        <input type='radio' checked={this.state.nonMainhandCheck} name='pose' id='standing-pose-id' onChange={this.handlenonMainhandCheck}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='sitting-pose-id' className='text-style--checkboxlabel'>
                        На коленях, сидя или присев (-2)
                        </label>
                        <input type='radio' checked={this.state.nonMainhandCheck} name='pose' id='sitting-pose-id' onChange={this.handlenonMainhandCheck}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='lying-pose-id' className='text-style--checkboxlabel'>
                        Ползком или лёжа (-4)
                        </label>
                        <input type='radio' checked={this.state.nonMainhandCheck} name='pose' id='lying-pose-id' onChange={this.handlenonMainhandCheck}/>
                    </div>

                    <h3 className='text-style--attackercondition'>Внешние факторы</h3>

                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='non-mainhand-checkbox-id' className='text-style--checkboxlabel'>
                        Серьёзный отвлекающий фактор (-3)
                        </label>
                        <input type='radio' checked={this.state.nonMainhandCheck} name='non-mainhand-checkbox' id='non-mainhand-checkbox-id' onChange={this.handlenonMainhandCheck}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='non-mainhand-checkbox-id' className='text-style--checkboxlabel'>
                        Умеренный отвлекающий фактор (-2)
                        </label>
                        <input type='radio' checked={this.state.nonMainhandCheck} name='non-mainhand-checkbox' id='non-mainhand-checkbox-id' onChange={this.handlenonMainhandCheck}/>
                    </div>

                    <h3 className='text-style--attackercondition'>Внутренние факторы</h3>

                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='middle-pain-id' className='text-style--checkboxlabel'>
                        Умеренная боль (-2)
                        </label>
                        <input type='radio' checked={this.state.nonMainhandCheck} name='pain' id='middle-pain-id' onChange={this.handlenonMainhandCheck}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='high-pain-id' className='text-style--checkboxlabel'>
                        Серьёзная боль (-4)
                        </label>
                        <input type='radio' checked={this.state.nonMainhandCheck} name='pain' id='high-pain-id' onChange={this.handlenonMainhandCheck}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='terrible-pain-id' className='text-style--checkboxlabel'>
                        Ужасная боль (-6)
                        </label>
                        <input type='radio' checked={this.state.nonMainhandCheck} name='pain' id='terrible-pain-id' onChange={this.handlenonMainhandCheck}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='nausea-id' className='text-style--checkboxlabel'>
                        Тошнота (-2)
                        </label>
                        <input type='checkbox' checked={this.state.nonMainhandCheck} name='nausea' id='nausea-id' onChange={this.handlenonMainhandCheck}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='drunk-id' className='text-style--checkboxlabel'>
                        Опьянение (-2)
                        </label>
                        <input type='checkbox' checked={this.state.nonMainhandCheck} name='drunk' id='drunk-id' onChange={this.handlenonMainhandCheck}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='euphoria-id' className='text-style--checkboxlabel'>
                        Эйфория (-3)
                        </label>
                        <input type='checkbox' checked={this.state.nonMainhandCheck} name='euphoria' id='euphoria-id' onChange={this.handlenonMainhandCheck}/>
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
                    <HitZone zoneId={'armorslit-id'} zoneValue={'-8'} labelText={'Щели брони'} checkFlag={false} onRadioClick={this.handleRadioZoneChange}/>
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