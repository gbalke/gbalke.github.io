import { useState } from 'react';
import { Nav } from '@/components/Nav';
import type { Page } from '@/components/Sidebar';
import { HomePage } from '@/pages/HomePage';
import { HobbiesPage } from '@/pages/HobbiesPage';
import { BerkeleyOpenArmsPage } from '@/pages/BerkeleyOpenArmsPage';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white text-[#212121]">
      {currentPage === 'home' && (
        <HomePage currentPage={currentPage} onNavigate={handleNavigate} />
      )}
      {currentPage !== 'home' && (
        <>
          <Nav currentPage={currentPage} onNavigate={handleNavigate} />
          {currentPage === 'hobbies' && <HobbiesPage />}
          {currentPage === 'berkeley-open-arms' && <BerkeleyOpenArmsPage />}
        </>
      )}
    </div>
  );
}

export default App;
