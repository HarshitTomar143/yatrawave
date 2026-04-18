export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <video
        className="pointer-events-none fixed inset-0 -z-20 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/back.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-slate-950/45" />


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
            href="https://www.instagram.com/yatrawave.in?igsh=c3pwaDV1d3EyeG56"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/15 sm:w-auto sm:px-4 sm:py-2"
          >
            <img src="/instagram.svg" alt="Instagram" className="h-4 w-4" />
            Instagram
          </a>
          <a
            href=" https://wa.me/message/O76Y3AYJ5CO5J1"
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

      <section className="relative bg-slate-950/35 py-16 px-6 backdrop-blur-md sm:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-lg backdrop-blur-md sm:p-10">
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/60">About Us</p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Travel Company</h2>
              <p className="mt-5 text-base leading-8 text-white/80 sm:text-lg">
                Yatra Wave is a passionate travel company dedicated to creating memorable and hassle-free journeys for every traveler.
                We specialize in curated trips, group tours, and customized travel experiences across India&apos;s most beautiful destinations.
              </p>
              <p className="mt-4 text-base leading-8 text-white/80 sm:text-lg">
                Whether it&apos;s adventure, relaxation, or spiritual travel, we ensure comfort, safety, and affordability in every trip.
                Our goal is to turn your travel dreams into reality with well-planned itineraries and seamless service.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-lg backdrop-blur-md">
                <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/60">Vision</p>
                <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
                <p className="mt-4 text-white/80 leading-8">
                  To become a trusted and leading travel brand that inspires people to explore the world, creating unforgettable journeys
                  filled with comfort, adventure, and meaningful experiences.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-lg backdrop-blur-md">
                <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/60">Mission</p>
                <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
                <p className="mt-4 text-white/80 leading-8">
                  To provide affordable, well-planned, and hassle-free travel experiences by offering quality services, personalized trips,
                  and reliable support so every customer enjoys a smooth and memorable journey with Yatra Wave.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-8 text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/60">Our Service</p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">What We Offer</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Customized Travel Packages',
                  text: 'Tailored itineraries for solo, family, or group trips.'
                },
                {
                  title: 'Group Tours & Corporate Travel',
                  text: 'Special services for business and large groups.'
                },
                {
                  title: 'Adventure and Luxury Travel',
                  text: 'From trekking expeditions to 5-star resorts.'
                }
              ].map((service) => (
                <div key={service.title} className="rounded-3xl border border-white/10 bg-white/10 p-7 shadow-lg backdrop-blur-md">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-white/75 leading-7">{service.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/60">Popular Destinations</p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Places</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: 'Manali', detail: 'Snow, scenic valleys, and mountain escapes.' },
                { name: 'Udaipur', detail: 'Palaces, lakes, and royal heritage.' },
                { name: 'Kasol', detail: 'Relaxed river views and Himalayan vibes.' },
                { name: 'Leh Ladakh', detail: 'High-altitude adventure and striking landscapes.' }
              ].map((destination) => (
                <div key={destination.name} className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-md">
                  <p className="text-sm uppercase tracking-[0.35em] text-white/55">Destination</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{destination.name}</h3>
                  <p className="mt-3 text-white/75 leading-7">{destination.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/60">Types of Travel We Offer</p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Choose Your Journey</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                'Adventure Travel',
                'Cultural Travel',
                'Luxury Travel',
                'Family Travel',
                'Beach Getaways'
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-6 text-center shadow-lg backdrop-blur-md">
                  <p className="text-lg font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-lg backdrop-blur-md sm:p-10">
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/60">Travel Responsibility</p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Commitment</h2>
              <p className="mt-5 text-white/80 leading-8">
                At Yatra Wave, we are committed to providing safe, reliable, and enjoyable travel experiences. We ensure proper planning,
                verified accommodations, and smooth coordination throughout the journey.
              </p>
              <p className="mt-4 text-white/80 leading-8">
                However, we are not responsible for any delays, cancellations, or changes caused by natural events, government restrictions,
                weather conditions, or unforeseen circumstances. Travelers are advised to follow all safety guidelines, carry valid documents,
                and cooperate with the team during the trip.
              </p>
              <p className="mt-4 text-white/80 leading-8">
                Our goal is to make your journey comfortable and memorable while maintaining transparency and trust.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-lg backdrop-blur-md sm:p-10">
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/60">Next Adventure</p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Let&apos;s Plan Your Trip</h2>
              <div className="mt-6 space-y-4 text-white/80">
                <p>Delhi, India</p>
                <p>+91 9220481007</p>
                <p>Bookings@yatrawave.com</p>
                <p>www.yatrawave.com</p>
              </div>
              <div className="mt-8 flex gap-4">
                <a
                  href="https://www.instagram.com/yatrawave.in?igsh=c3pwaDV1d3EyeG56"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <img src="/instagram.svg" alt="Instagram" className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <img src="/whatsapp.svg" alt="WhatsApp" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 bg-slate-950/80 py-8 px-6 text-center text-white/70 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p>&copy; 2026 Yatra Wave. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
