import React from "react";

const Section = ({ children, title, className, logo, subtitle }: any) => {
  return (
    <section className={"bg-gray-50 dark:bg-gray-900 py-2 " + className}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex justify-center">
              {logo && (
                <a
                  href="#"
                  className="flex items-center mb-2 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                  <img
                    className="w-12 h-12 mr-2"
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    alt="logo"
                  />
                </a>
              )}
            </div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {title}
            </h1>
            <span className="text-[14px] text-[#868686]">{subtitle}</span>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
