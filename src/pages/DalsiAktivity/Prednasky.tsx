import React from 'react';
import ContentImport from '../../components/ContentImport';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Prednasky = () => {
  return (
    <Layout title='Přednášky'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Přednášky' />
          <ContentImport nazev='Přednášky' />
        </div>
      </div>
    </Layout>
  );
};

export default Prednasky;
