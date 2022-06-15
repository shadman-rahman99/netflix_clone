import React, {useState,  useEffect} from 'react'
import './Nav.css'

function Nav() {
    // initially show is set to false
    const [show, setshow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll',()=>{
            window.scrollY>100 ? setshow(true) :setshow(false);
            
        });
        return ()=>{
            // EvenListener constantly listens to an event
            // so we're removing it in order to let it 
            // activate state show only once.
            window.removeEventListener("scroll");
        }
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo"
            src="https://img.icons8.com/color/100/000000/netflix.png"
            alt="Neflix Logo"/>
            <svg
            className="nav_avatar"
            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="60" height="60"
            viewBox="0 0 226 226"
            style={{fill: "#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" 
            style={{mixBlendMode: "normal"}}><path d="M0,226v-226h226v226z" fill="none"></path>
            <path d="M113,197.75c-46.80613,0 -84.75,-37.94387 -84.75,-84.75v0c0,-46.80613 37.94387,-84.75 84.75,-84.75v0c46.80613,0 84.75,37.94387 84.75,84.75v0c0,46.80613 -37.94387,84.75 -84.75,84.75z" className={`nav_avatar_in ${show && "nav_avatar_alter_in"}`}></path>
            <g className={`nav_avatar_out ${show && "nav_avatar_alter_out"}`} fill="#333333"><path d="M113,2.69258c-60.92121,0 -110.30742,49.38621 -110.30742,110.30742c0,60.92121 49.38621,110.30742 110.30742,110.30742c60.92121,0 110.30742,-49.38621 110.30742,-110.30742c0,-60.92121 -49.38621,-110.30742 -110.30742,-110.30742zM113,47.61395c21.88828,0.00002 39.63221,17.74399 39.6322,39.63227c-0.00002,21.88828 -17.74398,39.63222 -39.63226,39.63221c-21.88828,-0.00001 -39.63223,-17.74396 -39.63223,-39.63224c0.00002,-21.88829 17.744,-39.63224 39.63229,-39.63224zM168.8862,157.30216c-0.00007,11.64426 -9.43959,21.08377 -21.08385,21.08385h-69.60475c-11.64421,-0.0001 -21.08365,-9.43964 -21.08362,-21.08385v0c-0.00002,-11.64421 9.43941,-21.08375 21.08362,-21.08385h69.60475c11.64426,0.00007 21.08377,9.43959 21.08385,21.08385z"></path></g></g></svg>          

        </div>
    )
}

export default Nav
