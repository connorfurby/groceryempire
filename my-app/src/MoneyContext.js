import React, { createContext, useState } from 'react';

export const MoneyContext = createContext();
const initialUpgrades = [
  { id: 1, title: 'Billboards I', price: 1000, description: 'Double the effectiveness of advertising' },
  { id: 2, title: 'Quality Control I', price: 1500, description: 'Increse the quality of groceries, effectively doubling the average purchase' },
  { id: 3, title: 'Land I', price: 2500, description: 'Three free land plots to use at your disposal' },
  { id: 4, title: 'Shipping I', price: 2500, description: 'Goods come in quicker from warehouses, doubling the maximum customers per minute' },
];

export const MoneyProvider = ({ children }) => {
  const [money, setMoney] = useState(0);
  const [plots, setPlots] = useState(0);
  const [supermarketPlots, setSupermarketPlots] = useState(0);
  const [landPlotCost, setLandPlotCost] = useState(5);
  const [supermarketPlotCost, setSupermarketPlotCost] = useState(25);
  const [maxCustomersPerMinute, setMaxCustomersPerMinute] = useState(0);
  const [parkingLotPlots, setParkingLotPlots] = useState(0);
  const [parkingLotCost, setParkingLotCost] = useState(10);
  const [customersPerMinute, setCustomersPerMinute] = useState(0);
  const [advertisingLevel, setAdvertisingLevel] = useState(0);
  const [advertisingPrice, setAdvertisingPrice] = useState(0);
  const [averagePurchase, setAveragePurchase] = useState(1.5);
  const [upgrades, setUpgrades] = useState(initialUpgrades); // Move upgrades into state
  const [availableUpgrades, setAvailableUpgrades] = useState(upgrades.slice(0, 3)); // Show only the first three upgrades initially
  const [flasks, setFlasks] = useState(0);
  const [researchSpeed, setResearchSpeed] = useState(1);
  const [maxResearch, setMaxResearch] = useState(1);
  const [upgradeCount, setUpgradeCount] = useState(0);

  return (
    <MoneyContext.Provider value={{ money, setMoney, 
                                    plots, setPlots, 
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
                                    upgradeCount, setUpgradeCount }}>
      {children}
    </MoneyContext.Provider>
  );
};