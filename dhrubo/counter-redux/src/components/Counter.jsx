import React from 'react'
import {connect} from 'react-redux'; 
import {increment, decrement} from '../services/actions/counterAction'

function Counter({increment, decrement, count}) {
  return (
    <div> 
        <h3>Counter</h3>
        <h1>Count : {count}</h1>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>decrement</button>

    </div>
  )
}

const mapStateToProps = (state) =>({
    count:state.counterReducer.count
})

export default connect(mapStateToProps, {increment, decrement})(Counter)