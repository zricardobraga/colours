import styles from "./colour.module.css";

export function Colour({ colour, toggleColourDeletedStatus }) {
  return (
    <>
    <div className={styles.content}>
      <input
        type="checkbox"
        name=""
        id=""
        onClick={toggleColourDeletedStatus}
      />
        <li className={styles.item}>
            <div className={styles.card}>
              {colour.isDeleted ? (
                <del>
                  {colour.name} {colour.code}
                </del>
              ) : (
                `${colour.name} ${colour.code}`
              )}
            </div>
        </li>
      </div>
    </>
  );
}
