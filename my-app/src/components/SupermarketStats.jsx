import React, { useContext } from 'react';
import { MoneyContext } from '../MoneyContext';

function SupermarketStats() {
  const { money, setMoney, plots, setPlots, supermarketPlots, setSupermarketPlots, landPlotCost, setLandPlotCost, supermarketPlotCost, setSupermarketPlotCost } = useContext(MoneyContext);

  const buyLand = () => {
    if (money >= landPlotCost) {
      setMoney(money - landPlotCost);
      setPlots(plots + 1);
      setLandPlotCost(prevCost => prevCost * 1.5);
    }
  };

  const buildSupermarket = () => {
    const unusedLandPlots = plots - supermarketPlots;
    if (money >= supermarketPlotCost && unusedLandPlots > 0) {
      setMoney(money - supermarketPlotCost);
      setSupermarketPlots(supermarketPlots + 1);
      setSupermarketPlotCost(prevCost => prevCost * 1.5);
    }
  };

  const style = {
    margin: '1px 0px 1px 20px'
  };

  return (
    <div>
      {plots >= 4 && (
        <>
          <p style={style}>Unused Land Plots: {plots - supermarketPlots}</p>
          <p style={style}>Supermarket Plots: {supermarketPlots}</p>
          <button style={style} disabled={money < supermarketPlotCost || plots - supermarketPlots <= 0} onClick={buildSupermarket}>Build Supermarket Space: ${supermarketPlotCost.toFixed(2)}</button>
        </>
      )}
      <p style={style}>Land Plots: {plots}</p>
      <button style={style} disabled={money < landPlotCost} onClick={buyLand}>Buy Land: ${landPlotCost.toFixed(2)}</button>
    </div>
  );
}

export default SupermarketStats;