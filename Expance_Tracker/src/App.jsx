import './App.css'
import {Box, Typography,styled } from "@mui/material"
import Balance from './components/Balance'
import ExpanceCard from './components/ExpancCard'
import NewTransaction from './components/NewTransation'
import Transaction from './components/Transactions'
import { useState } from 'react'


const Header = styled(Typography)`
font-size : 3rem;
text-transform : uppercase;
color : #454B1B;
`
const Container = styled(Box)`
display : flex;
padding : 2rem;
background-color : #fff;
margin: auto;
width : 800px;
border-radius : 30px;

& > div{
height : 150vh;
width : 50%;
padding : 2rem
}
`

function App() {

  const [transactions ,setTransactions] = useState([
    
  ])
  return (
    <Box className='App'>
     <Header>Expance Tracker</Header>
     <Container>
      <Box>
        <Balance transactions = {transactions}/>
        <ExpanceCard transactions = {transactions}/>
        <NewTransaction setTransactions = {setTransactions}/>
      </Box>
      <Box>
        <Transaction transactions = {transactions} setTransactions = {setTransactions}/>
      </Box>
     </Container>
    </Box>
  )
}

export default App
