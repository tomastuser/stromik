import React from 'react';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Zazemi = () => {
  return (
    <Layout title='Zázemí'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Zázemí' />
          <p>
            Program probíhá venku na zahradě a v lese za každého počasí. V
            případě velmi nepříznivého počasí (venkovní teplota pod -10 stupňů
            nebo prudký nárazový vítr, bouřka), se činnost přesouvá do
            chráněného prostoru chatky, nebo probíhá náhradní program, např.
            návštěva divadla nebo muzea. Zázemí lesní školy tvoří rozlehlá
            zahrada a dřevěná chata kousek od lesa.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Zazemi;
