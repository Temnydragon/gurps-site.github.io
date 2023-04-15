import React, { Component } from 'react';
import DistAttackForm from '../CalculatorComponents/DistAttackForm';
import ContactAttackForm from '../CalculatorComponents/ContactAttackForm';

function FormType(props) {
  if(props.typeofform == 'Dist') {
    return (
      <DistAttackForm />
    )
  }

  if(props.typeofform == 'Contact') {
    return (
      <ContactAttackForm />
    )
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = { formType: 'Dist' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFormTypeChange = this.handleFormTypeChange.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    this.setState({ [event.target.name] : event.target.value })
  }

  handleFormTypeChange(event){
    this.setState({ formType : event.target.value })
  }

  render() {
    return (
      <>
        <main className='page-main'>
          <button onClick={this.handleFormTypeChange} value={'Dist'} name="changetoDistbutton" id="changetoDistbutton-id" className='text-style--buttontext'>Дистанционные атаки</button>
          <button onClick={this.handleFormTypeChange} value={'Contact'} name="changetoDistbutton" id="changetoDistbutton-id" className='text-style--buttontext'>Контактные атаки</button>
          <FormType typeofform={this.state.formType} />
        </main>

        <footer className='page-footer'>
        </footer>
      </>
    )
  }
}
    
export default Calculator;