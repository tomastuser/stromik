import React from 'react';
import ContentImport from '../../components/ContentImport';
import Layout from '../../components/Layout';

const Prednasky = () => {
  return (
    <Layout title='Přednášky'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Přednášky' />
        </div>
      </div>
    </Layout>
  );
};

export default Prednasky;
