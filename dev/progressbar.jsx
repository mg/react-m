import React from 'react'
import { ProgressBar } from '../src'

const noop= () => {}

export default class ProgressBarPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Progress bar loading</h3>
        <ProgressBar progress={0.6}/>

        <h3>Progress bar with buffer</h3>
        <ProgressBar progress={0.3} loaded={0.8}/>

        <h3>Indeterminate progress bar</h3>
        <ProgressBar indeterminate size={1}/>

        <h3>Querying</h3>
        <ProgressBar query size={6}/>
      </div>
    )
  }

  state= {}
}
