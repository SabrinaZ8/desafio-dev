import imageBg from '../../assets/images/img-bg.png';
import imageProfile from '../../assets/images//profile-img.jpeg';
import { SkillTag } from './SkillTag';

export const CardProfile = () => {
  return (
    <section className="section-card">
      <div className="h-[147px] relative">
        <img src={imageBg} alt="" className="w-full h-full object-cover rounded-t-2xl" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-48px]">
          <img
            src={imageProfile}
            alt=""
            className="w-24 h-24 box-content object-cover rounded-full border-6 border-[#101828]"
          />
        </div>
      </div>
      <div className="flex flex-custom text-center text-lg/tight">
        <div className="text-white/70 mt-16 flex flex-custom">
          <h1 className="text-white font-bold text-2xl/tight">Sabrina Souza</h1>
          <h2 className="font-bold">Desenvolvedora Front-End</h2>
          <p className="italic font-inter my-6 font-light">
            Cria Interfaces Bonitas, <br />Rápidas e Intuitivas.
          </p>
        </div>
        <SkillTag />
      </div>
    </section>
  );
}
