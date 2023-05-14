import React from 'react';
import Annotation from '../Annotation';
import ReverseTavern from '../boardgame.png';
import Imagination from '../imagination.jpg'
import ThreeDices from '../dice_3d6.png';
import D20 from '../d20_dice.png'

function Gameplay () {
    return (
      <>
        <main className='page-main'>
          <Annotation hText='Игровой процесс' description='Как это происходит?' 
            altText='Игра за столом' TitleText='Рекурсия от мира НРИ' image={ReverseTavern}/>

          <section className="main-content--box">
            <h1 className="text-style--title">Общий принцип игры</h1>
            <p className='text-style--maintext main-content--text bordernone textlinebreak'>{'Процесс игры можно разделить на несколько основных повторяющихся этапов:'}</p>
          </section>

          <section className="flexcontainer--imageandpoints">
            <img src={Imagination} className="image-style--imagenearpointsfantasy" alt="imagination" title=""></img>
            <div className='gridcontainer--points'>
              <div>
                <h2 className="text-style--subtitle">1. Повествование мастера</h2>
                <p className='text-style--maintext textlinebreak'>
                  {'На этом этапе мастер рассказывает игрокам где находятся их персонажи, что их окружает, с чем или кем и как именно они могут взаимодействовать. Порой это может быть красивым и длинным монологом, а иногда мастер ограничивается парой кратких предложений. \n\nДалее мастер предоставляет игрокам варианты действий и ждёт от них принятия решения или отвечает на их уточняющие вопросы касательно ситуации, в которой оказались персонажи игроков.'}
                </p>
              </div>
              <div>
                <h2 className="text-style--subtitle">2. Действия игроков</h2>
                <p className="text-style--maintext textlinebreak">
                  {'Иногда один игрок говорит за всех сразу, например: "Мы отправимся в ближайшую таверну". В других случаях разные игроки делают разные вещи: один игрок может искать полезные и драгоценные предметы среди вещей поверженных им врагов, в то время как второй изучает странную статую, обнаруженную на входе в подземелье, а третий наблюдает за округой в ожидании новой угрозы. \n\nЕсли персонажи игроков в данный момент не находятся в бою, они не обязаны ждать своего хода для совершения действия, но мастер всё равно выслушивает всех по отдельности и решает какие последствия будут у каждого их действия и выбора.'}
                </p>
              </div>
              <div>
                <h2 className="text-style--subtitle">3. Озвучивание результатов</h2>
                <p className="text-style--maintext textlinebreak">
                  {'Когда мастер выслушал желания всех игроков, он описывает к чему привели их совместные или обособленные действия. \n\nОписание результатов часто приводит к другой точке принятия решения, которая возвращает ход игры к самому первому шагу. Эта общая закономерность сохраняется независимо от всех обстоятельств и свойственна любой игре по правилам GURPS.'}
                </p>
              </div>
            </div>
          </section>

          <section className="main-content--box">
            <h1 className="text-style--title">Игровые кубики</h1>
          </section>

          <section className="flexcontainer--imageandtext bordernone">
            <div className='leftimgtextblock'>
              <p className="text-style--maintext textlinebreak">
                {'Иногда решить поставленную перед игроками задачу легко. Если искатель приключений хочет подойти к прохожему и узнать дорогу, мастер может просто сказать, что персонажу указали направление. Однако, конкретный NPC может оказаться недружелюбен или недоверчив, само поведение и отыгрыш игрока вызовет плохую реакцию, или какие-то другие обстоятельства могут затруднить авантюристу процесс получения интересующой информации. Также персонажам порой придётся встречаться с опасными ситуациями, в частности, при попадании в засады или иные схватки с врагами. \n\nВ этих случаях мастер может потребовать от игрока бросить кубики для того, чтобы узнать, насколько успешно его персонаж справился с конкретной задачей.'}
              </p>
            </div>
            <img src={ThreeDices} className="image-style--imageinblockdices" alt="3d6"></img>
          </section>
          <section className='main-content--box'>
            <p className="text-style--maintext leftimgtextblock bottompad">
              {'В GURPS для проверки большинства навыков и выполнения действий бросают три обычных шестигранных кубика. Изредка может потребоваться большее количество кубов за один бросок, но это касается только подсчёта большого урона в битве и подобных вещей.'}
            </p>
          </section>

          <section className="main-content--box">
            <h1 className="text-style--title">Как узнать успешность действия?</h1>
            <p className="text-style--maintext main-content--text textlinebreak bordernone">
              {'Чтобы выяснить удалось ли персонажу справится с поставленной задачей, игроку или мастеру требуется бросить три кубика и выполнить следующие действия:'}
            </p>
          </section>

          <section className="main-content--box rightandleftpadding">
            <h2 className="text-style--subtitle nopadding">1. Применение модификаторов</h2>
            <p className="text-style--maintext main-content--text textlinebreak bordernone">
              {'Обычно мастер сообщает игроку отрицательные или положительные модификаторы ещё до броска. Значение этого “бонуса” будет зависеть от ситуации, сложности задачи и решения мастера. \n\nПосле броска кубиков прибавьте значение всех модификаторов к сумме выпавших на кубиках чисел.'}
            </p>
            <h2 className="text-style--subtitle nopadding">2. Проверка навыка</h2>
            <p className="text-style--maintext main-content--text textlinebreak bordernone">
              {'Большинство действий в этой системе требуют проверки навыков персонажа. Если у персонажа нет нужного навыка, он всё ещё может попытаться выполнить действие, но получит отрицательный модификатор в соответствии с уровнем навыка по умолчанию. \n\nКогда вы прибавили значение бонусов к сумме, выпавшей на кубиках, необходимо сравнить полученное значение со значением уровня навыка персонажа, против которого производится проверка. Если оно окажется меньше или равным уровню этого навыка, персонаж успешно совершил действие. В противном случае попытка провалилась. Весь этот процесс называется "Броском успеха". Подробности вы всегда можете почитать в книге правил, ссылка на которую находится на странице "Мастеру/Игроку" данного сайта.'}
            </p>
          </section>
        </main>

        <img className="image-style--d20_diceimage" src={D20} alt=""></img>

        <footer className="page-footer">
        </footer>
      </>
    );
  };
    
  export default Gameplay;