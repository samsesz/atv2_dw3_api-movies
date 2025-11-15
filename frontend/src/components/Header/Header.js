import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}> Catálogo de Filmes</h1>
        <p className={styles.subtitle}>Filmes daoras aqui!</p>
      </div>
    </header>
  );
};

export default Header;