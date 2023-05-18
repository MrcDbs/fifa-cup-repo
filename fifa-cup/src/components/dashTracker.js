import React, { useEffect, useState } from 'react';
import PlayerSlot from './playerSlot';
import HeadNav from './headNav';
import data from './data/players.json';

import { Grid } from '@mui/material';

const DashTracker = () => {
    //const PROD_URL = 'https://fifa-api-service.onrender.com/players';
    const PROD_URL = 'https://fifa-api-service-be.onrender.com/fifa/getPlayers';
    const DEV_URL = 'http://localhost:3210/fifa/getPlayers';
    //const [players, setPlayers] = useState([{ name: 'l', count: 9, id: 2 }]);
    // const [players, setPlayers] = useState(data);
    const [change, setChange] = useState(false);
    const [players, setPlayers] = useState([
        // {
        //     name: 'Gigi',
        //     count: 0,
        //     id: 1
        // },
        // {
        //     name: 'Squalo',
        //     count: 0,
        //     id: 2
        // },
        // {
        //     name: 'Andy',
        //     count: 0,
        //     id: 3
        // },
        // {
        //     name: 'Marco',
        //     count: 0,
        //     id: 4
        // },
        // {
        //     name: 'Computer',
        //     count: 0,
        //     id: 5
        // },

    ]);

    const fetchingData = () => {
        fetch(PROD_URL).then(
            res => {
                return res.json();
            }
        ).then(data => {
            console.log('FETCH ', data);
            setPlayers(data);
        }

        );
    }

    useEffect(() => {
        fetchingData();
    }, []);
    useEffect(() => {
        fetchingData();
    }, [change])
    return (
        <>
            <HeadNav players={players}></HeadNav>
            <div style={{ margin: '20px' }}>
                <Grid container>
                    {players && players.map((entry, key) => {
                        //console.log('INTO MAP FUNCTION ', entry);
                        return (
                            <Grid item>
                                <PlayerSlot
                                    player={entry}
                                    players={players}
                                    setPlayers={setPlayers}
                                    change={change}
                                    setChange={setChange}
                                ></PlayerSlot>
                            </Grid>
                        )


                    })}
                </Grid>
            </div>
        </>
    )
}

export default DashTracker;
