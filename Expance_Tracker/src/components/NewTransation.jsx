import { Typography, TextField , Button, styled } from "@mui/material";
import { useState } from "react";


const Container = styled(Typography)`
display : flex;
text-align : center;
flex-direction : column;
& > h5 ,& >div , &> button{
   margin-top : 2rem;
}
`
// eslint-disable-next-line react/prop-types
function NewTransaction({setTransactions}) {

const [text,setText] = useState("");
const [amount,setamount] = useState(0);

function addTransation(){
    const transaction = {
        id : Math.floor(Math.random()*1000000),
        text : text,
        amount : +amount,
    }
    setTransactions(prevState => [transaction , ...prevState])
}

    return (
        <Container>
            <Typography variant="h5">NEW TRANSACTION</Typography>
            <TextField label="Enter Expance" onChange={(e)=>setText(e.target.value)} />
            <TextField label="Enter Amount" onChange={(e)=>setamount(e.target.value)}/>
            <Button variant="contained" onClick={()=> addTransation()}>Add Transitions</Button>
        </Container>
    )
}
export default NewTransaction;