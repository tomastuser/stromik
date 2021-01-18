import React from 'react';
import ContentImport from '../../components/ContentImport';
import Layout from '../../components/Layout';

const CoSSebou = () => {
  return (
    <Layout title='Co s sebou'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Co s sebou' />
        </div>
      </div>
    </Layout>
  );
};

export default CoSSebou;
