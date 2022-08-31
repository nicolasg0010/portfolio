import { TbBrandLinkedin, TbBrandGithub, TbMail, TbBrightness } from 'react-icons/tb';

import image from 'assets/image.jpg';

export default function index() {
  return (
    <div className="border-2 flex flex-col justify-between py-10 lg:w-72 xl:w-96 md:py-20 lg:py-36">
      <div className="pb-5 md:pb-10 flex flex-col items-center">
        <img src={image} alt="profile image" className="h-40 w-auto mb-4 rounded-full" />
        <h3 className="mb-1">Nicolas Garcia</h3>
        <h5 className="mb-4">Full Stack Developer</h5>
        <div className="flex gap-10">
          <TbBrandGithub className="h-6 w-6" />
          <TbMail className="h-6 w-6" />
          <TbBrandLinkedin className="h-6 w-6" />
        </div>
      </div>
      <div className="flex flex-row lg:flex-col justify-center lg:items-center gap-5 lg:gap-10">
        <TbBrightness className="h-6 w-6" />
        <button>ESPAÑOL</button>
      </div>
    </div>
  );
}
