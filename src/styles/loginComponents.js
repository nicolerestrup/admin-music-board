import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  loginMenu: {
    width: '100%',
  },
  loginPageContainer: {
    backgroundColor: '#1D272D',
    padding: '70px',
    paddingTop: '10px',
    border: '1px solid transparent',
    borderRadius: '10px 10px 10px 10px'
  },
  loginPageHeader: {
    textAlign: 'center',
    fontSize: '1.4rem'
  },
  loginPageText: {
    textAlign: 'center',
    fontSize: '1rem'
  },
  loginItem: {
    width: drawerWidth,
    '&.active': {
      background: '#1D272D',
      '& .MuiListItemIcon-root': {
        color: '#fff',
      },
    },
  },
  loginItemIcon: {
    color: '#84C9Fb',
  },
}));

export default useStyles;