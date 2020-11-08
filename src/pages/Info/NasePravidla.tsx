import React from 'react';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const NasePravidla = () => {
  return (
    <Layout title='Naše pravidla'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Naše pravidla' />
          <ol>
            <li>
              Děti si do klubu nenosí žádné sladkosti, sladké čaje a hračky
            </li>
            <li>Děti přichází do klubu zdravé</li>
            <li>
              Děti mají dostatečné vybavení do přírody, s ohledem na roční dobu
            </li>
            <li>
              Rodiče jsou v době pobytu dítěte v klubu na telefonu pro případ
              zhoršení zdravotního stavu, úrazu, změny místa vyzvednutí dětí
              apod.
            </li>
            <li>Do dotazníku rodiče vyplní zdravotní stav dítěte</li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default NasePravidla;
