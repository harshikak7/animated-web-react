import React from 'react'

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#111111] text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">

        <p className="uppercase tracking-[0.4em] text-sm text-neutral-500 mb-6">
          Contact
        </p>

        <h1 className="text-5xl md:text-8xl font-[font2] uppercase leading-none">
          Let's Connect
        </h1>

        <p className="mt-8 text-neutral-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
          This page is currently under construction. I'm working on creating a
          better way to connect. It'll be available very soon.
        </p>

        <div className="mt-14 flex justify-center">
          <div className="h-px w-32 bg-neutral-700"></div>
        </div>

        <p className="mt-6 text-neutral-500 text-sm uppercase tracking-[0.3em]">
          Coming Soon
        </p>

      </div>
    </section>
  );
};

export default Contact;