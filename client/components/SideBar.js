import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 240,
    },
    
    drawerPaper: {
        width: 240,
    }
}))

export const SideBar = () => {
    const classes = useStyles()

    return (
        <Drawer 
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
            variant='permanent'
            anchor='right'
        >
            <List>
                <ListItem button>
                    {/* <ListItemIcon>
                        Home
                    </ListItemIcon> */}
                    <ListItemText primary='Back to Home'/>
                </ListItem>
            </List>

        </Drawer>
    )
}

export default SideBar