import './App.css'
import { Box, Typography, styled } from "@mui/material"
import Balance from './components/Balance'
import ExpenseCard from './components/ExpenseCard'
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

  const [transactions, setTransactions] = useState([
  ])
  const [editFlag, setEditFlag] = useState(false)
  const [edit_id, setEdit_id] = useState(0);
  return (
    <>
      <Box className='App'>
        <Header>Expense Tracker</Header>
        <Container>
          <Box>
            <Balance transactions={transactions} />
            <ExpenseCard transactions={transactions} />
            <NewTransaction transactions={transactions} setTransactions={setTransactions} Edit_id={edit_id} setEdit_id={setEdit_id} setEditFlag={setEditFlag}  editFlag={editFlag}/>
          </Box>
          <Box>
            <Transaction transactions={transactions} setTransactions={setTransactions}  setEdit_id={setEdit_id} setEditFlag={setEditFlag} />
          </Box>
        </Container>
      </Box>
    </>

  )
}

export default App
