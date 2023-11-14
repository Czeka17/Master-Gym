import styles from './form-modal.module.scss'

interface FormModalProps{
    onClose: () => void,
    title: string,
    message: string
}
function FormModal({onClose,title,message}:FormModalProps){
    return <div className={styles.modal} onClick={onClose}>
        <div className={styles.modal__content}>
            <button onClick={onClose}>X</button>
            <h3>{title}</h3>
            <p>{message}</p>
        </div>
    </div>
}
export default FormModal;