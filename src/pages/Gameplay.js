import React, { Component } from 'react';
import Annotation from '../Annotation';
import ReverseTavern from '../boardgame.png';
import Imagination from '../imagination.jpg'
import ThreeDices from '../dice_3d6.png';
import D20 from '../d20_dice.png'
import TextP from '../TextP';

function Gameplay () {
    return (
      <>
        <main className='page-main'>
          <Annotation hText='Игровой процесс' description='Как это происходит?' 
            altText='Игра за столом' TitleText='Рекурсия от мира НРИ' image={ReverseTavern}/>

          <section class="main-content--box">
            <h1 className="text-style--title">Общий принцип игры</h1>
            <p className='text-style--maintext main-content--text bordernone textlinebreak'>{'Процесс игры можно разделить на несколько основных повторяющихся этапов:'}</p>
          </section>

          <section className="flexcontainer--imageandpoints">
            <img src={Imagination} className="image-style--imagenearpoints" alt="imagination" title=""></img>
            <div className='gridcontainer--points'>
              <div>
                <h2 className="text-style--subtitle">1. Повествования мастера</h2>
                <p className='text-style--maintext textlinebreak'>
                  {'На этом этапе мастер рассказывает игрокам где находятся их персонажи, что их окружает, с чем и как они могут взаимодействовать. \n\nДалее мастер предоставляет игрокам варианты действий и ждёт от них принятия решения.'}
                </p>
              </div>
              <div>
                <h2 className="text-style--subtitle">2. Действия игроков</h2>
                <p className="text-style--maintext textlinebreak">
                  {'Иногда один игрок говорит за всю партию, например: "Мы пойдём к восточному входу". В других случаях разные авантюристы делают разные вещи: один игрок может искать сундук с сокровищами, в то время как второй изучает символ, выгравированный на стене, а третий следит за монстрами. \n\nЕсли персонажи игроков в данный момент не находятся в бою, они не обязаны ждать своего хода для совершения действия, но мастер всё равно выслушивает всех по отдельности и решает какие последствия будут у каждого действия игроков.'}
                </p>
              </div>
              <div>
                <h2 className="text-style--subtitle">3. Озвучивание результатов</h2>
                <p className="text-style--maintext textlinebreak">
                  {'Когда мастер выслушал желания всех игроков, он описывает к чему привели их совместные или обособленные действия. \n\nОписание результатов часто приводит к другой точке принятия решения, которая возвращает ход игры к шагу 1. Эта общая закономерность сохраняется независимо от того, исследуют ли игроки руины, разговаривают с NPC или сражаются с могущественным драконом.'}
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
                {'Иногда решить поставленную перед игроками задачу легко. Если искатель приключений хочет пройти через комнату и открыть дверь, мастер может просто сказать, что дверь открывается, и описать, что находится за ней. Но дверь может быть заперта, пол может скрывать смертельную ловушку, или какие-то другие обстоятельства могут затруднить авантюристу выполнение задания. \n\nВ этих случаях мастер может потребовать от игрока бросить кубики для того, чтобы узнать, насколько успешно его персонаж справился с конкретной задачей.'}
              </p>
            </div>
            <img src={ThreeDices} className="image-style--imageinblock" alt="3d6"></img>
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
              {'Большинство действий в этой системе требуют проверки навыков персонажа. Если у персонажа нет нужного навыка, он всё ещё может попытаться выполнить действие, но получит отрицательный модификатор в соответствии с уровнем навыка по умолчанию. \n\nКогда вы прибавили значение бонусов к сумме, выпавшей на кубиках, необходимо сравнить полученное значение со значением уровня навыка персонажа, против которого производится проверка. Если оно окажется меньше или равным уровню этого навыка, персонаж успешно совершил действие. В противном случае попытка провалилась.'}
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