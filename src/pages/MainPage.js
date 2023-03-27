import React, { Component } from 'react';
import Annotation from '../Annotation';
import KityTavernImage from '../kittentavern.jpg';
import TextP from '../TextP';

function MainPage (props) {
    const paragraphClass = 'text-style--maintext main-content--text';
    const lineBreakerClass = ' textlinebreak';
    let fullClassName = paragraphClass + lineBreakerClass;
    return (
        <>
            <main className='page-main'>
                <Annotation hText={'Что же такое GURPS?'} description={'Прелести универсальной \nНРИ системы'} 
                altText={'Таверна котиков'} TitleText={'Даже кошачья таверна возможна в GURPS'} image={KityTavernImage}/>

                <section className='main-content--box'>
                    <h1 className='text-style--title'>О системе</h1>
                    <TextP fullClass={paragraphClass} message={'GURPS (Generic Universal RolePlaying System) — общая универсальная система настольных ролевых игр, разработанная компанией Steve Jackson Games в 1986 году с целью создать правила игры, применимые в любом игровом мире. GURPS получила премию Origins Award как лучшая ролевая система правил в 1988 году, а в 2000 году она вошла в зал славы Origins. Многие приложения для этой системы также получали высокие оценки и премии.'}/>
                    <TextP fullClass={fullClassName} message={'Упор создателей GURPS именно на универсальный её аспект оказался успешным маркетинговым ходом: сегодня это одна из самых популярных систем ролевых игр. \nПодход GURPS к универсальности включает использование в игре реальных мер измерения, где это возможно (проверка реалистичности — важная часть создания каждой книги по GURPS). \nВсё это позволяет игрокам достаточно легко обсчитывать какие-то элементы из реального мира, других игр или собственной фантазии в характеристиках GURPS.'}/>
                </section>



                <section className='main-content--box'>
                    <TextP fullClass={fullClassName} message={'Отличительной особенностью GURPS в сравнении с другими подобными системами является отсутствие заранее созданных обязательных классов персонажей. На первый взгляд это может показаться недостатком, но это обусловлено тем, что эта система не привязана к какому-то общему сеттингу, как например более популярная D&D, которая ориентирована в основном на приключения в фэнтези средневековье. \n\nКонечно же это не значит что в GURPS вовсе нет готовых вариантов персонажей, классов, рас и прочего. Напротив, существует уйма книг по этой системе, содержащих самые разнообразные наработки других людей. В них вы можете найти как примеры более подробного подхода к боевой и социальной системам, так и детально описанные варианты разного оружия, техники, рас и многое другое. \n\nОтсутствие же большого количества готовых шаблонов в базовых книгах обусловлено желанием создателей системы дать волю фантазии игроков и мастера, предоставляя им не просто готовые варианты, а искусный инструмент для создания и реализации собственных идей и концепций.'}/>
                </section>
            </main>
        </>
    );
  };
    
  export default MainPage;