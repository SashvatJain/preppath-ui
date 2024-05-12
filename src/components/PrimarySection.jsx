import React from 'react'

const PrimarySection = () => {
    return (
        <div className="relative" >
            <div className="absolute z-0 grid w-full grid-cols-2" >
                <div className="relative left-0 -top-1 md:-top-20 lg:-top-36 xl:-top-40 2xl:-top-52" >
                    <div className="float-left relative z-0 w-9/12 h-20 origin-top-left transform rotate-[18deg] xl:rotate-[16deg] bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-blue-700" style={{ clipPath: "polygon(0 0, 98% 0, 100% 100%, 0 100%)" }} >
                    </div>
                    <div className="float-left relative z-0 w-[95%] h-40 origin-top-left bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-950 transform rotate-[18deg] xl:rotate-[16deg] top-12" style={{ clipPath: "polygon(0 0, 97% 0, 100% 100%, 0 100%)" }} >
                    </div>
                </div>
                <div className="relative right-0 -top-1 md:-top-24 lg:-top-40 xl:-top-44 2xl:-top-56" >
                    <div className="float-right relative z-0 w-9/12 h-20 origin-top-right transform rotate-[-19deg] xl:rotate-[-16deg] -right-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-blue-700" style={{ clipPath: "polygon(2% 0, 100% 0, 100% 100%, 0 100%)" }} >
                    </div>
                    <div className="float-right relative z-0 w-[95%] h-40 origin-top-right bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-950 transform rotate-[-19deg] xl:rotate-[-16deg] top-12" style={{ clipPath: "polygon(3% 0, 100% 0, 100% 100%, 0 100%)" }} >
                    </div>
                </div >
            </div >
            <div className="relative z-40 px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8" >
                <div className="flex justify-center pt-24 sm-pt-12 md:pt-6 lg:pt-0 xl:pt-12 2xl:pt-0 align-center" >
                    <img src="https://images.gregmat.com/media/misc/Group_26.png" alt="Student studying for their tests" className="w-full xl:w-9/12 2xl:w-10/12" />
                </div>
            </div>
        </div >
    )
}

export default PrimarySection