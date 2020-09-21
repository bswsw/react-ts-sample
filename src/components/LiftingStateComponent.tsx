import React from "react";

function toCelsius(fahrenheit: number) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convert: (param: number) => number) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


enum TemperatureScale {
  C = 'Celsius',
  F = 'Fahrenheit'
}

type TemperatureScaleCode = keyof typeof TemperatureScale

interface ITemperatureInputProps {
  scale: TemperatureScaleCode
  temperature: string
  onTemperatureChange: (temperature: string) => void
}

// interface ITemperatureInputState {
//   temperature: string
// }

class TemperatureInput extends React.Component<ITemperatureInputProps> {

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // this.setState({
    //   temperature: e.target.value
    // })

    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale

    return (
      <fieldset>
        <legend>Enter temperature in {TemperatureScale[scale]}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    )
  }
}

const BoilingVerdict = (props: { celsius: number }) => (
  <p>
    {
      props.celsius >= 100
        ? 'The water would boil.'
        : 'The water would not boil.'
    }
  </p>
)

class Calculator extends React.Component<{}, { temperature: string; scale: TemperatureScaleCode }> {

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      temperature: '',
      scale: 'C',
    }
  }

  handleCelsiusChange = (temperature: string) => {
    this.setState({
      scale: 'C',
      temperature
    })
  }

  handleFahrenheitChange = (temperature: string) => {
    this.setState({
      scale: 'F',
      temperature
    })
  }

  // handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   this.setState({
  //     temperature: e.target.value
  //   })
  // }

  render() {
    const temperature = this.state.temperature
    const scale = this.state.scale

    const celsius = scale === 'F' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'C' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
      <div>
        <TemperatureInput scale={"C"} onTemperatureChange={this.handleCelsiusChange} temperature={celsius}/>
        <TemperatureInput scale={"F"} onTemperatureChange={this.handleFahrenheitChange} temperature={fahrenheit}/>
        <BoilingVerdict celsius={parseFloat(temperature)}/>
      </div>
      // <fieldset>
      //   <legend>Enter temperature in Celsius:</legend>
      //   <input
      //     value={temperature}
      //     onChange={this.handleChange}
      //   />
      //   <BoilingVerdict celsius={parseFloat(temperature)}/>
      // </fieldset>
    )
  }
}

export default class LiftingStateComponent extends React.Component {
  render() {
    return (
      <div>
        <Calculator/>
      </div>
    )
  }
}
