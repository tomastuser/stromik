import React from 'react';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Prednasky = () => {
  return (
    <Layout title='Přednášky'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <h1>Přednášky</h1>
          <p>
            Spolek Kavyl, zřizovatel školky pořádá v Líšni také přednášky pro
            rodiče i širokou veřejnost o vzdělávání a výchově.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Prednasky;
