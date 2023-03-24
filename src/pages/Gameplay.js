import React, { Component } from 'react';
import Annotation from '../Annotation';
import ReverseTavern from '../boardgame.png';

function Gameplay () {
    return (
      <main className='page-main'>
        <Annotation hText='Игровой процесс' description='Как это происходит?' 
            altText='Игра за столом' TitleText='Рекурсия от мира НРИ' image={ReverseTavern}/>
      </main>
    );
  };
    
  export default Gameplay;