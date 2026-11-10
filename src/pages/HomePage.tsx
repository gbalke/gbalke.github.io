import { ChevronDown, Github, Linkedin } from 'lucide-react';
import { Nav } from '@/components/Nav';
import type { Page } from '@/components/Sidebar';

const headerImage = '/cover-photo.jpg';

export function HomePage({
  currentPage,
  onNavigate,
}: {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}) {
  return (
    <div>
      {/* Hero header with climbing image */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={headerImage}
          alt="Rock climber on a granite cliff face at golden hour"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#212121]/50" />

        <a
          href="#about"
          aria-label="Scroll down"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
        >
          <ChevronDown className="h-6 w-6" strokeWidth={1.5} />
        </a>
      </section>

      <Nav currentPage={currentPage} onNavigate={onNavigate} />

      {/* Bio text section */}
      <section
        id="about"
        className="flex flex-col items-center px-6 py-10 text-center"
      >
        <p className="max-w-[600px] font-['Open_Sans'] text-[12pt] leading-[1.56] text-[#212121]">
          BS in Electrical Engineering and Computer Science from the
          University of California, Berkeley - Fall 2019
        </p>
        <p className="mt-4 max-w-[600px] font-['Open_Sans'] text-[12pt] leading-[1.56] text-[#212121]">
          Check out my latest work at{' '}
          <a
            href="https://betzdrive.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#476581] underline underline-offset-2 transition-colors hover:text-[#2c5d85]"
          >
            betzdrive.github.io
          </a>
        </p>

        {/* Social icons */}
        <div className="mt-10 flex items-center justify-center gap-8">
          <a
            href="https://www.github.com/gbalke"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-[100px] w-[100px] items-center justify-center text-[#476581] transition-all hover:scale-105 hover:text-[#2c5d85]"
          >
            <Github className="h-10 w-10" strokeWidth={1.25} />
          </a>
          <a
            href="https://www.linkedin.com/in/~balke/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-[100px] w-[100px] items-center justify-center text-[#476581] transition-all hover:scale-105 hover:text-[#2c5d85]"
          >
            <Linkedin className="h-10 w-10" strokeWidth={1.25} />
          </a>
        </div>
      </section>
    </div>
  );
}
