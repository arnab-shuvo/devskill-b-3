import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from "../../styles/Counter.module.css";
import {
    store,
    increment,
    decrement, 
    selectCount
} from "../../store/index.js";

const Counter = () =>{
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    return(
        <>

            <div className='container'>
                <div className={styles.row}>
                    <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                    >
                    -
                    </button>
                    <span className={styles.value}>{count}</span>
                    <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                    >
                    +
                    </button>
                </div>
                
            </div> 

        </>
        
        )
}

export default Counter;