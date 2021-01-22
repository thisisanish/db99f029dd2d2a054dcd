import React,{useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(title, calories, fat, carbs, protein) {
//   return { title, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable() {
  const classes = useStyles();
  const [apiData, setApiData] = useState([])
  const [jsonDataForTheElement, setjsonDataForTheElement] = useState({})

  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = (e) => {
    
    setjsonDataForTheElement(JSON.stringify(apiData[e]))
    setOpen(true,e);
  };
  function sortCreated (){
    apiData.sort((a,b)=>(a.created_at>b.created_at)?1:-1)
    setApiData(apiData)
    console.log("Done");
  }

  const handleClose = () => {
    setOpen(false);
  };
  let newData
  function getData(){
    fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0')
    .then(res=>res.json())
   
    .then(data=>{
      setApiData(data.hits)
      newData = data.hits;
      // console.log(apiData)
      // console.log(data.hits)
      // let difference = apiData
      //            .filter(x => !data.hits.includes(x))
      //            .concat(data.hits.filter(x => !apiData.includes(x)));
      // // console.log(difference); 
      let apiDataArray = apiData
      apiDataArray.push(difference)
      setApiData(data.hits)
      console.log(apiData)
      console.log(apiDataArray)

     })

  .catch(err=>console.log(err))
        
  }
  useEffect(()=>{
    getData()
  },[])


  useEffect(() => {
    
    const interval = setInterval(() => {
      getData()
      console.log(apiData);
      
    }, 10000);
    return () => clearInterval(interval);

  }
  , []);
  
 
  // useEffect(() =>{ 
  //   getData()
  //   setInterval(() => {
  //   getData()
  // }, 10000); }, [])
  return (
  <>
  {console.log(apiData)}
    <TableContainer component={Paper}>
      
  
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">URL &nbsp;</TableCell>
            <span onClick={sortCreated}> 
              <TableCell align="center">Created at&nbsp;</TableCell>
            </span>
            
            <TableCell align="center">Author&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {apiData.map((row,index) => !row?none:(
            
            <TableRow key={index} onClick={e=>handleClickOpen(index)}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
              <TableCell align="left"><a href={row.url}>{row.url}</a></TableCell>
              <TableCell align="left">{row.created_at}</TableCell>
              <TableCell align="left">{row.author}</TableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    >
    <DialogTitle id="alert-dialog-title">{"Your Json"}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {jsonDataForTheElement}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      {/* <Button onClick={handleClose} color="primary">
        Disagree
      </Button> */}
      <Button onClick={handleClose} color="primary" autoFocus>
        Done
      </Button>
    </DialogActions>
    </Dialog>
</>
  );
}





