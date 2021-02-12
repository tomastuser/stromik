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
          <Zaklad nazev='O Mariánce' />
          <ContentImport nazev='O Mariánce 1' />
          <FotoCont name='omari.jpg' alt='O Mariance 1' />
          <ContentImport nazev='O Mariánce 2' />
          <FotoCont name='omari2.jpg' alt='O Mariance 2' />
        </div>
      </div>
    </Layout>
  );
};

export default OMariance;
