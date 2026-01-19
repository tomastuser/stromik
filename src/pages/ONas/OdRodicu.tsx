import React from 'react';
import ContentImport from '../../components/ContentImport';
// import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const OdRodicu = () => {
  return (
    <Layout title='Od rodičů'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Od rodičů' />
          <ContentImport nazev='Od rodičů' />
          {/* <FotoCont name='oStromiku2.jpg' alt='O Stromíku 2' /> */}
        </div>
      </div>
    </Layout>
  );
};

export default OdRodicu;
