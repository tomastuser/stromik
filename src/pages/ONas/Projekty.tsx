import React from 'react';
import ContentImport from '../../components/ContentImport';
import Layout from '../../components/Layout';

const Projekty = () => {
  return (
    <Layout title='Projekty'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Projekty' />
        </div>
      </div>
    </Layout>
  );
};

export default Projekty;
