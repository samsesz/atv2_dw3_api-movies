import styles from "@/components/Footer/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.footerRight}>
          <ul>
            <li>The Movies &copy; 2025</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
