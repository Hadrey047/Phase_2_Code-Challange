import React, { useState} from 'react';


  function Transaction() {

    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [newTransaction, setNewTransaction] = useState({
      description: '',
      amount: 0,
    });

    function handleInputChange (event) {
      const { name, value } = event.target;
      setNewTransaction({ ...newTransaction, [name]: value });
    };
  
    function handleAddTransaction () {
      if (newTransaction.description && newTransaction.amount !== 0) {
        setTransactions([...transactions, newTransaction]);
        setNewTransaction({ description: '', amount: 0 });
      }
    };
  
    return (
      <div>
        <h1>Transaction Manager</h1>
        <input type="text"
          placeholder="Search transactions"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}></input>

<table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.filter((transaction) =>
transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  )
            .map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        <h2>Add Transaction</h2>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newTransaction.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTransaction}>Add</button>
      </div>
    </div>
  );
}

      


  
      



export default Transaction