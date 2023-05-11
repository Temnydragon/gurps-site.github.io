import React, { Component } from 'react';
import HitZone from './HitZone';
import FullAttackDescription from './AttackDescription';

class ContactAttackForm extends Component {
    constructor(props) {
        super(props)
        this.state = {basikskill:10, effectiveskill:10, attackType: 'base-attack', nonMainhandCheck: false, isCapturedCheck: false, bigShieldHold: false, evaluateModifier:0, shockModifier:0, pozeModifier:'0', distractionModifier:'0', painModifier:'0', nauseaModifier:'0', drunkModifier:'0', euphoriaModifier:'0', modifierZone: '0'}
        this.handleBasicSkillChange = this.handleBasicSkillChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlenonMainhandCheck = this.handlenonMainhandCheck.bind(this)
        this.handleCapture = this.handleCapture.bind(this)
        this.handleShieldHold = this.handleShieldHold.bind(this)
        this.handleAttackTypeChange = this.handleAttackTypeChange.bind(this)
        this.handleEvaluate = this.handleEvaluate.bind(this)
        this.handleShock = this.handleShock.bind(this)
        this.handlePozeChange = this.handlePozeChange.bind(this)
        this.handleDistractionChange = this.handleDistractionChange.bind(this)
        this.handlePainChange = this.handlePainChange.bind(this)
        this.handleNauseaCheckboxChange = this.handleNauseaCheckboxChange.bind(this)
        this.handleDrunkCheckboxChange = this.handleDrunkCheckboxChange.bind(this)
        this.handleEuphoriaCheckboxChange = this.handleEuphoriaCheckboxChange.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        this.setState(this.computeDiceRollResult)
    }

    handleBasicSkillChange(event){
        if(event.target.value > 100) {
            this.setState({
              [event.target.name] : 100
            })
        }
        else {
            this.setState({
              /*Проверка для устранения отрицательных значений*/
              [event.target.name] : (event.target.value === '' ? '' : (Math.abs(event.target.value) >= 0 ? Math.abs(event.target.value) : 0))
            })
        }
        this.setState(this.ComputEffectiveSkill)
    }
  
    ComputEffectiveSkill(state) {
        let AttackTypeValue = 0;
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

        if(state.attackType === 'all-out-attack-accurate') {
            AttackTypeValue = 4;
        }
        if(state.attackType === 'move-and-attack') {
            AttackTypeValue = -4;
        }
        return {
          effectiveskill: parseInt(state.basikskill) + AttackTypeValue + parseInt(state.modifierZone) + parseInt(state.evaluateModifier) + parseInt(state.shockModifier) + notMainHandValue + isCapturedValue + bigShieldHoldValue + parseInt(state.pozeModifier) + parseInt(state.distractionModifier) + parseInt(state.painModifier) + parseInt(state.nauseaModifier) + parseInt(state.drunkModifier) + parseInt(state.euphoriaModifier)
        };
    }

