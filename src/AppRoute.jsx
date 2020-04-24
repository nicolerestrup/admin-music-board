import React, { useEffect } from 'react'
import { Provider, connect } from 'react-redux'
import clsx from 'clsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { CssBaseline, Drawer, Container } from '@material-ui/core';

import useStyles from './styles/appRoute'
import store from './store'
import { fetchTopFolder } from './actions'
import AppMenu from './MenuComponents/AppMenu'
import HomePage from './PageComponents/HomePage'
import NewPage from './PageComponents/NewPage'
import ProjectPage from './PageComponents/ProjectPage'
import NewProjectPage from './PageComponents/NewProjectPage'
import NewSongPage from './PageComponents/NewSongPage'
// import db from './db/db.json'

// import * as firebase from 'firebase';

const AppRoute = ( { setIsSignedIn, fetchTopFolder } ) => {
  const classes = useStyles()
  // const [name, setName] = useState();
  // const [category, setCategory] = useState();
  // const [data, setData] = useState();
  // const firestore = firebase.firestore();
  // const authId = firebase.auth().currentUser.uid
  
  // const getRealTimeUpdates = () => {
    
  //   if(authId) {
  //     const colRef = firestore.collection(authId);
  //     colRef.get()
  //       .then(snap => snap.docs.map(doc => {
  //         if(doc && doc.exists) {
  //           setName(doc.data().name);
  //         }
  //         const catRef = colRef.doc(doc.id).collection('categories')
  //         catRef.get()
  //           .then(categoriesRef => categoriesRef.docs.map(categories => {
  //             if(categories && categories.exists) {
  //               setCategory(categories.data())
  //               categories.data().categoryName.map(category => {
  //                 catRef.doc(categories.id).collection(category).get()
  //                   .then(specCat => specCat.docs.map(data => {
  //                     setData(data.data())
  //                   }))
  //               })
  //             }
  //           }))
  //       })
  //     );
  //   }
  // }

  useEffect(() => {
    fetchTopFolder()
    // getRealTimeUpdates()
  }, [])

  return (
    // <Provider store={store}>
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

export default connect(null, { fetchTopFolder })(AppRoute)
