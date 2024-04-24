import React from "react";
import {
    ListItemSecondaryAction,
    ListItem,
    ListItemAvatar,
    ListItemText,
    IconButton,
    Typography,
    List,
    SvgIcon,
    Box,
    CircularProgress
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchAgainIcon from '@material-ui/icons/YoutubeSearchedFor';
import Card from '@material-ui/core/Card';
import { makeStyle } from '@material-ui/styles';
import { isEmpty, isNil } from "lodash";

const useStyle = makeStyle({
    card: {
        marginTop: 20,
        padding: 10,
        minHeight: 200,
        position: "relative"
    },
    text: {
        maxWidth: "70%"
    },
    centered: {
        display: "flex",
        position: "absolute",
        width: "100%",
        height: "100%"
    },
    SearchAgainIcon: {
        with: 25,
        height: 25,
        marginBottom: 2,
        marginRight: 10
    }
});

const ListRow = ({name, description, fullDescription, icon}) => {

    const classes = useStyle();

    return (
        <ListItem>
            <ListItemAvatar>
                <SvgIcon>{icon}</SvgIcon>
            </ListItemAvatar>
            <ListItemText 
                className={classes.text} 
                primary={name}
                secondary={
                    <React.Fragment>
                        <Typography component="span" variant="body2" color="textPrimary">
                            {description}
                        </Typography>
                        <br />
                        {fullDescription && fullDescription}
                    </React.Fragment>
                }
            />
            <ListItemSecondaryAction>
                <IconButton>
                    <EditIcon color="primary" />
                </IconButton>
                <IconButton>
                    <DeleteIcon color="primary" />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );

};

