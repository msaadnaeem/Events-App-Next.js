import { Data, Event } from "./types";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Card.module.css";

export const CatEvent = (data: Data) => {
  
  return (
    <div className={styles.cardcontainer}>
      {data.events_categories.map((ev: Event) => (
        <div key={ev.id} className={styles.card}>
          <Link href={`/events/${ev.id}`}>
            <Image
              className={styles.cardimage}
              src={ev.image}
              alt=""
              width={300}
              height={300}
            ></Image>
            <h2 className={styles.cardtitle}>{ev.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};
