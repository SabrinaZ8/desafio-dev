import imageBg from '../../assets/images/img-bg.png';
import imageProfile from '../../assets/images//profile-img.jpeg';

export const CardProfile = () => {
  return (
    <section className="w-full sm:w-[368px] min-h-[427px] bg-[radial-gradient(at_right_bottom,_#80A9F9,_#101828_35%)] rounded-2xl">
        <div className="h-[147px] relative">
            <img src={imageBg} alt="" className="w-full h-full object-cover" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-48px]">
                <img src={imageProfile} alt="" className='w-24 h-24 object-cover rounded-full' />
            </div>
        </div>
    </section>
  )
}
