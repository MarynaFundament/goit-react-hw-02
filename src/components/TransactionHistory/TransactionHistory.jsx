import styles from "./transactions.module.css"

export const TransactionHistory = ({items}) => 
   
  <table className={styles.transaction_history}>
  <thead className={styles.common}>
    <tr>
      <th> Type</th>
      <th> Amount</th>
      <th> Currency</th>
    </tr>
  </thead>

  <tbody className={styles.common}>
      {items.map(item => (

        
        <tr key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>

  


export default TransactionHistory;