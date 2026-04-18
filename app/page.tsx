export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/WhatsApp Video 2026-04-18 at 11.23.45 AM.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-slate-950/40" />


      <header className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-3">
          <img src="/yatraWave.jpeg" alt="Yatra Wave logo" className="h-10 w-10 rounded-2xl object-cover sm:h-12 sm:w-12" />
          <div>
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-slate-300 sm:text-xl md:text-2xl">
              yatra wave
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 text-sm sm:w-auto sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/15 sm:w-auto sm:px-4 sm:py-2"
          >
            <img src="/instagram.svg" alt="Instagram" className="h-4 w-4" />
            Instagram
          </a>
          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/15 sm:w-auto sm:px-4 sm:py-2"
          >
            <img src="/whatsapp.svg" alt="WhatsApp" className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </header>

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-120px)] max-w-5xl flex-col items-center justify-center px-6 text-center sm:px-8">
        <p className="mb-6 text-[0.65rem] uppercase tracking-[0.4em] text-slate-300 sm:text-xs">
          travel made effortless
        </p>
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Explore More Spend Less!
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base md:text-lg lg:text-xl">
          Yatra Wave helps you discover unforgettable travel experiences with a clean, modern design and friendly support.
        </p>
      </section>
    </main>
  );
}
