import React, { Component } from 'react';

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
                  <div class="gridcontainer-hitzone">
                    <input type="radio" name="zone" id="eyeszone-id" value="-9" />
                    <label for="eyeszone-id" class="text-style--maintext">Глаза</label>
                    <p class="text-style--paragraphzonemodifier" >-9</p>
                  </div>
                  <div class="gridcontainer-hitzone">
                    <input type="radio" name="zone" id="skullzone-id" value="-7" />
                    <label for="skullzone-id" class="text-style--maintext">Череп</label>
                    <p class="text-style--paragraphzonemodifier" >-7</p>
                  </div>
                  <div class="gridcontainer-hitzone">
                    <input type="radio" name="zone" id="facezone-id" value="-5" />
                    <label for="facezone-id" class="text-style--maintext">Лицо</label>
                    <p class="text-style--paragraphzonemodifier" >-5</p>
                  </div>
                  <div class="gridcontainer-hitzone">
                    <input type="radio" name="zone" id="neckzone-id" value="-5" />
                    <label for="neckzone-id" class="text-style--maintext">Шея</label>
                    <p class="text-style--paragraphzonemodifier" >-5</p>
                  </div>
                  <div class="gridcontainer-hitzone">
                    <input type="radio" name="zone" id="torsozone-id" value="0" checked />
                    <label for="torsozone-id" class="text-style--maintext">Торс</label>
                    <p class="text-style--paragraphzonemodifier" >0</p>
                  </div>
                  <div class="gridcontainer-hitzone">
                    <input type="radio" name="zone" id="organszone-id" value="-3" />
                    <label for="organszone-id" class="text-style--maintext">Органы</label>
                    <p class="text-style--paragraphzonemodifier" >-3</p>
                  </div>
                </div>
                <div>
                  <div class="gridcontainer-hitzone">
                    <input type="radio" name="zone" id="armzone-id" value="-2" />
                    <label for="armzone-id" class="text-style--maintext">Рука</label>
                    <p class="text-style--paragraphzonemodifier" >-2</p>
                  </div>
                  <div class="gridcontainer-hitzone">
                    <input type="radio" name="zone" id="handzone-id" value="-4" />
                    <label for="handzone-id" class="text-style--maintext">Кисть</label>
                    <p class="text-style--paragraphzonemodifier" >-4</p>
                  </div>
                  <div class="gridcontainer-hitzone">
                    <input type="radio" name="zone" id="groinzone-id" value="-3" />
                    <label for="groinzone-id" class="text-style--maintext">Пах</label>
                    <p class="text-style--paragraphzonemodifier" >-3</p>
                  </div>
                  <div class="gridcontainer-hitzone">
                    <input type="radio" name="zone" id="legzone-id" value="-2" />
                    <label for="legzone-id" class="text-style--maintext">Нога</label>
                    <p class="text-style--paragraphzonemodifier" >-2</p>
                  </div>
                  <div class="gridcontainer-hitzone">
                    <input type="radio" name="zone" id="feetzone-id" value="-4" />
                    <label for="feetzone-id" class="text-style--maintext">Глаза</label>
                    <p class="text-style--paragraphzonemodifier">-4</p>
                  </div>
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
      </>
    );
  };
    
  export default Calculator;