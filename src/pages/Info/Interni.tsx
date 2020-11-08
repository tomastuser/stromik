import React from 'react';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Interni = () => {
  return (
    <Layout title='Interní sekce'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Interní sekce' />
          <h1>Interní sekce</h1>
          <div>
            <h3>Rozpis úklidů</h3>
            <h3>Slavnosti</h3>
          </div>
          <button className='button'>Odhlášení</button>
        </div>
      </div>
    </Layout>
  );
};

export default Interni;
