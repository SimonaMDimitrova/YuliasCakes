import React from "react";
import styles from "./Footer.module.scss";

import { Box } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return ( 
        <div id="Contact">
            <Box className={styles.footer}>
                <Box className={styles.contactsWrapper}>
                    <Box className={styles.phone}>
                        <a href="tel:0888888888">
                            <FontAwesomeIcon icon={faMobileScreenButton} /> 0888888888
                        </a>
                    </Box>

                    <Box className={styles.facebook}>
                        <a href="https://www.facebook.com/profile.php?id=1719380277">
                            <FontAwesomeIcon icon={faFacebook} /> Юлия Дамянова
                        </a>
                    </Box>
                </Box>

                <Box className={styles.copyrights}>
                    <FontAwesomeIcon icon={faCopyright} /> 2024 Yulia's Cakes. All copy rights reseived.
                </Box>
            </Box>
        </div>
    );
}