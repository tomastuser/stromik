import React, { useEffect, useRef } from 'react';

const DialogPopup = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    setTimeout(() => {
      dialogRef.current?.showModal();
    }, 1000);
  }, []);
  return (
    <dialog
      ref={dialogRef}
      style={{
        padding: '48px 60px',
        maxWidth: '800px',
        textAlign: 'left',
        margin: 'auto',
      }}
    >
      <h1 style={{ marginBottom: '48px', textAlign: 'center' }}>
        Zápis&nbsp; na &nbsp;rok &nbsp;2024/25
      </h1>
      <p style={{ marginBottom: '24px' }}>
        Nabízíme volná místa pro nové kamarády v příštím školním roce!
      </p>
      <p>
        Zápis se koná <b>14. května 2024 od 14:30 – 16:00 h.</b>
      </p>
      <p>
        Stáhněte si{' '}
        <a
          href='https://stromik.cz/files/zadost_Stromik.pdf'
          target='_blank'
          rel='noopener'
        >
          Žádost o přijetí
        </a>
        , nechte si ji potvrdit lékařem a doručte nám ji osobně na zápis 14.
        května, nebo <b>datovou schránkou</b> (y83gybs) <b>do 16. května.</b>
      </p>
      <p>
        Více{' '}
        <a href='https://stromik.cz/info/zapis' target='_blank' rel='noopener'>
          zde
        </a>
        .
      </p>
      <p style={{ marginBottom: '24px' }}>
        Kontakt: 604 523 160 - Jindra Klemešová, koordinátorka
      </p>
      <p>Těšíme se na vás!</p>

      <button
        className='aktualitaButton button'
        onClick={() => dialogRef.current?.close()}
        style={{
          display: 'block',
          margin: 'auto',
          marginTop: '48px',
          width: '300px',
        }}
        type='button'
      >
        Zavřít
      </button>
    </dialog>
  );
};

export default DialogPopup;
