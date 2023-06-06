import React, { Component } from 'react';
import DistAttackForm from '../CalculatorComponents/DistAttackForm';
import ContactAttackForm from '../CalculatorComponents/ContactAttackForm';
import ThrowingForm from '../CalculatorComponents/ThrowingForm';
import LivingEpxensesForm from '../CalculatorComponents/LivingExpensesForm';

function FormType(props) {
  switch(props.typeofform) {
    case 'Dist':
      return (<DistAttackForm />)
    case 'Contact':
      return (<ContactAttackForm />)
    case 'Throwing':
      return (<ThrowingForm />)
    case 'Expenses':
      return (<LivingEpxensesForm />)
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = { formType: 'Dist' }
    this.handleFormTypeChange = this.handleFormTypeChange.bind(this)
  }

  handleFormTypeChange(event){
    this.setState({ formType : event.target.value })
  }

  render() {
    return (
      <>
        <main className='page-main'>
          <div className='gridcontainer-modulebuttons'>
            <button onClick={this.handleFormTypeChange} value={'Dist'} name="changetoDistbutton" id="changetoDistbutton-id" className='module-button text-style--modulebuttons'>Дистанционные атаки</button>
            <button onClick={this.handleFormTypeChange} value={'Contact'} name="changetoContactbutton" id="changetoContactbutton-id" className='module-button text-style--modulebuttons'>Контактные атаки</button>
            <button onClick={this.handleFormTypeChange} value={'Throwing'} name="changetoThrowingbutton" id="changetoThrowingbutton-id" className='module-button text-style--modulebuttons'>Метание предметов</button>
            <button onClick={this.handleFormTypeChange} value={'Expenses'} name="changetoThrowingbutton" id="changetoThrowingbutton-id" className='module-button text-style--modulebuttons'>Расходы на жизнь</button>
          </div>
          <FormType typeofform={this.state.formType} />
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
    )
  }
}
    
export default Calculator;