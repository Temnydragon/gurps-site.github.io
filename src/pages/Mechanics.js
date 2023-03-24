import React, { Component } from 'react';
import Annotation from '../Annotation';
import Dices from '../dices.jpg';
function Mechanics () {
    return (
        <main className='page-main'>
            <Annotation hText='Механики игры' description='Познакомимся с основами' 
            altText='Кубики' TitleText='Каких только кубов не бывает!' image={Dices}/>
        </main>
    );
  };
    
  export default Mechanics;