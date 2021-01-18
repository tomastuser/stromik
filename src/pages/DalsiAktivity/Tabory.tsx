import React from 'react';
import ContentImport from '../../components/ContentImport';
import Layout from '../../components/Layout';

const Tabory = () => {
  return (
    <Layout title='Tábory'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Tábory' />
        </div>
      </div>
    </Layout>
  );
};

export default Tabory;
