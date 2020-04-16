import React from 'react'

export const PlayerView = (props) => {
    console.log(props)
    const player = props.player


    const playerDetails = () =>
        (
            <div>
                Photo and Details here
                <h1>{`${player.first_name} ${player.last_name}`}</h1>
                <h1>{`${player.first_name} ${player.last_name}`}</h1>
            </div>
        )

    return (
        <div>
            {player && playerDetails()}
        </div>
    )
}

export default PlayerView
