import React, { useState } from 'react';
import { Box, Button, Card, Link, Typography, CardActions } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { EditableField } from "../EditableField";
import { QuestionCard } from "../QuestionCard";

export const QuestionList = () => {
    const [totalElems, setTotalElems] = useState(1);

    const handleAddQuestion = () => setTotalElems((prev) => prev + 1);

    const handleDeleteQuestion = () => setTotalElems((prev) => prev - 1);

    return (
        <Box sx={{margin: '20px'}}>
            <Typography variant="h6" align="center">Oil research</Typography>
            <hr/>
            <Typography variant="subtitle1" align="center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>

            { Array.from(Array(totalElems)).map((item, i) => <QuestionCard handleDelete={handleDeleteQuestion} key={i} />) }
            <CardActions sx={{justifyContent: "center"}}>
                <Button variant="outlined" startIcon={<AddCircleIcon/>} onClick={handleAddQuestion}>
                    One more question
                </Button>
            </CardActions>
        </Box>
    );
};