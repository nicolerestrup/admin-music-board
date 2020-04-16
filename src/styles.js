import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    background: '#2A353B',
    color: '#fff',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#2A353B',
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
      background: '#1D272D',
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
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10
  },
  mainPageContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    paddingBottom: 30,
  },
  itemsHeader: {
    fontWeight: 'bold',
    margin: 3
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  dropDownRoot: {
    marginTop: 3.5
  },
  iconText: {
    margin: 0,
    fontSize: 12,
  },
  todoItem: {
    display: 'flex',
    padding: '2px 5px 2px 2px',
    backgroundColor: '#2B343A',
    marginBottom: 5,
    borderRadius: 3,
  },
  tableContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    borderCollapse: 'collapse',
    width: '70%',
    alignItems: 'space-between'
  },
  tableHeader: {
    padding: '8px',
    paddingTop: '12px',
    paddingBottom: '12px',
    textAlign: 'center',
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  tableData: {
    padding: '8px',
  },
  tableBody: {
    width: '100%'
  },
  lastItem: {
    marginLeft: 'auto',
    padding: '8px',
  },
  tableIcon: {
    paddingTop: '10px',
    paddingLeft: '5px'
  },
  staticInfoPageContainer: {
    backgroundColor: '#1D272D',
    padding: '20px',
    border: '1px solid transparent',
    borderRadius: '0px 10px 0px 0px'
  },
  todoListContainer: {
    backgroundColor: '#1D272D',
    padding: '40px',
    border: '1px solid transparent',
    borderRadius: '0px 0px 10px 10px'
  },
  TodoListHeader: {
    marginTop: 0,
    marginBottom: 0,
    fontWeight: 'bold'
  },
  tabList: {
    margin: 0,
    padding: 0,
  },
  tabs: {
    display: 'inline-block',
    border: '1px solid transparent',
    borderBottom: 'none',
    bottom: '-1px',
    position: 'relative',
    listStyle: 'none',
    padding: '6px 12px',
    cursor: 'pointer',
    // backgroundColor: '#1D272D',
    // color: '#fff'
  },
  TodoListHeaderContainer: {
    display: 'flex',
    width: '70%',
    marginBottom: 10,
  }
}))

export default useStyles;