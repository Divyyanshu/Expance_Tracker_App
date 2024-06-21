/* eslint-disable no-unused-vars */
import { Typography, Box ,Divider ,List} from "@mui/material"
import Transaction from "./Transaction"

// eslint-disable-next-line react/prop-types
function Transactions({transactions ,setTransactions}){
    return(
        <Box>
            <Typography variant="h5" color="initial"> Transaction History</Typography>
            <Divider/>
            <List>
                {
                    // eslint-disable-next-line react/prop-types
                    transactions.map(transaction =>(
                    // eslint-disable-next-line react/jsx-key
                    <Transaction  transaction={transaction} setTransactions={setTransactions} transactions={transactions}/>
                    ))
                }
            </List>
        </Box>
    )
}


export default Transactions