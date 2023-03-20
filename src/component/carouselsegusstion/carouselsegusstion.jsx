import React from 'react'
import {MdFavoriteBorder} from 'react-icons/md'
import Carousel from 'react-multi-carousel';

import image1 from '../images/clothe1.jpg'
import image2 from '../images/clothe2.jpg'
import image3 from '../images/makeup5.jpg'
import image4 from '../images/makeup6.jpg'



const arouselsegusstion = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
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
        <h2> پیشنهاد های نارون</h2>
      <Carousel responsive={responsive}>
            <div className='product'>
                <img className='carousel-img' src={image1}/>
                <div><h3 className='product-name'>نام محصول</h3></div>
                <div><h3 className='product-price'><span>تومان</span>20000</h3></div>
                <div className='product-des'><h4>توضیحاتی درباره محصول در این بخش است</h4></div>
                <div className='product-add-to-cart'><button>افزودن به سبد خرید</button><a className='product-favorit'><MdFavoriteBorder/></a></div>
            </div>
            <div className='product'>
                <img className='carousel-img' src={image3}/>
                <div><h3 className='product-name'>نام محصول</h3></div>
                <div><h3 className='product-price'><span>تومان</span>20000</h3></div>
                <div className='product-des'><h4>توضیحاتی درباره محصول در این بخش است</h4></div>
                <div className='product-add-to-cart'><button>افزودن به سبد خرید</button><a className='product-favorit'><MdFavoriteBorder/></a></div>
            </div>
            <div className='product'>
                <img className='carousel-img' src={image2}/>
                <div><h3 className='product-name'>نام محصول</h3></div>
                <div><h3 className='product-price'><span>تومان</span>20000</h3></div>
                <div className='product-des'><h4>توضیحاتی درباره محصول در این بخش است</h4></div>
                <div className='product-add-to-cart'><button>افزودن به سبد خرید</button><a className='product-favorit'><MdFavoriteBorder/></a></div>
            </div>
            <div className='product'>
                <img className='carousel-img' src='https://img.freepik.com/free-photo/blue-car-speed-motion-stretch-style_53876-126850.jpg?w=826&t=st=1677861453~exp=1677862053~hmac=5da16033b9b208cee862c498e2a38af0852b9530ae6d532c4d1d3405f7ee2e39'/>
                <div><h3 className='product-name'>نام محصول</h3></div>
                <div><h3 className='product-price'><span>تومان</span>20000</h3></div>
                <div className='product-des'><h4>توضیحاتی درباره محصول در این بخش است</h4></div>
                <div className='product-add-to-cart'><button>افزودن به سبد خرید</button><a className='product-favorit'><MdFavoriteBorder/></a></div>
            </div>
            <div className='product'>
                <img className='carousel-img' src='https://img.freepik.com/free-photo/blue-car-speed-motion-stretch-style_53876-126850.jpg?w=826&t=st=1677861453~exp=1677862053~hmac=5da16033b9b208cee862c498e2a38af0852b9530ae6d532c4d1d3405f7ee2e39'/>
                <div><h3 className='product-name'>نام محصول</h3></div>
                <div><h3 className='product-price'><span>تومان</span>20000</h3></div>
                <div className='product-des'><h4>توضیحاتی درباره محصول در این بخش است</h4></div>
                <div className='product-add-to-cart'><button>افزودن به سبد خرید</button><a className='product-favorit'><MdFavoriteBorder/></a></div>
            </div>
            <div className='product'>
                <img className='carousel-img' src='https://img.freepik.com/free-photo/blue-car-speed-motion-stretch-style_53876-126850.jpg?w=826&t=st=1677861453~exp=1677862053~hmac=5da16033b9b208cee862c498e2a38af0852b9530ae6d532c4d1d3405f7ee2e39'/>
                <div><h3 className='product-name'>نام محصول</h3></div>
                <div><h3 className='product-price'><span>تومان</span>20000</h3></div>
                <div className='product-des'><h4>توضیحاتی درباره محصول در این بخش است</h4></div>
                <div className='product-add-to-cart'><button>افزودن به سبد خرید</button><a className='product-favorit'><MdFavoriteBorder/></a></div>
            </div>
            <div className='product'>
                <img className='carousel-img' src='https://img.freepik.com/free-photo/blue-car-speed-motion-stretch-style_53876-126850.jpg?w=826&t=st=1677861453~exp=1677862053~hmac=5da16033b9b208cee862c498e2a38af0852b9530ae6d532c4d1d3405f7ee2e39'/>
                <div><h3 className='product-name'>نام محصول</h3></div>
                <div><h3 className='product-price'><span>تومان</span>20000</h3></div>
                <div className='product-des'><h4>توضیحاتی درباره محصول در این بخش است</h4></div>
                <div className='product-add-to-cart'><button>افزودن به سبد خرید</button><a className='product-favorit'><MdFavoriteBorder/></a></div>
            </div>
        </Carousel>;
    </div>
  )
}

export default arouselsegusstion
