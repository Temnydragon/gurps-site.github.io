import React, { Component } from 'react';
import HitZone from './HitZone';

class DistAttackForm extends Component {
    constructor(props) {
        super(props)
        this.state = { basikskill:10, distance:1, speed:0, size:0, accuracy:0, shots:1, zone:0, effectiveskill:10, modifierDistAndSpeed:'+0'}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDistAndSpeedChange = this.handleDistAndSpeedChange.bind(this)
    }

    // Form submitting logic, prevent default page refresh 
    handleSubmit(event){
        const { basikskill, distance, speed, size, accuracy, shots, effectiveskill } = this.state
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
        effectiveskill: parseInt(state.basikskill) + parseInt(state.size) + parseInt(state.accuracy)
      };
    }

    ComputeDistSpeedModifier(state) {
      const DistSpeedNumbers = [2, 3, 5, 7, 10, 15, 20, 30, 50, 70, 100, 150, 200, 300, 500, 700, 1000, 1500, 2000, 3000, 5000];
      const DistanceAndSpeedValue = parseInt(state.distance) + parseInt(state.speed);
      
      let DistSpeedModifier = 0;
      for (let i = 0; i < DistSpeedNumbers.length; i++) {
        if (DistanceAndSpeedValue > DistSpeedNumbers[i]) {
          DistSpeedModifier--;
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

    render() {
        return (
        <form className='form-block' onSubmit={this.handleSubmit}>
            <section class="main-content--box topmargin">
              <h1 className="text-style--title textblock-center">Калькулятор GURPS</h1>
              <p className='text-style--maintext main-content--text bordernone textlinebreak'>
                {'**всплывающее окно с подсказкой по модулю'}
              </p>
            </section>

            <section class="calculator-box">
              <div className='borderedbottom-block'>
                <div class="skill-box">
                  <label for="basikskill-id" class="text-style--maintext textblock-center">Базовое умение персонажа</label>
                  <input class="text-style--maintext" type="number" name="basikskill" id="basikskill-id" value={this.state.basikskill} onChange={this.handleChange}/>
                </div>
              </div>

              <h2 class="text-style--subtitle">Модификаторы</h2>

              <div className='borderedbottom-block'>
                <div class="modifiers-box--double">
                  <label for="distance-id" class="text-style--maintext distance">Расстояние до цели (в ярдах)</label>
                  <input class="text-style--maintext distcount" type="number" name="distance" id="distance-id" value={this.state.distance} min="0" onChange={this.handleDistAndSpeedChange}/>
                  <label for="speed-id" class="text-style--maintext speed">Скорость цели (ярд/с)</label>
                  <input class="text-style--maintext speedcount" type="number" name="speed" id="speed-id" value={this.state.speed} min="0" onChange={this.handleDistAndSpeedChange}/>
                  
                  <input class="text-style--maintext input-style--doublemodifier distspeedoutput" type="text" name="distspeedoutput" id="distspeedoutput-id" value={this.state.modifierDistAndSpeed} readonly />
                </div>
                <div class="modifiers-box--single">
                  <label for="size-id" class="text-style--maintext">Модификатор размера цели</label>
                  <input class="text-style--maintext" type="number" name="size" id="size-id" value={this.state.size} onChange={this.handleChange}/>
                  <input class="text-style--maintext input-style--singlemodifier" type="text" name="sizeoutput" id="sizeoutput-id" value="+0" readonly />
                </div>
                <div class="modifiers-box--single">
                  <label for="accuracy-id" class="text-style--maintext">Точность оружия</label>
                  <input class="text-style--maintext" type="number" name="accuracy" id="accuracy-id" value={this.state.accuracy} min="0" onChange={this.handleChange}/>
                  <input class="text-style--maintext input-style--singlemodifier" type="text" name="accuracyoutput" id="accuracyoutput-id" value="+0" readonly />
                </div>
                <div class="modifiers-box--single">
                  <label for="shots-id" class="text-style--maintext">Количество выстрелов</label>
                  <input class="text-style--maintext" type="number" name="shots" id="shots-id" value={this.state.shots} min="1" onChange={this.handleChange}/>
                  <input class="text-style--maintext input-style--singlemodifier" type="text" name="shotsoutput" id="shotsoutput-id" value="+0" readonly />
                </div>
              </div>

              <h2 class="text-style--subtitle" >Зона попадания</h2>

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

              <h2 class="text-style--subtitle borderedtop-subtitle" >Результат</h2>

              <div>
                <div class="skill-box" >
                    <label for="effectiveskill-id" class="text-style--maintext textblock-center">Эффективное умение персонажа</label>
                    <input class="text-style--maintext" type="number" name="effectiveskill" id="effectiveskill-id" value={this.state.effectiveskill} readonly />
                </div>
                <div class="diceroll-box">
                  <button type="submit" name="dicerollbutton" id="dicerollbutton-id" class="text-style--buttontext">Бросок успеха</button>
                  <output name="dicerollresult" id="dicerollresult-id" class="text-style--maintext textblock-center"> - </output>
                </div>
              </div>
            </section>
          </form>
        )
    }
}

export default DistAttackForm;