import React from 'react';
import ContentImport from '../../components/ContentImport';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Cenik = () => {
  return (
    <Layout title='Ceník'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Ceník' />
          <ContentImport nazev='Ceník' />
        </div>
      </div>
    </Layout>
  );
};

export default Cenik;
