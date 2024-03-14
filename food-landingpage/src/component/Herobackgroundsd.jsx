import React from 'react'

function Herobackgroundsd() {
  return (
    <section className=" items-center  lg:h-screen dark:bg-gray-800">
    <div className=" pt-[2rem] " data-aos="zoom-in" data-aos-delay={100} data-aos-duration={2000}>
      <h2 className="text-center text-[1.4rem] text-center   text-orange-600 font-mediume leadi sm:text-[1.5rem]">
        𝓛𝓪𝓽𝓮𝓼𝓽 𝓝𝓮𝔀𝓼</h2>
      <p className="mb-6 text-[1.9rem] font-bold tracking-wide text-gray-800 text-center dark:text-white  md:text-3xl lg:text-5xl">
        THE BLOG
      </p>
    </div>
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
          <div className="p-6 mb-0 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
            <div className="relative overflow-hidden rounded h-72">
              <img className="object-cover w-full h-full transition-all hover:scale-110" src="https://preview.colorlib.com/theme/pato/images/blog-01.jpg" alt />
            </div>
            <div className="pt-6">
              <h2 className="mb-4 text-2xl font-semibold leading-9 text-gray-800 dark:text-white">
                BEST PLACES FOR WINE
              </h2>
              <p className="mb-4 text-base leading-7 text-gray-600">
                Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
              </p>
              <div className="flex flex-col text-gray-600 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start hover:text-red-600">
                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:text-gray-600">CONTINUE READING  <i className="ri-arrow-right-line" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
          <div className="p-6 mb-0 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
            <div className="relative overflow-hidden rounded h-72">
              <img className="object-cover w-full h-full transition-all hover:scale-110" src="https://preview.colorlib.com/theme/pato/images/blog-02.jpg" alt />
            </div>
            <div className="pt-6">
              <h2 className="mb-4 text-2xl font-semibold leading-9 text-gray-800 dark:text-white">
                STYLE THE WEDDING PARTY       
              </h2>
              <p className="mb-4 text-base leading-7 text-gray-600">
                Duis elementum, risus sit amet lobortis nunc justo condimentum ligula, vitae feugiat
              </p>
              <div className="flex flex-col text-gray-600 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start hover:text-red-600">
                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:text-gray-600">CONTINUE READING <i className="ri-arrow-right-line" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
          <div className="p-6 mb-0 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
            <div className="relative overflow-hidden rounded h-72">
              <img className="object-cover w-full h-full transition-all hover:scale-110" src="https://preview.colorlib.com/theme/pato/images/blog-03.jpg" alt />
            </div>
            <div className="pt-6">
              <h2 className="mb-4 text-2xl font-semibold leading-9 text-gray-800 dark:text-white">
                EGGS AND CHEESE
              </h2>
              <p className="mb-4 text-base leading-7 text-gray-600">
                Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
              </p>
              <div className="flex flex-col text-gray-600 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start hover:text-red-600">
                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:text-gray-600">CONTINUE READING  <i className="ri-arrow-right-line" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Herobackgroundsd