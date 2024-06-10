/* eslint-disable react/prop-types */
import { ListItem, ListItemText ,styled} from "@mui/material"

const Detail = styled(ListItem)`
margin-top : 2rem;
`


// eslint-disable-next-line react/prop-types
const Transactions = ({transaction}) => {
const color = transaction.Amount > 0 ? "#AFE1AF":"#FF5733";

    return (
        <Detail style={{background :`${color}`}}>
            <ListItemText>
               {transaction.text}
            </ListItemText>
            <ListItemText>
               {transaction.Amount}
            </ListItemText>
        </Detail>
    )
}

export default Transactions