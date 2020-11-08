import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';
import Zaklad from '../../components/Zaklad';

const DalsiAktivity = () => {
  return (
    <Layout title='Aktivity Kavylu'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Aktivity Kavylu' />
          <div>
            V zázemí LMŠ Mariánka pořádá spolek Kavyl, její zřizovatel,
            volnočasové kroužky a letní příměstské tábory, v Líšni pak
            přednášky.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DalsiAktivity;
