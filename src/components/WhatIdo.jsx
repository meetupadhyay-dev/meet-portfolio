import React from 'react';

const WhatIDo = () => {
  return (
    <section className="w-screen h-full m-auto bg-gray-900  ">
      <div className="xl:w-[70%] lg:w-[80%] md:w-[90%] m-auto md:px-0 px-4 md:my-10 bg-[#111111] dark:bg-white rounded-xl overflow-hidden relative">

        {/* Vertical Label */}
        <div className="absolute left-[35%] -top-6 md:-left-20 md:top-8 md:rotate-[-90deg] text-xs tracking-widest text-[#58A6FF]">
          <div className="flex items-center justify-center gap-2">
            <div className="w-14 h-[1px] bg-[#58A6FF]" />
            <p className="uppercase font-mono">Services</p>
          </div>
        </div>

        {/* Content */}
        <section className="w-full h-full flex flex-col justify-center md:py-20 py-10 md:px-20 px-2">
          {/* Heading */}
          <div className="w-fit mb-6">
            <h2 className="text-3xl font-bold text-white dark:text-black pb-2">
              What I Do
            </h2>
            <div className="rounded-t-full border-[1px] border-gray-500 dark:border-gray-400 overflow-hidden">
              <hr className="border-[3px] border-green-400 dark:border-green-600 w-[20%]" />
            </div>
          </div>

          {/* Grid Items */}
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6">
            {[
              {
                icon: 'code-slash-outline',
                title: 'Web Development',
                desc: 'Crafting responsive and intuitive websites tailored to your unique needs using cutting-edge technologies.',
              },
              {
                icon: 'browsers-outline',
                title: 'UI/UX Design',
                desc: 'Creating visually appealing and user-centric designs that enhance user experiences and engagement.',
              },
              {
                icon: 'archive-outline',
                title: 'Custom CMS Solutions',
                desc: 'Building reusable and efficient CMS APIs to simplify website management and scalability.',
              },
              {
                icon: 'phone-portrait-outline',
                title: 'Mobile App Dev\'t',
                desc: 'Designing and developing user-friendly mobile applications for iOS and Android.',
              },
              {
                icon: 'bag-check-outline',
                title: 'E-commerce Development',
                desc: 'Creating robust platforms to elevate your online business presence.',
              },
              {
                icon: 'swap-horizontal-outline',
                title: 'API Integration',
                desc: 'Seamlessly connecting systems to enhance functionality and performance.',
              },
            ].map((service, idx) => (
              <div key={idx} className="flex sm:gap-4 gap-2">
                <ion-icon
                  className="sm:text-5xl text-3xl text-green-400 dark:text-green-600"
                  name={service.icon}
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-white dark:text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 dark:text-gray-700">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhatIDo;
