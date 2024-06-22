import { Typography, Card, CardContent, styled } from "@mui/material";


const Container = styled(Typography)`
display : flex;
& > div{
flex : 1;
padding : 0.5rem;
}
`
function ExpenseCard({transactions}) {
  
    const amount = transactions.map(transaction => transaction.amount);
const income = amount.filter(item => item > 0).reduce((amount,item)=>(amount += item),0).toFixed(2)
const expense = amount.filter(item => item < 0).reduce((amount,item)=>(amount += item),0).toFixed(2)


    return (
        <Container>
            <Card>
                <CardContent>
                    <Typography>INCOME</Typography>
                    <Typography style={{ color: 'green' }}>₹{income}</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>EXPENSE</Typography>
                    <Typography style={{ color: 'red' }}>₹{expense}</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default ExpenseCard;