
import { Typography, Box, Divider, List } from "@mui/material"
import Transaction from "./Transaction"


function Transactions({ transactions, setTransactions, setEdit_id, setEditFlag, }) {
    return (
        <Box>
            <Typography variant="h5" color="initial"> Transaction History</Typography>
            <Divider />
            <List>
                {

                    transactions.map(transaction => (

                        <Transaction transaction={transaction} setTransactions={setTransactions} transactions={transactions} setEdit_id={setEdit_id} setEditFlag={setEditFlag} />
                    ))
                }
            </List>
        </Box>
    )
}


export default Transactions