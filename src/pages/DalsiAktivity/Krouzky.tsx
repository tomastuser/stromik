import React from 'react';
import ContentImport from '../../components/ContentImport';
import Layout from '../../components/Layout';

const Krouzky = () => {
  return (
    <Layout title='Kroužky'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Kroužky' />
        </div>
      </div>
    </Layout>
  );
};

export default Krouzky;
