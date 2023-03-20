import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousel.css'
import React from 'react'
import {MdFavoriteBorder} from 'react-icons/md'
import makeup2 from '../images/makeup2.jpg'
import makeup3 from '../images/makeup3.jpg'
import makeup4 from '../images/makeup4.jpg'
import makeup5 from '../images/makeup5.jpg'
import makeup6 from '../images/makeup6.jpg'



const Carousell = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='product-all'>
        <h2>لوازم آرایشی</h2>
      <Carousel responsive={responsive}>
            <div className='product'>
                <img className='carousel-img' src={makeup2}/>
                <div><h3 className='product-name'>نام محصول</h3></div>
                <div><h3 className='product-price'><span>تومان</span>20000</h3></div>
                <div className='product-des'><h4>توضیحاتی درباره محصول در این بخش است</h4></div>
                <div className='product-add-to-cart'><button>افزودن به سبد خرید</button><a className='product-favorit'><MdFavoriteBorder/></a></div>
            </div>
            <div className='product'>
                <img className='carousel-img' src={makeup3}/>
                <div><h3 className='product-name'>نام محصول</h3></div>
                <div><h3 className='product-price'><span>تومان</span>20000</h3></div>
                <div className='product-des'><h4>توضیحاتی درباره محصول در این بخش است</h4></div>
                <div className='product-add-to-cart'><button>افزودن به سبد خرید</button><a className='product-favorit'><MdFavoriteBorder/></a></div>
            </div>
            <div className='product'>
                <img className='carousel-img' src={makeup4}/>
                <div><h3 className='product-name'>نام محصول</h3></div>
                <div><h3 className='product-price'><span>تومان</span>20000</h3></div>
                <div className='product-des'><h4>توضیحاتی درباره محصول در این بخش است</h4></div>
                <div className='product-add-to-cart'><button>افزودن به سبد خرید</button><a className='product-favorit'><MdFavoriteBorder/></a></div>
            </div>
            <div className='product'>
                <img className='carousel-img' src={makeup5}/>
                <div><h3 className='product-name'>نام محصول</h3></div>
                <div><h3 className='product-price'><span>تومان</span>20000</h3></div>
                <div className='product-des'><h4>توضیحاتی درباره محصول در این بخش است</h4></div>
                <div className='product-add-to-cart'><button>افزودن به سبد خرید</button><a className='product-favorit'><MdFavoriteBorder/></a></div>
            </div>
            <div className='product'>
                <img className='carousel-img' src={makeup6}/>
                <div><h3 className='product-name'>نام محصول</h3></div>
                <div><h3 className='product-price'><span>تومان</span>20000</h3></div>
                <div className='product-des'><h4>توضیحاتی درباره محصول در این بخش است</h4></div>
                <div className='product-add-to-cart'><button>افزودن به سبد خرید</button><a className='product-favorit'><MdFavoriteBorder/></a></div>
            </div>
        </Carousel>;
    </div>
  )
}

export default Carousell

