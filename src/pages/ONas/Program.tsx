import React from 'react';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Program = () => {
  return (
    <Layout title='Program'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Program' />
          <ContentImport nazev='Program' />
          <FotoCont name='program.jpg' alt='Program 1' />
          <ContentImport nazev='Program 2' />
          <FotoCont name='program2.jpg' alt='Program 2' />
        </div>
      </div>
    </Layout>
  );
};

export default Program;
