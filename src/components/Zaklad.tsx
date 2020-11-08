import React from 'react';

const Zaklad = ({ nazev }: { nazev: string }) => {
  const random = Math.floor(Math.random() * 3);
  return (
    <div>
      <h1 className='nazev'>{nazev}</h1>
      <img
        className='caraNadpis'
        alt='caraNadpis'
        src='https://res.cloudinary.com/tomastuser/image/upload/v1594799803/cara_nadpis_wtzq3b.png'
      />
    </div>
  );
};

export default Zaklad;
