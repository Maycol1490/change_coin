import React from 'react'

const Coin_change = ({changeCoin}) => {

    return (
        <div>
            <div className='container_input'>
                <input className='input_data' type="number"
                    placeholder='Ingresa Tu Cantidad'
                    onChange={changeCoin}
                />
            </div>
        </div>
    )
}

export default Coin_change