import React from 'react';
import ContentImport from '../../components/ContentImport';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Program = () => {
  return (
    <Layout title='Program'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Program' />
          <ContentImport nazev='Program' />
        </div>
      </div>
    </Layout>
  );
};

export default Program;
