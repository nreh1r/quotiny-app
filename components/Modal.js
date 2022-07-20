import React, { useContext } from "react"
import styles from "./Modal.module.scss"
import { AppContext } from "../context/Context"

const Modal = () => {
    const { openModal } = useContext(AppContext)

    return (
        <div className={styles.modal}>
            <div className={styles.contentContainer}>
                <div className={styles.closeButton} onClick={openModal}>
                    X
                </div>
                <h1>Your Quote is Ready!</h1>
                <label htmlFor="name">What is your name?</label>
                <input type="text" name="name" />
                <label htmlFor="email">What is your email?</label>
                <input type="email" name="email" />
                <button>Send Quote</button>
            </div>
        </div>
    )
}

export default Modal
