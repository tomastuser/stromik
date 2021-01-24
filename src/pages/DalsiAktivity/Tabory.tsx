import React from 'react';
import ContentImport from '../../components/ContentImport';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Tabory = () => {
  return (
    <Layout title='Tábory'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Tábory' />
          <ContentImport nazev='Tábory' />
        </div>
      </div>
    </Layout>
  );
};

export default Tabory;
