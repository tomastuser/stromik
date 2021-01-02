import React from 'react';

import caraNadpis from '../public/cara_nadpis.png';

const Zaklad = ({ nazev }: { nazev: string }) => {
  const random = Math.floor(Math.random() * 3);
  return (
    <div>
      <h1 className='nazev'>{nazev}</h1>
      <img className='caraNadpis' alt='caraNadpis' src={caraNadpis} />
    </div>
  );
};

export default Zaklad;
