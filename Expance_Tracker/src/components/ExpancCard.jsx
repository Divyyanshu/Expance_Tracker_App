import { Typography, Card, CardContent, styled } from "@mui/material";


const Container = styled(Typography)`
display : flex;
& > div{
flex : 1;
padding : 0.5rem;
}
`


function ExpanceCard() {
    return (
        <Container>
            <Card>
                <CardContent>
                    <Typography>INCOME</Typography>
                    <Typography style={{ color: 'green' }}>100</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>EXPANCE</Typography>
                    <Typography style={{ color: 'red' }}>50</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default ExpanceCard;