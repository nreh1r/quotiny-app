import React, { useContext, useState } from "react"
import styles from "./Modal.module.scss"
import { AppContext } from "../context/Context"

const Modal = () => {
    const { openModal, formData, handleChange, requestStatus } =
        useContext(AppContext)

    let buttonText = ""

    if (requestStatus === "pending") {
        buttonText = "Sending..."
    } else if (requestStatus === "success") {
        buttonText = "Quote Sent!"
    } else if (requestStatus === "error") {
        buttonText = "Error!"
    } else {
        buttonText = "Send Quote"
    }

    return (
        <div className={styles.modal}>
            <div className={styles.contentContainer}>
                <div className={styles.closeButton} onClick={openModal}>
                    X
                </div>
                <h1 className={styles.modalHeader}>
                    Our Expert Team is Ready to Process Your Request
                </h1>
                <label htmlFor="name">What is your name?</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="email">What is your email?</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <div className={styles.buttonDiv}>
                    <button className={styles.button}>{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
