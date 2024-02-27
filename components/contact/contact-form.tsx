import React, { useState, ChangeEvent, FormEvent } from "react";
import Title from "../shared/Title";
import styles from "./contact-form.module.scss";
import FormModal from "./form-modal";
interface FormData {
	name: string;
	email: string;
	message: string;
}
function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [title, setTitle] = useState("");
	const [message, setMessage] = useState("");

	function hideModalHandler() {
		setModalIsOpen(false);
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setModalIsOpen(true);
		setTitle("Wysyłanie...");
		setMessage("Wysyłanie...");

		try {
			const response = await fetch("https://formsubmit.co/kuba3307@gmail.com", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setTitle("Wysłano!");
				setMessage("Mail juz do nas przyszedl :)");
			} else {
				setTitle("Bląd!");
				setMessage("Nie udalo sie wyslac maila, spróbuj ponownie później!");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<section
			className={styles["contact-us"]}
			id='contact'
		>
			{modalIsOpen && (
				<FormModal
					onClose={hideModalHandler}
					title={title}
					message={message}
				/>
			)}
			<Title title='Kontakt'>
				<div className={styles["contact-us__box"]}>
					<div className={styles["contact-us__info"]}>
						<h3 className={styles["contact-us__info-title"]}>
							Skontaktuj się z nami!
						</h3>
						<p className={styles["contact-us__info-description"]}>
							Masz jakieś pytanie lub chcesz skorzystać z naszej oferty? Napisz
							do nas w wiadomości za pomocą formularza lub skontaktuj się z nami
							pod numerem{" "}
							<a
								className={styles["contact-us__info-description--number"]}
								href='tel:+48 123 231 331'
							>
								123 231 331
							</a>
							.
						</p>
					</div>
					<div className={styles["contact-us__line"]}></div>
					<form
						onSubmit={handleSubmit}
						className={styles["contact-us__form"]}
					>
						<div className={styles["contact-us__form-box"]}>
							<input
								type='text'
								id='name'
								name='name'
								required
								value={formData.name}
								onChange={handleChange}
							/>
							<span>Imię</span>
						</div>
						<div className={styles["contact-us__form-box"]}>
							<input
								type='email'
								id='email'
								name='email'
								required
								value={formData.email}
								onChange={handleChange}
							/>
							<span>E-mail</span>
						</div>
						<div className={styles["contact-us__form-box"]}>
							<textarea
								name='message'
								id='message'
								required
								cols={30}
								rows={10}
								value={formData.message}
								onChange={handleChange}
							/>
							<span>Wiadomość</span>
						</div>
						<button
							type='submit'
							className={styles["contact-us__form-btn"]}
						>
							Wyślij
						</button>
					</form>
				</div>
			</Title>
		</section>
	);
}
export default ContactForm;