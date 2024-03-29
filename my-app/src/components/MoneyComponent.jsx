import React, { useState, useContext } from 'react';
import styles from './components.module.css';
import { MoneyContext } from '../MoneyContext';
import { useEffect } from 'react';

function MoneyComponent() {
  const { money, setMoney } = useContext(MoneyContext);
  const [addedMoney, setAddedMoney] = useState(0);
  const [showAddedMoney, setShowAddedMoney] = useState(false);

  const scroungeMoney = () => {
    const randomMoney = Math.random() * (0.35 - 0.05) + 0.05;
    setMoney(prevMoney => prevMoney + randomMoney);
    setAddedMoney(randomMoney);
    setShowAddedMoney(true);
  };

  const devMoney = () => {
    setMoney(prevMoney => prevMoney * 2);
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
      <h1 className={styles.moneycounter}>${Number(money).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h1>
      <div className={styles.scroungeContainer}>
        <button className={styles.scrounge} onClick={scroungeMoney}>Scrounge the Couch For Change</button>
        <button className={styles.scrounge} onClick={devMoney}>Dev Money</button>
        {showAddedMoney && <p className={styles.addedMoney}>+${Number(addedMoney).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>}
      </div>
    </div>
  );
}

export default MoneyComponent;