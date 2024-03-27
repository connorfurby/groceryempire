import React, { useState, useEffect } from 'react';
import MoneyComponent from './components/MoneyComponent';
import SupermarketStats from './components/SupermarketStats';
import { MoneyContext } from './MoneyContext';
import Cookies from 'js-cookie';
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

  const [money, setMoney] = useState(Cookies.get('money') ? parseFloat(Cookies.get('money')) : initialMoney);
  const [plots, setPlots] = useState(Cookies.get('plots') ? parseFloat(Cookies.get('plots')) : initialPlots);
  const [plotsUnused, setPlotsUnused] = useState(Cookies.get('plotsUnused') ? parseFloat(Cookies.get('plotsUnused')) : initialPlotsUnused);
  const [supermarketPlots, setSupermarketPlots] = useState(Cookies.get('supermarketPlots') ? parseFloat(Cookies.get('supermarketPlots')) : initialSupermarketPlots);
  const [landPlotCost, setLandPlotCost] = useState(Cookies.get('landPlotCost') ? parseFloat(Cookies.get('landPlotCost')) : initialLandPlotCost);
  const [supermarketPlotCost, setSupermarketPlotCost] = useState(Cookies.get('supermarketPlotCost') ? parseFloat(Cookies.get('supermarketPlotCost')) : initialSupermarketPlotCost);
  const [maxCustomersPerMinute, setMaxCustomersPerMinute] = useState(
    Cookies.get('maxCustomersPerMinute') 
      ? parseFloat(Cookies.get('maxCustomersPerMinute')) 
      : initialMaxCustomersPerMinute
  );
  const [parkingLotPlots, setParkingLotPlots] = useState(Cookies.get('parkingLotPlots') ? parseFloat(Cookies.get('parkingLotPlots')) : initialParkingLotPlots);
  const [parkingLotCost, setParkingLotCost] = useState(Cookies.get('parkingLotCost') ? parseFloat(Cookies.get('parkingLotCost')) : initialParkingLotCost);
  const [customersPerMinute, setCustomersPerMinute] = useState(Cookies.get('customersPerMinute') ? parseFloat(Cookies.get('customersPerMinute')) : initialCustomersPerMinute);
  const [advertisingLevel, setAdvertisingLevel] = useState(Cookies.get('advertisingLevel') ? parseFloat(Cookies.get('advertisingLevel')) : initialAdvertisingLevel);
  
  useEffect(() => {
    Cookies.set('maxCustomersPerMinute', maxCustomersPerMinute, { expires: 365 });
  }, [maxCustomersPerMinute]);

  useEffect(() => {
    Cookies.set('money', money, { expires: 365 });
    Cookies.set('plots', plots, { expires: 365 });
    Cookies.set('supermarketPlots', supermarketPlots, { expires: 365 });
    Cookies.set('landPlotCost', landPlotCost, { expires: 365 });
    Cookies.set('supermarketPlotCost', supermarketPlotCost, { expires: 365 });
    Cookies.set('parkingLotPlots', parkingLotPlots, { expires: 365 });
    Cookies.set('parkingLotCost', parkingLotCost, { expires: 365 });
    Cookies.set('customersPerMinute', customersPerMinute, { expires: 365 });
    Cookies.set('advertisingLevel', advertisingLevel, { expires: 365 });
  }, [money, plots, supermarketPlots, landPlotCost, supermarketPlotCost, parkingLotPlots, parkingLotCost, customersPerMinute, advertisingLevel]);

  const reset = () => {
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
  
    // Remove cookies
    Cookies.remove('money');
    Cookies.remove('plots');
    Cookies.remove('supermarketPlots');
    Cookies.remove('landPlotCost');
    Cookies.remove('supermarketPlotCost');
    Cookies.remove('maxCustomersPerMinute');
    Cookies.remove('parkingLotPlots');
    Cookies.remove('parkingLotCost');
    Cookies.remove('customersPerMinute');
    Cookies.remove('advertisingLevel');
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