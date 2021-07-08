import React from 'react';
import {Grid, Paper} from "@material-ui/core";
import {EventsCards} from "../Cards/EventsCards";


export function Events () {
    return (
        <div>
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={9} sm={3}>
                        <EventsCards />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}