import imageBg from '../../assets/images/img-bg.png';
import imageProfile from '../../assets/images//profile-img.jpeg';
import { SkillTag } from './SkillTag';

export const CardProfile = () => {
  return (
    <section className="w-full sm:w-[368px] min-h-[427px] bg-[radial-gradient(at_right_bottom,_#80A9F9,_#101828_35%)] rounded-2xl">
      <div className="h-[147px] relative">
        <img src={imageBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-48px]">
          <img
            src={imageProfile}
            alt=""
            className="w-24 h-24 object-cover rounded-full border-6 border-[#101828]"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center text-lg">
        <div className="text-white/70 mt-16 flex flex-col justify-center items-center">
          <h1 className="text-white font-bold text-2xl">Sabrina Souza</h1>
          <h2 className="mb-6">Desenvolvedora Front-End</h2>
          <p className="w-5/6">
            Cria interfaces bonitas, rápidas e intuitivas.
          </p>
        </div>
        <SkillTag />
      </div>
    </section>
  );
}
