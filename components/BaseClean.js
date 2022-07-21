import React, { useState, useContext } from "react"
import styles from "./BaseClean.module.scss"
import { motion } from "framer-motion"
import { AppContext } from "../context/Context"

const BaseClean = () => {
    const { isPackageChosen, choosePackage, formData } = useContext(AppContext)

    const [isClicked, setIsClicked] = useState(false)
    let mainCardStyles = {
        backgroundColor: "rgba(170, 248, 107, 0.229)",
        border: "1px solid rgba(76, 131, 31, 0.5)",
    }

    return (
        <motion.div
            className={styles.cleans__base}
            whileHover={{ scale: [1, 1.05] }}
            transition={{ duration: 0.5 }}
            onClick={() => choosePackage("baseClean")}
            style={isPackageChosen.baseClean ? mainCardStyles : {}}
        >
            <div className={styles.checkBox}>
                {isPackageChosen.baseClean && (
                    <h1 className={styles.checkmark}>&#10003;</h1>
                )}
            </div>
            <h2 className={styles.headers}>Base Clean</h2>
            <div className={styles.list__container}>
                <div className={styles.list__sub_container}>
                    <h3 className={styles.subHeaders}>Kitchen</h3>
                    <ul className={styles.cleans__list}>
                        <li>Clear & Wipe Table</li>
                        <li>Countertops and Stove Top</li>
                        <li>Outside of Large Appliances</li>
                        <li>Take out Trash</li>
                        <li>Interior of Windows</li>
                        <li>Rinse and Wipe Sinks</li>
                        <li>Dusting</li>
                        <li>Sweep & Vacuum</li>
                        <li>Mop Floors</li>
                    </ul>
                </div>
                <div className={styles.list__sub_container}>
                    <h3 className={styles.subHeaders}>Bathrooms</h3>
                    <ul className={styles.cleans__list}>
                        <li>Dust and Wipe Surfaces</li>
                        <li>Mirror and Fixtures</li>
                        <li>Sink & Vanity</li>
                        <li>Toilet</li>
                        <li>Door & Knobs</li>
                        <li>Interior of Windows</li>
                        <li>Switches</li>
                        <li>Baseboards</li>
                        <li>Empty Trash</li>
                        <li>Shower/Tub</li>
                        <li>Sweep & Vacuum</li>
                        <li>Mop Floors</li>
                    </ul>
                </div>
                <div className={styles.list__sub_container}>
                    <h3 className={styles.subHeaders}>Living Rooms</h3>
                    <ul className={styles.cleans__list}>
                        <li>Dust & Wipe Surfaces</li>
                        <li>Tables & Chairs</li>
                        <li>Light Fixtures</li>
                        <li>Dust Baseboards & Trim</li>
                        <li>Interior of Windows</li>
                        <li>Doors & Knobs</li>
                        <li>Switches</li>
                        <li>Sweep & Vacuum</li>
                        <li>Mop Floors</li>
                    </ul>
                </div>
                <div className={styles.list__sub_container}>
                    <h3 className={styles.subHeaders}>Bedrooms</h3>
                    <ul className={styles.cleans__list}>
                        <li>Dust & Wipe Surfaces</li>
                        <li>Tables & Chairs</li>
                        <li>Light Fixtures</li>
                        <li>Dust Baseboards & Trim</li>
                        <li>Interior of Windows</li>
                        <li>Doors & Knobs</li>
                        <li>Switches</li>
                        <li>Sweep & Vacuum</li>
                        <li>Mop Floors</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default BaseClean
