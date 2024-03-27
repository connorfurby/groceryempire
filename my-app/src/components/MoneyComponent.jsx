import React, { useState, useEffect } from 'react';
import styles from './components.module.css';

function MoneyComponent() {
  const [money, setMoney] = useState(0);
  const [addedMoney, setAddedMoney] = useState(0);
  const [showAddedMoney, setShowAddedMoney] = useState(false);

  const scroungeMoney = () => {
    const randomMoney = Math.random() * (0.15 - 0.02) + 0.02;
    setMoney(prevMoney => prevMoney + randomMoney);
    setAddedMoney(randomMoney);
    setShowAddedMoney(true);
  };

  useEffect(() => {
    if (showAddedMoney) {
      const timer = setTimeout(() => {
        setShowAddedMoney(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showAddedMoney]);

  return (
    <div className={styles.moneycomponent}>
      <h1 className={styles.moneycounter}>${money.toFixed(2)}</h1>
      <div className={styles.scroungeContainer}>
        <button className={styles.scrounge} onClick={scroungeMoney}>Scrounge the Couch For Change</button>
        {showAddedMoney && <p className={styles.addedMoney}>+${addedMoney.toFixed(2)}</p>}
      </div>
    </div>
  );
}

export default MoneyComponent;