import React, { useState } from 'react';

import { AppBar, Box, Toolbar, Typography, Button, Modal, Grid } from '@mui/material';
import Classifica from './classifica';

const HeadNav = (props) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 230,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 34,
        p: 4,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            Tornei FIFA 23
                        </Typography>
                        <Button color="inherit" onClick={handleOpen}>Classifica</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>

                        <Grid container>
                            <Grid item xs={8}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Classifica
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Button onClick={handleClose}>Chiudi</Button>
                            </Grid>

                        </Grid>


                        <Classifica players={props.players}></Classifica>
                        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            
                        </Typography> */}

                    </Box>

                </Modal>
            </div>
        </>
    )
}

export default HeadNav;