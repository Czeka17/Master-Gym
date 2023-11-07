import styles from './footer.module.scss'

function Footer(){
    const year = new Date().getFullYear()
    return <footer className={styles.footer}>
        <p><span>{year}</span> &copy; | Master Gym</p>
    </footer>
}
export default Footer