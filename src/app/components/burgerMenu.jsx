'use client'
import { Menu, Transition } from '@headlessui/react'
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import ClipboardDocumentCheckIcon from '@heroicons/react/24/outline';
import { HomeModernIcon } from "@heroicons/react/20/solid"; 
import Link from "next/link"; 
import { Fragment } from "react";
import { useState } from 'react';

export default function MenuDropdown() { 
    const [open, setOpen] = useState(false);
  
    return ( 
      <>
      <style>
        {`
          @keyframes flow-up {
            0% {
              opacity: 1;
              transform: translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateY(-100px);
            }
          }

          .animate-flow-up {
            animation: flow-up 2s linear infinite;
          }
        `}
      </style> 
      <div className="relative text-left ml-10">    
        <Menu as="div" className="relative">   
            {({ open }) => (
                <>
                <div>  
                  {/* <Menu.Button className="flex outline-none">  
                  {open ? (
                      <div className="w-8 h-8 flex flex-col justify-center items-center space-y-2">
                        <div className="w-8 h-0.5 bg-gray-600 transform translate-y-[5px] -rotate-225 transition-transform duration-1000"></div>
                        <div className="w-8 h-0.5 bg-gray-600 transform translate-y-[-5px] rotate-225 transition-transform duration-1000"></div>
                      </div>  
                    ) : ( 
                      <div className="flex flex-col space-y-2 justify-center items-center">
                        <div className="w-8 h-0.5 bg-gray-600 transition-all duration-1000"></div> 
                        <div className="w-8 h-0.5 bg-gray-600 transition-all duration-1000"></div>  
                      </div>  
                    )} 
                  </Menu.Button>   */}
                        <Menu.Button className="flex outline-none" onClick={() => setOpen(!open)}>
                          {open ? (
                            <div className="w-8 h-8 flex justify-center items-center">
                                <div className="w-8 h-0.5 bg-gray-600 transform -rotate-45 transition-transform duration-300"></div>
                                <div className="w-8 h-0.5 bg-gray-600 transform rotate-45 transition-transform duration-300"></div>
                            </div>
                            ) : (
                            <div className="w-8 h-8 flex justify-center items-center">
                                <div className="w-8 h-0.5 bg-gray-600 transition-all duration-300"></div>
                                <div className="w-8 h-0.5 bg-gray-600 transition-all duration-300"></div>
                            </div>
                            )} 
                          {open && (
                            <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center pointer-events-none">
                              <span className="animate-flow-up" role="img" aria-label="Fire"> 
                                🔥
                              </span>
                            </div>
                          )}
                        </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-800"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-800"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                > 
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5       focus:outline-none">
                    <Menu.Item> 
                        <Link 
                            href="/authorize"
                            className={'relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-sm text-gray-700'}>
                            <ChatBubbleLeftRightIcon className="h-4 w-4" />
                            <p className="text-sm">Authorize</p> 
                        </Link>
                    </Menu.Item>
                    <Menu.Item> 
                        <Link 
                            href="/login"
                            className={'relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-sm text-gray-700'}>
                            <ChatBubbleLeftRightIcon className="h-4 w-4" />
                            <p className="text-sm">Login</p> 
                        </Link>
                    </Menu.Item>
                    <Menu.Item> 
                        <Link
                            href="/" 
                            className={'relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-sm text-gray-700'}>
                            <HomeModernIcon className="h-4 w-4" /> 
                            <p className="text-sm">Home</p> 
                        </Link> 
                    </Menu.Item>
                    </Menu.Items>
                </Transition>
                </> 
            )} 
        </Menu> 
      </div>
      </> 
    );
}
