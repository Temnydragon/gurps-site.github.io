import React from 'react';

function FirstSteps () {
    return (
      <>
        <main className='page-main'>
          <section className="main-content--box topmargin">
            <h1 className="text-style--title">Как начать играть в GURPS?</h1>
            <p className='text-style--maintext main-content--text bordernone textlinebreak'>
              {'Если вы ознокомились с информацией на данном сайте и хотите начать играть в GURPS, вам необходимо немного подготовиться:'}
            </p>
          </section>

          <section className="main-content--box numberedlist">
              <p className="text-style--maintext main-content--text textlinebreak bordernone notoppad">
                {'1. Прочитайте сокращённый вариант общих правил под названием GURPS Lite. На русском языке данную книжку вы можете найти '}
                <a  className="linkstyle--textlink" href="//fuzionpowered.ucoz.ru/_ld/0/8_GURPS_lite_ru.pdf" target='_blank' rel="noreferrer">здесь.</a>
                {' Этого будет достаточно для понимания всех основ и подготовки к первой игре.'}
              </p>

              <p className="text-style--maintext main-content--text textlinebreak bordernone notoppad">
                {'2. Как только вы изучите основы, можете поискать в сети и/или среди друзей более опытного игрока, который захочет быть “Мастером” в вашей партии так как в любой НРИ должен быть ведущий.'}
              </p>

              <p className="text-style--maintext main-content--text textlinebreak bordernone notoppad">
                {'3. Создайте своего персонажа. Для этого вам понадобится шаблон листа персонажа, который вы можете найти '}
                <a className='linkstyle--textlink' href="//vk.com/wall-3656533_1322" target='_blank' rel="noreferrer">здесь.</a>
                {' Также, для этих целей вам может быть крайне полезна специальная программа '}
                <a className='linkstyle--textlink' href="//gurpscharactersheet.com/" target='_blank' rel="noreferrer">GURPS Character Sheet.</a>
                {' Для первой игры я бы советовал распечатать и прописать персонажа в ручную так как это положительно сказывается на первом опыте.'}
                {' Потом можете пробовать переходить на хранений и создание электронных версий с помощью упомянутого приложения.'}
              </p>
          </section>

          <section className="main-content--box">
            <p className='text-style--maintext bordernone textlinebreak'>
              {'Когда вы сделаете всё вышеописанное, можете спокойно начинать свои приключения по мирам, созданным другими любителями GURPS. Если же вам захочется большего, вы всегда можете обратиться к многообразию книг на '}
              <a className='linkstyle--textlink' href="//www.sjgames.com/gurps/" target='_blank' rel="noreferrer">официальном сайте системы</a>
              {' или посетить другие разделы данного сайта.'}
            </p>
          </section>
        </main>

        <footer className="page-footer">
        </footer>
      </>
    );
  };
    
  export default FirstSteps;