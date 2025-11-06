import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendstateListItem({ avatar, name, isOnline }) {
  const stateClass = clsx(css.state, isOnline ? css.online : css.offline);

  return (
    <div className={css.card}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={stateClass}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
