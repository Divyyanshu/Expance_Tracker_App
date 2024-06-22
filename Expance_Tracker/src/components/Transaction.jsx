/* eslint-disable react/prop-types */
import { ListItem, ListItemText, styled } from "@mui/material";
import { ListItemIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Detail = styled(ListItem)`
margin-top : 2rem;
border-radius : 1rem;
`


function Transaction({ transaction, setTransactions, transactions, setEdit_id, setEditFlag }) {

    const color = transaction.amount > 0 ? "#2e8b57" : "#dc143c"
    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id))
    }
    const editTransaction = (id) => {
        setEdit_id(id)
        setEditFlag(true)
    }
    return (
        <Detail style={{ background: `${color}`, color: "#fff" }}>
            <ListItemIcon>
                <DeleteIcon onClick={() => deleteTransaction(transaction.id)} />
            </ListItemIcon>
            <ListItemIcon>
                <EditIcon onClick={() => editTransaction(transaction.id)} />
            </ListItemIcon>
            <ListItemText> {transaction.text}</ListItemText>
            <ListItemText> {transaction.amount}</ListItemText>
        </Detail>
    )
}

export default Transaction;