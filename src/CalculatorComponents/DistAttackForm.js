import React, { Component } from 'react';
import HitZone from './HitZone';

class DistAttackForm extends Component {
    constructor(props) {
        super(props)
        this.state = { basikskill:10, distance:1, speed:0, size:0, accuracy:0, shots:1, zone:0, effectiveskill:10, modifierDistAndSpeed:'+0', modifierSize:'+0', modifierAccuracy:'+0', modifierShots:'+0', modifierZone:'0'}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDistAndSpeedChange = this.handleDistAndSpeedChange.bind(this)
        this.handleSizeChange = this.handleSizeChange.bind(this)
        this.handleAccuracyChange = this.handleAccuracyChange.bind(this)
        this.handleShotsChange = this.handleShotsChange.bind(this)
        this.handleRadioZoneChange = this.handleRadioZoneChange.bind(this)
    }

////////
    handleRadioZoneChange = e => this.setState({ modifierZone: e.target.value });
///////

    // Form submitting logic, prevent default page refresh 
    handleSubmit(event){
        const { basikskill, distance, speed, size, accuracy, shots, effectiveskill, modifierZone } = this.state
        event.preventDefault()

        alert(`
        ____Your Details____\n
        Basikskill : ${basikskill}
        Distance : ${distance}
        Speed : ${speed}
        Size : ${size}
        Accuracy : ${accuracy}
        Shots : ${shots}
        EffectSkill : ${effectiveskill}
        ModZone : ${modifierZone}
        `)
    }

    
    handleChange(event){
      this.setState({
        // Computed property names
        // keys of the objects are computed dynamically
        [event.target.name] : event.target.value
      })

      this.setState(this.ComputEffectiveSkill)
    }

    ComputEffectiveSkill(state) {
      return {
        effectiveskill: parseInt(state.basikskill) + parseInt(state.modifierSize) + parseInt(state.modifierAccuracy) + parseInt(state.modifierDistAndSpeed) + parseInt(state.modifierShots)
      };
    }

    ComputSizeModifier (state) {
      if((state.size) == '') {
        return {
          modifierSize : '+0'
        };
      }
      if(parseInt(state.size) >= 0) {
        return {
          modifierSize : '+' + parseInt(state.size)
        };
      }
      return {
        modifierSize : parseInt(state.size)
      };
    }

    ComputAccuracyModifier (state) {
      if((state.accuracy) == '') {
        return {
          modifierAccuracy : '+0'
        };
      }
      if(parseInt(state.accuracy) >= 0) {
        return {
          modifierAccuracy : '+' + parseInt(state.accuracy)
        };
      }
      return {
        modifierAccuracy : parseInt(state.accuracy)
      };
    }

    ComputShotsModifier (state) {
      let shotsModifierValue = '';

      if((state.shots) == '' || parseInt((state.shots)) <= 0) {
        return {
          modifierShots : '+0'
        };
      }
      if(parseInt(state.shots) > 0) {
        if(parseInt(state.shots) <= 16) {
          return {
            modifierShots : '+' + parseInt((parseInt(state.shots) - 1) / 4)
          };
        }
        if(parseInt(state.shots) >= 17) {
          shotsModifierValue = '+4'
        }
        if(parseInt(state.shots) >= 25) {
          shotsModifierValue = '+5'
        }
        if(parseInt(state.shots) >= 50) {
          shotsModifierValue = '+6'
        }
        if(parseInt(state.shots) >= 100) {
          shotsModifierValue = '+7'
        }
      }
      return {
        modifierShots : shotsModifierValue
      };
    }

    ComputeDistSpeedModifier(state) {
      const DistSpeedNumbers = [2, 3, 5, 7, 10, 15, 20, 30, 50, 70, 100, 150, 200, 300, 500, 700, 1000, 1500, 2000, 3000, 5000];
      let DistanceAndSpeedValue = parseInt(state.distance) + parseInt(state.speed);

      if((state.distance) == '') {
        DistanceAndSpeedValue =  parseInt(state.speed)
      }

      if((state.speed) == '') {
        DistanceAndSpeedValue =  parseInt(state.distance)
      }

      if(DistanceAndSpeedValue == '') {
        return {
          modifierDistAndSpeed: '+0'
        }; 
      }

      let DistSpeedModifier = 0;
      for (let i = 0; i < DistSpeedNumbers.length; i++) {
        if (DistanceAndSpeedValue > DistSpeedNumbers[i]) {
          DistSpeedModifier--;
        }
      }
      
      if(DistSpeedModifier == 0) {
        return {
          modifierDistAndSpeed: '+0'
        }
      }
      return {
        modifierDistAndSpeed:  DistSpeedModifier
      };
    }

