import React, { Component } from 'react';
import Annotation from '../Annotation';
import KityTavernImage from '../kittentavern.jpg';

function MainPage (props) {
    return (
        <>
            <main className='page-main'>
                <Annotation hText='Что же такое GURPS?' description='Прелести универсальной НРИ системы' 
                altText='Таверна котиков' TitleText='Даже кошачья таверна возможна в GURPS' image={KityTavernImage}/>

                <section className='main-content--box'>
                    <h1 className='text-style--title'>О системе</h1>
                    <p className='text-style--maintext main-content--text'>
                        GURPS (Generic Universal RolePlaying System) — общая универсальная система настольных ролевых игр, разработанная компанией Steve Jackson Games в 1986 году с целью создать правила игры, применимые в любом игровом мире. GURPS получила премию Origins Award как лучшая ролевая система правил в 1988 году, а в 2000 году она вошла в зал славы Origins. Многие приложения для этой системы также получали высокие оценки и премии.</p>
                    <p className='text-style--maintext main-content--text'>
                        Упор создателей GURPS именно на универсальный её аспект оказался успешным маркетинговым ходом: сегодня это одна из самых популярных систем ролевых игр.
                        <br />Подход GURPS к универсальности включает использование в игре реальных мер измерения, где это возможно (проверка реалистичности — важная часть создания каждой книги по GURPS).
                        <br />Всё это позволяет игрокам достаточно легко обсчитывать какие-то элементы из реального мира, других игр или собственной фантазии в характеристиках GURPS.
                    </p>
                </section>
            </main>
        </>
    );
  };
    
  export default MainPage;