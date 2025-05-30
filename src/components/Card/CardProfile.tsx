import imageBg from '../../assets/images/img-bg.png';
import userImgDeafult from '../../assets/images/user-img-default.png';
import { SkillTag } from './SkillTag';
import type { CardProfileProps } from './types/index';

export const CardProfile = ({nome, sobrenome, profissao, descricao, imagemPerfil, skills}:CardProfileProps) => {
  return (
    <section className="section-card">
      <div className="h-[147px] relative">
        <img src={imageBg} alt="" className="w-full h-full object-cover rounded-t-2xl" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-48px]">
          <img
            src={imagemPerfil || userImgDeafult}
            alt={`Foto de perfil de ${nome} ${sobrenome}`}
            className="w-24 h-24 box-content object-cover rounded-full border-6 border-[#101828]"
          />
        </div>
      </div>
      <div className="flex flex-custom text-center text-lg/tight">
        <div className="text-white/70 mt-16 flex flex-custom">
          <h1 className="text-white font-bold text-2xl/tight">{`${nome} ${sobrenome}`}</h1>
          <h2 className="font-bold">{profissao}</h2>
          <p className="italic font-inter my-6 font-light w-3/4 mx-1.5">
            {descricao}
          </p>
        </div>
        <SkillTag skills={skills}/>
      </div>
    </section>
  );
}
