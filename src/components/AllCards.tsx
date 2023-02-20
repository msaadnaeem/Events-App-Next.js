import { EventDetailed } from "@/src/components/types";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Card.module.css";

export const AllCards = (ev: EventDetailed) => {
  return (
    <div className={styles.cardcontainer}>
      <div key={ev.id} className={styles.card}>
        <Link href={`/events/${ev.city}/${ev.id}`}>
          <Image
            className={styles.cardimage}
            src={ev.image}
            alt=""
            width={700}
            height={200}
          ></Image>
          <h2 className={styles.cardtitle}>{ev.title}</h2>
          <p className={styles.carddescription}>{ev.description}</p>
        </Link>
      </div>
    </div>
  );
};
