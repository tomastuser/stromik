import React from 'react';
import Slider from 'react-slick';
import sipkaB from '../../public/sipkaB.png';

///import 'slick-carousel/slick/slick.css';
///import 'slick-carousel/slick/slick-theme.css';

interface CustomSlideIF {
  index: number;
  url: string;
}

const CustomSlide = ({ index, url, ...props }: CustomSlideIF) => {
  return (
    <div className='uvodSlider' {...props}>
      <img src={url} alt=''></img>
    </div>
  );
};

function UvodSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: []) => (
      <div
        style={{
          padding: '10px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <>
      <Slider {...settings}>
        <CustomSlide index={1} url={'http://new.stromik.cz/images/trava.jpg'} />
        <CustomSlide index={2} url={'http://new.stromik.cz/images/repa.jpg'} />
        <CustomSlide index={3} url={'http://new.stromik.cz/images/libor.jpg'} />
        <CustomSlide index={4} url={'http://new.stromik.cz/images/sona.jpg'} />
        <CustomSlide
          index={5}
          url={'http://new.stromik.cz/images/masopust.jpg'}
        />
        <CustomSlide index={6} url={'http://new.stromik.cz/images/holky.jpg'} />
      </Slider>
      <div className='vitejteCont'>
        <div className='vitejte'>
          Vítejte ve Stromíku! <br /> Školce bez zdí a plotů
        </div>
      </div>
      <div className='sipkaCont'>
        <div
          className='sipka'
          onClick={() => window.scrollTo(0, window.innerHeight * 0.9)}
          onKeyDown={() => window.scrollTo(0, window.innerHeight * 0.9)}
          role='button'
          tabIndex={0}
        >
          <img alt='sipka' src={sipkaB} />
        </div>
      </div>
    </>
  );
}

export default UvodSlider;
