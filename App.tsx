import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { ProjectsBackup } from './pages/ProjectsBackup';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Knowledge } from './pages/Knowledge';
import { Law } from './pages/Law';
import { Tech } from './pages/Tech';
import { TechArticle1 } from './pages/tech/TechArticle1';
import { TechArticle2 } from './pages/tech/TechArticle2';
import { TechArticle3 } from './pages/tech/TechArticle3';
import { WorkComingSoon } from './pages/WorkComingSoon';

// Scroll to top on route change component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/law" element={<Law />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/tech/hello-legal-world" element={<TechArticle1 />} />
          <Route path="/tech/email-to-sheets" element={<TechArticle2 />} />
          <Route path="/tech/trademark-generator" element={<TechArticle3 />} />
          
          {/* Work Routes - Main is now Coming Soon, Backup is Original */}
          <Route path="/projects" element={<WorkComingSoon />} />
          <Route path="/projects-backup" element={<ProjectsBackup />} />

          <Route path="/work-coming-soon" element={<WorkComingSoon />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;