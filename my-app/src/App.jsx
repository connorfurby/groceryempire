import React, { useState, useEffect } from 'react';
import MoneyComponent from './components/MoneyComponent';
import SupermarketStats from './components/SupermarketStats';
import { MoneyContext } from './MoneyContext';
import Cookies from 'js-cookie';

function App() {
  const initialMoney = 0;
  const initialPlots = 0;
  const initialPlotsUnused = 0;
  const initialSupermarketPlots = 0;
  const initialLandPlotCost = 5;
  const initialSupermarketPlotCost = 25;

  const [money, setMoney] = useState(Cookies.get('money') ? parseFloat(Cookies.get('money')) : initialMoney);
  const [plots, setPlots] = useState(Cookies.get('plots') ? parseFloat(Cookies.get('plots')) : initialPlots);
  const [plotsUnused, setPlotsUnused] = useState(Cookies.get('plotsUnused') ? parseFloat(Cookies.get('plotsUnused')) : initialPlotsUnused);
  const [supermarketPlots, setSupermarketPlots] = useState(Cookies.get('supermarketPlots') ? parseFloat(Cookies.get('supermarketPlots')) : initialSupermarketPlots);
  const [landPlotCost, setLandPlotCost] = useState(Cookies.get('landPlotCost') ? parseFloat(Cookies.get('landPlotCost')) : initialLandPlotCost);
  const [supermarketPlotCost, setSupermarketPlotCost] = useState(Cookies.get('supermarketPlotCost') ? parseFloat(Cookies.get('supermarketPlotCost')) : initialSupermarketPlotCost);

  useEffect(() => {
    Cookies.set('money', money, { expires: 365 });
    Cookies.set('plots', plots, { expires: 365 });
    Cookies.set('supermarketPlots', supermarketPlots, { expires: 365 });
    Cookies.set('landPlotCost', landPlotCost, { expires: 365 });
    Cookies.set('supermarketPlotCost', supermarketPlotCost, { expires: 365 });
  }, [money, plots, supermarketPlots, landPlotCost, supermarketPlotCost]);

  const reset = () => {
    setMoney(initialMoney);
    setPlots(initialPlots);
    setPlotsUnused(initialPlotsUnused);
    setSupermarketPlots(initialSupermarketPlots);
    setLandPlotCost(initialLandPlotCost);
    setSupermarketPlotCost(initialSupermarketPlotCost);
    Cookies.remove('money');
    Cookies.remove('plots');
    Cookies.remove('supermarketPlots');
    Cookies.remove('landPlotCost');
    Cookies.remove('supermarketPlotCost');
  };

  return (
    <MoneyContext.Provider value={{ money, setMoney, plots, setPlots, plotsUnused, setPlotsUnused, supermarketPlots, setSupermarketPlots, landPlotCost, setLandPlotCost, supermarketPlotCost, setSupermarketPlotCost }}>
      <MoneyComponent />
      <SupermarketStats />
      <button onClick={reset}>Reset</button>
    </MoneyContext.Provider>
  );
}

export default App;