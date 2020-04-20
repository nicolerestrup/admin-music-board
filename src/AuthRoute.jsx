import React from 'react'
import clsx from 'clsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import useStyles from './styles/appRoute'
import LoginMenu from './LoginComponents/LoginMenu'
import Login from './LoginComponents/Login'


const PageLogin = () => {
  return <Typography variant="h3" component="h1"><Login /></Typography>
}

const AuthNavigation = () => {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={clsx('Auth', classes.root)}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <LoginMenu />
        </Drawer>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>

            <Switch>
              <Route path="/" component={PageLogin} />
            </Switch>

          </Container>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default AuthNavigation
