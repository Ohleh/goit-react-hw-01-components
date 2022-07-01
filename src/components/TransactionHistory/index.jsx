const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map(el => (
        <tbody key={el.id}>
          <tr>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default TransactionHistory;
