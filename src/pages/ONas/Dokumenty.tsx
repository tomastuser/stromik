import React from 'react';
import ContentImport from '../../components/ContentImport';
import Layout from '../../components/Layout';

const Dokumenty = () => {
  return (
    <Layout title='Dokumenty'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Dokumenty' />
        </div>
      </div>
    </Layout>
  );
};

export default Dokumenty;
