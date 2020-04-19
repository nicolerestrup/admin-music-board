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
  // const [data, setData] = useState();
  return <Typography variant="h3" component="h1">Welcome!</Typography>
}

const PageProject = () => {
  return (
    <Typography variant="body1" component="div">
      <PageContainer db={db} />
    </Typography>
  )
}

const AppRoute = ( { setIsSignedIn } ) => {
  const classes = useStyles()
  const [name, setName] = useState();
  const [collection, setCollection] = useState();
  const firestore = firebase.firestore();
  
  const getRealTimeUpdates = () => {
    const colRef = firestore.collection('theData');
    colRef.get().then(
      snap => snap.docs.map(doc => {
        if(doc && doc.exists) {
          setName(doc.data().name);
        }
      })
    );
    const catRef = firestore.collection('theData').doc('categories')
    catRef.get().then(
      snap => console.log(snap.data())
    )
  }

  useEffect(() => {
    getRealTimeUpdates()
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
          <AppMenu setIsSignedIn={setIsSignedIn} name={name} collection={collection} />
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

export default AppRoute
