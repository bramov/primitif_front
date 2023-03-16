import React, {useRef, useState} from 'react';
import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon,
    ListItemText, Paper, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AvTimerIcon from '@mui/icons-material/AvTimer';

type Props = {
    title: string;
};



export const Header = ({ title }: Props) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => setOpen((prevState => !prevState));

    return (
        <Box sx={{flexGrow: 1, zIndex: 2000 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="back"
                        sx={{mr: 2}}
                    >
                        <ArrowBackIcon/>
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{flexGrow: 1}} align="center">
                        {title || 'Primitif'}
                    </Typography>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={toggleDrawer}
                    >
                        {open ? <CloseIcon /> : <MenuIcon/> }
                    </IconButton>
                </Toolbar>
            </AppBar>
            {/*<Drawer*/}
            {/*    anchor="top"*/}
            {/*    open={open}*/}
            {/*    disablePortal*/}
            {/*    sx={{*/}
            {/*        position: "relative !important",*/}
            {/*        '& .MuiBackdrop-root': {*/}
            {/*            position: "relative !important",*/}
            {/*        },*/}
            {/*        '& .MuiPaper-root': {*/}
            {/*            position: 'relative !important',*/}
            {/*            backgroundColor: '#1976d2',*/}
            {/*            width: '100%',*/}
            {/*        },*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Paper>*/}
            {/*        <List>*/}
            {/*            <ListItem>*/}
            {/*                <ListItemButton>*/}
            {/*                    <ListItemIcon color="inherit">*/}
            {/*                        <AvTimerIcon />*/}
            {/*                    </ListItemIcon>*/}
            {/*                    <ListItemText primary="Timings" />*/}
            {/*                </ListItemButton>*/}
            {/*            </ListItem>*/}
            {/*            <ListItem>*/}
            {/*                <ListItemButton>*/}
            {/*                    <ListItemIcon>*/}
            {/*                        <AvTimerIcon />*/}
            {/*                    </ListItemIcon>*/}
            {/*                    <ListItemText primary="Drafts" />*/}
            {/*                </ListItemButton>*/}
            {/*            </ListItem>*/}
            {/*        </List>*/}
            {/*    </Paper>*/}
            {/*</Drawer>*/}
        </Box>
    );
};