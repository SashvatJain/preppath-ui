import React from 'react'

const JoinUs = () => {
    return (
        <div className="relative" >
            <div className="absolute z-0 grid w-full grid-cols-2 pt-48" >
                <div className="relative left-0 top-40" >
                    <div className="float-left absolute z-0 w-3/12 md:w-2/12 h-16 origin-top-left transform rotate-[18deg] xl:rotate-[16deg] bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-blue-700" style={{ clipPath: "polygon(0 0, 98% 0, 100% 100%, 0 100%)" }} ></div>
                    <div className="float-left top-12 absolute z-0 w-3/12 md:w-2/12 h-16 origin-top-left transform rotate-[18deg] xl:rotate-[16deg] bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-950" style={{ clipPath: "polygon(0 0, 98% 0, 100% 100%, 0 100%);" }} ></div>
                </div>
                <div className="relative right-0 top-96" >
                    <div
                        className="float-right absolute z-0 w-3/12 md:w-2/12 h-16 origin-top-right transform rotate-[-19deg] xl:rotate-[-16deg] -right-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-blue-700"
                        style={{ clipPath: "polygon(2% 0, 100% 0, 100% 100%, 0 100%)" }}

                    ></div>
                    <div
                        className="float-right absolute z-0 top-12 w-3/12 md:w-2/12 h-16 origin-top-right transform rotate-[-19deg] xl:rotate-[-16deg] -right-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-950"
                        style={{ clipPath: "polygon(2% 0, 100% 0, 100% 100%, 0 100%);" }}

                    ></div>
                </div>
            </div>
            <div className="relative" >
                <div className="px-4 pt-16 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8" >
                    <div className="z-50 flex flex-wrap w-full jusify-center" >
                        <h2 className="w-8/12 mx-auto text-2xl font-bold tracking-wide text-center text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl" >
                            Why You Should <span className="text-gmBlue-dark" >Join Us</span>
                        </h2>
                        <p className="w-8/12 pt-6 mx-auto text-lg font-semibold text-center text-gray-600" >
                            We started Greg Mat+ because we found the test prep world confusing, expensive, misleading, and inaccessible to many. We pride ourselves on offering students an honest, practical, and entertaining approach to test prep.
                            Best of all, it's cheap -- just $7.99 a month. Come join us!!
                        </p>
                    </div>
                    <div className="mt-24 space-y-12" >
                        <div className="grid grid-cols-1 md:grid-cols-12" >
                            <div className="flex justify-center order-3 md:justify-end md:order-1 md:col-span-5" >
                                <img
                                    src="https://images.gregmat.com/media/misc/Group_4.png"
                                    onerror="this.setAttribute('data-error', 1)"
                                    alt="Student during test prep"
                                    loading="lazy"
                                    data-nuxt-img=""
                                    srcset="https://images.gregmat.com/media/misc/Group_4.png 1x, https://images.gregmat.com/media/misc/Group_4.png 2x"
                                    className="w-64"

                                />
                            </div>
                            <span className="order-1 px-4 font-black text-center text-gray-200 text-7xl md:order-2 md:col-span-1" >1</span>
                            <div className="flex flex-col items-center order-2 pb-8 md:order-3 md:items-start md:col-span-5" >
                                <h3 className="pt-10 pb-4 text-3xl font-bold" >Live Classes</h3>
                                <div className="w-1/2" ><p className="text-center md:text-left text-gray-600" >At least 10 Live Classes are held each week, so you never feel like you're missing the action.</p></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12" >
                            <div className="flex justify-center order-3 md:justify-start md:order-3 md:col-span-5" >
                                <img
                                    src="https://images.gregmat.com/media/misc/Group_5.png"
                                    onerror="this.setAttribute('data-error', 1)"
                                    alt="Student with headphones during test prep"
                                    loading="lazy"
                                    data-nuxt-img=""
                                    srcset="https://images.gregmat.com/media/misc/Group_5.png 1x, https://images.gregmat.com/media/misc/Group_5.png 2x"
                                    className="w-64"

                                />
                            </div>
                            <span className="order-1 px-4 font-black text-center text-gray-200 text-7xl md:order-2 md:col-span-1" >2</span>
                            <div className="flex flex-col items-center order-2 pb-8 md:order-1 md:items-end md:col-span-5" >
                                <h3 className="pt-10 pb-4 text-3xl font-bold" >Recorded Classes</h3>
                                <div className="w-1/2" >
                                    <p className="text-center md:text-right text-gray-600" >We have a huge back catalog of live classes for you to learn from and never worry about missing a live className again.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12" >
                            <div className="flex justify-center order-3 md:justify-end md:order-1 md:col-span-5" >
                                <img
                                    src="https://images.gregmat.com/media/misc/Group_6.png"
                                    onerror="this.setAttribute('data-error', 1)"
                                    alt="Student prepping for tests with their laptop"
                                    loading="lazy"
                                    data-nuxt-img=""
                                    srcset="https://images.gregmat.com/media/misc/Group_6.png 1x, https://images.gregmat.com/media/misc/Group_6.png 2x"
                                    className="w-64"

                                />
                            </div>
                            <span className="order-1 px-4 font-black text-center text-gray-200 text-7xl md:order-2 md:col-span-1" >3</span>
                            <div className="flex flex-col items-center order-2 pb-8 md:order-3 md:items-start md:col-span-5" >
                                <h3 className="pt-10 pb-4 text-3xl font-bold" >Problem Solving</h3>
                                <div className="w-1/2" ><p className="text-center md:text-left text-gray-600" >25 Mini GRE exams and nearly 1000 practice problems!</p></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12" >
                            <div className="flex justify-center order-3 md:justify-start md:order-3 md:col-span-5" >
                                <img
                                    src="https://images.gregmat.com/media/misc/Group_4.png"
                                    onerror="this.setAttribute('data-error', 1)"
                                    alt="Student during test prep"
                                    loading="lazy"
                                    data-nuxt-img=""
                                    srcset="https://images.gregmat.com/media/misc/Group_4.png 1x, https://images.gregmat.com/media/misc/Group_4.png 2x"
                                    className="w-64"

                                />
                            </div>
                            <span className="order-1 px-4 font-black text-center text-gray-200 text-7xl md:order-2 md:col-span-1" >4</span>
                            <div className="flex flex-col items-center order-2 pb-8 md:order-1 md:items-end md:col-span-5" >
                                <h3 className="pt-10 pb-4 text-3xl font-bold" >Study Plans</h3>
                                <div className="w-1/2" >
                                    <p className="text-center md:text-right text-gray-600" >Confused where to begin? Prefer to follow a structure? Follow our meticulously crafted and super comprehensive GRE study plans!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default JoinUs