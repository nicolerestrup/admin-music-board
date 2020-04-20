import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  appMenu: {
    width: '100%',
  },
  menuItem: {
    width: drawerWidth,
    '&.active': {
      background: '#1D272D',
      '& .MuiListItemIcon-root': {
        color: '#fff',
      },
    },
  },
  menuAddItem: {
    width: drawerWidth,
    backgroundColor: '#609a6017',
    '&.active': {
      background: '#1D272D',
      '& .MuiListItemIcon-root': {
        color: '#fff',
      },
    },
  },
  menuItemAddIcon: {
    color: '#609a60',
  },
  menuItemIcon: {
    color: '#84C9Fb',
  },
  LogOutIconContainer: {
    marginTop: '30rem',
  },
  LogOutIcon: {
    color: '#84C9Fb',
  },
}));

export default useStyles;