import React, { Component } from 'react';
import HitZone from './HitZone';

class DistAttackForm extends Component {
    constructor(props) {
        super(props)
        this.state = { basikskill:10, distance:1, speed:0, size:0, accuracy:0, shots:1, zone:0, effectiveskill:10, modifierDistAndSpeed:'+0', modifierSize:'+0', modifierAccuracy:'+0', modifierShots:'+0', modifierZone:'0', diceRollResult:' - '}
        this.handleBasicSkillChange = this.handleBasicSkillChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDistAndSpeedChange = this.handleDistAndSpeedChange.bind(this)
        this.handleSizeChange = this.handleSizeChange.bind(this)
        this.handleAccuracyChange = this.handleAccuracyChange.bind(this)
        this.handleShotsChange = this.handleShotsChange.bind(this)
        this.handleRadioZoneChange = this.handleRadioZoneChange.bind(this)
    }

    handleRadioZoneChange = e => { 
      this.setState({ modifierZone: e.target.value }) 
      this.setState(this.ComputEffectiveSkill)
    };

    // Form submitting logic, prevent default page refresh 
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
      return {
        effectiveskill: parseInt(state.basikskill) + parseInt(state.modifierSize) + parseInt(state.modifierAccuracy) + parseInt(state.modifierDistAndSpeed) + parseInt(state.modifierShots) + parseInt(state.modifierZone)
      };
    }

    ComputSizeModifier (state) {
      if((state.size) === '') {
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
      if((state.accuracy) === '') {
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

      if((state.shots) === '' || parseInt((state.shots)) <= 0) {
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
          shotsModifierValue = '+' + (Math.floor(parseInt(state.shots)/100) + 6)
        }
      }
      return {
        modifierShots : shotsModifierValue
      };
    }

    ComputeDistSpeedModifier(state) {
      const DistSpeedNumbers = [2, 3, 5, 7, 10, 15, 20, 30, 50, 70, 100, 150, 200, 300, 500, 700, 1000, 1500, 2000, 3000, 5000, 7000, 10000, 15000, 20000, 30000, 50000, 70000, 100000, 150000, 200000];
      let DistanceAndSpeedValue = parseInt(state.distance) + parseInt(state.speed);

      if((state.distance) === '') {
        DistanceAndSpeedValue =  parseInt(state.speed)
      }

      if((state.speed) === '') {
        DistanceAndSpeedValue =  parseInt(state.distance)
      }

      if(DistanceAndSpeedValue === '') {
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
      
      if(DistSpeedModifier === 0) {
        return {
          modifierDistAndSpeed: '+0'
        }
      }
      return {
        modifierDistAndSpeed:  DistSpeedModifier
      };
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

    handleDistAndSpeedChange(event){
      if(event.target.value > 200000) {
        this.setState({
          [event.target.name] : 200000
        })
      } 
      else {
        this.setState({
          [event.target.name] : (event.target.value === '' ? '' : (Math.abs(event.target.value) >= 0 ? Math.abs(event.target.value) : 0))
        })
      }
      this.setState(this.ComputeDistSpeedModifier)
      this.setState(this.ComputEffectiveSkill)
    }

    handleSizeChange(event){
      if(event.target.value > 100) {
        this.setState({
          [event.target.name] : 100
        })
      }
      else {
        if(event.target.value <= -11) {
          this.setState({
            [event.target.name] : -11
          })
        }
        else {
          this.setState({
            [event.target.name] : (event.target.value === '' ? '' : event.target.value)
          })
        }
      }
      this.setState(this.ComputSizeModifier)
      this.setState(this.ComputEffectiveSkill)
    }

    handleAccuracyChange(event){
      if(event.target.value > 100) {
        this.setState({
          [event.target.name] : 100
        })
      } else {
        this.setState({
          [event.target.name] : (event.target.value === '' ? '' : (Math.abs(event.target.value) >= 0 ? Math.abs(event.target.value) : 0))
        })
      }
      this.setState(this.ComputAccuracyModifier)
      this.setState(this.ComputEffectiveSkill)
    }

    handleShotsChange(event){
      if(event.target.value > 10000) {
        this.setState({
          [event.target.name] : 10000
        })
      } else {
        this.setState({
          [event.target.name] : (event.target.value === '' ? '' : (Math.abs(event.target.value) > 0 ? Math.abs(event.target.value) : 1))
        })
      }
      this.setState(this.ComputShotsModifier)
      this.setState(this.ComputEffectiveSkill)
    }

    render() {
        return (
        <form className='form-block' onSubmit={this.handleSubmit}>
            <div id="openModal" className='modal'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h2 className='text-style--maintext'>Модуль дистанционных атак</h2>
                    <a href="#closeModal" title="Close" className='text-style--closebutton'>×</a>
                  </div>
                  <div className='modal-maintext'>
                    <p className='text-style--modalparagraph'>
                      {'Данный модуль ускоряет процесс расчётов успешности дистанционных атак по правилам GURPS.'}
                    </p>
                    <h3 className='text-style--modalparagraph'>
                      {'Важно:'}
                    </h3>
                    <p className='text-style--modalparagraph'>
                      {'Все поля данной формы (кроме полей "Модификатор размера цели" и "Эффективное умение персонажа") не могут содержать отрицательных чисел, знаков, или быть пустыми!'}
                      {'\n\nВсе поля данной формы не должны содержать дробные значения согласно правилам системы (в случае ввода, дробная часть не будет учитываться в расчётах)!'}
                      {'\n\nСогласно правилам системы 1 ярд = 1 метру при расчёте расстояний, скоростей и размеров (в реальности это соотношение примерно равно 0,91 к 1). Если вам очень важна точность, переведите метры в ярды и округлите вверх до целого числа перед вводом значения в форму.'}
                    </p>
                    <h3 className='text-style--modalparagraph'>
                      {'Базовый уровень умения:'}
                    </h3>
                    <p className='text-style--modalparagraph'>
                      {'В поле "Базовое умение персонажа" следует вводить число, равное базовому уровню умения персонажа во владении конкретным дистанционным оружием.\nЭто число должно быть от 0 до 100!\nБазовый уровень - это не модифицированный уровень умения, отражающий средние шансы на выполнение атаки без учёта ситуативных модификаторов.\nПодробнее про это можно почитать на странице 171 в базовой книге правил. (Найти перевод книги можно '}
                      <a  className="linkstyle--textlink" href="https://www.rulit.me/data/programs/resources/pdf/StivDzhekson_GURPS-4E-BasicSet(polnyyperevod)_RuLit_Me_389900.pdf" target='_blank'>здесь</a>
                      {')'}
                    </p>
                    <h3 className='text-style--modalparagraph'>
                      {'Расстояние и скорость цели:'}
                    </h3>
                    <p className='text-style--modalparagraph'>
                      {'Поля ввода "Расстояние до цели" и "Скорость цели" используются для расчёта единого модификатора за скорость и расстояние согласно правилам и таблице на странице 550 в базовой книге правил.'}
                      {'\nЗначения этих полей не должны быть отрицательными или превышать 200000! (в случае ввода больших значений они будут автоматически заменены на максимально допустимые)'}
                    </p>
                    <h3 className='text-style--modalparagraph'>
                      {'Модификатор размера цели (МР):'}
                    </h3>
                    <p className='text-style--modalparagraph'>
                      {'"Модификатор размера цели" отражает наиболее крупное измерение существа или предмета: длину, ширину или высоту. Большинство людей и близких по размеру к взрослому человеку объектов имеют 0-вой модификатор размера.'}
                      {'\nЕсли ваш персонаж стреляет по меньшим или большим целям, он получает соответствуюйщий штраф или бонус к попаданию. Просто введите МР цели в соответствующее поле формы. \nВводимое значение должно быть в пределах от -11 до 100!\n(в случае ввода меньшего/большего числа оно будет автоматически заменено на минимальное/максимальное)'}
                      {'\nЧтобы определить размер цели можно воспользоваться правилами и таблицей со страницы 19 в базовой книге правил (ссылка выше).'}
                      {' Если же персонаж хочет попасть по транспорту, лучше обратиться к таблицам и книге, из которых вы планируете брать данный транспорт (на русском языке в подобных таблицах данный модификатор обозначен как "МР", а на английском - "SM")'}
                    </p>
                    <h3 className='text-style--modalparagraph'>
                      {'Точность оружия:'}
                    </h3>
                    <p className='text-style--modalparagraph'>
                      {'У любого дистанционного оружия (будь то простой арбалет или миниган) есть показатель "Точность". Это премия, которую ваш персонаж получает, если один или более раз использует манёвр "Прицеливание" перед атакой. Подробности о манёвре "Прицеливание" можно узнать на странице 364 в базовой книге правил.'}
                      {'\nЕсли персонаж целится больше одной секунды или решает использовать дополнительные возможности (например, сошки для винтовки), то он может получить большую премию. Просто введите сумму всех полученных таким образом бонусов в поле "Точность оружия" в форме.\nВводимое значение должно быть не больше 100! (в случае ввода большего значения оно будет автоматически заменено на максимально допустимое)'}
                    </p>
                    <h3 className='text-style--modalparagraph'>
                      {'Количество выстрелов:'}
                    </h3>
                    <p className='text-style--modalparagraph'>
                      {'У любого стрелкового оружия есть показатель Скорострельности (сокращённо "Сс" на русском или "RoF" на английском). Если Сс составляет 1, то оружие может выстрелить только один раз за атаку. Если Сс 2 и больше, то из оружия можно вести "Стрельбу очередями" согласно правилам на странице 373 в базовой книге правил.'}
                      {'\nПри ведении стрельбы очередями персонаж получает бонус к эффективному уровню умения за большое количество выстрелов в рамках одной атаки.'}
                      {'\nПросто введите значение, равное числу выстрелов из оружия за ход, в поле "Количество выстрелов" в форме.\nЭто значение должно быть от 1 до 10000!'}
                    </p>
                    <h3 className='text-style--modalparagraph'>
                      {'Зоны попадания:'}
                    </h3>
                    <p className='text-style--modalparagraph'>
                      {'Когда ваш персонаж атакует цель, которая является другим человеком или подобным существом, вы можете выбрать любую видимую вам зону попадания на теле этой цели. Если вы этого не указываете, по умолчанию считается, что вы целитесь в торс (+0 к попаданию).'}
                      {'\nДля выбора конкретной зоны попадания просто нажмите на один из возможных вариантов списка в соответствующей части формы. Указанный рядом с выбранной зоной модификатор автоматически изменит значение эффективного умения.'}
                    </p>
                    <h3 className='text-style--modalparagraph'>
                      {'Эффективный уровень умения:'}
                    </h3>
                    <p className='text-style--modalparagraph'>
                      {'Эффективный уровень умения персонажа отражает реальные шансы успешно совершить атаку с учётом всех применяемых модификаторов.\nЗначение поля "Эффективное умение персонажа" изменяется автоматически при изменении значений вычисляемых модификаторов и базового умения персонажа в форме.'}
                      {'\nЕсли значение данного поля окажется меньше 3, при попытке провести "бросок успеха" будет выведено предупреждение о невозможности атаки. Это связано с броском трёх шестигранных кубиков и сравнением эффективного умения с выпавшей на кубиках суммой (подробности смотри на странице 343 базовой книги правил). Так как выпавшая сумма не может быть меньше трёх любой персонаж, чьё эффективное умение ниже данного значения, вообще не имеет шансов попасть этой атакой.'}
                    </p>
                    <h3 className='text-style--modalparagraph'>
                      {'Бросок успеха:'}
                    </h3>
                    <p className='text-style--modalparagraph'>
                      {'Согласно правилам GURPS, всякий раз, когда персонаж пытается выполнить какое-то действие (например, использовать умение для совершения атаки) проводится бросок трёх кубиков для определения удалось ли ему это. Это так называемый "Бросок успеха". Для того, чтобы попытка вашего персонажа достигла успеха, сумма, выпавшая на кубиках, должна быть меньше или равна значению эффективного уровня умения в конкретной ситуации.\nВ противном случае - бросок провален.'}
                      {'\nНезависимо от числа, против которого вы делаете бросок, результаты 3 и 4 всегда являются критическим успехом, а 17 и 18 - провалом!\nДля совершения броска успеха в форме просто нажмите на соответствующую кнопку. Чуть ниже самой кнопки будет выведено значение суммы чисел сгенерированного "броска кубиков" и результат в зависимости от успеха/провала проверки.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <section className='main-content--box'>
              <h1 className="text-style--title textblock-center">Модуль дистанционных атак</h1>
              <p className='text-style--maintext main-content--text bordernone textlinebreak textblock-center'>
                {'Данный модуль призван помочь в расчётах дистанционных атак по правилам GURPS \n\nДля подробного ознакомления обратитесь к книге "Базовые правила: Кампании" \n(Глава "Бой", страница 372)'}
              </p>
            </section>

            <section className='calculator-box'>
              <a href='#openModal' className='question-button'>?</a>
              
              <div className='borderedbottom-block'>
                <div className="skill-box">
                  <label htmlFor="basikskill-id" className="text-style--maintext textblock-center">Базовое умение персонажа</label>
                  <input className="text-style--maintext" type="number" name="basikskill" id="basikskill-id" value={this.state.basikskill} min='0' max='100' required onChange={this.handleBasicSkillChange}/>
                </div>
              </div>

              <h2 className='text-style--subtitle'>Модификаторы</h2>

              <div className='borderedbottom-block'>
                <div className="modifiers-box--double">
                  <label htmlFor="distance-id" className="text-style--maintext distance">Расстояние до цели (в ярдах)</label>
                  <input className="text-style--maintext distcount" type="number" name="distance" id="distance-id" value={this.state.distance} min="0" required onChange={this.handleDistAndSpeedChange}/>
                  <label htmlFor="speed-id" className="text-style--maintext speed">Скорость цели (ярд/с)</label>
                  <input className="text-style--maintext speedcount" type="number" name="speed" id="speed-id" value={this.state.speed} min="0" required onChange={this.handleDistAndSpeedChange}/>
                  
                  <input className="text-style--maintext input-style--doublemodifier distspeedoutput" type="text" name="distspeedoutput" id="distspeedoutput-id" value={this.state.modifierDistAndSpeed} readOnly />
                </div>
                <div className="modifiers-box--single">
                  <label htmlFor="size-id" className="text-style--maintext">Модификатор размера цели</label>
                  <input className="text-style--maintext" type="number" name="size" id="size-id" value={this.state.size} min='-11' required onChange={this.handleSizeChange}/>
                  <input className="text-style--maintext input-style--singlemodifier" type="text" name="sizeoutput" id="sizeoutput-id" value={this.state.modifierSize} readOnly />
                </div>
                <div className="modifiers-box--single">
                  <label htmlFor="accuracy-id" className="text-style--maintext">Точность оружия</label>
                  <input className="text-style--maintext" type="number" name="accuracy" id="accuracy-id" value={this.state.accuracy} min="0" required onChange={this.handleAccuracyChange}/>
                  <input className="text-style--maintext input-style--singlemodifier" type="text" name="accuracyoutput" id="accuracyoutput-id" value={this.state.modifierAccuracy} readOnly />
                </div>
                <div className="modifiers-box--single">
                  <label htmlFor="shots-id" className="text-style--maintext">Количество выстрелов</label>
                  <input className="text-style--maintext" type="number" name="shots" id="shots-id" value={this.state.shots} min='1' max='10000' required onChange={this.handleShotsChange}/>
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

export default DistAttackForm;