import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  metaDataPageContainer: {
    backgroundColor: '#1D272D',
    padding: '20px',
    paddingTop: 0,
    border: '1px solid transparent',
    borderRadius: '0px 0px 10px 10px'
  },
  metaDataPageListContainer: {
    listStyle: 'none',
    marginRight: 30,
    padding: 0
  },
  metaDataPageDataContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  metaDataPageData: {
    display: 'flex',
    marginBottom: 20,
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
  },
  staticInfoPageContainer: {
    backgroundColor: '#1D272D',
    padding: '20px',
    paddingBottom: 0,
    border: '1px solid transparent',
    borderRadius: '0px 10px 0px 0px'
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  iconText: {
    margin: 0,
    fontSize: 12,
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
  statusContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10
  },
  dropDownRoot: {
    marginTop: 3.5
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
  newPageConatiner: {
    backgroundColor: '#1D272D',
    padding: '70px',
    paddingTop: '10px',
    border: '1px solid transparent',
    borderRadius: '10px 10px 10px 10px'
  },
  newPageForm: {
    border: 0,
    width: '30%',
    height: 37,
    display: 'flex',
    padding: '2px 5px 2px 2px',
    backgroundColor: '#435058',
    marginBottom: 5,
    borderRadius: 3,
    color: 'white',
    fontSize: '1rem',
  },
  newPageFormContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  newPageFormButton: {
    width: 'fit-content',
    alignSelf: 'flex-end',
    marginRight: '70%'
  }
}));

export default useStyles;