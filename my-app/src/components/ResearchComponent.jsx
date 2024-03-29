import React, { useContext, useState, useEffect } from 'react';
import styles from './components.module.css';
import { MoneyContext } from '../MoneyContext';

function ResearchComponent() {
  const {
    plots,
    setPlots,
    maxCustomersPerMinute,
    setMaxCustomersPerMinute,
    customersPerMinute,
    setCustomersPerMinute,
    advertisingLevel,
    setAdvertisingLevel,
    averagePurchase,
    setAveragePurchase,
    upgradeCount,
    setUpgradeCount,
    maxResearch,
    setMaxResearch,
    researchSpeed,
    setResearchSpeed,
    flasks,
    setFlasks,
    availableUpgrades,
    setAvailableUpgrades,
    upgrades, 
    setUpgrades
  } = useContext(MoneyContext);

  const developerRefill = () => {
    setResearchSpeed(researchSpeed + 1);
    setMaxResearch(maxResearch + 1);
    setFlasks(maxResearch * 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFlasks(prevFlasks => {
        const newFlasks = prevFlasks + researchSpeed;
        return newFlasks <= maxResearch * 1000 ? newFlasks : maxResearch * 1000;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [researchSpeed, maxResearch]);

  
  const buyUpgrade = (upgrade) => {
    setFlasks((currentFlasks) => {
      if (currentFlasks >= upgrade.price) {
        // Deduct the price from flasks
        const newFlasks = currentFlasks - upgrade.price;
  
        // Find the index of the bought upgrade in the list
        const boughtUpgradeIndex = availableUpgrades.findIndex(u => u.id === upgrade.id);
  
        // Mark the bought upgrade as bought
        const boughtUpgradeIndexInUpgrades = upgrades.findIndex(u => u.id === upgrade.id);
        const newUpgrades = [...upgrades];
        newUpgrades[boughtUpgradeIndexInUpgrades] = { ...newUpgrades[boughtUpgradeIndexInUpgrades], bought: true };
        setUpgrades(newUpgrades); // Update the state
  
        // Remove the bought upgrade from the list
        const newAvailableUpgrades = availableUpgrades.filter(u => u.id !== upgrade.id);
  
        // If there are more upgrades in the original list, add the next one to the available upgrades
        const nextUpgrade = newUpgrades.find(u => !newAvailableUpgrades.includes(u) && !u.bought);
        if (nextUpgrade) {
          // Insert the next upgrade at the same index where the bought upgrade was
          newAvailableUpgrades.splice(boughtUpgradeIndex, 0, nextUpgrade);
        }
  
        setAvailableUpgrades(newAvailableUpgrades);
  
        // Apply the effects of the upgrade
        switch (upgrade.id) {
          case 1:
            setCustomersPerMinute(customersPerMinute * 2);
            setAdvertisingLevel(advertisingLevel * 2);
            break;
          case 2:
            setAveragePurchase(averagePurchase * 2);
            break;
          case 3:
            setPlots(plots + 3);
            break;
          case 4:
            setMaxCustomersPerMinute(maxCustomersPerMinute * 2);
            break;
          default:
            break;
        }
  
        return newFlasks;
      }
  
      return currentFlasks;
    });
  };


  const upgradeResearchSpeed = () => {
    if (Math.floor(plots / 5) > upgradeCount) {
      setResearchSpeed(researchSpeed + 1);
      setUpgradeCount(upgradeCount + 1);
    }
  };

  const upgradeMaxResearch = () => {
    if (Math.floor(plots / 5) > upgradeCount) {
      setMaxResearch(maxResearch + 1);
      setUpgradeCount(upgradeCount + 1);
    }
  };

  if (advertisingLevel < 3) {
    return null;
  }

  return (
    <div className={styles.researchContainer}>
      <h3 className={styles.noMargin}>Research</h3>
      <p className={`${styles.noMargin} ${styles.marginBottom}`}>{flasks}/{maxResearch * 1000} Flasks</p>
      <button onClick={developerRefill}>Developer Refill</button>
      <div className={`${styles.flexContainer} ${styles.marginTop}`}>
        <button onClick={upgradeResearchSpeed} disabled={Math.floor((plots - 5) / 5) <= upgradeCount}>Upgrade</button>
        <p className={styles.noMargin}>Research Speed: {researchSpeed}</p>
      </div>
      <div className={`${styles.flexContainer} ${styles.marginTop}`}>
        <button onClick={upgradeMaxResearch} disabled={Math.floor((plots - 5) / 5) <= upgradeCount}>Upgrade</button>
        <p className={styles.noMargin}>Maximum Research: {maxResearch}</p>
      </div>
      <div className={`${styles.tableWithLines} ${styles.noMargin}`}>
        {availableUpgrades.map(upgrade => (
          <div key={upgrade.id} className={`${styles.cellWithLines} ${styles.noMargin}`}>
            <h4 className={styles.noMargin}>{upgrade.title}</h4>
            <p className={styles.noMargin}>{upgrade.description}</p>
            <button onClick={() => buyUpgrade(upgrade)} disabled={flasks < upgrade.price} className={styles.noMargin}>
              Buy {upgrade.price} Flasks
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResearchComponent;