import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Coin_change from './Coin_change'


const Api_data = () => {
    const [apis, setApis] = useState()
    useEffect(() => {
        const URL = "https://api.coinlore.net/api/tickers/?start=100&limit=10"
        axios.get(URL)
            .then(res => setApis(res.data.data))
            .catch(err => console.log(err))
    })
    const [coin, setCoin] = useState()
    const changeCoin = (event) => {
        setCoin(event.target.value)
    }
    return (
        <div className='container_data'>
            <Coin_change
                changeCoin={changeCoin}
            />
            {
                apis?.map(api => (
                    <div className='container_inf' key={api?.id}>
                        <h2>{api?.name} <span>{api?.symbol}</span></h2>
                        <h3>Usd {parseFloat(api?.price_usd) * coin}</h3>
                        <h3>Btc {parseFloat(api?.price_btc) * coin}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default Api_data