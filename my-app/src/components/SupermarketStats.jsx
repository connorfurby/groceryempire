import React, { useContext } from 'react';
import { MoneyContext } from '../MoneyContext';

function SupermarketStats() {
  const { money, setMoney, 
          plots, setPlots, 
          supermarketPlots, setSupermarketPlots, 
          parkingLotPlots, setParkingLotPlots, 
          parkingLotCost, setParkingLotCost, 
          landPlotCost, setLandPlotCost, 
          supermarketPlotCost, setSupermarketPlotCost, 
          maxCustomersPerMinute, setMaxCustomersPerMinute } = useContext(MoneyContext);

  const buyLand = () => {
    if (money >= landPlotCost) {
      setMoney(money - landPlotCost);
      setPlots(plots + 1);
      setLandPlotCost(prevCost => prevCost * 1.5);
    }
  };

  const buildSupermarket = () => {
    const unusedLandPlots = plots - supermarketPlots - parkingLotPlots;
    if (money >= supermarketPlotCost && unusedLandPlots > 0) {
      setMoney(money - supermarketPlotCost);
      setSupermarketPlots(supermarketPlots + 1);
      setSupermarketPlotCost(prevCost => prevCost * 1.5);
    }
  };

  const buyParkingLot = () => {
    const unusedLandPlots = plots - supermarketPlots - parkingLotPlots;
    if (money >= parkingLotCost && unusedLandPlots > 0) {
      setMoney(money - parkingLotCost);
      setParkingLotPlots(parkingLotPlots + 1);
      setParkingLotCost(prevCost => prevCost * 1.75);
      setMaxCustomersPerMinute(prevMax => prevMax + 10 * Math.pow(1.75, parkingLotPlots));
    }
  };

  const style = {
    margin: '1px 0px 1px 20px'
  };

  return (
    <div>
      {plots >= 4 && (
        <>
          <p style={style}>Unused Land Plots: {plots - supermarketPlots - parkingLotPlots}</p>
          <p style={style}>Supermarket Plots: {supermarketPlots}</p>
          <button style={style} disabled={money < supermarketPlotCost || plots - supermarketPlots - parkingLotPlots <= 0} onClick={buildSupermarket}>Build Supermarket Space: ${supermarketPlotCost.toFixed(2)}</button>
          {supermarketPlots > 0 && (
            <>
              <p style={style}>Parking Lot Plots: {parkingLotPlots}</p>
              <button style={style} disabled={money < parkingLotCost || plots - supermarketPlots - parkingLotPlots <= 0} onClick={buyParkingLot}>Buy Parking Lot: ${parkingLotCost.toFixed(2)}</button>
            </>
          )}
        </>
      )}
      <p style={style}>Land Plots: {plots}</p>
      <button style={style} disabled={money < landPlotCost} onClick={buyLand}>Buy Land: ${landPlotCost.toFixed(2)}</button>
      {supermarketPlots > 0 && (
        <div style={{ marginTop: '30px' }}>
          <p style={style}>Maximum customers per minute: {Math.round(maxCustomersPerMinute)}</p>
        </div>
      )}
    </div>
  );
}

export default SupermarketStats;