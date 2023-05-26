import React from 'react';

const ForMasterAndPlayer = () => {
  return (
    <>
      <main>
        <section className="main-content--box topmargin">
          <h1 className="text-style--title">Советы по игре</h1>
          <p className='text-style--maintext main-content--text bordernone textlinebreak'>
            {'В данном разделе представлены советы игрокам и мастерам, которые уже имеют хотя бы минимальный опыт игры. Если вы только начинаете своё знакомство с GURPS,  сначала ознакомьтесь с информацией из раздела “С чего начать?”.'}
            {'\n\nА теперь перейдем к советам:'}
          </p>
        </section>

        <section className="main-content--box numberedlist">
            <p className="text-style--maintext main-content--text textlinebreak bordernone notoppad">
              {'1. По мере увеличения игрового опыта, вам рано или поздно станет мало тех возможностей, что даёт GURPS Lite. Как только это случится, попробуйте углубиться в полную версию правил. Для игрока достаточно изучить книгу “GURPS Basic Set: Characters”, которую можно приобрести в оригинале на '}
              <a  className="linkstyle--textlink" href="//www.sjgames.com/gurps/books/Basic/" target='_blank' rel="noreferrer">официальном сайте</a>
              {' или скачать русскую версию, например, '}
              <a  className="linkstyle--textlink" href="//www.rulit.me/data/programs/resources/pdf/StivDzhekson_GURPS-4E-BasicSet(polnyyperevod)_RuLit_Me_389900.pdf" target='_blank' rel="noreferrer">отсюда.</a>
            </p>

            <p className="text-style--maintext main-content--text textlinebreak bordernone notoppad">
              {'2. Если вы являетесь начинающим мастером и у вас мало опыта, помимо вышеупомянутой книги вам будет очень полезно хотя бы бегло ознакомится с “GURPS Basic Set: Campaigns”. В ней вы найдёте всё необходимое для прописывания игровых миров независимо от их сеттинга, основного жанра и степени правдоподобности. Данную книгу также можно найти на ранее указанном официальном сайте системы.'}
            </p>

            <p className="text-style--maintext main-content--text textlinebreak bordernone notoppad">
              {'3. Также я считаю очень важным сказать всем игрокам и  мастерам следующее: всегда старайтесь заранее продумать и сказать другим, чего именно вы хотите от игры в целом, и что вы ожидаете от своих приключений как персонаж в мире мастера в частности!!'}
              {'\nЭто крайне важно так как я лично несколько раз сталкивался с неприятными ситуациями, в которых я или другие игроки не могли реализовать свои желания, а мастер не понимал почему в его подробно прописанном мире вдруг всем становится не интересно.'}
              {'\nТакие моменты обычно легко решаемы путём своевременного обсуждения желаний как игроков так и мастера ещё на этапе подготовки к игре, но многие новички об этом просто забывают.'}
            </p>
        </section>
      </main>

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
  
export default ForMasterAndPlayer;