    handleAttackTypeChange(event){
      this.setState({
        attackType : event.target.value
      })
      this.setState(this.ComputEffectiveSkill)
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

    handlePozeChange(event) {
        this.setState({ pozeModifier : event.target.value })
        this.setState(this.ComputEffectiveSkill)
    }

    handleDistractionChange(event) {
        this.setState({ distractionModifier : event.target.value })
        this.setState(this.ComputEffectiveSkill)
    }

    handlePainChange(event) {
        this.setState({ painModifier : event.target.value })
        this.setState(this.ComputEffectiveSkill)
    }

    handleNauseaCheckboxChange(event) {
        if(this.state.nauseaModifier === '0') {
            this.setState({ nauseaModifier : event.target.value })
        }
        else {
            this.setState({ nauseaModifier : '0' })
        }
        this.setState(this.ComputEffectiveSkill)
    }

    handleDrunkCheckboxChange(event) {
        if(this.state.drunkModifier === '0') {
            this.setState({ drunkModifier : event.target.value })
        }
        else {
            this.setState({ drunkModifier : '0' })
        }
        this.setState(this.ComputEffectiveSkill)
    }

    handleEuphoriaCheckboxChange(event) {
        if(this.state.euphoriaModifier === '0') {
            this.setState({ euphoriaModifier : event.target.value })
        }
        else {
            this.setState({euphoriaModifier : '0' })
        }
        this.setState(this.ComputEffectiveSkill)
    }

    handleRadioZoneChange = e => { 
        this.setState({ modifierZone: e.target.value }) 
        this.setState(this.ComputEffectiveSkill)
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }

    computeDiceRollResult(state) {
        if(state.effectiveskill < 3) {
            return {
                diceRollResult: 'К сожалению, вам не удастся выполнить данную атаку из-за слишком низкого эффективного умения!'
              };
        }

        let outputValue = (this.getRandomInt(1, 7) + this.getRandomInt(1, 7) + this.getRandomInt(1, 7));
        if(outputValue <= 4) {
          return {
            diceRollResult: outputValue + (' (критический успех!' + ')')
          };
        }
        if(outputValue >= 17) {
          return {
            diceRollResult: outputValue + (' (критический провал!' + ')')
          };
        }
        
        if(state.effectiveskill - outputValue < 0) {
          return {
            diceRollResult: (outputValue + (' (провал на ' + (state.effectiveskill - outputValue)) + ')')
          };
        }
        else {
          return {
            diceRollResult: (outputValue + (' (успех на ' + (state.effectiveskill - outputValue)) + ')')
          };
        }
    }

    render() {
        return (
        <form className='form-block' onSubmit={this.handleSubmit}>
            <div id="openModal" className='modal'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h2 className='text-style--maintext'>Модуль метания предметов</h2>
                            <a href="#closeModal" title="Close" className='text-style--closebutton'>×</a>
                        </div>
                        <div className='modal-maintext'>
                            <p className='text-style--modalparagraph'>
                                {'Данный модуль ускоряет процесс расчётов успешности контактных атак по правилам GURPS.'}
                            </p>
                            <h3 className='text-style--modalparagraph'>
                                {'Важно:'}
                            </h3>
                            <p className='text-style--modalparagraph'>
                                {'Значения полей ввода веса предмета и силы персонажа должны быть в пределах от 1 до 1000000!'}
                                {'\n\nОба поля данной формы не должны содержать дробные значения (в случае ввода, дробная часть не будет учитываться в расчётах)!'}
                                {'\n\nСогласно правилам системы 1 фунт = 0,5 кг (в реальности это соотношение примерно равно 1 к 0,45). В книгах системы вес предметов обычно указан именно в фунтах. Если вы хотите определить вес предмета, зная его вес в кг, переведите кг в фунты и округлите вверх до целого числа перед вводом значения в поле формы.'}
                                {'\n\nДанный модуль не относится к расчёту дальности метания оружия (например, копья) так как специально сбалансированное метательное снаряжение может иметь собственные зависимости дальности от силы метателя.'}
                            </p>
                            <h3 className='text-style--modalparagraph'>
                                    {'Сила персонажа:'}
                            </h3>
                            <p className='text-style--modalparagraph'>
                                {'В данное поле нужно вводить числовое значение соответствующего атрибута конкретного персонажа, который пытается метнуть предмет. Подробнее про атрибуты можно почитать на странице "Механики игры" данного сайта или в книге правил системы.'}
                                {'\n(Найти перевод книги правил можно '}
                                <a  className="linkstyle--textlink" href="https://www.rulit.me/data/programs/resources/pdf/StivDzhekson_GURPS-4E-BasicSet(polnyyperevod)_RuLit_Me_389900.pdf">здесь</a>
                                {')'}
                            </p>
                            <h3 className='text-style--modalparagraph'>
                                {'Вес предмета:'}
                            </h3>
                            <p className='text-style--modalparagraph'>
                                {'В данное поле нужно вводить числовое значение веса предмета, который пытается метнуть персонаж.'}
                            </p>
                            <h3 className='text-style--modalparagraph'>
                                {'Результат:'}
                            </h3>
                            <p className='text-style--modalparagraph'>
                                {'Чтобы вычислить максимальную дальность метания, после ввода значений силы персонажа и метаемого предмета нажмите на кнопку "Вычислить дальность".'}
                                {'\nЕсли введённого значения силы персонажа недостаточно для метания предмета с указанным весом, будет атоматически выведено соответствующее сообщение ещё до нажатия кнопки.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section className='main-content--box'>
                <h1 className="text-style--title textblock-center">Модуль контактных атак</h1>
                <p className='text-style--maintext main-content--text bordernone textlinebreak textblock-center'>
                    {'Данный модуль призван помочь в расчётах контактных атак по правилам GURPS \n\nДля подробного ознакомления обратитесь к книге "Базовые правила: Кампании" \n(Глава "Бой", страница 362; Таблица боевых модификаторов, страница 547)'}
                </p>
            </section>

            <section className='calculator-box'>
                <a href='#openModal' className='question-button'>?</a>
                <div className='borderedbottom-block'>
                    <div className="skill-box">
                        <label htmlFor="basikskill-id" className="text-style--maintext textblock-center">Базовое умение персонажа</label>
                        <input className="text-style--maintext" type="number" name="basikskill" id="basikskill-id" value={this.state.basikskill} onChange={this.handleBasicSkillChange}/>
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
                        <select className='small-select' id='evaluate-id' value={this.state.evaluateModifier} onChange={this.handleEvaluate}>
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
                        <select className='small-select' id='shock-id' value={this.state.shockModifier} onChange={this.handleShock}>
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
                        <input type='radio' value='0' name='pose' id='standing-pose-id' checked={this.state.pozeModifier === '0' ? true : false} onChange={this.handlePozeChange}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='sitting-pose-id' className='text-style--checkboxlabel'>
                        На коленях, сидя или присев (-2)
                        </label>
                        <input type='radio' value='-2' name='pose' id='sitting-pose-id' checked={this.state.pozeModifier === '-2' ? true : false} onChange={this.handlePozeChange}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='lying-pose-id' className='text-style--checkboxlabel'>
                        Ползком или лёжа (-4)
                        </label>
                        <input type='radio' value='-4' name='pose' id='lying-pose-id' checked={this.state.pozeModifier === '-4' ? true : false} onChange={this.handlePozeChange}/>
                    </div>

                    <h3 className='text-style--attackercondition'>Внешние факторы</h3>
                    
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='no-distraction-id' className='text-style--checkboxlabel'>
                        Нет отвлекающих факторов (+0)
                        </label>
                        <input type='radio' value='0' name='no-distraction' id='no-distraction-id' checked={this.state.distractionModifier === '0' ? true : false} onChange={this.handleDistractionChange}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='medium-distraction-id' className='text-style--checkboxlabel'>
                        Умеренный отвлекающий фактор (-2)
                        </label>
                        <input type='radio' value='-2' name='medium-distraction' id='medium-distraction-id' checked={this.state.distractionModifier === '-2' ? true : false} onChange={this.handleDistractionChange}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='high-distraction-id' className='text-style--checkboxlabel'>
                        Серьёзный отвлекающий фактор (-3)
                        </label>
                        <input type='radio' value='-3' name='high-distraction' id='high-distraction-id' checked={this.state.distractionModifier === '-3' ? true : false} onChange={this.handleDistractionChange}/>
                    </div>

                    <h3 className='text-style--attackercondition'>Внутренние факторы</h3>

                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='no-pain-id' className='text-style--checkboxlabel'>
                        Нет постоянной боли (+0)
                        </label>
                        <input type='radio' name='pain' id='no-pain-id' value='0' checked={this.state.painModifier === '0' ? true : false} onChange={this.handlePainChange}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='middle-pain-id' className='text-style--checkboxlabel'>
                        Умеренная боль (-2)
                        </label>
                        <input type='radio' name='pain' id='middle-pain-id' value='-2' checked={this.state.painModifier === '-2' ? true : false} onChange={this.handlePainChange}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='high-pain-id' className='text-style--checkboxlabel'>
                        Серьёзная боль (-4)
                        </label>
                        <input type='radio' name='pain' id='high-pain-id' value='-4' checked={this.state.painModifier === '-4' ? true : false} onChange={this.handlePainChange}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='terrible-pain-id' className='text-style--checkboxlabel'>
                        Ужасная боль (-6)
                        </label>
                        <input type='radio' name='pain' id='terrible-pain-id' value='-6' checked={this.state.painModifier === '-6' ? true : false} onChange={this.handlePainChange}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='nausea-id' className='text-style--checkboxlabel'>
                        Тошнота (-2)
                        </label>
                        <input type='checkbox' value='-2' name='nausea' id='nausea-id' checked={this.state.nauseaModifier === '-2' ? true : false} onChange={this.handleNauseaCheckboxChange}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='drunk-id' className='text-style--checkboxlabel'>
                        Опьянение (-2)
                        </label>
                        <input type='checkbox' value='-2' name='drunk' id='drunk-id' checked={this.state.drunkModifier === '-2' ? true : false} onChange={this.handleDrunkCheckboxChange}/>
                    </div>
                    <div className='gridcontainer-contactmodifiers--checkbox'>
                        <label htmlFor='euphoria-id' className='text-style--checkboxlabel'>
                        Эйфория (-3)
                        </label>
                        <input type='checkbox' value='-3' name='euphoria' id='euphoria-id' checked={this.state.euphoriaModifier === '-3' ? true : false} onChange={this.handleEuphoriaCheckboxChange}/>
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
                    <FullAttackDescription attackTypeName={this.state.attackType} />
                </div>
                <div>
                    <div className="skill-box" >
                        <label htmlFor="effectiveskill-id" className="text-style--maintext textblock-center">Эффективное умение персонажа</label>
                        <input className="text-style--maintext" type="number" name="effectiveskill" id="effectiveskill-id" value={this.state.effectiveskill} readOnly />
                    </div>
                    <div className="diceroll-box">
                        <button type="submit" name="dicerollbutton" id="dicerollbutton-id" className="success-button text-style--buttontext">Бросок успеха</button>
                        <output name="dicerollresult" id="dicerollresult-id" className="text-style--maintext textblock-center">{this.state.diceRollResult}</output>
                    </div>
                </div>
            </section>
        </form>
        )
    }
}

export default ContactAttackForm;