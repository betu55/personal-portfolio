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

const col = {
  "C#": <span className="text-green-500 text-lg md:text-xl">•</span>,
  HTML: <span className="text-orange-600 text-lg md:text-xl">•</span>,
  Swift: <span className="text-orange-500 text-lg md:text-xl">•</span>,
  Dart: <span className="text-cyan-500 text-lg md:text-xl">•</span>,
  Kotlin: <span className="text-purple-500 text-lg md:text-xl">•</span>,
  "Objective-C": <span className="text-blue-500 text-lg md:text-xl">•</span>,
  Other: <span className="text-gray-400 text-lg md:text-xl">•</span>,
  Python: <span className="text-cyan-700 text-lg md:text-xl">•</span>,
  JSON: <span className="text-gray-600 text-lg md:text-xl">•</span>,
  Javascript: <span className="text-yellow-500 text-lg md:text-xl">•</span>,
  CSS: <span className="text-purple-800 text-lg md:text-xl">•</span>,
};

function Card({ title, date, languages, color, text_col, button_col, link }) {
  return (
    <div className="w-full">
      <div
        className={`font-bold text-3xl md:text-4xl ${color} items-center pb-2`}
      >
        <div className={`${color}`}>{title}</div>
        <div className={`text-base pt-1 font-semibold ${color}`}>{date}</div>
      </div>
      <div className={`text-sm md:text-base ${text_col}`}>
        <ul>
          {languages.map((element, i) => {
            let arr = languages[i].split(" ");
            console.log(arr[0]);
            return (
              <li>
                {col[arr[0]]} {element}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-2 flex w-80 justify-start">
        <a
          target="blank"
          href={link}
          className={`text-base ${color} hover:${color} flex items-center w-3/5 md:w-1/2`}
        >
          <div className={`button w-full my-auto ${button_col}`}>More</div>
        </a>
      </div>
    </div>
  );
}

export default Card;
