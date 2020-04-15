import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#535454',
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  menuItem: {
    '&.active': {
      background: '#adadad',
      '& .MuiListItemIcon-root': {
        color: '#fff',
      },
    },
  },
  nav: {
    width: '100%',
    display: 'flex',
  },
  p: {
    paddingLeft: 5,
  }
}))

export default useStyles;