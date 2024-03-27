import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const MoneyContext = createContext();

export const MoneyProvider = ({ children }) => {
  const [money, setMoney] = useState(() => Number(Cookies.get('money')) || 0);
  const [plots, setPlots] = useState(() => Number(Cookies.get('plots')) || 0);
  const [supermarketPlots, setSupermarketPlots] = useState(() => Number(Cookies.get('supermarketPlots')) || 0);
  const [landPlotCost, setLandPlotCost] = useState(() => Number(Cookies.get('landPlotCost')) || 5);
  const [supermarketPlotCost, setSupermarketPlotCost] = useState(() => Number(Cookies.get('supermarketPlotCost')) || 25);
  const [maxCustomersPerMinute, setMaxCustomersPerMinute] = useState(() => Number(Cookies.get('maxCustomersPerMinute')) || 0);
  const [parkingLotPlots, setParkingLotPlots] = useState(() => Number(Cookies.get('parkingLotPlots')) || 0);
  const [parkingLotCost, setParkingLotCost] = useState(() => Number(Cookies.get('parkingLotCost')) || 0);
  const [customersPerMinute, setCustomersPerMinute] = useState(() => Number(Cookies.get('customersPerMinute')) || 0);
  const [advertisingLevel, setAdvertisingLevel] = useState(() => Number(Cookies.get('advertisingLevel')) || 0);

  useEffect(() => {
    Cookies.set('money', money.toString());
  }, [money]);

  useEffect(() => {
    Cookies.set('plots', plots.toString());
  }, [plots]);

  useEffect(() => {
    Cookies.set('supermarketPlots', supermarketPlots.toString());
  }, [supermarketPlots]);

  useEffect(() => {
    Cookies.set('landPlotCost', landPlotCost.toString());
  }, [landPlotCost]);

  useEffect(() => {
    Cookies.set('supermarketPlotCost', supermarketPlotCost.toString());
  }, [supermarketPlotCost]);

  useEffect(() => {
    Cookies.set('maxCustomersPerMinute', maxCustomersPerMinute.toString());
  }, [maxCustomersPerMinute]);

  useEffect(() => {
    Cookies.set('parkingLotPlots', parkingLotPlots.toString());
  }, [parkingLotPlots]);

  useEffect(() => {
    Cookies.set('parkingLotCost', parkingLotCost.toString());
  }, [parkingLotCost]);

  useEffect(() => {
    Cookies.set('customersPerMinute', customersPerMinute.toString());
  }, [customersPerMinute]);

  useEffect(() => {
    Cookies.set('advertisingLevel', advertisingLevel.toString());
  }, [advertisingLevel]);

  return (
    <MoneyContext.Provider value={{ money, setMoney, plots, setPlots, supermarketPlots, setSupermarketPlots, landPlotCost, setLandPlotCost, supermarketPlotCost, setSupermarketPlotCost, maxCustomersPerMinute, setMaxCustomersPerMinute, parkingLotPlots, setParkingLotPlots, parkingLotCost, setParkingLotCost, customersPerMinute, setCustomersPerMinute, advertisingLevel, setAdvertisingLevel }}>
      {children}
    </MoneyContext.Provider>
  );
};