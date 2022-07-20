import React, { useContext } from "react"
import styles from "./AdditionalItems.module.scss"
import { AppContext } from "../context/Context"

const AdditionalItems = () => {
    const { openModal } = useContext(AppContext)

    return (
        <div className={styles.form}>
            <label className={styles.label} htmlFor="size">
                What is the size of your home?
            </label>
            <select id="size" name="name" className={styles.select}>
                <option value="select">Please Choose An Option</option>
                <option value="1000">One Bedroom Under 1000 sqft</option>
                <option value="1600">Two Bedroom Under 1600 sqft</option>
                <option value="2400">Three Bedroom Under 2400 sqft</option>
                <option value="2800">Four Bedroom Under 2800 sqft</option>
                <option value="3200">Five Bedroom Under 3200 sqft</option>
                <option value="3600">Six Bedroom Under 3600 sqft</option>
            </select>
            <label className={styles.label} htmlFor="rooms">
                How Many Additional Bedrooms?
            </label>
            <input
                type="text"
                name="rooms"
                id="rooms"
                className={styles.select}
            />
            <label className={styles.label} htmlFor="pets">
                How Many Pets Do You Have?
            </label>
            <input
                type="text"
                name="pets"
                id="pets"
                className={styles.select}
            />
            <h2>Additional Items</h2>
            <div className={styles.checkbox}>
                <label className={styles.label} htmlFor="basement">
                    Basement (Square Footage Dependent)
                </label>
                <input type="checkbox" name="basement" id="basement" />
            </div>
            <div className={styles.checkbox}>
                <label className={styles.label} htmlFor="kitchen">
                    Additional Clean (Basic Clean)
                </label>
                <input type="checkbox" name="kitchen" id="kitchen" />
            </div>
            <div className={styles.checkbox}>
                <label className={styles.label} htmlFor="den">
                    Den
                </label>
                <input type="checkbox" name="den" id="den" />
            </div>
            <div className={styles.checkbox}>
                <label className={styles.label} htmlFor="laundry">
                    Load of Laundry
                </label>
                <input type="checkbox" name="laundry" id="laundry" />
            </div>
            <div className={styles.checkbox}>
                <label className={styles.label} htmlFor="oven">
                    Inside the Oven
                </label>
                <input type="checkbox" name="oven" id="oven" />
            </div>
            <div className={styles.checkbox}>
                <label className={styles.label} htmlFor="fridge">
                    Inside Fridge
                </label>
                <input type="checkbox" name="fridge" id="fridge" />
            </div>

            <div className={styles.checkbox}>
                <label className={styles.label} htmlFor="trimBase">
                    Trim & Baseboards
                </label>
                <input type="checkbox" name="trimBase" id="trimBase" />
            </div>
            <div className={styles.checkbox}>
                <label className={styles.label} htmlFor="bottles">
                    Sorting Recycle & Bottle
                </label>
                <input type="checkbox" name="bottles" id="bottles" />
            </div>
            <div className={styles.checkbox}>
                <label className={styles.label} htmlFor="dishes">
                    Dishes
                </label>
                <input type="checkbox" name="dishes" id="dishes" />
            </div>
            <div className={styles.checkbox}>
                <label className={styles.label} htmlFor="blinds">
                    Dusting Blinds
                </label>
                <input type="checkbox" name="blinds" id="blinds" />
            </div>
            <div className={styles.buttonDiv}>
                <button className={styles.button} onClick={() => openModal()}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default AdditionalItems
