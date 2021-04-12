import React from 'react';

import {Facebook} from 'react-feather';
import {Instagram} from 'react-feather';

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img className="lg:block h-8 w-auto"
                         src="/assets/logo.png"
                         alt="Workflow"/>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©
                    2021 MyPizza - Ahtme
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
          <Link href="https://www.facebook.com/mypizza.ee"><Facebook/></Link>
      </a>
      <a className="ml-3 text-gray-500">
          <Link href="https://www.instagram.com/mypizza_ee/"><Instagram/></Link>
      </a>
    </span>
            </div>
        </footer>
    );
};

export default Footer;
