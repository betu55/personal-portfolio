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
import React from "react";
import Card from "./comps/Card";
import Frame from "react-frame-component";

const MyApp = () => {
  const incomplete = "#incomplete";
  const in_progress = "#in-progress #personal";
  const complete = "#complete";

  return (
    <div>
      <div className="w-5/6 md:w-3/4 flex mx-auto items-center justify-center my-4">
        <div className="container">
          <div className="md:col-span-3">
            <div className=" text-4xl md:text-5xl font-bold self-center w-fit text-gray-600 pb-4">
              My Projects
            </div>
            <div>
              Here are the different projects I have developed. It also includes
              projects that I have contributed to.
            </div>
          </div>
          <div className="h-4 col-span-1 md:col-span-3"></div>
          <div className="flex-row justify-center items-center content-center col-span-1">
            <Card
              title="Betu-dark-theme"
              date="Oct, 2021"
              languages={["JSON 100%"]}
              color="text-purple-400"
              text_col="text-gray-600"
              button_col="border-purple-400 text-purple-500 hover:bg-purple-400 hover:text-slate-100"
              link="https://github.com/betu55/Betu-dark-theme"
            />
          </div>
          <div className="flex-row justify-center w-full md:col-span-2 md:border-l border-slate-300">
            <div className="md:pl-4 text-xl md:text-2xl font-bold text-gray-600 flex justify-between items-baseline">
              Betu-dark-theme
              <div className="text-sm text-gray-400">
                {complete} #dark-theme
              </div>
            </div>
            <div className="text-base md:text-lg 3xl:text-2xl text-gray-500 md:pl-4 font-sans">
              A minimal dark theme for vs-code. This extension can be found in
              the visual studio code marketplace.
            </div>

            {/* <Link to="#!">
              <div className="button">Dream Now</div>
            </Link> */}
          </div>
          <div className="h-6 col-span-1 md:col-span-3"></div>
          <div className="flex-row justify-center items-center content-center col-span-1">
            <Card
              title="Betu-light-theme"
              date="Nov, 2021"
              languages={["JSON 100%"]}
              color="text-purple-400"
              text_col="text-gray-600"
              button_col="border-purple-400 text-purple-500 hover:bg-purple-400 hover:text-slate-100"
              link="https://github.com/betu55/Betu-light-theme"
            />
          </div>
          <div className="flex-row justify-center w-full md:col-span-2 md:border-l border-slate-300">
            <div className="md:pl-4 text-xl md:text-2xl font-bold text-gray-600 flex justify-between items-baseline">
              Betu-light-theme
              <div className="text-sm text-gray-400">{complete} #minimal</div>
            </div>
            <div className="text-base md:text-lg 3xl:text-2xl text-gray-500 md:pl-4 font-sans">
              A simple vs-code theme extension that aims at providing coders
              with a lighter theme than usual. Can be found in the vs-code
              marketplace
            </div>

            {/* <Link to="#!">
              <div className="button">Dream Now</div>
            </Link> */}
          </div>
          <div className="h-6 col-span-1 md:col-span-3"></div>
          <div className="flex-row justify-center items-center content-center col-span-1">
            <Card
              title="Habeshario"
              date="Oct, 2021 (incomplete)"
              languages={["C# 100%"]}
              color="text-purple-400"
              text_col="text-gray-600"
              button_col="border-purple-400 text-purple-500 hover:bg-purple-400 hover:text-slate-100"
              link="https://github.com/betu55/Habeshario"
            />
          </div>
          <div className="flex-row justify-center w-full md:col-span-2 md:border-l border-slate-300">
            <div className="md:pl-4 text-xl md:text-2xl font-bold text-gray-600 flex justify-between items-baseline">
              <div>Habeshario</div>
              <div className="text-sm text-gray-400">
                {incomplete} #game-dev
              </div>
            </div>
            <div className="text-base md:text-lg 3xl:text-2xl text-gray-500 md:pl-4 font-sans">
              A 3D game project made using Unity and C#. Where the character has
              to complete a set number of puzzles before moving to the next
              level or floor.
            </div>

            {/* <Link to="#!">
              <div className="button">Dream Now</div>
            </Link> */}
          </div>
          <div className="h-6 col-span-1 md:col-span-3"></div>
          <div className="flex-row justify-center items-center content-center col-span-1">
            <Card
              title="Hagerawi"
              date="Nov, 2021"
              languages={["Dart 98.4%", "HTML 1.4%", "Other 0.2%"]}
              color="text-purple-400"
              text_col="text-gray-600"
              button_col="border-purple-400 text-purple-500 hover:bg-purple-400 hover:text-slate-100"
              link="https://github.com/betu55/Hagerawi"
            />
          </div>
          <div className="flex-row justify-center w-full md:col-span-2 md:border-l border-slate-300">
            <div className="md:pl-4 text-xl md:text-2xl font-bold text-gray-600 flex justify-between items-baseline">
              <div>Hagerawi</div>
              <div className="text-sm text-gray-400">{complete}</div>
            </div>
            <div className="text-base md:text-lg 3xl:text-2xl text-gray-500 md:pl-4 font-sans">
              Hagerawi Application A mobile application platform that aims at
              remedying the dying knowledge and interest about the rich history,
              works, and resources of our country (Ethiopia) by influencing a
              community through articles feed, event planning and notifying,
              preparing questions, and creating a discussion platform.
            </div>

            {/* <Link to="#!">
              <div className="button">Dream Now</div>
            </Link> */}
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="w-5/6 md:w-3/4 flex mx-auto items-center justify-center py-8">
          <div className="container">
            <div className="h-6 col-span-1 md:col-span-3"></div>
            <div className="flex-row justify-center items-center content-center col-span-1">
              <Card
                title="LyricsApi"
                date="Nov, 2021"
                languages={["Python 100%"]}
                color="text-primary"
                text_col="text-gray-400"
                button_col="border-primary text-primary hover:bg-primary hover:text-slate-100"
                link="https://github.com/betu55/songLyricsAPI"
              />
            </div>
            <div className="flex-row justify-center w-full md:col-span-2 md:border-l border-slate-600">
              <div className="md:pl-4 text-xl md:text-2xl font-bold text-gray-400 flex justify-between items-baseline">
                <div>SongLyricsApi</div>
                <div className="text-sm text-gray-500">
                  #Song #Amharic #Lyrics
                </div>
              </div>
              <div className="text-base md:text-lg 3xl:text-2xl text-gray-400 md:pl-4 font-sans">
                An API that has a database of amharic music lyrics made entirely
                using Python and the Flask framework.
              </div>

              {/* <Link to="#!">
              <div className="button">Dream Now</div>
            </Link> */}
            </div>
            <div className="h-6 col-span-1 md:col-span-3"></div>
            <div className="flex-row justify-center items-center content-center col-span-1">
              <Card
                title="PasswordManager"
                date="Oct, 2021 (incomplete)"
                languages={[
                  "HTML 47.3%",
                  "Dart 45.3%",
                  "Swift 5.2%",
                  "Kotlin 1.7%",
                  "Objective-C 0.5%",
                ]}
                color="text-primary"
                text_col="text-gray-400"
                button_col="border-primary text-primary hover:bg-primary hover:text-slate-100"
                link="https://github.com/betu55/PasswordManager"
              />
            </div>
            <div className="flex-row justify-center w-full md:col-span-2 md:border-l border-slate-600">
              <div className="md:pl-4 text-xl md:text-2xl font-bold text-gray-400 flex justify-between items-baseline">
                <div>PasswordManager</div>
                <div className="text-sm text-gray-500">
                  {incomplete} #security
                </div>
              </div>
              <div className="text-base md:text-lg 3xl:text-2xl text-gray-400 md:pl-4 font-sans">
                An app that manages all your passwords from different platforms
              </div>

              {/* <Link to="#!">
              <div className="button">Dream Now</div>
            </Link> */}
            </div>
            <div className="h-6 col-span-1 md:col-span-3"></div>
            <div className="flex-row justify-center items-center content-center col-span-1">
              <Card
                title="Personal-portfolio"
                date="in-progress"
                languages={["Javascript 88.6%", "CSS 6.7%", "HTML 4.7%"]}
                color="text-primary"
                text_col="text-gray-400"
                button_col="border-primary text-primary hover:bg-primary hover:text-slate-100"
                link="https://github.com/betu55/personal-portfolio"
              />
            </div>
            <div className="flex-row justify-center w-full md:col-span-2 md:border-l border-slate-600">
              <div className="md:pl-4 text-xl md:text-2xl font-bold text-gray-400 flex items-baseline justify-between">
                <div>Personal-portfolio</div>
                <div className="text-sm text-gray-500">
                  {in_progress} #react
                </div>
              </div>
              <div className="text-base md:text-lg 3xl:text-2xl text-gray-400 md:pl-4 font-sans">
                A personalized website about me, my hobbies and the different
                projects I took part in during my post-secondary studies.
              </div>
            </div>
            {/* <div className="flex justify-start md:justify-center w-full md:col-span-2 md:border-l border-slate-600">
              <Frame
                className="w-full md:w-5/6 h-60"
                initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/betu55/1a8ca3ca2e308ac6dbfa8f07933a32cd.js'></script></body></html>"
              />
            </div> */}
            <div className="h-6 col-span-1 md:col-span-3"></div>
            <div className="flex-row justify-center items-center content-center col-span-1">
              <Card
                title="TheMealAPI"
                date="Sep, 2021"
                languages={["Javascript 62.5%%", "CSS 0.4%", "HTML 37.1%"]}
                color="text-primary"
                text_col="text-gray-400"
                button_col="border-primary text-primary hover:bg-primary hover:text-slate-100"
                link="https://github.com/atobrightside/TheMealAPI"
              />
            </div>
            <div className="flex-row justify-center w-full md:col-span-2 md:border-l border-slate-600">
              <div className="md:pl-4 text-xl md:text-2xl font-bold text-gray-400 flex items-baseline justify-between">
                <div>TheMealApi</div>
                <div className="text-sm text-gray-500">#API #food #recipes</div>
              </div>
              <div className="text-base md:text-lg 3xl:text-2xl text-gray-400 md:pl-4 font-sans">
                A web application where users can view various food recipes from
                all over the world. Users can also search or filter meals by
                category, ingredients or country.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyApp;
