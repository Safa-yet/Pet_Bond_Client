

import GoogleLogin from '@/Component/Authnetication Pages/GoogleLogin';
import SignupForm from '@/Component/Authnetication Pages/SignupForm';
import Image from 'next/image';

const RegisterPage = () => {

  return (
    <div className="bg-background container mx-auto text-on-background min-h-screen flex flex-col overflow-x-hidden">
      {/* MAIN */}
      <main className="flex flex-1 min-h-screen">
 {/* left SIDE */}
        <section className="w-full lg:w-1/2 bg-surface-container-lowest flex items-center justify-center px-5 md:px-12 py-14">

          <div className="w-full max-w-md">

            {/* MOBILE LOGO */}
            <div className="lg:hidden flex items-center gap-3 mb-10">
              <div className="w-11 h-11 rounded-full bg-pri flex items-center justify-center">
                
              </div>

              <h2 className="text-2xl font-extrabold text-primary">
                Maw Care
              </h2>
            </div>

            {/* TITLE */}
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
                Join the Family
              </h1>

              <p className="text-on-surface-variant text-base leading-relaxed">
                Begin your journey to finding a lifelong companion today.
              </p>
            </div>

            {/* FORM */}
            <SignupForm />

            {/* DIVIDER */}
            <div className="flex items-center gap-4 my-10">
              <div className="flex-1 border-t border-outline-variant/30"></div>

              <span className="text-sm font-semibold text-outline uppercase">
                Or Continue With
              </span>

              <div className="flex-1 border-t border-outline-variant/30"></div>
            </div>

            {/* SOCIAL LOGIN */}
          <GoogleLogin></GoogleLogin>

            {/* LOGIN */}
            <div className="mt-10 text-center">
              <p className="text-on-surface-variant">
                Already have an account?{' '}
                <a
                  href="/signin"
                  className="text-secondary font-bold hover:underline"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </section>
        {/* right SIDE */}
        <section className="hidden lg:flex lg:w-1/2 relative bg-pri/90 overflow-hidden items-center justify-center rounded-4xl ">

          {/* BLOBS */}
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-pri rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-40 animate-pulse" />

          <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-secondary-container rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-30 animate-float" />

          {/* LOGO */}
          <div className="absolute top-10 left-10 z-20">
            <h2 className="text-3xl font-extrabold text-on-primary-fixed">
              Maw Care
            </h2>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center justify-center px-10">

            <div className="relative w-full max-w-[520px] aspect-square rounded-[40px] overflow-hidden shadow-2xl border-[6px] border-white">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE-JBak88F2kj8ekeI-bCA8AMEIa_muSP4_mZfDON_2ZD-kpo6y6OsdusBCfiA3nY-p1UApC0E_V1ThycNoB1sGX8OtZ2WcfV1Gyp8ME18hBjOOiguqSsjgO4B5054OEReRA1VtR95JwdnIr0nweRx73rLZsdTdMFcZfqovDi7NLPPJOEVBfNq_X4wGKfMJ533Tu93OyTpypKdYsBzeKxY1uDi6HOaELUcr5F1muDw0flLJ9Naf9CtQSRlrT6ZpoiW0Jnq_9s4SK8z"
                alt="Pets"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center max-w-md mt-10">
              <h1 className="text-5xl font-extrabold text-on-primary-fixed leading-tight mb-5">
                Every Maw Deserves a Home
              </h1>

              <p className="text-lg text-on-primary-fixed-variant leading-relaxed opacity-90">
                Join our community of heart-first pet lovers and help us bridge
                the gap between shelter and family.
              </p>
            </div>
          </div>
        </section>

       
      </main>

      {/* FOOTER */}
      

      {/* STYLE
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-20px);
          }
        }
      `}</style> */}
    </div>
  );
};

export default RegisterPage;