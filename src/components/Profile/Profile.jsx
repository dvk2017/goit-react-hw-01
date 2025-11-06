import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileCard}>
      <div className={css.card__top}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.stat}>
          <span className={css.stat__label}>Followers</span>
          <span className={css.stat__value}>{stats.followers}</span>
        </li>
        <li className={css.stat}>
          <span className={css.stat__label}>Views</span>
          <span className={css.stat__value}>{stats.views}</span>
        </li>
        <li className={css.stat}>
          <span className={css.stat__label}>Likes</span>
          <span className={css.stat__value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
