import { useState } from 'react';

import { TbChevronsUp, TbChevronsDown } from 'react-icons/tb';

export default function Intro() {
  const [showHobbies, setShowHobbies] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl">Hi, I&apos;m Nicolas 👋</h1>
      <p className="text-xl">I&apos;m a full stack developer from Argentina.</p>
      <p className="text-xl">
        I make responsive and functional websites that look good and are easy-to-use for everyone.
      </p>
      <div
        onClick={() => setShowHobbies(!showHobbies)}
        className="cursor-pointer my-5 bg-[#cfcfcf] px-3 py-2 rounded hover:bg-[#bebebe] transition-all duration-200"
      >
        <h3 className="text-md font-semibold flex items-center gap-2">
          See my hobbies and interests{' '}
          {showHobbies ? <TbChevronsDown className="inline-block" /> : <TbChevronsUp className="inline-block" />}
        </h3>
        {showHobbies && (
          <div className="cursor-pointer text-md font-roboto">
            <p>I enjoy learning and trying out new and exciting tech stuff and working on my own projects.</p>
            <p>Outside of coding I love reading books, listening to music and running!</p>
          </div>
        )}
      </div>
    </div>
  );
}
