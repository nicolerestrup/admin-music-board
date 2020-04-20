import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  todoListContainer: {
    backgroundColor: '#1D272D',
    padding: '40px',
    border: '1px solid transparent',
    borderRadius: '0px 0px 10px 10px'
  },
  todoListHeaderContainer: {
    display: 'flex',
    width: '70%',
    marginBottom: 10,
  },
  todoListHeader: {
    marginTop: 0,
    marginBottom: 0,
    fontWeight: 'bold'
  },
  todoListTableBody: {
    width: '100%'
  },
  todoListTableContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    borderCollapse: 'collapse',
    width: '70%',
    alignItems: 'space-between'
  },
  todoListForm: {
    border: 0,
    width: '70%',
    height: 37,
    display: 'flex',
    padding: '2px 5px 2px 2px',
    backgroundColor: '#435058',
    marginBottom: 5,
    borderRadius: 3,
  },
  todoListFormValue: {
    backgroundColor: '#435058',
    border: 0,
    width: '100%',
    outline: 'none',
    paddingLeft: 20,
    color: 'white',
    fontSize: '1rem',
  },
  todoItem: {
    display: 'flex',
    padding: '2px 5px 2px 2px',
    backgroundColor: '#2B343A',
    marginBottom: 5,
    borderRadius: 3,
  },
  todoTableIcon: {
    paddingTop: '10px',
    paddingLeft: '5px'
  },
  todoTableData: {
    padding: '8px',
  },
  todoLastItem: {
    marginLeft: 'auto',
    padding: '8px',
  },
}));

export default useStyles;