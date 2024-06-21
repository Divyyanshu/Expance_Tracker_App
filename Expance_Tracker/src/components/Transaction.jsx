/* eslint-disable react/prop-types */
import { ListItem ,ListItemText , styled } from "@mui/material";
import { ListItemIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const Detail = styled(ListItem)`
margin-top : 2rem;
text-align :center;
border-radius : 1rem;
`

// eslint-disable-next-line react/prop-types
function Transaction ({transaction , setTransactions ,transactions}){

const color = transaction.amount > 0 ? "#2e8b57": "#dc143c"
const deletTransaction = (id) =>{
     setTransactions(transactions.filter(transaction => transaction.id !== id))
}

    return(
       <Detail style={{background :`${color}`, color: "#fff"}}>
        <ListItemIcon>
            <DeleteIcon onClick ={()=>deletTransaction(transaction.id)}/>
        </ListItemIcon>
      <ListItemText> {transaction.text}</ListItemText>
      <ListItemText> {transaction.amount}</ListItemText>
       </Detail>
    )
}

export default Transaction;