import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    background: '#272727',
    color: '#fff',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#18242B',
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
    width: drawerWidth,
    '&.active': {
      background: '#2f2f2f',
      '& .MuiListItemIcon-root': {
        color: '#fff',
      },
    },
  },
  appMenu: {
    width: '100%',
  },
  navList: {
    width: drawerWidth,
  },
  menuItemIcon: {
    color: '#84C9Fb',
  },
  dropDown: {
    width: 131,
    height: 19,
    padding: 1,
    border: 2,
    fontSize: 11,
    textAlign: 'center',
    borderRadius: 0
  },
  arrow: {
    top: 7
  },
  dropDownOptions: {
    width: 131,
    padding: 1,
    border: 2,
    fontSize: 11,
    textAlign: 'center'
  },
  statusContainer: {
    display: 'flex'
  }
}))

export default useStyles;