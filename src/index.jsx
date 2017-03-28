import React from 'react'
import { render } from 'react-dom'

const Foo = (props, context) => {
  // const {
  //   location
  // } = context.router;

  return <div>Hi 2</div>
}

render(<Foo />, document.getElementById('root'))
