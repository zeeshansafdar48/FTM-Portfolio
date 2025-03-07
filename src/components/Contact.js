import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../FormikForm/MyTextInput';
import Results from '../FormikForm/Results';
import MyTextArea from '../FormikForm/MyTextArea';
function Contact() {
  return (
    <div>
      <main>
        <section className="relative overflow-hidden px-2 md:px-8 lg:px-0 lg:relative lg:flex lg:justify-center xl:max-w-screen-2xl xl:mx-auto">
          <div className="lg:px-16">
            <div className="w-full pt-12 flex items-center md:gap-x-16 md:pt-24">
              <h1 className="w-full pl-4 xs:text-xl text-2xl z-10 font-bold -mt-40 md:text-5xl lg:-mt-60 lg:text-6xl">
                Come Say Hello!
              </h1>

              <div className="relative bottom-0 w-60 md:w-96 md:-mb-2 lg:-mb-8 pb-1/2 z-10 lg:w-112">
                <img
                  className="absolute bottom-0 w-full h-full object-contain"
                  src={`${process.env.PUBLIC_URL}/assets/images/contact_landing_hero.png`}
                  alt=""
                />
              </div>

              <img
                className="absolute z-0 left-20 top-20 md:right-40 lg:right-auto lg:left-80 xl:left-auto xl:right-40"
                src={`${process.env.PUBLIC_URL}/assets/images/contact_landing_bubble.png`}
                alt="Green decorative bubble"
              />
            </div>
          </div>
        </section>

        <section className="md:py-16 md:pt-20 md:pb-24 bg-gray-100 md:px-8 lg:px-40 lg:pt-48">
          <div className="relative md:rounded-3xl shadow-lg overflow-hidden bg-white px-2 md:pl-8 lg:pl-12 md:py-2 xl:max-w-screen-xl xl:mx-auto">
            <div className="relative flex flex-col justify-center pt-8 pb-16 md:pt-0 md:pb-0 md:flex-row overflow-hidden z-10">
              <div className="contact_form-first md:px-8 lg:px-20 md:py-12 flex items-center justify-center">
                <div className="px-8 md:px-0 mb-8 md:mb-0">
                  <h2 className="text-sm text-left font-base italic md:normal-case md:font-bold mb-10 md:mb-16 md:text-4xl lg:text-5xl lg:mb-16 text-gray-600">
                    Our Contact Details
                  </h2>

                  <div className="flex items-center mb-10">
                    <div className="p-2 rounded-full mr-6 bg-accent">
                      <svg
                        className="text-gray-800 fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.3649 1.88322C4.30193 1.80222 4.22245 1.73554 4.13173 1.68762C4.04101 1.6397 3.94113 1.61162 3.83873 1.60527C3.73633 1.59891 3.63375 1.61442 3.5378 1.65075C3.44185 1.68709 3.35474 1.74342 3.28223 1.81602L2.1793 2.92002C1.6641 3.43628 1.47423 4.16695 1.6993 4.80802C2.63342 7.46144 4.15295 9.87052 6.14517 11.8566C8.13122 13.8487 10.5403 15.3683 13.1937 16.3024C13.8348 16.5275 14.5654 16.3376 15.0817 15.8224L16.1846 14.7195C16.2572 14.647 16.3136 14.5599 16.3499 14.4639C16.3862 14.368 16.4017 14.2654 16.3954 14.163C16.389 14.0606 16.361 13.9607 16.313 13.87C16.2651 13.7793 16.1984 13.6998 16.1174 13.6368L13.6566 11.7232C13.5701 11.6561 13.4694 11.6095 13.3623 11.587C13.2551 11.5644 13.1442 11.5665 13.038 11.5931L10.702 12.1766C10.3902 12.2545 10.0635 12.2503 9.75375 12.1645C9.44401 12.0788 9.16177 11.9142 8.9345 11.687L6.31477 9.06615C6.08732 8.83899 5.92258 8.5568 5.83659 8.24706C5.75061 7.93732 5.7463 7.61058 5.8241 7.29869L6.40863 4.96268C6.4352 4.85644 6.43729 4.74555 6.41475 4.63838C6.39221 4.53121 6.34562 4.43056 6.2785 4.34402L4.3649 1.88322ZM2.4769 1.01175C2.66356 0.82503 2.88781 0.680157 3.13475 0.58675C3.3817 0.493343 3.64569 0.453539 3.9092 0.469984C4.17271 0.486428 4.4297 0.558742 4.66312 0.682126C4.89654 0.80551 5.10103 0.977139 5.26303 1.18562L7.17663 3.64535C7.52757 4.09655 7.6513 4.68428 7.51263 5.23895L6.92917 7.57495C6.899 7.69594 6.90063 7.82268 6.9339 7.94286C6.96717 8.06303 7.03094 8.17256 7.11903 8.26082L9.73983 10.8816C9.82819 10.9699 9.93791 11.0338 10.0583 11.067C10.1787 11.1003 10.3056 11.1018 10.4268 11.0715L12.7617 10.488C13.0354 10.4196 13.3211 10.4143 13.5972 10.4725C13.8733 10.5307 14.1325 10.6509 14.3553 10.824L16.815 12.7376C17.6993 13.4256 17.7804 14.7323 16.9889 15.5227L15.886 16.6256C15.0966 17.415 13.9169 17.7616 12.8172 17.3744C10.0024 16.384 7.44679 14.7726 5.33983 12.6598C3.22707 10.5531 1.61568 7.99784 0.625166 5.18348C0.239033 4.08482 0.585699 2.90402 1.37503 2.11468L2.47797 1.01175H2.4769Z" />
                      </svg>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="17.0667"
                            height="17.0667"
                            fill="white"
                            transform="translate(0.466797 0.466667)"
                          />
                        </clipPath>
                      </defs>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500">Telephone Number</span>
                      <span className="block font-medium text-gray-800 text-sm md:text-base">
                        (+92) 304 1479340
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center mb-10">
                    <div className="p-2 rounded-full mr-6 bg-accent">
                      <svg
                        className="text-gray-800 fill-current"
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.8571 0H1.14286C0.839753 0 0.549062 0.120408 0.334735 0.334735C0.120408 0.549062 0 0.839753 0 1.14286V10.2857C0 10.5888 0.120408 10.8795 0.334735 11.0938C0.549062 11.3082 0.839753 11.4286 1.14286 11.4286H14.8571C15.1602 11.4286 15.4509 11.3082 15.6653 11.0938C15.8796 10.8795 16 10.5888 16 10.2857V1.14286C16 0.839753 15.8796 0.549062 15.6653 0.334735C15.4509 0.120408 15.1602 0 14.8571 0V0ZM13.6 1.14286L8 5.01714L2.4 1.14286H13.6ZM1.14286 10.2857V1.66286L7.67429 6.18286C7.76994 6.24922 7.88358 6.28478 8 6.28478C8.11642 6.28478 8.23006 6.24922 8.32571 6.18286L14.8571 1.66286V10.2857H1.14286Z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500">Email Address</span>
                      <span className="block font-medium text-gray-800 text-sm md:text-base">
                        zeeshan7826@gmail.com
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center mb-10">
                    <div className="p-2 rounded-full bg-accent mr-6">
                      <svg
                        className="text-gray-800 fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path d="M17.4284 4.87413L15.4017 3.31253C15.264 3.22412 15.1142 3.15601 14.9571 3.11029C14.8006 3.05964 14.6377 3.03148 14.4733 3.02666H8.63987L9.32339 7.29333H14.4733C14.6132 7.29333 14.7881 7.26176 14.9562 7.2097C15.1244 7.15765 15.2865 7.08597 15.4008 7.00832L17.4275 5.44501C17.5427 5.36736 17.5999 5.2641 17.5999 5.16C17.5999 5.05589 17.5427 4.95264 17.4284 4.87413V4.87413ZM7.78654 1.32H6.9332C6.82004 1.32 6.71152 1.36495 6.6315 1.44496C6.55149 1.52498 6.50654 1.6335 6.50654 1.74666V4.73333H3.65982C3.51816 4.73333 3.34408 4.7649 3.17598 4.81781C3.00702 4.86901 2.84574 4.93984 2.73139 5.0192L0.704723 6.5808C0.589523 6.65845 0.533203 6.76256 0.533203 6.86666C0.533203 6.96992 0.589523 7.07317 0.704723 7.15253L2.73139 8.71584C2.84574 8.79349 3.00702 8.86517 3.17598 8.91637C3.34408 8.96842 3.51816 9 3.65982 9H6.50654V16.2533C6.50654 16.3665 6.55149 16.475 6.6315 16.555C6.71152 16.635 6.82004 16.68 6.9332 16.68H7.78654C7.8997 16.68 8.00822 16.635 8.08824 16.555C8.16825 16.475 8.2132 16.3665 8.2132 16.2533V1.74666C8.2132 1.6335 8.16825 1.52498 8.08824 1.44496C8.00822 1.36495 7.8997 1.32 7.78654 1.32V1.32Z" />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="17.0667"
                              height="17.0667"
                              fill="white"
                              transform="translate(0.533203 0.466667)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500">Physical Address</span>
                      <span className="block font-medium text-gray-800 text-sm md:text-base">
                        Lahore, Pakistan
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact_form-second px-4 md:px-8 md:py-12 lg:px-20">
                <div className="flex justify-center">
                  <div>
                    <h2 className="text-xl lg:text-xl font-medium mb-1 text-black md:text-gray-600 text-center md:text-left">
                      Have a Specific Question?
                    </h2>
                    <span className="inline-block w-full text-sm mb-4 text-gray-400 text-center md:text-left">
                      Feel free to send us a message and we’ll get back to you.
                    </span>
                    <Formik
                      initialValues={{
                        firstName: '',
                        email: '',
                        question: ''
                      }}

                      validationSchema={Yup.object({
                        firstName: Yup.string()
                          .max(15, 'Must be 15 characters or less')
                          .required('Required'),
                        email: Yup.string()
                          .email('Invalid email address')
                          .required('Required'),
                        question: Yup.string()
                          .min(15, "Must be 15 characters or less")
                          .required("Required"),
                      })}
                      onSubmit={(values, { setSubmitting, resetForm }) => {
                        setTimeout(() => {
                          setSubmitting(false);
                          resetForm();
                        }, 400);

                        Results.post('./marks.json', values).then(response => {
                        }).catch((error) => {
                          console.log(error)
                        })

                      }}
                    >

                      <div className="mt-6 md:h-full md:flex md:flex-col md:gap-y-6">
                        <Form>
                          <div className="mt-6 md:h-full md:flex md:flex-col md:gap-y-6">
                            <div className="inputMian">
                              <MyTextInput
                                name="firstName"
                                type="text"
                                placeholder="Name..."
                                id="firstName"
                              />
                            </div>
                            
                            <div className="inputMian">
                              <MyTextInput
                                name="email"
                                type="email"
                                placeholder="Email..."
                                id="email"
                              />
                            </div>

                            <div className="inputMian">
                              <MyTextArea
                                name="question"
                                rows="6"
                                placeholder="Your Question"
                              />
                            </div>


                            <div className='form-submit'>
                              <div className="Contact-btn">
                                <button type="submit">Submit</button>
                              </div>
                              <div className="Contact-btn-reset">
                                <button type="reset">Reset</button>
                              </div>
                              <div>
                                {/* <a href="">Other Page</a> */}
                              </div>

                            </div>
                          </div>
                        </Form>
                      </div>
                    </Formik>

                    {/* <form
                      name="contact"
                      data-netlify="true"
                      autoComplete="off"
                      netlify-honeypot="bot-field"
                      className="mt-6 md:h-full md:flex md:flex-col md:gap-y-6"
                    >
                      <p className=" hidden">
                        <label>
                          Don’t fill this out if you’re human: <input name="bot-field" />
                        </label>
                      </p>

                      <div className="border-2 py-3 px-2 mb-4 border-black md:mb-0">
                        <input
                          className="bg-transparent placeholder-black"
                          type="text"
                          id="name"
                          name="name"
                          required
                          pattern="\S+.*"
                          placeholder="Name..."
                        />
                      </div>

                      <div className="border-2 py-3 px-2 mb-4 border-black md:mb-0">
                        <input
                          className="bg-transparent placeholder-black"
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="Email..."
                        />
                      </div>

                      <div className="border-2 py-3 px-2 mb-8 border-black md:mb-0">
                        <textarea
                          className="h-full bg-transparent placeholder-black"
                          name="question"
                          placeholder="Your Question"
                          id="question"
                          cols="30"
                          rows="3"
                          minLength="10"
                          maxLength="100"
                          required
                        ></textarea>
                      </div>

                      <div className="relative flex flex-col md:items-center">
                        <button
                          type="submit"
                          id="submit-button"
                          className="w-full uppercase font-medium bg-accent px-4 py-2 text-black shadow-md"
                        >
                          <span
                            className="
                                    pointer-none text-sm opacity-75"
                          >
                            Get Started
                          </span>
                        </button>

                        <span
                          id="success"
                          className="hidden absolute mt-2 px-4 py-2 font-medium border -bottom-12 rounded-sm italic border-black bg-accent text-black"
                        >
                          We'll be in touch!
                        </span>
                        <span
                          id="error"
                          className="hidden absolute mt-2 px-4 py-2 font-medium border -bottom-12 rounded-sm italic border-black bg-accent2Light text-black"
                        >
                          Please try again.
                        </span>
                      </div>
                    </form> */}
                  </div>
                </div>
              </div>
            </div>

            <img
              className="absolute -bottom-40 -left-40 md:hidden lg:-bottom-40 lg:-right-20"
              src={`${process.env.PUBLIC_URL}/assets/images/accent_bubble-3.png`}
              alt="Green decorative corner bubble"
            />

            <img
              className="hidden md:absolute -top-60 left-60 md:top-auto md:-bottom-20 md:transform md:rotate-12 md:-left-2/3"
              src={`${process.env.PUBLIC_URL}/assets/images/contact_bubble.png`}
              alt="Red decorative corner bubble"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
