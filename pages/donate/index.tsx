import React from 'react'

function donate() {
  return (
    <>
    <section className="text-gray-400 bg-gray-900 body-font h-screen flex justify-center">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-white">Helping hands are better than praying lips!</h1>
      <p className="leading-relaxed mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas dolores unde cumque similique, placeat eos?</p>
    </div>
    <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-white text-lg font-medium title-font mb-5">Helping Hands</h2>
      <div className="relative mb-4">
        <label htmlFor="company-id" className="leading-7 text-sm text-gray-400">Company ID</label>
        <input type="text" name="company-id" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="person-id" className="leading-7 text-sm text-gray-400">Person ID</label>
        <input type="text" name="person-id" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg hover:scale-90 duration-300">Donate</button>
      <p className="text-xs mt-3">You have the power to save a Life.</p>
    </div>
  </div>
</section>
</>
  )
}

export default donate