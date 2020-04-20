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