import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'

import useStyles from './styles/appRoute'
import AppMenu from './MenuComponents/AppMenu'
import HomePage from './PageComponents/HomePage'
import NewPage from './PageComponents/NewPage'
import ProjectPage from './PageComponents/ProjectPage'
import NewProjectPage from './PageComponents/NewProjectPage'
import NewSongPage from './PageComponents/NewSongPage'
import db from './db/db.json'

import * as firebase from 'firebase';

const AppRoute = ( { setIsSignedIn } ) => {
  const classes = useStyles()
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [data, setData] = useState();
  const firestore = firebase.firestore();
  
  const getRealTimeUpdates = () => {
    const colRef = firestore.collection('theData');
    colRef.get()
      .then(snap => snap.docs.map(doc => {
        if(doc && doc.exists) {
          setName(doc.data().name);
        }
        const catRef = colRef.doc(doc.id).collection('categories')
        catRef.get()
          .then(categoriesRef => categoriesRef.docs.map(categories => {
            if(categories && categories.exists) {
              setCategory(categories.data())
              categories.data().categoryName.map(category => {
                catRef.doc(categories.id).collection(category).get()
                  .then(specCat => specCat.docs.map(data => {
                    setData(data.data())
                  }))
              })
            }
          }))
      })
    );
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
          <AppMenu setIsSignedIn={setIsSignedIn} name={name} collection={undefined} db={db} />
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

export default AppRoute
