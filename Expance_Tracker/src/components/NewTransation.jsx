import { Typography, TextField , Button, styled } from "@mui/material";

const Container = styled(Typography)`
display : flex;
flex-direction : column;
& > h4 ,& >div , &> button{
   margin-top : 2rem;
}
`

function NewTransaction() {
    return (
        <Container>
            <Typography variant="h4">New Transation</Typography>
            <TextField label="Enter Expance" variant="outlined" />
            <TextField label="Enter Amount" variant="outlined" />
            <Button variant="contained">Add Transitions</Button>
        </Container>


    )
}

export default NewTransaction;