    handleDistAndSpeedChange(event){

      this.setState({
        [event.target.name] : event.target.value
      })

      this.setState(this.ComputeDistSpeedModifier)
      this.setState(this.ComputEffectiveSkill)
    }

    handleSizeChange(event){

      this.setState({
        [event.target.name] : event.target.value
      })
      this.setState(this.ComputSizeModifier)
      this.setState(this.ComputEffectiveSkill)
    }

    handleAccuracyChange(event){

      this.setState({
        [event.target.name] : event.target.value
      })
      this.setState(this.ComputAccuracyModifier)
      this.setState(this.ComputEffectiveSkill)
    }

    handleShotsChange(event){

      this.setState({
        [event.target.name] : event.target.value
      })
      this.setState(this.ComputShotsModifier)
      this.setState(this.ComputEffectiveSkill)
    }

    render() {
        return (
        <form className='form-block' onSubmit={this.handleSubmit}>
            <section className='main-content--box topmargin'>
              <h1 className="text-style--title textblock-center">Калькулятор GURPS</h1>
              <p className='text-style--maintext main-content--text bordernone textlinebreak'>
                {'**всплывающее окно с подсказкой по модулю'}
              </p>
            </section>

            <section className='calculator-box'>
              <div className='borderedbottom-block'>
                <div className="skill-box">
                  <label for="basikskill-id" className="text-style--maintext textblock-center">Базовое умение персонажа</label>
                  <input className="text-style--maintext" type="number" name="basikskill" id="basikskill-id" value={this.state.basikskill} onChange={this.handleChange}/>
                </div>
              </div>

              <h2 className="text-style--subtitle">Модификаторы</h2>

              <div className='borderedbottom-block'>
                <div className="modifiers-box--double">
                  <label for="distance-id" className="text-style--maintext distance">Расстояние до цели (в ярдах)</label>
                  <input className="text-style--maintext distcount" type="number" name="distance" id="distance-id" value={this.state.distance} min="0" onChange={this.handleDistAndSpeedChange}/>
                  <label for="speed-id" className="text-style--maintext speed">Скорость цели (ярд/с)</label>
                  <input className="text-style--maintext speedcount" type="number" name="speed" id="speed-id" value={this.state.speed} min="0" onChange={this.handleDistAndSpeedChange}/>
                  
                  <input className="text-style--maintext input-style--doublemodifier distspeedoutput" type="text" name="distspeedoutput" id="distspeedoutput-id" value={this.state.modifierDistAndSpeed} readOnly />
                </div>
                <div className="modifiers-box--single">
                  <label for="size-id" className="text-style--maintext">Модификатор размера цели</label>
                  <input className="text-style--maintext" type="number" name="size" id="size-id" value={this.state.size} onChange={this.handleSizeChange}/>
                  <input className="text-style--maintext input-style--singlemodifier" type="text" name="sizeoutput" id="sizeoutput-id" value={this.state.modifierSize} readOnly />
                </div>
                <div className="modifiers-box--single">
                  <label for="accuracy-id" className="text-style--maintext">Точность оружия</label>
                  <input className="text-style--maintext" type="number" name="accuracy" id="accuracy-id" value={this.state.accuracy} min="0" onChange={this.handleAccuracyChange}/>
                  <input className="text-style--maintext input-style--singlemodifier" type="text" name="accuracyoutput" id="accuracyoutput-id" value={this.state.modifierAccuracy} readOnly />
                </div>
                <div className="modifiers-box--single">
                  <label for="shots-id" className="text-style--maintext">Количество выстрелов</label>
                  <input className="text-style--maintext" type="number" name="shots" id="shots-id" value={this.state.shots} min="1" onChange={this.handleShotsChange}/>
                  <input className="text-style--maintext input-style--singlemodifier" type="text" name="shotsoutput" id="shotsoutput-id" value={this.state.modifierShots} readOnly />
                </div>
              </div>

              <h2 className="text-style--subtitle" >Зона попадания</h2>

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
                  <output name="dicerollresult" id="dicerollresult-id" className="text-style--maintext textblock-center"> - </output>
                </div>
              </div>
            </section>
          </form>
        )
    }
}

export default DistAttackForm;