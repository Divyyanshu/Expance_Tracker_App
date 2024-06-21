/* eslint-disable no-unused-vars */
import { Typography, Box ,Divider ,List,styled} from "@mui/material"
import Transaction from "./Transaction"
const TransBox = styled(Typography)`
text-align :center;
`

// eslint-disable-next-line react/prop-types
function Transactions({transactions ,setTransactions}){
    return(
        <TransBox>
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
        </TransBox>
    )
}


export default Transactions