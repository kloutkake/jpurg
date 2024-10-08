"use client";
import Link from 'next/link';
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    function getMenuClasses(){
        let menuClasses = [];
        if (isOpen) {
            menuClasses = [
                "flex",
                "absolute",
                "top-[80px]",
                "left-[20px]",
                "right-[20px]",
                "bg-emerald-900",
                "p-6",
                "gap-7",
                "flex-col",
            ];
        } else {
            menuClasses = [ "hidden", "md:flex", ];
        }

        return menuClasses.join(" ")
    };
    
    return (
        <nav className='bg-emerald-900 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center'>
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="font-mono text-3xl font-bold text-violet-200 hover:text-orange-500">
                    JPURG
                </a>
                <div className={getMenuClasses()}>
                    <Link 
                        href="/pages/resume" 
                        className="font-mono text-2x1 text-violet-200 mx-2 hover:text-orange-500"
                        onClick={() => setIsOpen(false)}
                        >Resume</Link>
                    <Link 
                        href="/pages/blog" 
                        className="font-mono text-2x1 text-violet-200 mx-2 hover:text-orange-500"
                        onClick={() => setIsOpen(false)}>
                        Blog</Link>
                    <Link 
                        href="/pages/wanda"
                        className="font-mono text-2x1 text-violet-200 mx-2 hover:text-orange-500"
                        onClick={() => setIsOpen(false)}
                        >
                        WSM</Link>
                    <Link 
                        href="/pages/gallery" 
                        className="font-mono text-2x1 text-violet-200 mx-2 hover:text-orange-500"
                        onClick={() => setIsOpen(false)}
                        >
                        Gallery</Link>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={() => {
                        setIsOpen(!isOpen);
                    }}>
                        <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                                ></path>
                            ) : (
                                <path 
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"                               
                                ></path>
                            )}
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};