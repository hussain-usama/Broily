// "use client"  abh ye comment kia hwa ha is ka mtlb ha k ye component server component behave kryga
// agr isy un comment krdo to ye component client component ki trh behave kryga 
// age ksi component me usestate useeffect wghera ka koi bh hook use krna h to us component k bilkul top pr use client likhdo bs 
import React from 'react'
import Image from 'next/image';

function LandingPage() {
  return (
    <div className=''>

      {/* <div><div><img src="/images/Broily Logo.png" alt="Logo" height={'100px'} width={'100px'}/></div><div></div></div> */}
      <div className="w-full flex justify-between items-center">
        <img src="/images/Broily Logo.png" alt="Logo" height={'100px'} width={'100px'} />
        <button className="bg-black text-white px-4 py-2 ">Investors</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 items-center w-full max-w-6xl mt-8 px-6 md:px-20 gap-8">
  {/* Left Section - 8 Columns */}
  <div className="md:col-span-7 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold  text-black leading-tight"   style={{ fontWeight: 900 }}>
            A Social Space That Puts You <span className="text-black">FIRST.</span>
          </h1>
          <p className="text-lg font-semibold text-black mt-6">
            Real Users. Real Conversations. For Men.
          </p>
          <p className="text-gray-700 mt-4">
            Broily is a verified, invite-only social platform for men, designed to foster real
            conversations, authentic connections, and a mentally healthy online experience, free from
            spam, fake accounts, and exploitative algorithms.
          </p>
          <p className="text-gray-700 mt-4">
            Join us as we redefine what it means for men to connect online. Signup below to confirm
            your invite when we launch!
          </p>
          <button className="mt-5 px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Notify Me
          </button>
        </div>

        <div className="md:col-span-5 flex justify-center">
        <div className="relative w-48 md:w-64">
            <Image
              src="/images/MobileMockup.png"
              alt="Broily App"
              width={300}
              height={600}
             // className="rounded-xl shadow-lg"
            />
            
            {/* <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-lg text-blue-700 font-bold">
              Broily
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className="flex gap-4 mt-8 float-right px-20">
        <Image src="/images/Google PlayStore.png" alt="App Store" width={200} height={80} />
        <Image src="/images/Google PlayStore.png"  alt="Google Play" width={200} height={80} />
      </div> */}
    </div>
  )
}

export default LandingPage
