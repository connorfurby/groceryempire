import React, { useState } from 'react';
import MoneyComponent from './components/MoneyComponent';
import SupermarketStats from './components/SupermarketStats';
import { MoneyContext } from './MoneyContext';
import AdvertisingComponent from './components/AdvertisingComponent';
import ResearchComponent from './components/ResearchComponent';
import './App.css';

function App() {
  const initialMoney = 0;
  const initialPlots = 0;
  const initialPlotsUnused = 0;
  const initialSupermarketPlots = 0;
  const initialLandPlotCost = 5;
  const initialSupermarketPlotCost = 25;
  const initialMaxCustomersPerMinute = 0;
  const initialParkingLotPlots = 0;
  const initialParkingLotCost = 10;
  const initialCustomersPerMinute = 0;
  const initialAdvertisingLevel = 0;
  const initialAdvertisingPrice = 50;
  const initialAveragePurchase = 1.5;
  const initialFlasks = 0;
  const initialResearchSpeed = 1;
  const initialMaxResearch = 1;
  const initialUpgradeCount = 0;
  const initialUpgrades = [
    { id: 1, title: 'Billboards I', price: 1000, description: 'Double the effectiveness of advertising' },
    { id: 2, title: 'Quality Control I', price: 1500, description: 'Increse the quality of groceries, effectively doubling the average purchase' },
    { id: 3, title: 'Land I', price: 2500, description: 'Three free land plots to use at your disposal' },
    { id: 4, title: 'Shipping I', price: 2500, description: 'Goods come in quicker from warehouses, doubling the maximum customers per minute' },
  ];


  const [money, setMoney] = useState(initialMoney);
  const [plots, setPlots] = useState(initialPlots);
  const [plotsUnused, setPlotsUnused] = useState(initialPlotsUnused);
  const [supermarketPlots, setSupermarketPlots] = useState(initialSupermarketPlots);
  const [landPlotCost, setLandPlotCost] = useState(initialLandPlotCost);
  const [supermarketPlotCost, setSupermarketPlotCost] = useState(initialSupermarketPlotCost);
  const [maxCustomersPerMinute, setMaxCustomersPerMinute] = useState(initialMaxCustomersPerMinute);
  const [parkingLotPlots, setParkingLotPlots] = useState(initialParkingLotPlots);
  const [parkingLotCost, setParkingLotCost] = useState(initialParkingLotCost);
  const [customersPerMinute, setCustomersPerMinute] = useState(initialCustomersPerMinute);
  const [advertisingLevel, setAdvertisingLevel] = useState(initialAdvertisingLevel);
  const [advertisingPrice, setAdvertisingPrice] = useState(initialAdvertisingPrice);
  const [averagePurchase, setAveragePurchase] = useState(initialAveragePurchase);
  const [upgrades, setUpgrades] = useState(initialUpgrades); // Move upgrades into state
  const [availableUpgrades, setAvailableUpgrades] = useState(upgrades.slice(0, 3)); // Show only the first three upgrades initially
  const [flasks, setFlasks] = useState(initialFlasks);
  const [researchSpeed, setResearchSpeed] = useState(initialResearchSpeed);
  const [maxResearch, setMaxResearch] = useState(initialMaxResearch);
  const [upgradeCount, setUpgradeCount] = useState(initialUpgradeCount);


  const reset = () => {
    if (window.confirm("Are you sure you want to reset?")) {
      // Reset state
      setMoney(initialMoney);
      setPlots(initialPlots);
      setPlotsUnused(initialPlotsUnused);
      setSupermarketPlots(initialSupermarketPlots);
      setLandPlotCost(initialLandPlotCost);
      setSupermarketPlotCost(initialSupermarketPlotCost);
      setMaxCustomersPerMinute(initialMaxCustomersPerMinute);
      setParkingLotPlots(initialParkingLotPlots);
      setParkingLotCost(initialParkingLotCost);
      setCustomersPerMinute(initialCustomersPerMinute);
      setAdvertisingLevel(initialAdvertisingLevel);
      setAdvertisingPrice(initialAdvertisingPrice);
      setAveragePurchase(initialAveragePurchase);
      setUpgrades(initialUpgrades);
      setAvailableUpgrades(upgrades.slice(0, 3));
      setFlasks(initialFlasks);
      setResearchSpeed(initialResearchSpeed);
      setMaxResearch(initialMaxResearch);
      setUpgradeCount(initialUpgradeCount);
    }
  };

  return (
    <MoneyContext.Provider 
  value={{ 
    money, setMoney, 
    plots, setPlots, 
    plotsUnused, setPlotsUnused,
    supermarketPlots, setSupermarketPlots, 
    landPlotCost, setLandPlotCost, 
    supermarketPlotCost, setSupermarketPlotCost, 
    maxCustomersPerMinute, setMaxCustomersPerMinute, 
    parkingLotPlots, setParkingLotPlots, 
    parkingLotCost, setParkingLotCost, 
    customersPerMinute, setCustomersPerMinute, 
    advertisingLevel, setAdvertisingLevel, 
    advertisingPrice, setAdvertisingPrice, 
    averagePurchase, setAveragePurchase,
    upgrades, setUpgrades,
    availableUpgrades, setAvailableUpgrades,
    flasks, setFlasks,
    researchSpeed, setResearchSpeed,
    maxResearch, setMaxResearch,
    upgradeCount, setUpgradeCount
  }}>
      <div className="appContainer">
        <div className="mainComponents">
          <MoneyComponent />
            <div>
              <SupermarketStats />
            </div>
          <AdvertisingComponent />
          <button onClick={reset} style={{ marginTop: '30px'}}>Reset</button>
        </div>
        {advertisingLevel >= 3 && (
        <div className="researchComponent">
          <ResearchComponent />
        </div>
        )}
      </div>
    </MoneyContext.Provider>
  );
}

export default App;