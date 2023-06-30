import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core'
import { FiMenu } from 'react-icons/fi'
import Navbar from './Navbar'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    
    drawerPaper: {
        width: 240,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}))

export const SideBar = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleDrawerToggle = () => {
        setOpen(!open)
    }

    return (
        <div className={classes.root}>
            <IconButton
                edge='start'
                color='inherit'
                aria-label='menu'
                onClick={handleDrawerToggle}
            >
                <FiMenu />
            </IconButton>
            <Drawer 
                className={classes.drawer}
                classes={{ paper: classes.drawerPaper }}
                variant='persistent'
                anchor='right'
                open={open}
            >
                <div className={classes.toolbar} />
                <List>
                    <ListItem button>
                        {/* <ListItemIcon>
                            Home
                        </ListItemIcon> */}
                        <ListItemText primary='Back to Home'/>
                    </ListItem>

                    <ListItem>
                        <Navbar />
                    </ListItem>
                </List>
                {/* <main className={classes.content}>
                        <Navbar />
                </main> */}

            </Drawer>
        </div>
    )
}

export default SideBar