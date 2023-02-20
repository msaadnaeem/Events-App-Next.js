import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; {new Date().getFullYear()} Saad Rana</p>
    </footer>
  );
};

export default Footer;
