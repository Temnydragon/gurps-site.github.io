import React, { Component } from 'react';
import ThrowDescription from './ThrowDescription';

class ThrowingForm extends Component {
    constructor(props) {
        super(props)
        this.state = { strength:'10', weight:'1', distance:'', result:'' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event){
        if(event.target.value > 1000000) {
            this.setState({
              [event.target.name] : 1000000
            })
        }
        else {
            this.setState({
              /*Проверка для устранения значений равных или меньше 0*/
              [event.target.name] : (event.target.value === '' ? '' : (Math.abs(event.target.value) > 0 ? Math.abs(event.target.value) : 1))
            })
            this.setState({
                distance : ''
            })
        }
    }

    handleSubmit(event){
        event.preventDefault()
        this.setState(this.ComputeThrowingDistance)
    }

    ComputeThrowingDistance(state) {
        let basiclift = (parseInt(state.strength)*parseInt(state.strength))/5;
        let weightratio = state.weight/basiclift;
        const DistanceModifiers = [3.5, 2.5, 2.00, 1.50, 1.20, 1.10, 1.00, 0.80, 0.70, 0.60, 0.40, 0.30, 0.25, 0.20, 0.15, 0.12, 0.10, 0.09, 0.08, 0.07, 0.06, 0.05];
        const WeightRatios = [0.05, 0.10, 0.15, 0.20, 0.25, 0.30, 0.40, 0.50, 0.75, 1.00, 1.50, 2.00, 2.50, 3.00, 4.00, 5.00, 6.00, 7.00, 8.00, 9.00, 10.00, 12.0];
  
        let distmodifiernumber = 0;
        for (let i = 0; i < WeightRatios.length; i++) {
          if (weightratio > WeightRatios[i]) {
            distmodifiernumber++;
          }
        }

        let distanceValue = 0;
        if(distmodifiernumber >= DistanceModifiers.length) {
            distanceValue = 0.1
        }
        else {
            distanceValue = (DistanceModifiers[distmodifiernumber])*parseInt(this.state.strength)
        }

        return { distance: distanceValue.toFixed(2)}
    }
    
    handleChangeScrolltoHidden() {
        document.body.style.overflow = "hidden";
    };
  
    handleChangeScrolltoShow() {
        document.body.style.overflow = "auto";
    };


    render() {
        return (
            <form className='form-block' onSubmit={this.handleSubmit}>
                <div id="open-modalWindow" className='modalWindow'>
                    <div className='modalWindow-innerbox'>
                        <div className='modalWindow-content'>
                            <div className='modalWindow-header'>
                                <h2 className='text-style--maintext'>Модуль метания предметов</h2>
                                <a href="#close-modalWindow" title="Close" className='text-style--closebutton' onClick={this.handleChangeScrolltoShow}>×</a>
                            </div>
                            <div className='modalWindow-maintext'>
                                <p className='text-style--modalWindowparagraph'>
                                    {'Данный модуль позволяет быстро рассчитать возможную дальность метания предмета в соответствии с его весом и силой персонажа по правилам GURPS.'}
                                </p>
                                <h3 className='text-style--modalWindowparagraph'>
                                    {'Важно:'}
                                </h3>
                                <p className='text-style--modalWindowparagraph'>
                                    {'Значения полей ввода веса предмета и силы персонажа должны быть в пределах от 1 до 1000000!'}
                                    {'\n\nОба поля данной формы не должны содержать дробные значения (в случае ввода, дробная часть не будет учитываться в расчётах)!'}
                                    {'\n\nСогласно правилам системы 1 фунт = 0,5 кг (в реальности это соотношение примерно равно 1 к 0,45). В книгах системы вес предметов обычно указан именно в фунтах. Если вы хотите определить вес предмета, зная его вес в кг, переведите кг в фунты и округлите вверх до целого числа перед вводом значения в поле формы.'}
                                    {'\n\nДанный модуль не относится к расчёту дальности метания оружия (например, копья), так как специально сбалансированное метательное снаряжение имеет собственные зависимости дальности от силы метателя.'}
                                </p>
                                <h3 className='text-style--modalWindowparagraph'>
                                    {'Сила персонажа:'}
                                </h3>
                                <p className='text-style--modalWindowparagraph'>
                                    {'В данное поле нужно вводить числовое значение соответствующего атрибута конкретного персонажа, который пытается метнуть предмет. Подробнее про атрибуты можно почитать на странице "Механики игры" данного сайта или в книге правил системы.'}
                                    {'\n(Найти перевод книги правил можно '}
                                    <a  className="linkstyle--textlink" href="//www.rulit.me/data/programs/resources/pdf/StivDzhekson_GURPS-4E-BasicSet(polnyyperevod)_RuLit_Me_389900.pdf" target='_blank' rel="noreferrer">здесь</a>
                                    {')'}
                                </p>
                                <h3 className='text-style--modalWindowparagraph'>
                                    {'Вес предмета:'}
                                </h3>
                                <p className='text-style--modalWindowparagraph'>
                                    {'В данное поле нужно вводить числовое значение веса предмета, который пытается метнуть персонаж.'}
                                </p>
                                <h3 className='text-style--modalWindowparagraph'>
                                    {'Результат:'}
                                </h3>
                                <p className='text-style--modalWindowparagraph'>
                                    {'Чтобы вычислить максимальную дальность метания, после ввода значений силы персонажа и метаемого предмета нажмите на кнопку "Вычислить дальность".'}
                                    {'\nЕсли введённого значения силы персонажа недостаточно для метания предмета с указанным весом, будет автоматически выведено соответствующее сообщение ещё до нажатия кнопки.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='main-content--box'>
                    <h1 className="text-style--title textblock-center">Модуль метания предметов</h1>
                    <p className='text-style--maintext main-content--text bordernone textlinebreak textblock-center'>
                    {'Данный модуль призван помочь в расчёте дистанции метания предметов (не оружия) по правилам GURPS \n\nДля подробного ознакомления обратитесь к книге "Базовые правила: Кампании" \n(Глава "Броски успеха", страница 355)'}
                    </p>
                </section>

                <section className='calculator-box'>
                    <a href='#open-modalWindow' className='question-button' onClick={this.handleChangeScrolltoHidden}>?</a>
                    <div className=''>
                        <div className="skill-box">
                            <label htmlFor="strength-id" className="text-style--maintext textblock-center">Сила персонажа</label>
                            <input className="text-style--maintext" type="number" name="strength" id="strength-id" min='0' value={this.state.strength} required  onChange={this.handleChange}/>
                        </div>
                        <div className="skill-box">
                            <label htmlFor="weight-id" className="text-style--maintext textblock-center">Вес предмета (в фунтах)</label>
                            <input className="text-style--maintext" type="number" name="weight" id="weight-id" min='0' value={this.state.weight} required  onChange={this.handleChange}/>
                        </div>
                    </div>

                    <h2 className="text-style--subtitle borderedtop-subtitle" >Результат</h2>

                    <div className="throwingdistance-box">
                        <button type="submit" name="dicerollbutton" id="dicerollbutton-id" className="success-button text-style--buttontext">Вычислить дальность</button>
                        <output name="dicerollresult" id="dicerollresult-id" className="text-style--maintext textblock-center">{this.state.result}</output>

                        <ThrowDescription strength={this.state.strength} weight={this.state.weight} distance={this.state.distance}/>
                    </div>
                </section>
            </form>
        )
    }
}

export default ThrowingForm;