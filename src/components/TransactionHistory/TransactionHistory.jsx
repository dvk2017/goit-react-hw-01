import TransactionItem from "../TransactionItem/TransactionItem.jsx";

export default function TransactionHistory({ items = [] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <TransactionItem {...item} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
