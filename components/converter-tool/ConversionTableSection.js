import React from 'react';
import Image from 'next/Image';

const ConversionTableSection = ({ textContent }) => {
  const table = [
    { unit: 'Unit', abbreviation: 'Abbreviation', decimalValue: 'Decimal Value', decimalSize: 'Decimal Size' },
    { unit: 'Bit', abbreviation: 'b', decimalValue: '0 or 1', decimalSize: '⅛ of a byte' },
    { unit: 'Byte', abbreviation: 'B', decimalValue: '8 bits', decimalSize: '1 byte' },
    {
      unit: 'Kilobyte',
      abbreviation: 'kB',
      decimalValue: (
        <>
          100<sup>1</sup> bytes
        </>
      ),
      decimalSize: '1,000 bytes',
    },
    {
      unit: 'Megabyte',
      abbreviation: 'MB',
      decimalValue: (
        <>
          1000<sup>2</sup> bytes
        </>
      ),
      decimalSize: '1,000,000 bytes',
    },
    {
      unit: 'Gigabyte',
      abbreviation: 'GB',
      decimalValue: (
        <>
          1000<sup>3</sup> bytes
        </>
      ),
      decimalSize: '1,000,000,000 bytes',
    },
    {
      unit: 'Terabyte',
      abbreviation: 'TB',
      decimalValue: (
        <>
          1000<sup>4</sup> bytes
        </>
      ),
      decimalSize: '1,000,000,000,000 bytes',
    },
    {
      unit: 'Petabyte',
      abbreviation: 'PB',
      decimalValue: (
        <>
          1000<sup>5</sup> bytes
        </>
      ),
      decimalSize: '1,000,000,000,000,000 bytes',
    },
    {
      unit: 'Exabyte',
      abbreviation: 'EB',
      decimalValue: (
        <>
          1000<sup>6</sup> bytes
        </>
      ),
      decimalSize: '1,000,000,000,000,000,000 bytes',
    },
    {
      unit: 'Zettabyte',
      abbreviation: 'ZB',
      decimalValue: (
        <>
          1000<sup>7</sup> bytes
        </>
      ),
      decimalSize: '1,000,000,000,000,000,000,000 bytes',
    },
    {
      unit: 'Yottabyte',
      abbreviation: 'YB',
      decimalValue: '1000* bytes',
      decimalSize: '1,000,000,000,000,000,000,000,000 bytes',
    },
  ];

  return (
    <section className="">
      <div className="flex flex-col space-y-16 py-20 lg:items-center lg:justify-center">
        <div className="flex w-full max-w-[835px] flex-col items-center justify-center space-y-4 px-10 text-center">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="text-xl font-normal text-gray-100">{textContent.description}</p>
        </div>
        <div
          className="flex 
         items-start overflow-scroll px-5 lg:overflow-hidden"
        >
          <div className="flex max-w-[740px] flex-col rounded-lg border-gray-10">
            {table.map((item, index) => (
              <div
                key={item.unit}
                className="flex flex-row text-base first:rounded-t-lg first:font-medium first:text-white last:rounded-b-lg odd:bg-primary odd:bg-opacity-6 even:bg-white first-of-type:bg-primary"
              >
                <div className="flex w-full max-w-[105px]   flex-col">
                  <p className="py-2 pl-4 pr-6">{item.unit}</p>
                </div>
                <div className="flex w-full max-w-[133px]   flex-col">
                  <p className="py-2 pl-4 pr-6">{item.abbreviation}</p>
                </div>
                <div className="flex w-full max-w-[144px]   flex-col">
                  <p className="py-2 pl-4 pr-6">{item.decimalValue}</p>
                </div>
                <div className="flex w-screen max-w-[500px]  flex-col">
                  <p className="py-2 pl-4 pr-6">{item.decimalSize}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          onClick={() => {
            window.open('https://internxt.com/password-checker', '_blank');
          }}
          className="mx-5 flex max-w-4xl cursor-pointer flex-row "
        >
          <Image
            src="/images/converter-tool/PasswordChecker.png"
            width={897}
            height={350}
            layout="intrinsic"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ConversionTableSection;
