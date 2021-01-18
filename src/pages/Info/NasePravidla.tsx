import React from 'react';
import ContentImport from '../../components/ContentImport';
import Layout from '../../components/Layout';

const NasePravidla = () => {
  return (
    <Layout title='Naše pravidla'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Naše pravidla' />
        </div>
      </div>
    </Layout>
  );
};

export default NasePravidla;
