import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(title, calories, fat, carbs, protein) {
  return { title, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();
  const [apiData, setApiData] = useState([])

  function getData(){
    fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0')
    .then(res=>res.json())
   
    .then(data=>setApiData(data.hits))
    .then(()=>console.log(apiData))
    
    
    
  .catch(err=>console.log(err))
        
  }
  // useEffect(() => {
    
  //   // const interval = setInterval(() => {
  //     getData()
  //     console.log(apiData);
      
  // //   }, 5000);
  // //   return () => clearInterval(interval);

  // }
  // , []);
  
 
  useEffect(() =>{ 
    getData()
    setInterval(() => {
    getData()
  }, 10000); }, [])
  return (
    
    <TableContainer component={Paper}>
      
  
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">URL &nbsp;</TableCell>
            <TableCell align="right">Created at&nbsp;</TableCell>
            <TableCell align="right">Author&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {apiData.map((row) => (
            <TableRow key={row.url+"yo"+row.created_at}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right"><a href={row.title}>{row.url}</a></TableCell>
              <TableCell align="right">{row.created_at}</TableCell>
              <TableCell align="right">{row.author}</TableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}





