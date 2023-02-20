import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navigation.module.css";
const Navigation = () => (
  <div className={styles.nav}>
    <div className={styles.logo}>
      <Link href="/">
        <Image
          src={"https://i.imgur.com/wG9d64p.png"}
          width={50}
          height={50}
          alt=""
        />
      </Link>
    </div>
    <nav className="links">
      <Link className={styles.link} href="/about">
        About
      </Link>
      <Link className={styles.link} href="/events">
        Events
      </Link>
    </nav>
  </div>
);

export default Navigation;
