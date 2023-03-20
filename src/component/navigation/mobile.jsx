
import {AiOutlineMenu} from "react-icons/ai"
import {GrClose} from "react-icons/gr"
import { useState } from "react"
import Humber from "../mobail/humbernav"
import '../navigation/navigation.css'


const Mobail =()=>{
    const [open, setOpen] = useState(false);
    const humbericon = <AiOutlineMenu className="Humbericon"
    onClick={()=>setOpen(!open)}
    />
    const closeicon = <GrClose className="Humbericon"
    onClick={()=>setOpen(!open)}
    />
    
    
    
    
    return(
        <div className="navbar" dir="rtl">
            <nav className="mobail-nav" dir="rtl">
            {open ? closeicon :humbericon}
            {open && <Humber/>}
           </nav>
        </div>
    )
}

export default Mobail;