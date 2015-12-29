import React from 'react'
import Radium from 'radium'

export class Icon extends React.Component {
  static propTypes= {
    color: React.PropTypes.string,
  }

  static defaultProps= {
    color: '#757575',
  }

  render() {
    const { color, background, children}= this.props

    let styleIcon= {...styles.icon, color: color }

    return (
      <div style={styleIcon}>
        {children}
      </div>
    )
  }
}

export default Radium(Icon)

const styles= {
  icon: {
    fontSize: 24,
    fontFamily: 'Material Icons',
    fontStyle: 'normal',
    textTransform: 'none',
    fontFeatureSettings: '\'liga\'',
    WebkitFontFeatureSettings: '\'liga\'',
    WebkitFontSmoothing: 'antialiased',
  }
}
