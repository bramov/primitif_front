import React from 'react';
import {Box} from "@mui/material";
import { QuestionList } from "../QuestionList";
import './style.css';

export const ContentWrapper = () => (
    <Box className="wrapper">
        <QuestionList />
    </Box>

);