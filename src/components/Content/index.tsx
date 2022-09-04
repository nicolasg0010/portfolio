import AboutMe from './AboutMe';
import Projects from './Projects';

export default function index() {
  return (
    <div className="bg-[#dcdcdc] lg:overflow-y-scroll">
      <div className="flex flex-col gap-16 flex-grow mx-3 my-5 sm:mx-10 sm:my-10 md:my-20 lg:my-36 md:mx-20 xl:mx-36 text-lg ">
        <AboutMe />
        <Projects />
        {/* <div>EDUCATION</div> */}
        {/* <div>CONTACT</div> */}
      </div>
    </div>
  );
}
