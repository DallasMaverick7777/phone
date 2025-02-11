
import Link from "next/link";
import Cart from '../Cart'; 

export default async function Header () {
  
    return (
      
        <header className="inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
       
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <div aria-current="page" className="flex items-center">
        <Link href={"/"}><img className="h-7 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" /></Link>
                
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <div aria-current="page" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
                How it works
              </div>
              <div className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
                Pricing
              </div>
            </div>
            <div className="flex items-center justify-end gap-3">
          
                <Link href="" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" >
                  Login
                </Link>
          
             
                <Link href="" className="inline-flex items-center justify-center rounded-xl bg-blue-200 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" >
                  Logout, Kulv
                </Link>

              <Link href="/Cart" className="flex items-center justify-center rounded-xl bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-150 hover:bg-gray-200">
              <img src="https://img.icons8.com/material-outlined/24/000000/shopping-cart.png" alt="Cart" />
            </Link>
            </div>
          </div>
        </div>
      </header>  
    )
}