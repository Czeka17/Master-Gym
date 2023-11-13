import Title from '../shared/Title';
import styles from './contact-form.module.scss'
function ContactForm(){
    return <section className={styles['contact-us']} id="contact">
        <Title title='Kontakt'> 
        <div className={styles["contact-us__box"]}>
        <div className={styles["contact-us__info"]}>
            <h3 className={styles["contact-us__info-title"]}>Skontaktuj się z nami!</h3>
            <p className={styles["contact-us__info-description"]}>Masz jakieś pytanie lub chcesz skorzystać z naszej oferty? Napisz do nas w wiadomości za pomocą formularza lub skontaktuj się z nami pod numerem <a className={styles["contact-us__info-description--number"]} href="tel:+48 123 231 331">123 231 331</a>.</p>
        </div>
        <div className={styles["contact-us__line"]}></div>
            <form action="https://formsubmit.co/mastergymsilownia@gmail.com" method="POST" className={styles["contact-us__form"]}>
                <div className={styles["contact-us__form-box"]}>
                    <input type="text" id="title" name="title" required /> 
                    <span>Imię</span>
                </div>
                <div className={styles["contact-us__form-box"]} >
                    <input type="email" id="mail" name="mail" required />
                    <span>E-mail</span>
                </div>
                <div className={styles["contact-us__form-box"]}>
                    <textarea name="message" id="message" required cols={30} rows={10} />
                    <span>Wiadomość</span>
                </div>
                <button type="submit" className={styles["contact-us__form-btn"]}>Wyślij</button>
            </form>
        </div>
        </Title>
</section>
}
export default ContactForm;