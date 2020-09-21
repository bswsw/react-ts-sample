import React from "react";

type ReservationState = {
  isGoing: boolean
  numberOfGuests: number
}

class Reservation extends React.Component<{}, ReservationState> {

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    console.log(name, value)

    // @ts-ignore
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br/>
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    )
  }
}

interface IFlavorFormState {
  value: string
  multipleValues: Array<string>
}

class FlavorForm extends React.Component<{}, IFlavorFormState> {

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      value: 'coconut',
      multipleValues: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      value: event.target.value
    })
  }

  handleChangeMultiple = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
  }

  handleSubmit = (event: React.FormEvent) => {
    alert(`Your favorite flavor is: ${this.state.value}`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick user favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <h1>{this.state.value}</h1>
        </label>

        <label>
          Pick user favorite flavors:
          <select multiple={true} value={['grapefruit', 'lime']} onChange={this.handleChangeMultiple}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default class FormComponent extends React.Component {
  render() {
    return (
      <div>
        <FlavorForm/>
        <hr/>
        <Reservation/>
      </div>
    )
  }
}
