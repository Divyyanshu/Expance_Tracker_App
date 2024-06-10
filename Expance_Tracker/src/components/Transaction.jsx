
import { Typography, List , Divider, Box } from "@mui/material"
import Transactions from "./Transactions";

// eslint-disable-next-line react/prop-types
const Transaction = ({transaction})=>{
    return(
     <Box>
        <Typography variant="h4">Transition History</Typography>
        <Divider/>
        <List>
            {
                // eslint-disable-next-line no-unused-vars, react/prop-types
                transaction.map(transaction =>(
                    // eslint-disable-next-line react/jsx-key
                   <Transactions transaction ={transaction}/>
                ))
            }
        </List>
     </Box>
    )
}


export default Transaction;
