import React, { useContext, useEffect } from 'react';
import { MoneyContext } from '../MoneyContext';
import { useState } from 'react';

const AdvertisingComponent = () => {
    const { money, setMoney, supermarketPlots, maxCustomersPerMinute } = useContext(MoneyContext);
    const [customersPerMinute, setCustomersPerMinute] = useState(0);
    const [averagePurchase, setAveragePurchase] = useState(1.50);
    const [advertisingLevel, setAdvertisingLevel] = useState(0);
    const [advertisingPrice, setAdvertisingPrice] = useState(25);

    const style = {
        margin: '1px 0px 1px 20px'
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (supermarketPlots > 0) {
                setMoney(money + (customersPerMinute / 600) * averagePurchase);
            }
        }, 100); // Update every tenth of a second

        return () => clearInterval(interval); // Clean up on unmount
    }, [money, customersPerMinute, averagePurchase, supermarketPlots]);

    const investInAdvertising = () => {
        if (money < advertisingPrice) {
            return;
        }
    
        const newAdvertisingLevel = advertisingLevel + 1;
        let newCustomersPerMinute = customersPerMinute + (3 + Math.floor(Math.random() * 4)) * supermarketPlots;
        if (newCustomersPerMinute > maxCustomersPerMinute) {
            newCustomersPerMinute = maxCustomersPerMinute;
        }
        setAdvertisingLevel(newAdvertisingLevel);
        setCustomersPerMinute(newCustomersPerMinute);
        setAdvertisingPrice(advertisingPrice * 2);
    
        setMoney(money - advertisingPrice);
    };

    if (supermarketPlots <= 0) {
        return null;
    }

    return (
        <div>
            <p style={style}>Customers per minute: {customersPerMinute}</p>
            <p style={style}>Average purchase: {averagePurchase}</p>
            <p style={style}>Advertising level: {advertisingLevel}</p>
            <button style={style} disabled={money < advertisingPrice} onClick={investInAdvertising}>
                Invest in advertising (${advertisingPrice})
            </button>
        </div>
    );
};

export default AdvertisingComponent;