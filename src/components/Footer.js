import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Footer() {

  const location = useLocation();
  const isHomePage = location?.pathname === '/' ? true : false;

  return (
    <div>
      <footer className="relative z-20 flex flex-col items-center justify-between px-4 pt-6 bg-white md:pt-4 lg:bg-gray-100 lg:shadow-inner">
        <div className="text-sm list-none w-full max-w-screen-xl md:flex md:flex-row md:justify-between md:items-center md:pb-8 gap-x-8 opacity-75 lg:gap-x-16">
          <div className="md:mt-2 mb-4 lg:mt-9 lg:mb-8">
            {/* <Link to="/">
              <svg
                className="w-16 lg:w-24"
                width="83"
                height="29"
                viewBox="0 0 83 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>FTM Logo</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.3235 16.8328C29.1582 19.1573 29.0137 22.0352 27.0771 23.3267C25.0095 24.7056 22.1351 22.5016 19.7555 23.2137C17.7533 23.8129 16.9586 27.0745 14.8716 26.9794C12.8414 26.8869 12.0663 24.178 10.5749 22.7954C9.24317 21.561 7.70495 20.6661 6.54936 19.2648C5.04642 17.4423 3.09917 15.7305 2.81316 13.3833C2.51302 10.9201 3.36085 8.2717 4.98102 6.39379C6.57907 4.54153 9.21741 4.19227 11.4989 3.31587C13.7168 2.46388 13.4649 2.04997 15.661 2.9545C18.0017 3.91857 19.5183 6.88348 22.5528 7.12233C24.164 8.60452 26.6463 8.59899 28.0023 10.3186C29.3969 12.087 29.4834 14.584 29.3235 16.8328Z"
                  fill="black"
                  fillOpacity="0.42"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.1993 15.5102C27.034 17.8347 26.8895 20.7127 24.9529 22.0042C22.8853 23.3831 20.0109 21.179 17.6313 21.8911C15.6291 22.4903 14.8345 25.7519 12.7474 25.6568C10.7172 25.5643 9.94209 22.8554 8.45067 21.4729C7.11898 20.2384 5.58075 19.3436 4.42517 17.9422C2.92223 16.1197 2.15777 13.3114 1.87177 10.9642C1.57162 8.50096 2.805 7.67767 4.42517 5.79976C6.02321 3.94749 7.09322 2.86969 9.37468 1.99329C11.5926 1.14131 13.9364 1.08875 16.1326 1.99329C18.4733 2.95735 18.5646 4.08493 20.4286 5.79975C22.0398 7.28194 24.5221 7.27642 25.8781 8.99599C27.2727 10.7644 27.3592 13.2614 27.1993 15.5102Z"
                  fill="#0CFAB7"
                />
                <path
                  d="M45.0293 16.3359H39.502V22H36.0742V7.78125H45.5859V10.4277H39.502V13.6992H45.0293V16.3359ZM61.3691 10.4277H57.1016V22H53.6738V10.4277H49.4844V7.78125H61.3691V10.4277ZM70.3262 7.78125L73.5 17.6738L76.6641 7.78125H81.1758V22H77.7383V18.6797L78.0703 11.8828L74.6328 22H72.3672L68.9199 11.873L69.252 18.6797V22H65.8242V7.78125H70.3262Z"
                  fill="#777676"
                />
              </svg>
            </Link> */}
          <Link to="/" className="inline-block h-full w-full">
            {/* <svg
              className="w-24 xl:w-32"
              width="83"
              height="29"
              viewBox="0 0 83 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>FTM Logo</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.3235 16.8328C29.1582 19.1573 29.0137 22.0352 27.0771 23.3267C25.0095 24.7056 22.1351 22.5016 19.7555 23.2137C17.7533 23.8129 16.9586 27.0745 14.8716 26.9794C12.8414 26.8869 12.0663 24.178 10.5749 22.7954C9.24317 21.561 7.70495 20.6661 6.54936 19.2648C5.04642 17.4423 3.09917 15.7305 2.81316 13.3833C2.51302 10.9201 3.36085 8.2717 4.98102 6.39379C6.57907 4.54153 9.21741 4.19227 11.4989 3.31587C13.7168 2.46388 13.4649 2.04997 15.661 2.9545C18.0017 3.91857 19.5183 6.88348 22.5528 7.12233C24.164 8.60452 26.6463 8.59899 28.0023 10.3186C29.3969 12.087 29.4834 14.584 29.3235 16.8328Z"
                fill="black"
                fillOpacity="0.42"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.1993 15.5102C27.034 17.8347 26.8895 20.7127 24.9529 22.0042C22.8853 23.3831 20.0109 21.179 17.6313 21.8911C15.6291 22.4903 14.8345 25.7519 12.7474 25.6568C10.7172 25.5643 9.94209 22.8554 8.45067 21.4729C7.11898 20.2384 5.58075 19.3436 4.42517 17.9422C2.92223 16.1197 2.15777 13.3114 1.87177 10.9642C1.57162 8.50096 2.805 7.67767 4.42517 5.79976C6.02321 3.94749 7.09322 2.86969 9.37468 1.99329C11.5926 1.14131 13.9364 1.08875 16.1326 1.99329C18.4733 2.95735 18.5646 4.08493 20.4286 5.79975C22.0398 7.28194 24.5221 7.27642 25.8781 8.99599C27.2727 10.7644 27.3592 13.2614 27.1993 15.5102Z"
                fill="#0CFAB7"
              />
              <path
                d="M45.0293 16.3359H39.502V22H36.0742V7.78125H45.5859V10.4277H39.502V13.6992H45.0293V16.3359ZM61.3691 10.4277H57.1016V22H53.6738V10.4277H49.4844V7.78125H61.3691V10.4277ZM70.3262 7.78125L73.5 17.6738L76.6641 7.78125H81.1758V22H77.7383V18.6797L78.0703 11.8828L74.6328 22H72.3672L68.9199 11.873L69.252 18.6797V22H65.8242V7.78125H70.3262Z"
                fill="#777676"
              />
            </svg> */}
            <img
                width="102"
                height="40"
                src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
                alt="Facebook"
              />
          </Link>
          </div>

          <div className="flex flex-col justify-left max-w-max gap-y-2 md:gap-y-0 md:flex-row md:gap-x-12">
            <div className="inline-block relative">
              {/* <li className="relative z-10 text-sm font-medium lg:text-base lg:font-normal lg:hover:underline">
                <Link to="/services" className="inline-block h-full w-full">
                  Services
                </Link>
              </li> */}
              <div className="absolute bottom-0 h-1 w-full bg-accent hidden md:absolute lg:hidden"></div>
            </div>

            <div className="inline-block relative">
              <li className="relative z-10 text-sm font-medium lg:text-base lg:font-normal lg:hover:underline">
                <Link to="/portfolio" className="inline-block h-full w-full">
                Portfolio
                </Link>
              </li>
              <div className="absolute bottom-0 h-1 w-full bg-accent hidden md:absolute lg:hidden"></div>
            </div>


            {isHomePage && (
              <div className="inline-block relative">
                <li className="relative z-10 text-sm font-medium lg:text-base lg:font-normal lg:hover:underline">
                  <a href="#testimonials" className="inline-block h-full w-full">
                    Testimonials
                  </a>    
                </li>
                <div className="absolute bottom-0 h-1 w-full bg-accent hidden md:absolute lg:hidden"></div>
              </div>
            )}
            
            <div className="inline-block relative">
              <li className="relative z-10 text-sm font-medium lg:text-base lg:font-normal lg:hover:underline">
                <Link to="/contact" className="inline-block h-full w-full">
                  Contact
                </Link>
              </li>
              <div className="absolute bottom-0 h-1 w-full bg-accent hidden md:absolute lg:hidden"></div>
            </div>
          </div>

          <div className="flex opacity-75 mt-2 mb-2 justify-end md:gap-x-2 md:mt-0 md:mb-0">

            <Link to="#" className="p-2 inline-block md:pb-0 md:pr-0">
              <img
                width="24"
                height="24"
                src={`${process.env.PUBLIC_URL}/assets/icons/facebook.svg`}
                alt="Facebook"
              />
            </Link>
            <Link to="#" className="p-2 inline-block md:pb-0 md:pr-0">
              <img
                width="24"
                height="24"
                src={`${process.env.PUBLIC_URL}/assets/icons/twitter.svg`}
                alt="twitter"
              />
            </Link>
            <Link to="#" className="p-2 inline-block md:pb-0 md:pr-0">
              <img
                width="24"
                height="24"
                src={`${process.env.PUBLIC_URL}/assets/icons/linkedIn.svg`}
                alt="linkedIn"
              />
            </Link>
            <Link to="#" className="p-2 inline-block md:pb-0 md:pr-0">
              <img
                width="24"
                height="24"
                src={`${process.env.PUBLIC_URL}/assets/icons/gmail.svg`}
                alt="gmail"
              />
            </Link>
          </div>
        </div>

      </footer>
    </div>
  );
}

export default Footer;
