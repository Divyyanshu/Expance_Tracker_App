import Edit from "@mui/icons-material/Edit";
import { Typography, TextField, Button, styled } from "@mui/material";
import { useState, useEffect } from "react";

const Container = styled(Typography)`
  display: flex;
  flex-direction: column;
  & > h5, & > div, & > button {
    margin-top: 2rem;
  }
`;

function NewTransaction({ Edit_id, transactions, setTransactions, setEdit_id, setEditFlag, editFlag }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (editFlag) {
      const transaction = transactions.find((T) => T.id === Edit_id);
      if (transaction) {
        setText(transaction.text);
        setAmount(transaction.amount);
      }
    }
  }, [editFlag, Edit_id, transactions]);

  function addTransaction() {
    const transaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: +amount,
    };
    setTransactions((prevState) => [transaction, ...prevState]);
    setText("");
    setAmount(0);
  }

  function editTransaction() {
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === Edit_id ? { ...transaction, text, amount: +amount } : transaction
    );
    setTransactions(updatedTransactions);
    setEdit_id(0);
    setEditFlag(false);
    setText("");
    setAmount(0);
  }

  return (
    <Container>
      <Typography variant="h5">{editFlag ? "EDIT TRANSACTION" : "NEW TRANSACTION"}</Typography>
      <TextField
        label="Enter Expense"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        label="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button variant="contained" onClick={editFlag ? editTransaction : addTransaction}>
        {editFlag ? "Update Transaction" : "Add Transaction"}
      </Button>
    </Container>
  );
}

export default NewTransaction;
