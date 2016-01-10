import React from 'react'
import { Fab } from '../src'

const noop= () => {}

export default class FabPage extends React.Component {
  render() {
    return (
      <div>
        <h3>Normal</h3>
        <Fab onClick={noop}>add</Fab>

        <h3>Ripple</h3>
        <Fab ripple onClick={noop}>mic</Fab>

        <h3>Color</h3>
        <Fab color='#3f51b5' onClick={noop}>call</Fab>

        <h3>Color and ripple</h3>
        <Fab color='#ff4081' ripple onClick={noop}>mode_edit</Fab>

        <h3>Disabled</h3>
        <Fab disabled onClick={noop}>cloud</Fab>
      </div>
    )
  }
}
