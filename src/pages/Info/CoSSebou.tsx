import React from 'react';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const CoSSebou = () => {
  return (
    <Layout title='Co s sebou'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Co s sebou' />
          <ContentImport nazev='Co s sebou 1' />
          <FotoCont name='cossebou.jpg' alt='Co s sebou' />
          <ContentImport nazev='Co s sebou 2' />
          <FotoCont name='cossebou2.jpg' alt='Co s sebou 2' />
        </div>
      </div>
    </Layout>
  );
};

export default CoSSebou;
