import React from 'react';
import styles from './Header.module.scss';
import Title from '../Title';

export default function Header() {
    return (
        <React.Fragment>

            <div className={styles.logoWrapper} id="Home">
                <img src="/images/resources/logo.jpg" />
            </div>

            <div className={styles.aboutUsSection} id="About">
                <p className={styles.summary}>
                    <h4>За нас</h4>
                    <div>
                        Тортите на Юлето е скромен проект на една сладкарка, която през деня работи като QA, но след работа създава невероятни торти за семейството, приятелите и колегите си.
                        Със страст към сладкарството и усет за дизайн, Юлето съчетава креативността и вкуса, за да изработва зашеметяващи торти, които със сигурност ще впечатлят.
                        От елегантни сватбени торти до вкусни торти за рождени дни, всяка торта е направена с най-добрите съставки и личен щрих.
                    </div>
                </p>

                <img src="/images/resources/about-section.jpg" />
            </div>
        </React.Fragment>
    );
}