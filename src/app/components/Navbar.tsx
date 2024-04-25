'use client';
import Link from 'next/link';
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    let menuClasses = [];

    useEffect(() => {
        menuClasses = []
        if (isOpen) {
            menuClasses.push("flex");
        } else {
            menuClasses.push("hidden");
        }
    });
    
    return (
        <nav className='bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center'>
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl font-bold">
                    JPURG
                </a>
                <div className={`${isOpen ? "flex" : "hidden"} flex-col md:flex-row`}>
                    <Link href="/blog" className="mx-2 hover:text-grey-300">
                        Blog
                    </Link>
                    <Link href="/ctf" className="mx-2 hover:text-grey-300">
                        CTFs
                    </Link>
                    <Link href="/wanda" className="mx-2 hover:text-grey-300">
                        WSM
                    </Link>
                    <Link href="/gallery" className="mx-2 hover:text-grey-300">
                        Gallery
                    </Link>
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