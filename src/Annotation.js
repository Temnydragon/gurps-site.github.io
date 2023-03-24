import React, { Component } from 'react';
import './App.css';
import './ImageStyles.css'

function Annotation (props) {
    return (
        <>
            <div className='gridcontainer-annotationblock'>
                <section className='gridcontainer--mainimagetext'>
                    <h1 className='text-style--mainimage_title'>{props.hText}</h1>
                    <p className='text-style--mainimage_text'>{props.description}</p>
                </section>
                <img className="image-style--mainimage" src={props.image} alt={props.altText} title={props.TitleText}></img>
            </div>
        </>
    )
}

function MainContent (props) {

    switch(props.pagename) {
        case 'main':
            return (
                <>
                    <main className='page-main'>
                        <Annotation pagename={props.pagename}/>

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
            )
        case 'firststeps':
            return (
                <>
                    <main className='page-main'>
                        <section class="main-content--box topmargin">
                            <h1 class="text-style--title">Как начать играть в GURPS?</h1>
                            <p class="text-style--maintext main-content--text bordernone">
                                Если вы ознокомились с информацией на данном сайте и хотите начать играть в GURPS, вам необходимо немного подготовиться:
                            </p>
                        </section>
                    </main>
                </>
            )
        default:
            break
    }
}

export default Annotation