import React, { useState } from 'react';
import MoneyComponent from './components/MoneyComponent';
import SupermarketStats from './components/SupermarketStats';
import { MoneyContext } from './MoneyContext';
import AdvertisingComponent from './components/AdvertisingComponent';

function App() {
  const initialMoney = 0;
  const initialPlots = 0;
  const initialPlotsUnused = 0;
  const initialSupermarketPlots = 0;
  const initialLandPlotCost = 5;
  const initialSupermarketPlotCost = 25;
  const initialMaxCustomersPerMinute = 0;
  const initialParkingLotPlots = 0;
  const initialParkingLotCost = 0;
  const initialCustomersPerMinute = 0;
  const initialAdvertisingLevel = 0;

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
    }
  };

  return (
    <MoneyContext.Provider 
      value={{ 
        money, setMoney, plots, setPlots, plotsUnused, setPlotsUnused, 
        supermarketPlots, setSupermarketPlots, landPlotCost, setLandPlotCost, 
        supermarketPlotCost, setSupermarketPlotCost, maxCustomersPerMinute, setMaxCustomersPerMinute 
      }}
    >
      <MoneyComponent />
      <SupermarketStats />
      <AdvertisingComponent />
      <button onClick={reset}>Reset</button>
    </MoneyContext.Provider>
  );
}

export default App;