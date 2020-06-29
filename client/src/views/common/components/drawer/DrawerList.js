import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";


export default function DrawerList({linkItems, ...props}) {
    return (
        <List>
            {linkItems.map(link => {
                const overridenProps = {}
                if (!!link.handler) overridenProps.onClick = link.handler

                return (
                    <ListItem button key={link.text}
                              component={Link} to={link.to}
                              {...overridenProps}
                    >
                        <ListItemIcon>{link.icon}</ListItemIcon>
                        <ListItemText primary={link.text}/>
                    </ListItem>
                )
            })}
        </List>
    );
}
