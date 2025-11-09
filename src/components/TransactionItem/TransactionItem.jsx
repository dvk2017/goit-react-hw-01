import { Fragment } from "react";
import css from "./TransactionItem.module.css";

export default function TransactionItem({ type, amount, currency }) {
  return (
    <Fragment>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Fragment>
  );
}
