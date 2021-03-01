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
          <FotoCont name='coSSebou.jpg' alt='Co s sebou' />
        </div>
      </div>
    </Layout>
  );
};

export default CoSSebou;
