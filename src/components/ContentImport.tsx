import React, { useContext } from 'react';
import { dbContext } from '../utils/dbContext';
import Loading from './Loading';
import Zaklad from './Zaklad';

const ContentImport = ({ nazev }: { nazev: string }) => {
  const { stranky } = useContext(dbContext);
  return (
    <>
      {stranky && stranky.length > 0 ? (
        stranky.map((stranka) =>
          stranka.Nazev === nazev ? (
            <div
              key={stranka.Nazev}
              dangerouslySetInnerHTML={{ __html: stranka.Text }}
            />
          ) : null
        )
      ) : (
        <div className='mainOstatni'>
          <Loading />
        </div>
      )}
    </>
  );
};

export default ContentImport;
