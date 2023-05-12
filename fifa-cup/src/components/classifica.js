import React, { useState, useEffect } from 'react';

import { TableCell, TableContainer, TableRow, TableHead, TableBody, Table, Paper } from '@mui/material';

const Classifica = (props) => {

    //const [players, setPlayers] = useState(props.players);
    const [sortedPlayers, setSortedPlayers] = useState([]);

    const sortStandings = (players) => {
        let copiedArray = players.map(p => ({ name: p.name, count: p.count, id: p.id }));
        let sortedPlayers = copiedArray.sort(
            (p1, p2) => (p1.count < p2.count) ? 1 : (p1.count > p2.count) ? -1 : 0
        );
        return sortedPlayers;

    }

    useEffect(() => { setSortedPlayers(sortStandings(props.players)); console.log('SORTING PLAYERS..') }, []);
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 230 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th" scope="row" sx={{ fontSize: '18px' }}>Giocatore</TableCell>
                            <TableCell component="th" scope="row" sx={{ fontSize: '18px' }}>Tornei</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedPlayers.map((row) => (
                            <TableRow
                                key={row.id}
                            >
                                <TableCell >
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Classifica;