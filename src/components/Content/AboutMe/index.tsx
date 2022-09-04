import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiReactrouter,
  SiCss3,
  SiAuth0,
  SiFormstack,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiJsonwebtokens,
  SiStripe,
} from 'react-icons/si';

import Intro from './Intro';

export default function index() {
  return (
    <div className="flex flex-col gap-10">
      <Intro />
      <div>
        <h2 className="text-2xl font-semibold uppercase mb-2">Tool Kit</h2>
        <p className="mb-4">
          Most of the time I&apos;m working with{' '}
          <span className="inline-flex items-center gap-1">
            TypeScript <SiTypescript className="inline-block" />
          </span>{' '}
          <span className="inline-flex items-center gap-1">
            , React <SiReact className="inline-block" />
          </span>{' '}
          and{' '}
          <span className="inline-flex items-center gap-1">
            NodeJS <SiNodedotjs className="inline-block" />
          </span>{' '}
          as a core stack, along with many other tools as:
        </p>
        <div className="flex flex-col gap-5 md:flex-row md:justify-center">
          <ul className="list-disc px-8 flex flex-col gap-2">
            <li>
              <span className="inline-flex items-center gap-2">
                Redux <SiRedux className="inline-block" />
              </span>
            </li>
            <li>
              <span className="inline-flex items-center gap-2">
                React Router <SiReactrouter className="inline-block" />
              </span>
            </li>
            <li>
              <span className="inline-flex items-center gap-2">
                CSS, TailwindCSS, Bootstrap, etc. <SiCss3 />
              </span>
            </li>
            <li>
              <span className="inline-flex items-center gap-2">
                Auth0 <SiAuth0 className="inline-block" />
              </span>
            </li>
            <li>
              <span className="inline-flex items-center gap-2">
                Formik <SiFormstack className="inline-block" />
              </span>
            </li>
          </ul>
          <ul className="list-disc px-8 flex flex-col gap-2">
            <li>
              <span className="inline-flex items-center gap-2">
                Express <SiExpress className="inline-block" />
              </span>
            </li>
            <li>
              <span className="inline-flex items-center gap-2">
                PostgreSQL <SiPostgresql className="inline-block" />
              </span>
            </li>
            <li>
              <span className="inline-flex items-center gap-2">
                Sequelize <SiSequelize className="inline-block" />
              </span>
            </li>
            <li>
              <span className="inline-flex items-center gap-2">
                JSON Web Token <SiJsonwebtokens className="inline-block" />
              </span>
            </li>
            <li>
              <span className="inline-flex items-center gap-2">
                Stripe <SiStripe className="inline-block" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
