import { Typography, Card, CardContent, styled } from "@mui/material";


const Container = styled(Typography)`
display : flex;
& > div{
flex : 1;
padding : 0.5rem;
}
`


// eslint-disable-next-line react/prop-types
function ExpanceCard({transactions}) {
    // eslint-disable-next-line react/prop-types
    const amount = transactions.map(transaction => transaction.amount);
const income = amount.filter(item => item > 0).reduce((amount,item)=>(amount += item),0).toFixed(2)
const expance = amount.filter(item => item < 0).reduce((amount,item)=>(amount += item),0).toFixed(2)


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
                    <Typography>EXPANCE</Typography>
                    <Typography style={{ color: 'red' }}>₹{expance}</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default ExpanceCard;