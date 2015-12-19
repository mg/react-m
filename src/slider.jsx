import React from 'react'
import Radium from 'radium'

export class Slider extends React.Component {
  static propTypes= {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number,
    onChange: React.PropTypes.func.isReqired,
  }

  render() {
    return <div/>
  }
}

export default Radium(Slider)

const styles= {

}
