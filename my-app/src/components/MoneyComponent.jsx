import React, { useState, useEffect, useContext } from 'react';
import styles from './components.module.css';
import { MoneyContext } from '../MoneyContext';
import Cookies from 'js-cookie';

function MoneyComponent() {
  const { money, setMoney, plots, setPlots, plotsUnused, setPlotsUnused, supermarketPlots, setSupermarketPlots } = useContext(MoneyContext);
  const { money: moneyFromContext, setMoney: setMoneyInContext } = useContext(MoneyContext);
  const [addedMoney, setAddedMoney] = useState(0);
  const [showAddedMoney, setShowAddedMoney] = useState(false);

  const scroungeMoney = () => {
    const randomMoney = Math.random() * (100.15 - 0.02) + 0.02;
    setMoney(prevMoney => prevMoney + randomMoney);
    setAddedMoney(randomMoney);
    setShowAddedMoney(true);
  };

  useEffect(() => {
    // Load money from cookie when component mounts
    const savedMoney = Cookies.get('money');
    console.log('Saved money:', savedMoney);
    if (savedMoney && savedMoney !== '') {
      setMoney(parseFloat(savedMoney));
    }
  }, []);
  
  useEffect(() => {
    // Save money to cookie whenever it changes
    console.log('Setting money:', money);
    Cookies.set('money', money, { expires: 365 });
    // Also update the money in context
    setMoneyInContext(money);
  }, [money]);

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