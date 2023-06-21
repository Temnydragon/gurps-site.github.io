import React from 'react';
import Annotation from '../Annotation';
import KityTavernImage from '../kittentavern.jpg';
import BasikSetImage from '../basiksetimage.jpg'
import CoffeSplashImage from '../coffee-splash-splatter.png'
import PencilImage from '../png-pencil.png'

function MainPage () {
    return (
        <>
            <main className='page-main'>
                <Annotation hText={'Что же такое GURPS?'} description={'Прелести универсальной \nНРИ системы'} 
                altText={'Таверна котиков'} TitleText={'Даже кошачья таверна возможна в GURPS'} image={KityTavernImage}/>

                <section className='main-content--box'>
                    <h1 className='text-style--title'>О системе</h1>
                    <p className='text-style--maintext main-content--text textlinebreak'>
                        {'GURPS (Generic Universal RolePlaying System) — общая универсальная система настольных ролевых игр, разработанная компанией Steve Jackson Games в 1986 году с целью создать правила игры, применимые в любом игровом мире. GURPS получила премию Origins Award как лучшая ролевая система правил в 1988 году, а в 2000 году она вошла в зал славы Origins. Многие приложения для этой системы также получали высокие оценки и премии.'}
                    </p>
                    <p className='text-style--maintext main-content--text textlinebreak'>
                        {'Создетели GURPS сделали упор на универсальный аспект системы, а также одними из первых полностью отказались от элемента случайности при создании персонажей. В GURPS все характеристики героя имеют конкретную стоимость в очках персонажа, максимальное число которых в начале игры определяет "мастер" (игрок-ведущий), а игроки сами выбирают на что именно тратить эти очки для развития своих персонажей. \nПодход GURPS к универсальности включает использование в игре реальных мер измерения, что положительно сказывается на привлечении особо требовательных и любящих правдоподобность игроков. \nВсё это позволяет фанатам системы достаточно легко обсчитывать какие-то элементы из реального мира, других игр или собственной фантазии в характеристиках GURPS.'}
                    </p>
                </section>

                <section className="flexcontainer--imageandtext">
                    <img src={BasikSetImage} className='image-style--imageinblockbook' alt='basiksetimage' title=""></img>
                    <div className='rightimgtextblock'>
                        <h2 className="text-style--subtitle">Как в это играют?</h2>
                        <p className='text-style--maintext textlinebreak'>
                            {'Как и большинство других настольных РПГ, GURPS позволяет игрокам вжиться в роль вымышленных персонажей, пройти тернистой тропой приключений и получить незабываемые ощущения от совместного времяпровождения. \n\nСуть игры по данной системе заключается в создании и повествовании одним из игроков, именуемым "мастером", вымышленного мира. Другие игроки, в свою очередь, придумывают и вводят в этот мир игровых персонажей, чьи роли будут отыгрывать в процессе приключений.'}
                        </p>
                    </div>
                </section>

                <section className='main-content--box'>
                    <p className='text-style--maintext main-content--text textlinebreak'>
                        {'Отличительной особенностью GURPS в сравнении с другими подобными системами является отсутствие заранее созданных обязательных классов персонажей. На первый взгляд это может показаться недостатком, но это обусловлено тем, что эта система не привязана к какому-то общему сеттингу или жанру, как, например, более популярная D&D, которая ориентирована в основном на приключения в фэнтези средневековье. \n\nКонечно же это не значит, что в GURPS вовсе нет готовых вариантов персонажей, классов, рас и прочего. Напротив, существует уйма книг по этой системе, содержащих самые разнообразные наработки других людей. В них вы можете найти как примеры более подробного подхода к боевой и социальной системам, так и детально описанные варианты разного оружия, техники, рас и многое другое. \n\nОтсутствие же большого количества готовых шаблонов в базовых книгах обусловлено желанием создателей системы дать волю фантазии игроков и мастера, предоставляя им не просто готовые варианты, а искусный инструмент для создания и реализации собственных идей и концепций.'}
                    </p>
                </section>
            </main>
            
            <img className="image-style--penimage" src={PencilImage} alt="Pencil image"></img>
            <img className="image-style--cofeeimage" src={CoffeSplashImage} alt='Coffe splash'></img>

            <footer className="page-footer">
                <p className='text-style--footertext'>
                    {'© Беседин Д. К., 2023'}
                </p>
                <p className='text-style--footertext textlinebreak'>
                    {'GURPS™ является зарегистрированной торговой маркой Steve Jackson Games,\nавторское право на которую принадлежит Steve Jackson Games.'}
                </p>
            </footer>
        </>
    );
  };
    
  export default MainPage;