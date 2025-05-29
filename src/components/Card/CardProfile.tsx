import imageBg from '../../assets/images/img-bg.png';

export const CardProfile = () => {
  return (
    <section className="w-full sm:w-[368px] min-h-[427px] bg-amber-600 rounded-2xl">
        <div className="">
            <img src={imageBg} alt="" className='w-full h-[147px] object-cover' />
        </div>
    </section>
  )
}
