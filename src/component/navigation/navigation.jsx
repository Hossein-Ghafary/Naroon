import "../navigation/navigation.css"
import {BsCart2} from 'react-icons/bs'
import {MdFavoriteBorder} from 'react-icons/md'

const Navigation = ()=>{
    return(
        <div dir="rtl">
            <section className="Navigation">
               <div className="Nav">
                    <ul>
                        <li><a href="#">خانه</a></li>
                        <li><a href="#">محصولات</a></li>
                        <li><a href="#">علاقه مندی ها</a></li>
                        <li><a href="#">درباره هوشنگ</a></li>
                        <li><a href="#">سبد خرید</a></li>
                        <div className="search">
                            <input placeholder="جستجو ..."/>
                        </div>
                        <a href="#"><BsCart2 className="cart"/></a>
                        <a href="#"><MdFavoriteBorder className="favorit"/></a>
                        <h3 className="logo">نارون</h3>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Navigation;