import { useState } from 'react';
import logo from './assets/images/logo.svg';

function Nav() {
    const [active, setActive] = useState(false);
    
    function handleClick(event){
        if(active == false){
            setActive(true);
            event.target.classList.add('text-black');
            event.target.childNodes[1].classList.add("rotate-180");
            event.target.parentElement.childNodes[1].classList.add("block");
            event.target.parentElement.childNodes[1].classList.remove("hidden");
        } else {
            setActive(false);
            event.target.classList.remove('text-black');
            event.target.childNodes[1].classList.remove("rotate-180");
            event.target.parentElement.childNodes[1].classList.remove("block");
            event.target.parentElement.childNodes[1].classList.add("hidden");
        }
    }

    return (
        <nav className='w-full flex flex-row items-center justify-between font-epilogue text-sm font-medium text-gray-600 p-5'>
            <div className='flex flex-row items-center gap-x-10'>
                <img src={logo} alt="" />
                <ul className='flex flex-row gap-x-10'>
                    <div className="dropdown dropdown-bottom" onClick={handleClick}>
                      <div tabIndex={0} className="cursor-pointer hover:text-black flex flex-row items-center gap-x-2">Features
                      <div><svg xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg></div>
                      </div>
                      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36">
                        <li>
                            <a>
                                <span><svg width="14" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z" fill="#726CEE"/></svg></span>
                                Todo List
                            </a>
                        </li>
                        <li>
                            <a>
                                <span><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z" fill="#4BB1DA"/></svg></span>
                                Calendar
                            </a>
                        </li>
                        <li>
                            <a>
                                <span><svg width="13" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z" fill="#EDD556"/></svg></span>
                                Reminders
                            </a>
                        </li>
                        <li>
                            <a>
                                <span><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z" fill="#8E4CB6"/></svg></span>
                                Planning
                            </a>
                        </li>
                      </ul>
                    </div>

                    <div className="dropdown dropdown-bottom" onClick={handleClick}>
                      <div id='company-button' tabIndex={0} className="cursor-pointer hover:text-black flex flex-row items-center gap-x-2">Company
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
                      </div>
                      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
                        <li><a>History</a></li>
                        <li><a>Our Team</a></li>
                        <li><a>Blog</a></li>
                      </ul>
                    </div>

                    <li className='cursor-pointer hover:text-black'>Careers</li>

                    <li className='cursor-pointer hover:text-black'>About</li>
                </ul>
            </div>
            
            <div className='flex flex-row gap-x-10'>
                <button className='hover:text-black hover:underline'>Login</button>
                <button className='btn btn-outline px-4 h-10 min-h-10 font-medium rounded-xl'>Register</button>
            </div>
        </nav>
    )
}

export default Nav;