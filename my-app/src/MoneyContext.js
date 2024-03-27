// In MoneyContext.js

import React, { createContext, useState } from 'react';
import Cookies from 'js-cookie';

export const MoneyContext = createContext();

export const MoneyProvider = ({ children }) => {
  const [money, setMoney] = useState(Cookies.get('money') || 0);
  const [plots, setPlots] = useState(Cookies.get('plots') || 0);
  const [supermarketPlots, setSupermarketPlots] = useState(Cookies.get('supermarketPlots') || 0);
  const [landPlotCost, setLandPlotCost] = useState(Cookies.get('landPlotCost') || 5);
  const [supermarketPlotCost, setSupermarketPlotCost] = useState(Cookies.get('supermarketPlotCost') || 25);

  // ...

  return (
    <MoneyContext.Provider value={{ money, setMoney, plots, setPlots, supermarketPlots, setSupermarketPlots, landPlotCost, setLandPlotCost, supermarketPlotCost, setSupermarketPlotCost }}>
      {children}
    </MoneyContext.Provider>
  );
};