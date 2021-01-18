import React from 'react';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const OMariance = () => {
  return (
    <Layout title='O Mariánce'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='O Mariánce' />
          <FotoCont name='KDOJSME.jpg' alt='Kdo jsme' />
        </div>
      </div>
    </Layout>
  );
};

export default OMariance;
