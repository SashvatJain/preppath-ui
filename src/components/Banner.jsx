import React from 'react'

const Banner = () => {
    return (
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8" >
            <div className="relative z-40 flex flex-wrap w-full jusify-center">
                <h1 className="w-8/12 mx-auto text-2xl font-bold tracking-wide text-center text-gray-900 sm:text-3xl md:text-5xl lg:text-6xl">
                    Test Prep Has Never
                    <br />
                    Been More
                    <span className="text-blue-700">
                        &nbsp;Affordable
                    </span>
                </h1>
                <h2 className="w-8/12 mx-auto mt-5 text-2xl font-semibold text-center text-gray-900" >
                    $7.99
                    <span className="text-sm tracking-wider text-blue-700 font-regular" >
                        &nbsp;PER MONTH</span>
                </h2>
                <div className="w-8/12 mx-auto mt-5 text-center">
                    <button className="px-6 py-2 font-semibold rounded-full bg-gmBlue-dark text-gray-50 bg-slate-900" >
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner