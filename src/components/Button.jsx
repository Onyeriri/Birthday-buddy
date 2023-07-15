import React from 'react'
import { useAppContext } from '../App';

const Button = () => {
    const { setPeople } = useAppContext();

    return (
        <button className='btn btn-block' type="button" onClick={() => setPeople([])}>Clear all</button>
    )
}

export default Button