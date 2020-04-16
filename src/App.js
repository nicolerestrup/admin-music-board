import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import useStyles from './styles'
import AppMenu from './MenuComponents/AppMenu'
import PageContainer from './PageComponents/PageContainer'
import db from './db/db.json'

import * as firebase from 'firebase';


const PageHome = () => {
  const [data, setData] = useState();
  const firestore = firebase.firestore();
  const docRef = firestore.doc('testData/data');

  const getRealTimeUpdates = () => {
    docRef.onSnapshot(doc => {
      if(doc && doc.exists) {
        setData(doc.data().test)
      }
    })
  }

  useEffect(() => {
    getRealTimeUpdates()
  }, [])

  return <Typography variant="h3" component="h1">{data}</Typography>
}

const PageProject = () => {
  return (
    <Typography variant="body1" component="div">
      <PageContainer db={db} />
    </Typography>
  )
}

const App = () => {
  const classes = useStyles()

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
          <AppMenu db={db} />
        </Drawer>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>

            <Switch>
              <Route path="/" exact component={PageHome} />
              <Route path="/" component={PageProject} />
            </Switch>

          </Container>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
