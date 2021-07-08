import React from 'react';
import {Card, CardContent, CardHeader, Grid, Paper, Typography} from "@material-ui/core";


export function EventsCards() {

    const cards = [];

    return (
        <div>
          <Card elevation={5}>
              <CardHeader
              title='Заголовок'
              subheader="Подзаголовок"
              />
              <CardContent>
                  <Typography variant='body2' color='secondary'>
                      Описание
                  </Typography>
              </CardContent>
          </Card>

            <Card elevation={5}>
                <CardHeader
                    title='Заголовок'
                    subheader="Подзаголовок"
                />
                <CardContent>
                    <Typography variant='body2' color='secondary'>
                        Описание
                    </Typography>
                </CardContent>
            </Card>

            <Card elevation={5}>
                <CardHeader
                    title='Заголовок'
                    subheader="Подзаголовок"
                />
                <CardContent>
                    <Typography variant='body2' color='secondary'>
                        Описание
                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
}