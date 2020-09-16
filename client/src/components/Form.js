import React, { useState } from 'react'

const Form = props => {
    const { nameProp, prefPosProp, submitProp, errors } = props;
    const [ player, setPlayer ] = useState({
        name: nameProp,
        pref_position: prefPosProp
    });

    const handleChange = e => {
        setPlayer({
            ...player,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        submitProp(player);
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="name">Player Name:</label>
                    <input type="text" name="name" onChange={ handleChange } />
                    {
                        errors.name ?
                        <p>{ errors.name.message }</p>
                        : ''
                    }
                </div>
                <div>
                    <label htmlFor="pref_position">Preferred Position:</label>
                    <input type="text" name="pref_position" onChange={ handleChange } />
                </div>
                <button>Add Player</button>
            </form>
        </div>
    )
}

export default Form
