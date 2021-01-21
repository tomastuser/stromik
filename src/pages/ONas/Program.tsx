import React from 'react';
import ContentImport from '../../components/ContentImport';
import Layout from '../../components/Layout';

const Program = () => {
  return (
    <Layout title='Program'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Program' />
        </div>
      </div>
    </Layout>
  );
};

export default Program;
