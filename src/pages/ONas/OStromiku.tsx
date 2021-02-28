import React from 'react';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const OStromiku = () => {
  return (
    <Layout title='O Stromíku'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='O Stromíku' />
          <ContentImport nazev='O Stromíku 1' />
          <FotoCont name='omari.jpg' alt='O Stromíku 1' />
          <ContentImport nazev='O Stromíku 2' />
          <FotoCont name='omari2.jpg' alt='O Stromíku 2' />
        </div>
      </div>
    </Layout>
  );
};

export default OStromiku;
