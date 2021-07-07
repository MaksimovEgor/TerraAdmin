import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SearchAppBar from "./Navigation";
import {Box, Button, ButtonGroup, Container} from "@material-ui/core";


const drawerWidth = 240;
const cards = [1, 2, 3, 4, 5, 6, 7];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function PermanentDrawerLeft() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Терра добро
                    </Typography>

                    <Box position='right'>
                        <SearchAppBar/>
                    </Box>

                </Toolbar>
            </AppBar>


            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar}/>
                <Divider/>
                <List>
                    {['Одобрено', 'Отклонено', 'На рассмотении'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {['Просмотренно', 'Не просмотренно'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>


            {cards.map((card) => (
                <Container key='card'>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>

                        <Container>

                            <Box>
                                <Typography paragraph>

                                    <div>
                                        <Typography variant='h5'>Иванов Артур Петрович</Typography>
                                    </div>
                                    <span>24.08. 2021 16:37</span>
                                </Typography>
                            </Box>

                            <Box position='right'>
                                <Typography><b>Статус:</b> На рассмотрении</Typography>
                            </Box>

                            <Container position='right'>
                                <img src="https://picsum.photos/800/250"/>
                            </Container>
                            <Container>

                                <Typography paragraph>
                                    10.04.2021 Наши студенты приняли частие в благотворительном мероприятии
                                    Музейно-выставочного
                                    центра и волонтерского объединения "Маяк" в поддержку Кости Гепалова.
                                    Участвовали Ковалева Валерия вокальный номер и волонтеры Стукова Виктория ПС 94 и
                                    Голобокова
                                    Виктория ПС 93 (участвовали в качестве аниматоров).
                                </Typography>


                            </Container>
                            <ButtonGroup variant="contained" color="primary"
                                         aria-label="contained primary button group">
                                <Button>Принять</Button>
                                <Button>Отклонить</Button>

                            </ButtonGroup>
                        </Container>

                    </main>
                </Container>
            ))}


        </div>
    );
}