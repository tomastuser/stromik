import React from 'react';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const NasePravidla = () => {
  return (
    <Layout title='Naše pravidla'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Naše pravidla' />
          <ContentImport nazev='Naše pravidla' />
          <FotoCont name='pravidla.jpg' alt='Pravidla' />
        </div>
      </div>
    </Layout>
  );
};

export default NasePravidla;
