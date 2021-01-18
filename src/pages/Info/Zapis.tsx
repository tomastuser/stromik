import React from 'react';
import ContentImport from '../../components/ContentImport';
import Layout from '../../components/Layout';

const Zapis = () => {
  return (
    <Layout title='Zápis'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Zápis' />
        </div>
      </div>
    </Layout>
  );
};

export default Zapis;
