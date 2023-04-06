import React, { Component } from 'react';
import HitZone from '../CalculatorComponents/HitZone';

const Calculator = () => {
    return (
      <>
        <main className='page-main'>
          <form className='form-block'>
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
                  <input class="text-style--maintext" type="number" name="basikskill" id="basikskill-id" value="10" />
                </div>
              </div>

              <h2 class="text-style--subtitle">Модификаторы</h2>

              <div className='borderedbottom-block'>
                <div class="modifiers-box--double">
                  <label for="distance-id" class="text-style--maintext distance">Расстояние до цели (в ярдах)</label>
                  <input class="text-style--maintext distcount" type="number" name="distance" id="distance-id" value="1" min="0" />
                  <label for="speed-id" class="text-style--maintext speed">Скорость цели (ярд/с)</label>
                  <input class="text-style--maintext speedcount" type="number" name="speed" id="speed-id" value="0" min="0" />
                  
                  <input class="text-style--maintext input-style--doublemodifier distspeedoutput" type="text" name="distspeedoutput" id="distspeedoutput-id" value="+0" readonly />
                </div>
                <div class="modifiers-box--single">
                  <label for="size-id" class="text-style--maintext">Модификатор размера цели</label>
                  <input class="text-style--maintext" type="number" name="size" id="size-id" value="0" />
                  <input class="text-style--maintext input-style--singlemodifier" type="text" name="sizeoutput" id="sizeoutput-id" value="+0" readonly />
                </div>
                <div class="modifiers-box--single">
                  <label for="accuracy-id" class="text-style--maintext">Точность оружия</label>
                  <input class="text-style--maintext" type="number" name="accuracy" id="accuracy-id" value="0" min="0" />
                  <input class="text-style--maintext input-style--singlemodifier" type="text" name="accuracyoutput" id="accuracyoutput-id" value="+0" readonly />
                </div>
                <div class="modifiers-box--single">
                  <label for="shots-id" class="text-style--maintext">Количество выстрелов</label>
                  <input class="text-style--maintext" type="number" name="shots" id="shots-id" value="1" min="1" />
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
                  <input class="text-style--maintext" type="number" name="effectiveskill" id="effectiveskill-id" value="10" readonly />
                </div>
                <div class="diceroll-box">
                  <button type="button" name="dicerollbutton" id="dicerollbutton-id" class="text-style--buttontext">Бросок успеха</button>
                  <output name="dicerollresult" id="dicerollresult-id" class="text-style--maintext textblock-center"> - </output>
                </div>
              </div>
            </section>
          </form>
        </main>

        <footer className='page-footer'>
        </footer>
      </>
    );
  };
    
  export default Calculator;