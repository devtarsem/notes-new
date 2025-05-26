import './../util/util.css'
import './../styles/main.css'
import { Link } from 'react-router';
import { useState } from 'react';

function Menu(){

    const [count, setCount] = useState(0);

    function notes(){
        setCount(count=> 1)
    }
    function practice(){
        setCount(count=> 2)
    }
    function learn(){
        setCount(count=> 3)
    }
    function Premium(){
        setCount(count=> 4)
    }
    function profile(){
        setCount(count=> 5)
    }

    return(
        <div className="menu_new flex flex-1 pad16">
            <Link onClick={notes} className='menulink flex flex-dir flex-2 gap4'>
                <svg className={count == 1 ? "iconsvg colorxtra" : "iconsvg"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.75458 14.716L3.27222 16.6479C3.87647 18.9029 4.17859 20.0305 4.86351 20.7618C5.40432 21.3392 6.10421 21.7433 6.87466 21.9229C7.85044 22.1504 8.97798 21.8483 11.2331 21.244C13.4881 20.6398 14.6157 20.3377 15.347 19.6528C15.4077 19.5959 15.4664 19.5373 15.5233 19.477C15.1891 19.449 14.852 19.3952 14.5094 19.3271C13.8133 19.1887 12.9862 18.967 12.008 18.7049L11.9012 18.6763L11.8764 18.6697C10.8121 18.3845 9.92281 18.1457 9.21277 17.8892C8.46607 17.6195 7.7876 17.287 7.21148 16.7474C6.41753 16.0038 5.86193 15.0414 5.61491 13.982C5.43567 13.2133 5.48691 12.4594 5.62666 11.6779C5.76058 10.929 6.00109 10.0315 6.28926 8.95613L6.28926 8.95611L6.82365 6.96174L6.84245 6.8916C4.9219 7.40896 3.91101 7.71505 3.23687 8.34646C2.65945 8.88726 2.25537 9.58715 2.07573 10.3576C1.84821 11.3334 2.15033 12.4609 2.75458 14.716Z" fill="#01333225"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8293 10.7154L20.3116 12.6473C19.7074 14.9024 19.4052 16.0299 18.7203 16.7612C18.1795 17.3386 17.4796 17.7427 16.7092 17.9223C16.6129 17.9448 16.5152 17.9621 16.415 17.9744C15.4999 18.0873 14.3834 17.7881 12.3508 17.2435C10.0957 16.6392 8.96815 16.3371 8.23687 15.6522C7.65945 15.1114 7.25537 14.4115 7.07573 13.641C6.84821 12.6652 7.15033 11.5377 7.75458 9.28263L8.27222 7.35077C8.3591 7.02654 8.43979 6.7254 8.51621 6.44561C8.97128 4.77957 9.27709 3.86298 9.86351 3.23687C10.4043 2.65945 11.1042 2.25537 11.8747 2.07573C12.8504 1.84821 13.978 2.15033 16.2331 2.75458C18.4881 3.35883 19.6157 3.66095 20.347 4.34587C20.9244 4.88668 21.3285 5.58657 21.5081 6.35703C21.7356 7.3328 21.4335 8.46034 20.8293 10.7154ZM11.0524 9.80589C11.1596 9.40579 11.5709 9.16835 11.971 9.27556L16.8006 10.5697C17.2007 10.6769 17.4381 11.0881 17.3309 11.4882C17.2237 11.8883 16.8125 12.1257 16.4124 12.0185L11.5827 10.7244C11.1826 10.6172 10.9452 10.206 11.0524 9.80589ZM10.2756 12.7033C10.3828 12.3032 10.794 12.0658 11.1941 12.173L14.0919 12.9495C14.492 13.0567 14.7294 13.4679 14.6222 13.868C14.515 14.2681 14.1038 14.5056 13.7037 14.3984L10.8059 13.6219C10.4058 13.5147 10.1683 13.1034 10.2756 12.7033Z" ></path> </g></svg>
                <p className={count == 1 ? "menuitem menuItemColor" : "menuitem"}>Notes</p>
            </Link>
            <Link onClick={practice} className='menulink flex flex-dir flex-2 gap4'>
                <svg className={count == 2 ? "iconsvg colorxtra" : "iconsvg"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.16923 2.00234C8.11301 2.00078 8.0566 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 7.9434 13.9992 7.88699 13.9977 7.83077L15.7642 6.06422C15.9182 6.68407 16 7.33249 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C8.66751 0 9.31593 0.0817526 9.93578 0.235791L8.16923 2.00234Z" ></path> <path d="M4 7.99996C4 6.13612 5.27477 4.57002 7 4.12598V6.26752C6.4022 6.61333 6 7.25968 6 7.99996C6 9.10453 6.89543 9.99996 8 9.99996C8.74028 9.99996 9.38663 9.59776 9.73244 8.99996H11.874C11.4299 10.7252 9.86384 12 8 12C5.79086 12 4 10.2091 4 7.99996Z" ></path> <path d="M14 2L13 0L10 3V4.58579L7.79289 6.79289L9.20711 8.20711L11.4142 6H13L16 3L14 2Z" ></path> </g></svg>
                <p className={count == 2 ? "menuitem menuItemColor" : "menuitem"}>Practice</p>
            </Link>
            <Link onClick={learn} className='menulink flex flex-dir flex-2 gap4'>
                <svg className={count == 3 ? "iconsvg colorxtra" : "iconsvg"} version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <path class="sharpcorners_een" d="M4,23h24V5H4V23z M19,11h5v1h-5V11z M19,13h5v1h-5V13z M19,15h5v1h-5V15z M8,11h5v1H8V11z M8,13h5 v1H8V13z M8,15h5v1H8V15z M31,6v20H18v1h-4v-1H1V6h2v18h26V6H31z"></path> </g></svg>
                <p className={count == 3 ? "menuitem menuItemColor" : "menuitem"}>Learn</p>
            </Link>
            <Link onClick={Premium} className='menulink flex flex-dir flex-2 gap4'>
                <svg className={count == 4 ? "iconsvg colorxtra" : "iconsvg"} viewBox="0 -5.47 56.254 56.254" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="diamond_premium" data-name="diamond premium" d="M494.211,354.161l1.174-1.366H482.552L469.8,367.5h12.94Zm-8.4,13.336H510.05l-6.589-7.664-5.528-6.429-8.354,9.713Zm-15.856,2.329,24.1,25.356L482.53,369.826Zm40.824,0h-2.1l-8.829,0H485.083l12.774,28.1.082.178,12.17-26.8Zm-8.94,25.322,24.057-25.32H513.337Zm24.215-27.65L513.3,352.8H500.478l12.642,14.7Z" transform="translate(-469.802 -352.795)"></path> </g></svg>               
                <p className={count == 4 ? "menuitem menuItemColor" : "menuitem"}>Premium</p>
            </Link>
            <Link onClick={profile} className='menulink flex flex-dir flex-2 gap4'>
                <svg className={count == 5 ? "iconsvg colorxtra" : "iconsvg"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" ></path></g></svg>
                <p className={count == 5 ? "menuitem menuItemColor" : "menuitem"}>profile</p>
            </Link>

        </div>
    )
}

export default Menu;