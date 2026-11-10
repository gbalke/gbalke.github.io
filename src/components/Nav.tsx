import type { Page } from '@/components/Sidebar';

type NavItem = {
  label: string;
  page?: Page;
  href?: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: 'Home', page: 'home' },
  { label: 'Betz Drive', href: 'https://betzdrive.github.io', external: true },
  { label: 'Hobbies', page: 'hobbies' },
  { label: 'Berkeley Open Arms', page: 'berkeley-open-arms' },
];

export function Nav({
  currentPage,
  onNavigate,
}: {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}) {
  const isActive = (item: NavItem) => item.page === currentPage;

  return (
    <nav className="border-b border-[#cccccc] bg-white">
      <ul className="flex flex-wrap items-stretch justify-center">
        {navItems.map((item) => (
          <li key={item.label}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] items-center px-4 md:px-6 font-['Open_Sans'] text-[13pt] text-[#6a6a6a] transition-colors hover:bg-[#f5f5f5] hover:text-[#212121]"
              >
                {item.label}
              </a>
            ) : (
              <button
                onClick={() => onNavigate(item.page!)}
                className={`flex min-h-[44px] items-center px-4 md:px-6 font-['Open_Sans'] text-[13pt] transition-colors hover:bg-[#f5f5f5] hover:text-[#212121] ${
                  isActive(item)
                    ? 'border-b-2 border-[#537593] font-bold text-[#212121]'
                    : 'text-[#6a6a6a]'
                }`}
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
