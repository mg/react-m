import React from 'react'
import Radium from 'radium'
import { AutoId } from 'react-autoid'
import Ripple from '../ripple.jsx'

export class Checkbox extends React.Component {
  static propTypes= {
    value: React.PropTypes.bool,
    ripple: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
  }

  render() {
    const { value, ripple, autoId, children }= this.props

    let checkbox= {...styles.checkbox}
    let check= {...styles.check}
    if(value) {
      checkbox= {...checkbox, ...styles.checkboxOn}
      check= {...check, ...styles.checkOn}
    }

    var markupRipple
    if(ripple) {
      markupRipple= <Ripple center={false} color={'#3f51b5'} container={styles.ripple}/>
    }

    var markupFocus
    if(this.state.focused) {
      markupFocus= <span style={styles.focus}/>
    }
    return (
      <div style={styles.container}>
        <input
          type='checkbox'
          id={autoId}
          value={value}
          onChange={::this.onChange}
          style={[styles.input]}
          onFocus={::this.onFocus}
          onBlur={::this.onBlur}
          />
        {markupFocus}
        <span style={checkbox} onClick={::this.onClick}>
          <span style={check}/>
          {markupRipple}
        </span>
        <label htmlFor={autoId} style={styles.label}>{children}</label>
      </div>
    )
  }

  onChange(e) {
    const { value, onChange }= this.props
    onChange(!value)
    this.setState({focused: false})
  }

  onClick(e) {
    const { value, onChange }= this.props
    if(e) e.preventDefault()
    onChange(!value)
  }

  onFocus() {
    this.setState({focused: true})
  }

  onBlur() {
    this.setState({focused: false})
  }

  state= {}
}

export default AutoId(Radium(Checkbox))

const styles = {
  container: {
    position: 'relative',
  },

  label: {
    color: '#757575',
    fontWeight: 400,
    paddingLeft: 24,
    cursor: 'pointer',
    fontSize: 16,
    lineHeight: '24px',
    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
  },

  input: {
    appearance: 'none',
    position: 'absolute',
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0,
    border: 'none',
  },

  checkbox: {
    border: '2px solid rgba(0,0,0,.54)',
    borderRadius: 2,
    width: 16,
    height: 16,
    top: 3,
    position: 'absolute',
    display: 'inline-block',
    boxSizing: 'border-box',
    cursor: 'pointer',
  },

  checkboxOn: {
    border: '2px solid #3f51b5',
  },

  check: {
    mask: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==")',
    width: '100%',
    height: '100%',
    display: 'inline-block',
    position: 'absolute',
    top: 0,
    left: 0,
    transitionDuration: '.28s',
    transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
    transitionProperty: 'background',
  },

  checkOn: {
    backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K")',
    backgroundColor: '#3f51b5',
  },

  focus: {
    position: 'absolute',
    top: 3,
    left: 0,
    display: 'inline-block',
    boxSizing: 'border-box',
    width: 16,
    height: 16,
    borderRadius: '50%',
    boxShadow: '0 0 0 8px rgba(63,81,181,.26)',
    backgroundColor: 'rgba(63,81,181,.26)',
  },

  ripple: {
    top: -12,
    left: -12,
    width: 36,
    height: 36,
    borderRadius: '50%',
    WebkitMaskImage: '-webkit-radial-gradient(circle,#fff,#000)',
  },
}
