import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';


function Experiences() {

  const location = useLocation();
  const isHomePage = location?.pathname === '/' ? true : false;

  return (
    <section
      id="experience"
      className="px-4 pt-20 pb-24 bg-gray-100 md:px-20 lg:px-40"
    >
      <div className="relative rounded-3xl py-8 shadow-lg overflow-hidden bg-white md:py-16 xl:max-w-screen-xl xl:mx-auto">
        <div className="relative text-center px-2">
          <h2 className="relative text-2xl font-bold z-10 md:text-3xl lg:text-4xl">
            Several Projects I Enjoyed
          </h2>
          <p className="relative text-sm mx-auto mt-5 z-10 lg:mt-6 lg:text-sm">
            Here is a list of some projects, that really help my clients to grow their business.
          </p>

          <img
            className="absolute w-32 top-0 left-2/3 lg:transform lg:scale-175"
            src={`${process.env.PUBLIC_URL}/assets/images/accent_bubble-1.png`}
            alt="A green decorative bubble."
          />
        </div>

        <div className="px-6 py-4 md:mx-8 lg:mx-16">
          <div className="py-12 md:pt-16 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:h-96 lg:py-0 lg:mt-24 lg:mb-32">
            <div className="lg:relative lg:pb-2/3">
              <img
                className="rounded-2xl shadow-lg md:w-full lg:h-full lg:object-cover lg:object-top lg:absolute"
                src={`${process.env.PUBLIC_URL}/assets/images/project-starzplay.png`}
                alt="StarzPlay"
              />
            </div>

            <div className="lg:h-full lg:flex lg:items-center">
              <div className="lg:grid lg:auto-rows-min">
                <div className="inline-block relative">
                  <div className="lg:relative lg:inline-block">
                    <h3 className="relative z-10 font-bold pt-8 md:text-xl">StarzPlay</h3>
                    <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
                  </div>
                </div>

                <p className="py-4 text-sm leading-relaxed md:text-base lg:py-6">
                STARZ PLAY is a subscription video on demand (SVOD) service that streams thousands of blockbuster Hollywood movies, TV shows, documentaries, kid's entertainment and same-day-as-the-US series – plus dedicated Arabic and Bollywood content – to 19 countries across the Middle East and North Africa.
                </p>

                <br className="lg:hidden" />

                <a
                  href="https://starzplay.com/landing"
                  target={"_blank"}
                  className="inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md ml-auto lg:ml-0 lg:w-max"
                >
                  <span className="text-sm opacity-75">Visit Project</span>
                </a>
              </div>
            </div>
          </div>

          <div className="py-12 md:pt-16 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:h-96 lg:py-0 lg:my-32">
            <div className="lg:relative lg:pb-2/3 lg:col-start-2">
              <img
                className="rounded-2xl shadow-lg md:w-full lg:h-full lg:object-cover lg:object-top lg:absolute z-10"
                src={`${process.env.PUBLIC_URL}/assets/images/project-mattressfirm.png`}
                alt="Mattressfirm"
              />
              <img
                className="hidden z-0 lg:inline-block lg:absolute lg:right-20 lg:transform lg:scale-105"
                src={`${process.env.PUBLIC_URL}/assets/images/accent2_bubble.png`}
                alt="Red decorative bubble."
              />
            </div>

            <div className="lg:h-full lg:flex lg:items-center lg:row-start-1">
              <div className="lg:grid lg:auto-rows-min">
                <div className="inline-block relative">
                  <div className="lg:relative lg:inline-block">
                    <h3 className="relative z-10 font-bold pt-8 md:text-xl">Mattressfirm</h3>
                    <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
                  </div>
                </div>

                <p className="py-4 text-sm leading-relaxed md:text-base lg:py-6">
                  MattressFirm.com is wholly owned and operated by Mattress Firm, Inc., 10201 S. Main St. Houston, TX <br />
                  An E-commerce websites for House hold things like Mattresses, Bedding, Furniture & More.
                </p>

                <br className="lg:hidden" />

                <a
                  href="https://www.mattressfirm.com/"
                  target={"_blank"}
                  className="inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md ml-auto lg:ml-0 lg:w-max"
                >
                  <span className="text-sm opacity-75">Visit Project</span>
                </a>
              </div>
            </div>
          </div>

          <div className="py-12 md:pt-16 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:h-96 lg:py-0 lg:mt-24 lg:mb-32">
            <div className="lg:relative lg:pb-2/3">
              <img
                className="rounded-2xl shadow-lg md:w-full lg:h-full lg:object-cover lg:object-top lg:absolute"
                src={`${process.env.PUBLIC_URL}/assets/images/project-1.png`}
                alt="Mostly Paws"
              />
            </div>

            <div className="lg:h-full lg:flex lg:items-center">
              <div className="lg:grid lg:auto-rows-min">
                <div className="inline-block relative">
                  <div className="lg:relative lg:inline-block">
                    <h3 className="relative z-10 font-bold pt-8 md:text-xl">Mostly Paws</h3>
                    <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
                  </div>
                </div>

                <p className="py-4 text-sm leading-relaxed md:text-base lg:py-6">
                  This is a single page static website for showing love with dogs and 
                  are committed to mission to raise funds for animals in need.
                  Mainly for making new cool stuff for pet lovers. Also take pride in creating cool merchandise for dog lovers, 
                  Always wanted to do something in return for our furry friends.
                </p>

                <br className="lg:hidden" />

                <a
                  href="https://mostly-paws.netlify.app/"
                  target={"_blank"}
                  className="inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md ml-auto lg:ml-0 lg:w-max"
                >
                  <span className="text-sm opacity-75">Visit Project</span>
                </a>
              </div>
            </div>
          </div>

          {!isHomePage && <Fragment>
            <div className="py-12 md:pt-16 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:h-96 lg:py-0 lg:my-32">
            <div className="lg:relative lg:pb-2/3 lg:col-start-2">
              <img
                className="rounded-2xl shadow-lg md:w-full lg:h-full lg:object-cover lg:object-top lg:absolute z-10"
                src={`${process.env.PUBLIC_URL}/assets/images/project-2.png`}
                alt="Lucid Land"
              />
              <img
                className="hidden z-0 lg:inline-block lg:absolute lg:right-20 lg:transform lg:scale-105"
                src={`${process.env.PUBLIC_URL}/assets/images/accent2_bubble.png`}
                alt="Red decorative bubble."
              />
            </div>

            <div className="lg:h-full lg:flex lg:items-center lg:row-start-1">
              <div className="lg:grid lg:auto-rows-min">
                <div className="inline-block relative">
                  <div className="lg:relative lg:inline-block">
                    <h3 className="relative z-10 font-bold pt-8 md:text-xl">Lucid Land</h3>
                    <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
                  </div>
                </div>

                <p className="py-4 text-sm leading-relaxed md:text-base lg:py-6">
                  A simple static website of play to earn game. Lucid Lands is the first decentralized NFT play-to-earn game on BSC network 
                  that integrates both 3D-animated gaming NFT and 2D unique computer-generated collective NFT marketplace.
                  Each unique NFT Heroes will hold its intrinsic value complimenting the rarity, which can be traded in the marketplace.
                </p>

                <br className="lg:hidden" />

                <a
                  href="https://lucid-land.netlify.app/"
                  target={"_blank"}
                  className="inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md ml-auto lg:ml-0 lg:w-max"
                >
                  <span className="text-sm opacity-75">Visit Project</span>
                </a>
              </div>
            </div>
          </div>

          <div className="py-12 md:pt-16 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:h-96 lg:py-0 lg:my-32">
            <div className="lg:relative lg:pb-2/3">
              <img
                className="rounded-2xl shadow-lg md:w-full lg:h-full lg:object-cover lg:object-top lg:absolute"
                src={`${process.env.PUBLIC_URL}/assets/images/project-3.png`}
                alt="Agent Optix"
              />
            </div>

            <div className="lg:h-full lg:flex lg:items-center">
              <div className="lg:grid lg:auto-rows-min">
                <div className="inline-block relative">
                  <div className="lg:relative lg:inline-block">
                    <h3 className="relative z-10 font-bold pt-8 md:text-xl">Agent Optix</h3>
                    <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
                  </div>
                </div>

                <p className="py-4 text-sm leading-relaxed md:text-base lg:py-6">
                  A full service digital marketing agency located in Knoxville, TN. This application create custom, digital content that engages audiences and instigates growth.
                </p>

                <br className="lg:hidden" />

                <a
                  href="https://agentoptix.netlify.app/"
                  target={"_blank"}
                  className="inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md ml-auto lg:ml-0 lg:w-max"
                >
                  <span className="text-sm opacity-75">Visit Project</span>
                </a>
              </div>
            </div>
          </div>
          </Fragment>}
          
        </div>

        <img
          className="absolute -bottom-40 -right-20"
          src={`${process.env.PUBLIC_URL}/assets/images/accent_bubble-3.png`}
          alt="Green decorative corner bubble"
        />
      </div>
    </section>

  );
}

export default Experiences;
