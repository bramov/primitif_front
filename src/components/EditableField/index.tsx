import React, { useRef, useState } from 'react';
import { Box, TextField, Typography, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import './styles.css';

type Props = {
    value: string;
    id: number;
    removeFn: (id: number) => void;
    handleValueChange: (val: string) => void;
}

export const EditableField = ({ value, removeFn, id, handleValueChange }: Props) => {
    const [isEditing, setEditing] = useState(false);

    const ref = useRef(null);

    const toggleBlur = () => setEditing((prevState => !prevState));

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => handleValueChange(event.target?.value);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setEditing(event.charCode !== 13);
    }

    return (
        <Box sx={{ margin: '20px' }}>
            {isEditing
                ? (
                    <TextField
                        variant="standard"
                        value={value}
                        onBlur={toggleBlur}
                        onChange={handleChange}
                        ref={ref}
                        autoFocus={isEditing}
                        onKeyPress={handleKeyPress}
                        sx={{ width: '100%' }}
                    />
                ) : (
                    <div className="line">
                        <Typography
                            sx={{ padding: '3px 0 0 0', width: '100%' }}
                            variant="subtitle1"
                            onClick={toggleBlur}
                        >
                            {value}
                        </Typography>
                        <IconButton
                            className="btn"
                            size="small"
                            aria-label="delete"
                            sx={{color: 'gray'}}
                            onClick={() => removeFn(id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                )
            }
        </Box>
    );
}