import React from 'react'

const SpreadRow= ({children}) =>
  <div style={{display: 'flex', justifyContent: 'space-between'}}>
    {children}
  </div>

const LeftPackedRow= ({children}) =>
  <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
    {children}
  </div>

const Space= () =>
  <div style={{marginRight: 20}}/>

const DoubleSpace= () =>
  <div style={{marginRight: 40}}/>

export { SpreadRow, LeftPackedRow, Space, DoubleSpace }
