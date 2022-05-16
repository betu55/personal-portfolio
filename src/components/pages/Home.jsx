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
import { useState, useEffect } from "react";

const Home = () => {
  const d = new Date();
  let ampm;

  ampm = d.toLocaleTimeString().slice(8, 11).toString();

  let [time, setTime] = useState("00" + ":" + "00" + ":" + "00" + " " + ampm);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setTime(d.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); //clean-up
  });

  return (
    <div>
      <div className="w-5/6 md:w-3/4 flex mx-auto items-centr h-screen justify-center mt-4">
        <div className="container">
          <div className="flex-row text-center mx-auto text-lg md:text-xl 3xl:text-3xl col-span-1 text-purple-400 font-ps2p block md:hidden">
            {time}
          </div>
          <div className="flex-row justify-center items-center mx-auto content-center col-span-1">
            <div className="text-4xl font-lobster md:text-5xl 3xl:text-7xl text-purple-400 mx-auto">
              Don't Stop Dreaming!
            </div>
          </div>
          <div className="flex-row justify-center w-full md:col-span-2 md:border-l border-slate-300 ml-4">
            <div className="text-base md:text-lg 3xl:text-2xl text-slate-600 md:pl-4 font-sans">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem impedit optio incidunt voluptatibus aperiam amet
              blanditiis tempora dolore at? Magnam unde repellendus in mollitia,
              ab ipsam laudantium provident minus modi!
            </div>
            <Link to="#!">
              <div className="button w-5/6 md:w-2/4">Dream Now</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-slate-600 w-screen flex mx-auto items-start h-screen">
        <div className="w-5/6 md:w-3/4 flex mx-auto items-start h-screen justify-center mt-8  ">
          <div className="container">
            <div className="flex justify-center items-center w-full content-center col-span-1">
              <div className="text-4xl font-lobster md:text-5xl text-slate-300">
                Don't Stop Dreaming!
              </div>
            </div>
            <div className="flex justify-center w-full col-span-1 md:border-l border-slate-500">
              <div className="text-base md:text-lg text-slate-300 pl-4 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem impedit optio incidunt voluptatibus aperiam amet
                blanditiis tempora dolore at? Magnam unde repellendus in
                mollitia, ab ipsam laudantium provident minus modi!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-screen flex mx-auto items-start h-screen"></div>
    </div>
  );
};

export default Home;
