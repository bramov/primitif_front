import {Button, CardActions, Typography } from '@mui/material';
import React from 'react';

export const Footer = () => (
    <>
        <Typography><hr /></Typography>
        <CardActions sx={{justifyContent: "center"}}>
            <Button variant="contained" onClick={() => alert('done!')} size="large">
                Publish
            </Button>
        </CardActions>
    </>
);