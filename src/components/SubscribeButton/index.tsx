import React from 'react'
import styles from './style.module.scss'

interface typeSubscribeButton {
    priceId: string;
}

export default function SubscribeButton({ priceId }: typeSubscribeButton) {
    return (
        <button
            type="button"
            className={styles.subscribeButton}
        >
            Subscribe now
        </button>
    )
}
