import React from 'react'

const StudyPlans = () => {
    return (
        <div className="relative">
            <div className="absolute z-0 grid w-full grid-cols-2 pt-24">
                <div className="relative left-0 top-20">
                    <div className="float-left absolute z-0 w-3/12 md:w-2/12 h-16 origin-top-left transform rotate-[18deg] xl:rotate-[16deg] bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-950" style={{ clipPath: "polygon(0 0, 98% 0, 100% 100%, 0 100%)" }}></div>
                    <div className="float-left top-12 absolute z-0 w-3/12 md:w-3/12 h-16 origin-top-left transform rotate-[18deg] xl:rotate-[16deg] bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-blue-700" style={{ clipPath: "polygon(0 0, 98% 0, 100% 100%, 0 100%)" }}></div>
                </div>
                <div className="relative right-0 top-96">
                    <div className="float-right absolute z-0 w-3/12 md:w-2/12 h-16 origin-top-right transform rotate-[-19deg] xl:rotate-[-16deg] -right-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-950" style={{ clipPath: "polygon(2% 0, 100% 0, 100% 100%, 0 100%)" }}></div>
                    <div
                        className="float-right absolute z-0 top-12 w-3/12 md:w-3/12 h-16 origin-top-right transform rotate-[-19deg] xl:rotate-[-16deg] -right-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-blue-700"
                        style={{ clipPath: "polygon(2% 0, 100% 0, 100% 100%, 0 100%)" }}

                    ></div>
                </div>
            </div>
            <div className="relative">
                <div className="flex flex-wrap justify-center px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="z-50 flex flex-wrap w-full jusify-center">
                        <h2 className="w-8/12 mx-auto text-2xl font-bold tracking-wide text-center text-gray-900 sm:text-3xl md:text-4xl lg:text-4xl">Study Plans</h2>
                    </div>
                    <div className="grid w-9/12 grid-cols-1 mt-12 gap-y-8 md:gap-y-8 md:gap-x-3 lg:grid-cols-3">
                        <div className="flex flex-col items-center justify-center px-2 py-12 space-y-8 border border-gray-300 shadow-lg rounded-xl">
                            <div className="flex justify-center md:justify-end md:col-span-5">
                                <img
                                    src="https://images.gregmat.com/media/misc/Mask_Group.png"
                                    onerror="this.setAttribute('data-error', 1)"
                                    alt="Student during test prep"
                                    loading="lazy"
                                    data-nuxt-img=""
                                    srcset="https://images.gregmat.com/media/misc/Mask_Group.png 1x, https://images.gregmat.com/media/misc/Mask_Group.png 2x"
                                    className="w-96"

                                />
                            </div>
                            <div><p className="text-2xl font-semibold">One Month Plan</p></div>
                            <div className="w-3/4">
                                <p className="text-lg text-center text-gray-700">If you're pressed for time but still want a comprehensive, structured approach to the GRE, then this is for you.</p>
                            </div>
                            <div>
                                <a href="/study-plans/one-month-study-plan-version-2" className=""><button className="px-6 py-2 font-semibold text-white bg-blue-950 rounded-3xl  bg-slate-900">Take One Month Plan</button></a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-between px-2 py-12 space-y-8 border border-gray-300 shadow-lg rounded-xl">
                            <div className="flex justify-center md:justify-end md:col-span-5">
                                <img
                                    src="https://images.gregmat.com/media/misc/Mask_Group-1.png"
                                    onerror="this.setAttribute('data-error', 1)"
                                    alt="student during test prep"
                                    loading="lazy"
                                    data-nuxt-img=""
                                    srcset="https://images.gregmat.com/media/misc/Mask_Group-1.png 1x, https://images.gregmat.com/media/misc/Mask_Group-1.png 2x"
                                    className="w-96"

                                />
                            </div>
                            <div><p className="text-2xl font-semibold">Two Month Plan</p></div>
                            <div className="w-3/4"><p className="text-lg text-center text-gray-700">If you've got all the time in the world and want a true deep dive into the GRE, then this is for you.</p></div>
                            <div>
                                <a href="/study-plans/two-months-study-plan" className=""><button className="px-6 py-2 font-semibold text-white bg-blue-950 rounded-3xl  bg-slate-900">Take Two Month Plan</button></a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-between px-2 py-12 space-y-8 border border-gray-300 shadow-lg rounded-xl">
                            <div className="flex justify-center md:justify-end md:col-span-5">
                                <img
                                    src="https://images.gregmat.com/media/misc/Untitled_design.png"
                                    onerror="this.setAttribute('data-error', 1)"
                                    alt="student during test prep"
                                    loading="lazy"
                                    data-nuxt-img=""
                                    srcset="https://images.gregmat.com/media/misc/Untitled_design.png 1x, https://images.gregmat.com/media/misc/Untitled_design.png 2x"
                                    className="w-96"

                                />
                            </div>
                            <div><p className="text-2xl font-semibold">TOEFL Study Plan</p></div>
                            <div className="w-3/4"><p className="text-lg text-center text-gray-700">Prepare for your TOEFL exam in only two weeks!</p></div>
                            <div>
                                <a href="/study-plans/toefl-2-week-study-plan" className=""><button className="px-6 py-2 font-semibold text-white bg-blue-950 rounded-3xl  bg-slate-900">Take TOEFL Study Plan</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default StudyPlans