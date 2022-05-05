// Copyright 2022 Bemenet Semegnew
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Link } from "react-router-dom";
import { showMenu, hideMenu } from "./NavbarJS";

const brand = "</Home>";

const Navbar = () => {
  return (
    <div className="text-purple-500 bg-white sticky font-anybody top-0 z-50">
      <nav className="justify-center md:flex items-center mx-auto w-11/12 md:w-5/6">
        <div
          className="flex justify-between
           items-center w-full text-purple-500"
        >
          <Link
            to="/"
            className="text-2xl md:text-3xl p-3 text-slate-500 hover:text-slate-300 text-center transition-all duration-150"
            onClick={hideMenu}
          >
            {brand}
          </Link>
          <Link
            to="#!"
            id="menu-icon"
            className="h-full p-3 mx-3 md:hidden text-purple-400"
            onClick={showMenu}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="flex justify-center w-full">
          <div className="hidden m-2 md:m-0 md:inline-block w-full" id="menu">
            <ul className="md:flex w-full justify-end md:justify-end items-center">
              <li className="align-middle px-2 py-2">
                <Link to="/projects" className="link" onClick={showMenu}>
                  Projects
                </Link>
              </li>
              <li className="align-middle px-2 py-2">
                <Link to="/about" className="link w-full" onClick={showMenu}>
                  About
                </Link>
              </li>
              <li className="align-middle px-2 py-2">
                <Link to="/contact" className="link" onClick={showMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
