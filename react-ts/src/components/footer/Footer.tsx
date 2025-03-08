// src/components/footer/Footer.tsx
import React from "react";
import styles from "../footer.module.scss";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2025 Il Mio Sito. Tutti i diritti riservati.</p>
        </footer>
    );
};

export default Footer;