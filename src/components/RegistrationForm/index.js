// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    isFirstNameErr: false,
    isLastNameErr: false,
    isSuccess: false,
  }

  submitForm = event => {
    event.preventDefault()
    const validateFirstName = this.validateFirstName()
    const validateLastName = this.validateLastName()
    if (validateFirstName && validateLastName) {
      this.setState({isSuccess: true})
    } else {
      this.setState({
        isFirstNameErr: !validateFirstName,
        isLastNameErr: !validateLastName,
        isSuccess: false,
      })
    }
  }

  validateFirstName = () => {
    const {firstname} = this.state
    return firstname !== ''
  }

  validateLastName = () => {
    const {lastname} = this.state
    return lastname !== ''
  }

  blurFirstName = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({isFirstNameErr: !isValidFirstName})
  }

  blurLastName = () => {
    const isValidLastName = this.validateLastName()
    this.setState({isLastNameErr: !isValidLastName})
  }

  updateFirstName = event => {
    this.setState({firstname: event.target.value})
  }

  updateLastName = event => {
    this.setState({lastname: event.target.value})
  }

  renderLoginForm = () => {
    const {isLastNameErr, isFirstNameErr, firstname, lastname} = this.state
    const firstNameHoverInput = isFirstNameErr ? 'hover' : ''
    const lastNameHoverInput = isLastNameErr ? 'hover' : ''
    return (
      <form className="form-container" onSubmit={this.submitForm}>
        <div className="firstName-container">
          <label htmlFor="firstName-input-text" className="label">
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstName-input-text"
            className={`input ${firstNameHoverInput}`}
            value={firstname}
            onChange={this.updateFirstName}
            onBlur={this.blurFirstName}
          />
          {isFirstNameErr ? <p className="error-msg">Required</p> : ''}
        </div>
        <div className="last-name-container">
          <label htmlFor="LastName-input-text" className="label">
            LAST NAME
          </label>
          <input
            type="text"
            id="LastName-input-text"
            className={`input ${lastNameHoverInput}`}
            value={lastname}
            onChange={this.updateLastName}
            onBlur={this.blurLastName}
          />
          {isLastNameErr ? <p className="error-msg">Required</p> : ''}
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    )
  }

  onclicksubmitResponse = () => {
    this.setState(prevState => ({
      isSuccess: !prevState.isSuccess,
      firstname: '',
      lastname: '',
    }))
  }

  renderSuccessView = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="succes-image"
      />
      <p className="success-paragraph">Submitted Successfully</p>
      <button
        type="button"
        className="success-button"
        onClick={this.onclicksubmitResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSuccess} = this.state
    return (
      <div className="app-container">
        <div className="registrationForm-container">
          <h1 className="heading">Registration</h1>
          <div className="form-sucess-container">
            {isSuccess ? this.renderSuccessView() : this.renderLoginForm()}
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
