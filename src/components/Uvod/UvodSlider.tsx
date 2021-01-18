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
    <div>
      <Slider {...settings}>
        <CustomSlide
          index={1}
          url={
            'https://res.cloudinary.com/tomastuser/image/upload/v1587555031/lhk1iramcsrxzdl5uf9h.jpg'
          }
        />
        <CustomSlide
          index={2}
          url={
            'https://res.cloudinary.com/tomastuser/image/upload/v1587555043/obxzsaaqzz6u9qj3yma5.jpg'
          }
        />
        <CustomSlide
          index={3}
          url={
            'https://res.cloudinary.com/tomastuser/image/upload/v1587555069/pqnkudhjczxcy0mf9fxa.jpg'
          }
        />
        <CustomSlide
          index={4}
          url={
            'https://res.cloudinary.com/tomastuser/image/upload/v1587577195/wfcjam3i8aakkowl51do.jpg'
          }
        />
        <CustomSlide
          index={5}
          url={
            'https://res.cloudinary.com/tomastuser/image/upload/v1587555050/xypg4yxk6drpn00dysd9.jpg'
          }
        />
        <CustomSlide
          index={6}
          url={
            'https://res.cloudinary.com/tomastuser/image/upload/v1587570666/p46ydhhi7tzf1gqgmqae.jpg'
          }
        />
      </Slider>
      <div className='vitejteCont'>
        <div className='vitejte'>
          Vítejte v Mariánce! <br /> Školce bez zdí a plotů
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
    </div>
  );
}

export default UvodSlider;
