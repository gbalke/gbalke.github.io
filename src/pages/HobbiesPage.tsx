export function HobbiesPage() {
  return (
    <div className="px-6 py-16 md:px-12 md:py-20" style={{ scrollMarginTop: '60px' }}>
      <div className="mx-auto max-w-[700px]">
        <h1 className="text-center font-['Roboto'] text-[26pt] font-bold leading-[1.5] text-[#537593]">
          Hobbies
        </h1>

        {/* Programming */}
        <section className="mt-12">
          <h2 className="font-['Roboto'] text-[18pt] font-bold leading-[1.56] text-[#537593]">
            Programming
          </h2>
          <p className="mt-4 font-['Open_Sans'] text-[12pt] leading-[1.56] text-[#212121]">
            My first programming experience was within the{' '}
            <a
              href="https://en.wikipedia.org/wiki/GameMaker_Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#476581] underline underline-offset-2 transition-colors hover:text-[#2c5d85]"
            >
              GameMaker
            </a>{' '}
            (2004) environment. It taught me how to think logically. A few years
            later, I came across what has been and always will be my favorite
            game, Garry's Mod. In this sandbox physics game I learned quite a bit
            about programming and basic mechanical design. These experiences
            propelled me into my interest in computer science and applications in
            robotics.
          </p>
          <p className="mt-4 text-center font-['Open_Sans'] text-[12pt] italic text-[#212121]">
            C++/C - Python - Linux - Git
          </p>
        </section>

        {/* Electronics */}
        <section className="mt-12">
          <h2 className="font-['Roboto'] text-[18pt] font-bold leading-[1.56] text-[#537593]">
            Electronics
          </h2>
          <p className="mt-4 font-['Open_Sans'] text-[12pt] leading-[1.56] text-[#212121]">
            I began my first standalone project in 2008 with an Audio Amplifier,
            for which I then built a homemade speaker. Through these projects I
            discovered the field of electrical engineering.{' '}
            <span className="text-[#476581] underline underline-offset-2">
              Natcar
            </span>{' '}
            and{' '}
            <span className="text-[#476581] underline underline-offset-2">
              Micromouse
            </span>{' '}
            were my first two serious projects, followed by my{' '}
            <span className="text-[#476581] underline underline-offset-2">
              research
            </span>
            .
          </p>
          <p className="mt-4 font-['Open_Sans'] text-[12pt] leading-[1.56] text-[#212121]">
            As an offshoot project of my research, I have continued developing
            the open source motor controllers used in the project.
          </p>
          <p className="mt-4 text-center font-['Open_Sans'] text-[12pt] italic text-[#212121]">
            Kicad - Cadence
          </p>
        </section>

        {/* Mechanical */}
        <section className="mt-12">
          <h2 className="font-['Roboto'] text-[18pt] font-bold leading-[1.56] text-[#537593]">
            Mechanical
          </h2>
          <p className="mt-4 font-['Open_Sans'] text-[12pt] leading-[1.56] text-[#212121]">
            I've had to make random parts for projects and over the years I would
            say one of the most valuable skills to develop is simple mechanical
            CAD knowledge. Being able to throw together a sensor mount or vehicle
            chassis and print it up in a few hours is a great experience and
            allows someone without a whole lot of money to create anything they
            can imagine!
          </p>
          <p className="mt-4 text-center font-['Open_Sans'] text-[12pt] italic text-[#212121]">
            Inventor - Fusion 360 - OnShape
          </p>
        </section>
      </div>
    </div>
  );
}
