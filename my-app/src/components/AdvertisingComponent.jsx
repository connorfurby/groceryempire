import React, { useContext, useEffect } from 'react';
import { MoneyContext } from '../MoneyContext';
import { useState } from 'react';

const AdvertisingComponent = () => {
    const { money, setMoney, 
            supermarketPlots, setSupermarketPlots,
            maxCustomersPerMinute, setMaxCustomersPerMinute,
            advertisingLevel, setAdvertisingLevel,
            averagePurchase, setAveragePurchase, 
            customersPerMinute, setCustomersPerMinute, 
            advertisingPrice, setAdvertisingPrice } = useContext(MoneyContext);

    const style = {
        margin: '1px 0px 1px 20px'
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (supermarketPlots > 0) {
                setMoney(prevMoney => prevMoney + (customersPerMinute / 600) * averagePurchase);
            }
        }, 100); // Update every tenth of a second
    
        return () => clearInterval(interval); // Clean up on unmount
    }, [customersPerMinute, averagePurchase, supermarketPlots]);

    const investInAdvertising = () => {
        setMoney(prevMoney => {
            if (prevMoney < advertisingPrice) {
                return prevMoney;
            }
        
            const newAdvertisingLevel = advertisingLevel + 1;
            let newCustomersPerMinute = customersPerMinute + (3 + Math.floor(Math.random() * 4)) * supermarketPlots * newAdvertisingLevel;
            if (newCustomersPerMinute > maxCustomersPerMinute) {
                newCustomersPerMinute = maxCustomersPerMinute;
            }
            setAdvertisingLevel(newAdvertisingLevel);
            setCustomersPerMinute(newCustomersPerMinute);
            setAdvertisingPrice(advertisingPrice * 2);
        
            return prevMoney - advertisingPrice;
        });
    };

    if (supermarketPlots <= 0) {
        return null;
    }

    return (
        <div>
            <p style={style}>Customers per minute: {customersPerMinute}</p>
            <p style={style}>Average purchase: ${averagePurchase.toFixed(2)}</p>
            <p style={style}>Advertising level: {advertisingLevel}</p>
            <button style={style} disabled={money < advertisingPrice} onClick={investInAdvertising}>
                Invest in advertising (${advertisingPrice})
            </button>
        </div>
    );
};

export default AdvertisingComponent;