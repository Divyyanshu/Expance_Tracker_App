import './App.css'
import {Box, Typography,styled } from "@mui/material"
import Balance from './components/Balance'
import ExpanceCard from './components/ExpancCard'
import NewTransaction from './components/NewTransation'
import Transaction from './components/Transaction'
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
height : 70vh;
width : 50%;
padding : 2rem
}
`

function App() {

  const [transaction,setTransaction] = useState([
   {id : 1 , text : "Food" , Amount : -300},
   {id : 2 , text : "salary" , Amount : 5300},
   {id : 3 , text : "books" , Amount : -700},
   {id : 4 , text : "Bills" , Amount : -1300},
  ])
  return (
    <Box className='App'>
     <Header>Expance Tracker</Header>
     <Container>
      <Box>
        <Balance/>
        <ExpanceCard/>
        <NewTransaction/>
      </Box>
      <Box>
        <Transaction transaction = {transaction}/>
      </Box>
     </Container>
    </Box>
  )
}

export default App
