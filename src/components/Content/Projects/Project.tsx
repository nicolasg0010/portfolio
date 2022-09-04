import { useState } from 'react';
import { TbChevronsDown, TbChevronsUp, TbExternalLink, TbBrandGithub } from 'react-icons/tb';

interface Props {
  prev: string;
  title: string;
  tech: string[];
  desc: string;
  points: string[];
  exp: string;
  links: string[];
  deploy: string;
}

export default function Project({ prev, title, tech, desc, points, exp, links, deploy }: Props) {
  const [showFeature, setShowFeature] = useState(false);

  return (
    <div className="flex flex-col xl:flex-row xl:gap-5">
      <div>
        <img src={prev} alt="title" className="rounded-md mb-5 xl:h-auto xl:w-full xl:mb-0" />
        <h4 className="text-2xl font-semibold border-t border-black xl:border-t-0  py-4">{title} </h4>
      </div>
      <div>
        <p>{desc}</p>
        <div
          onClick={() => setShowFeature(!showFeature)}
          className="cursor-pointer my-5 bg-[#cfcfcf] px-3 py-2 rounded hover:bg-[#bebebe] transition-all duration-200"
        >
          <h6 className="text-md font-semibold flex items-center gap-2">
            Features{' '}
            {showFeature ? <TbChevronsDown className="inline-block" /> : <TbChevronsUp className="inline-block" />}
          </h6>
          {showFeature && (
            <ul className="flex flex-col gap-2">
              {points.map((el) => (
                <li key={crypto.randomUUID()}>• {el}</li>
              ))}
            </ul>
          )}
        </div>
        <p>🧑‍💻 {exp}</p>
        <div className="font-roboto text-blue-800 flex justify-end gap-5">
          {deploy !== '' && (
            <a href={deploy} target="_blank" rel="noreferrer" className="flex items-center gap-1">
              <span>Live Demo</span>
              <TbExternalLink />
            </a>
          )}
          {links.length > 1 && <span>Repositories</span>}
          {links.length > 1 ? (
            links.map((link) => (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                key={crypto.randomUUID()}
                className="flex items-center gap-1"
              >
                <TbBrandGithub />
              </a>
            ))
          ) : (
            <a href={links[0]} target="_blank" rel="noreferrer" className="flex items-center gap-1">
              <span>Respository</span>
              <TbBrandGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
