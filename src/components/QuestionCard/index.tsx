import React, { useState, useEffect, useMemo } from 'react';
import {Box, Button, Card, MenuItem, Select, TextField, Typography} from "@mui/material";
import { EditableField } from "../EditableField";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from "@mui/icons-material/Settings";
import { Menu } from '@mui/material';

const mockedData = [
    {
        title: 'First Question',
        id: 0
    },
    {
        title: 'Second Question',
        id: 1
    },
    {
        title: 'Third Question',
        id: 2
    }
];

type Props = {
    handleDelete: () => void;
}

export const QuestionCard = ({ handleDelete }: Props) => {
    const [data, setData] = useState(mockedData);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleSettingsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAddAnswer = () => {
        setData((prev) => [...prev, { title: 'Tap and write an option...', id: prev.length + 1} ])
    };

    const handleRemoveAnswer = (id: number) => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
    }

    const memoisedData = useMemo(() => data.map((item) => {
        const handleValueChange = (value: string) => {
            const elem = [...data];
            const updatedData = data.map((elem) => item.id === elem.id ? { title: value, id: elem.id } : elem);
            setData(updatedData);
        };

        return (
            <EditableField value={item.title} id={item.id} key={item.id} removeFn={handleRemoveAnswer} handleValueChange={handleValueChange} />
        );
    }), [data]);

    return (
        <Card sx={{margin: '20px'}} variant="outlined">
            <Typography sx={{margin: '10px'}} variant="h6">How often do you put oil in your engine?</Typography>

            { memoisedData }

            <Box sx={{display: 'flex', justifyContent: 'space-between', margin: '20px'}}>
                <Button variant="text" size="small" startIcon={<AddIcon />} onClick={handleAddAnswer}>Add answer</Button>
                <Button variant="text" size="small" startIcon={<SettingsIcon />} onClick={handleSettingsClick}>Settings</Button>
            </Box>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <Box sx={{ padding: '10px', gap: '10px', display: 'flex', flexDirection: 'column' }}>
                    <TextField id="outlined-basic" label="Add hint here" variant="outlined" />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Type of question"
                        sx={{ minWidth: '250px'}}
                        value={10}
                    >
                        <MenuItem value={10}>Single answer</MenuItem>
                        <MenuItem value={20} disabled>Multiple answer</MenuItem>
                        <MenuItem value={30} disabled>Scale</MenuItem>
                    </Select>
                    <MenuItem onClick={handleDelete} sx={{ minWidth: '250px'}}>
                        <DeleteIcon fontSize="small" sx={{ marginRight: '8px', color: 'gray' }} />
                        Delete
                    </MenuItem>
                </Box>
            </Menu>
        </Card>
    );
}