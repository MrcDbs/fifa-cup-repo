import React, { useEffect, useState } from 'react';
//import { writeJsonFile } from 'write-json-file';
//import { addDoc, loadDocs } from '../db/myDB';

import { Card, CardContent, CardHeader, CardActions, Typography, Button } from '@mui/material';

const PlayerSlot = (props) => {
    const PROD_URL = 'https://fifa-api-service.onrender.com/players';
    //const PROD_URL = 'https://my-json-server.typicode.com/MrcDbs/json-db/players';
    const DEV_URL = 'http://localhost:8000/players';

    const patchMethod = (player, count) => {
        fetch(PROD_URL + '/' + player.id, {
            method: 'PATCH',
            body: JSON.stringify({
                count: count,
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('PATCH DATA ', data);
                if (data) {
                    props.setChange(!props.change);
                }
                //props.setPlayers(data);
            });
    }

    const addTrophy = (e, player) => {
        //addDoc()
        // let docs = loadDocs();
        // console.log('DOCS.. ', docs);

        // props.setPlayers(props.players.forEach(p => {
        //     if (p.id === player.id) {
        //         p.count++;
        //     }
        // }))
        patchMethod(player, player.count + 1);
        // let newArray = [];
        // props.players.forEach(p => {
        //     if (p.id === player.id) {
        //         p.count++;
        //     }
        //     newArray.push(p);
        // });
        // props.setPlayers(newArray)

        console.log('ADDING ... 1 ', player);
    }

    const removeTrophy = (e, player) => {
        patchMethod(player, player.count - 1);
        console.log('REMOVING ... 1 ', player);
        // if (player.count > 0) {
        //     let newArray = [];
        //     props.players.forEach(p => {
        //         if (p.id === player.id) {
        //             p.count--;


        //         }
        //         newArray.push(p);
        //     });
        //     props.setPlayers(newArray)

        //     console.log('ADDING ... 1 ', player);
        // }
    }
    //useEffect(() => { addDoc() }, []);
    return (
        <>
            {/* <h2>Ciao</h2> */}
            <Card sx={{ width: '300px', margin: '15px' }}>
                <CardHeader title={props.player.name} />
                {/* <CardMedia
                    component="img"
                    height="194"
                    image="/static/images/cards/paella.jpg"
                    alt="Paella dish"
                /> */}
                <CardContent>
                    <Button variant="outlined"
                        onClick={(e) => addTrophy(e, props.player)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                        </svg></Button>
                    <Typography variant="h1" color="text.primary">
                        {props.player.count}
                    </Typography>
                    <Button disabled={props.player.count <= 0} variant="outlined" onClick={(e) => removeTrophy(e, props.player)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                    </svg></Button>
                </CardContent>
                {/* <CardActions disableSpacing>
                </CardActions> */}
            </Card>
        </>
    )
}

export default PlayerSlot;