import React, { Component } from 'react';
import ThrowDescription from './ThrowDescription';

class ThrowingForm extends Component {
    constructor(props) {
        super(props)
        this.state = { strength:'0', weight:'0', distance:'', result:'' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event){
      this.setState({
        [event.target.name] : event.target.value
      })
    }

    handleSubmit(event){
        event.preventDefault()
        this.setState(this.ComputeThrowingDistance)
    }

    ComputeThrowingDistance(state) {
        let basiclift = (parseInt(state.strength)*parseInt(state.strength))/5;
        let weightratio = state.weight/basiclift
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



    render() {
        return (
            <form className='form-block' onSubmit={this.handleSubmit}>
                <section className='main-content--box'>
                    <h1 className="text-style--title textblock-center">Модуль метания предметов</h1>
                    <p className='text-style--maintext main-content--text bordernone textlinebreak textblock-center'>
                    {'Данный модуль призван помочь в расчёте дистанции метания предметов (не оружия) по правилам GURPS \n\nДля подробного ознакомления обратитесь к книге "Базовые правила: Кампании" \n(Глава "Броски успеха", страница 355)'}
                    </p>
                </section>

                <section className='calculator-box'>
                    <div className=''>
                        <div className="skill-box">
                            <label htmlFor="strength-id" className="text-style--maintext textblock-center">Сила персонажа</label>
                            <input className="text-style--maintext" type="number" name="strength" id="strength-id" min='0' value={this.state.strength} onChange={this.handleChange}/>
                        </div>
                        <div className="skill-box">
                            <label htmlFor="weight-id" className="text-style--maintext textblock-center">Вес предмета (в фунтах)</label>
                            <input className="text-style--maintext" type="number" name="weight" id="weight-id" min='0' value={this.state.weight} onChange={this.handleChange}/>
                        </div>
                    </div>

                    <h2 className="text-style--subtitle borderedtop-subtitle" >Результат</h2>

                    <div className="throwingdistance-box">
                        <button type="submit" name="dicerollbutton" id="dicerollbutton-id" className="text-style--buttontext">Вычислить дальность</button>
                        <output name="dicerollresult" id="dicerollresult-id" className="text-style--maintext textblock-center">{this.state.result}</output>

                        <ThrowDescription strength={this.state.strength} weight={this.state.weight} distance={this.state.distance}/>
                    </div>
                </section>
            </form>
        )
    }
}

export default ThrowingForm;