import React, { useEffect } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMenuItems } from './actions'
import clsx from 'clsx'

import { CssBaseline, Drawer, Container } from '@material-ui/core';

import useStyles from './styles/appRoute'
import AppMenu from './MenuComponents/AppMenu'
import HomePage from './PageComponents/HomePage'
import NewPage from './PageComponents/NewPage'
import ProjectPage from './PageComponents/ProjectPage'
import NewProjectPage from './PageComponents/NewProjectPage'
import NewSongPage from './PageComponents/NewSongPage'

const AppRoute = ( { setIsSignedIn, fetchMenuItems } ) => {
  const classes = useStyles()

  useEffect(() => {
    fetchMenuItems()
  }, [])

  return (
    <BrowserRouter>
      <div className={clsx('App', classes.root)}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <AppMenu setIsSignedIn={setIsSignedIn} />
        </Drawer>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>

            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/new" component={NewPage} />
              <Route path="/new-project" component={NewProjectPage} />
              <Route path="/new-song" component={NewSongPage} />
              <Route path="/" component={ProjectPage} />
            </Switch>

          </Container>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default connect(null, { fetchMenuItems })(AppRoute)
