import React, { createContext, useState } from 'react';

export const MoneyContext = createContext();

export const MoneyProvider = ({ children }) => {
  const [money, setMoney] = useState(0);
  const [plots, setPlots] = useState(0);
  const [supermarketPlots, setSupermarketPlots] = useState(0);
  const [landPlotCost, setLandPlotCost] = useState(5);
  const [supermarketPlotCost, setSupermarketPlotCost] = useState(25);
  const [maxCustomersPerMinute, setMaxCustomersPerMinute] = useState(0);
  const [parkingLotPlots, setParkingLotPlots] = useState(0);
  const [parkingLotCost, setParkingLotCost] = useState(0);
  const [customersPerMinute, setCustomersPerMinute] = useState(0);
  const [advertisingLevel, setAdvertisingLevel] = useState(0);
  const [advertisingPrice, setAdvertisingPrice] = useState(0);

  return (
    <MoneyContext.Provider value={{ money, setMoney, plots, setPlots, supermarketPlots, setSupermarketPlots, landPlotCost, setLandPlotCost, supermarketPlotCost, setSupermarketPlotCost, maxCustomersPerMinute, setMaxCustomersPerMinute, parkingLotPlots, setParkingLotPlots, parkingLotCost, setParkingLotCost, customersPerMinute, setCustomersPerMinute, advertisingLevel, setAdvertisingLevel, advertisingPrice, setAdvertisingPrice }}> {/* Added advertisingPrice and setAdvertisingPrice to the value */}
      {children}
    </MoneyContext.Provider>
  );
};