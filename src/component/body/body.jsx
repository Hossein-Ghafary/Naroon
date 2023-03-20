
import Carouselmakeup from '../carousel-makeup/carouselmakeup'
import Carousell from '../carousel/carousel'
import Carouselsegusstion from '../carouselsegusstion/carouselsegusstion'
import './body.css'
import makeup1 from '../images/makeup1.jpg'
import clothe1 from '../images/clothe1.jpg'


const Body =()=>{
    return(
       <div>
         <div className='body-all' dir='rtl'>
            <h1 className="body-title"> توی <span>نارون</span> چی پیدا میشه ..؟</h1>
            <div>
                <p className='body-p'>توی نارون شما میتونید انواع لباس و لوازم آرایشی بهداشتی رو با قیمت  مناسب پیدا کنید</p>
            </div>
            <div>
                <Carousell/>
            </div>
            <div>
                <h3></h3>
            </div>
            <div>
                <Carouselmakeup/>
            </div>
            <div className='off-home-all'>
                <h1 className='off-home'>تخفیفات نارون</h1>
                <img className='make1' src={makeup1}/>
                <img className='clothe1' src={clothe1}/>
            </div>
            <div>
                <Carouselsegusstion/>
            </div>
        </div>

        <div>
            
        </div>
       </div>
    )
}
export default Body