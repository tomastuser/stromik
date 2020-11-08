import React from 'react';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Krouzky = () => {
  return (
    <Layout title='Kroužky'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Kroužky' />
          <h3>Zvoneček</h3>
          <p>
            Na jaře, na podzim a v zimě probíhá cyklus setkání určených pro děti
            do 3 let v doprovodu rodiče nebo jiné blízké osoby. Od malička děti
            poznávají přírodu hravou formou - písničky, básničky, tvoření, hry,
            procházky. Celý program probíhá na prostorné zahradě a v blízkém
            lese pod vedením lektora z lesního klubu..
          </p>
          <h3>Jaro 2020</h3>
          <p>Přihlašovací formulář&nbsp;</p>
          <p>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSeaFQu_9xiJvqUEKK6Xk58Z_ylwIf2PFjxp5WD7HhioeL0Ipg/viewform\'>
              zde.
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Krouzky;
