import React, { useEffect, useState } from 'react';

function Kural({ start, end }) {
    const [kuralData, setKuralData] = useState([]);

    useEffect(() => {
        setKuralData([])
        const promises = [];
        for (let i = start; i <= end; i++) {
            promises.push(
                fetch(`https://getthirukkural.appspot.com/api/3.0/kural/${i}?appid=di9ywixy24eya&format=json`)
                    .then((res) => res.json())
            );
        }
        Promise.all(promises).then((results) => {
            setKuralData(results);
        });
    }, [start, end]);

    return (
        <div>
            {kuralData.length > 0 ? (
                kuralData.map((kural, index) => (
                    <div key={index} className='read-aside-cart p-3'>
                        <h3>குறள் {start + index}</h3>
                        <p className='fs-6'>{kural.line1}</p>
                        <p>{kural.line2}</p>
                    </div>
                ))
            ) : (
                <div className='read-aside-cart p-3'>Loading...</div>
            )}
        </div>
    );
}

export default Kural;
