const blueRobotImage = '/blue.jpg';

const mediaCoverage = [
  {
    href: 'https://mashable.com/video/blue-robotic-arm-folding-towel-making-coffee',
    img: '/mashable.png',
    alt: 'Mashable coverage of Blue robotic arm',
  },
  {
    href: 'https://www.wired.com/story/blue-the-robot/',
    img: '/wired.png',
    alt: 'Wired coverage of Blue the robot',
  },
  {
    href: 'https://www.theverge.com/2019/4/9/18295029/robot-ai-blue-uc-berkeley-cheap-safe-humans',
    img: '/verge.png',
    alt: 'The Verge coverage of Blue robot',
  },
];

export function BerkeleyOpenArmsPage() {
  return (
    <div className="px-6 py-16 md:px-12 md:py-20" style={{ scrollMarginTop: '60px' }}>
      <div className="mx-auto max-w-[700px]">
        <h1 className="text-center font-['Roboto'] text-[26pt] font-bold leading-[1.5] text-[#537593]">
          Berkeley Open Arms
        </h1>

        {/* Main content with image */}
        <section className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="font-['Open_Sans'] text-[12pt] leading-[1.56] text-[#212121]">
              As an undergraduate researcher in Pieter Abbeel's Robot Learning
              Lab, I worked on{' '}
              <a
                href="https://berkeleyopenarms.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#476581] underline underline-offset-2 transition-colors hover:text-[#2c5d85]"
              >
                Blue, a 7-degree-of-freedom low-cost robotic arm
              </a>
              . The project is designed to bring robotics closer to home and
              into research labs across the world with a projected cost of $5000.
            </p>
            <p className="font-['Open_Sans'] text-[12pt] leading-[1.56] text-[#212121]">
              Since June 2017, a total of 13 individuals have contributed to the
              project, designing the robot from the ground up, resulting in a{' '}
              <a
                href="https://arxiv.org/abs/1904.03815"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#476581] underline underline-offset-2 transition-colors hover:text-[#2c5d85]"
              >
                paper
              </a>
              ! The only off-the-shelf components are the brushless motors, making
              the cost of the robot dependent on our component design decisions.
            </p>
            <p className="font-['Open_Sans'] text-[12pt] leading-[1.56] text-[#212121]">
              Over the years, I've worn many hats in the group. My primary role
              was maintaining the motor controller boards which have turned into
              a{' '}
              <a
                href="http://betzdrive.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#476581] underline underline-offset-2 transition-colors hover:text-[#2c5d85]"
              >
                stand-alone open source project
              </a>
              .
            </p>
          </div>
          <div className="flex items-start justify-center">
            <img
              src={blueRobotImage}
              alt="Blue robotic arm"
              className="w-full rounded"
            />
          </div>
        </section>

        {/* Media coverage */}
        <section className="mt-16">
          <h2 className="mb-6 text-center font-['Roboto'] text-[18pt] font-bold leading-[1.56] text-[#537593]">
            Media Coverage
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {mediaCoverage.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden rounded transition-transform hover:scale-[1.02]"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="h-auto w-full rounded object-contain"
                />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
