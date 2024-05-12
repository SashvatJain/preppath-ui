import React from 'react'
import Menu from './Menu'

const index = () => {
    return (

        <div className="sticky top-0 z-50">
            <nav className="relative z-10 bg-white" id="navbarrr">
                <span className="hidden"></span>
                <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:justify-start md:space-x-10 lg:px-8">
                    <div className="flex items-center justify-start lg:w-0 lg:flex-1">
                        <a aria-current="page" href="/" className="router-link-active router-link-exact-active flex flex-row items-center">
                            <h1>LOGO</h1>
                        </a>
                    </div>
                    <div className="flex flex-row space-x-3 items-center justify-end flex-1 md:hidden lg:w-0">
                        <a href="/pricing" className=""><span className="ml-4 text-base font-medium text-gray-800  whitespace-nowrap hover:text-gray-900  inline">Pricing</span></a>
                        <button className="rounded-full px-3 w-8 h-8 flex justify-center items-center bg-gmBlue-light">
                            <svg className="svg-inline--fa fa-user w-4 h-4 text-gray-50" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path
                                    className=""
                                    fill="currentColor"
                                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <button
                            id="headlessui-disclosure-button-56817"
                            type="button"
                            aria-expanded="false"

                            className="inline-flex items-center justify-center p-2 text-gray-600 rounded-md  hover:text-gray-50 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="block w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <Menu/>
                    <div style={{ position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: 0, display: "none" }}></div>

                    <div className="flex flex-row space-x-3 items-center justify-end hidden md:flex md:flex-1 lg:w-0">
                        <button className="w-6 h-6">
                            <svg className="svg-inline--fa fa-magnifying-glass" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    className=""

                                    fill="currentColor"
                                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                ></path>
                            </svg>
                        </button>
                        <a href="/pricing" className="ml-4 text-base font-medium text-gray-800  whitespace-nowrap hover:text-gray-900"> Pricing</a>
                        <button className="rounded-full w-8 h-8 px-3 bg-gmBlue-light flex items-center justify-center">
                            <svg className="svg-inline--fa fa-user w-4 h-4 text-gray-50" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path
                                    className=""

                                    fill="currentColor"
                                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

            </nav>
        </div>

    )
}

export default index