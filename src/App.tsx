/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { AdsterraSocialBar } from './components/AdsterraAd';
import { HomeView } from './views/HomeView';
import { ArticleView } from './views/ArticleView';
import { DestinationsView } from './views/DestinationsView';
import { CategoriesView } from './views/CategoriesView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { LegalView } from './views/LegalView';
import { AdminCMSGuideView } from './views/AdminCMSGuideView';
import { NotFoundView } from './views/NotFoundView';
import { SAMPLE_ARTICLES, SAMPLE_DESTINATIONS } from './data/travelData';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [currentParam, setCurrentParam] = useState<string | undefined>(undefined);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Parse path on initial mount and when popstate occurs
  const syncRouteFromLocation = () => {
    const pathname = window.location.pathname.replace(/^\/|\/$/g, '');
    const parts = pathname.split('/');

    if (!pathname || pathname === '') {
      setCurrentView('home');
      setCurrentParam(undefined);
    } else if (parts[0] === 'article' && parts[1]) {
      setCurrentView('article');
      setCurrentParam(parts[1]);
    } else if (parts[0] === 'destinations') {
      setCurrentView('destinations');
      setCurrentParam(parts[1]);
    } else if (parts[0] === 'articles') {
      setCurrentView('articles');
      setCurrentParam(undefined);
    } else if (parts[0] === 'categories') {
      setCurrentView('categories');
      setCurrentParam(parts[1]);
    } else if (parts[0] === 'about') {
      setCurrentView('about');
      setCurrentParam(undefined);
    } else if (parts[0] === 'contact') {
      setCurrentView('contact');
      setCurrentParam(undefined);
    } else if (parts[0] === 'privacy') {
      setCurrentView('privacy');
      setCurrentParam(undefined);
    } else if (parts[0] === 'terms') {
      setCurrentView('terms');
      setCurrentParam(undefined);
    } else if (parts[0] === 'disclaimer') {
      setCurrentView('disclaimer');
      setCurrentParam(undefined);
    } else if (parts[0] === 'admin-guide') {
      setCurrentView('admin-guide');
      setCurrentParam(undefined);
    } else {
      setCurrentView('404');
      setCurrentParam(undefined);
    }
  };

  useEffect(() => {
    syncRouteFromLocation();

    const handlePopState = () => {
      syncRouteFromLocation();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation handler updating browser history cleanly
  const navigateTo = (view: string, param?: string) => {
    let newPath = '/';
    if (view === 'home') newPath = '/';
    else if (view === 'article' && param) newPath = `/article/${param}`;
    else if (view === 'destinations') newPath = param ? `/destinations/${param}` : '/destinations';
    else if (view === 'articles') newPath = '/articles';
    else if (view === 'categories') newPath = param ? `/categories/${param}` : '/categories';
    else if (view === 'about') newPath = '/about';
    else if (view === 'contact') newPath = '/contact';
    else if (view === 'privacy') newPath = '/privacy';
    else if (view === 'terms') newPath = '/terms';
    else if (view === 'disclaimer') newPath = '/disclaimer';
    else if (view === 'admin-guide') newPath = '/admin-guide';
    else newPath = `/${view}`;

    window.history.pushState({}, '', newPath);
    setCurrentView(view);
    setCurrentParam(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut for Cmd+K / Ctrl+K search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectArticle = (slug: string) => {
    navigateTo('article', slug);
  };

  const handleSelectDestination = (slug: string) => {
    const dest = SAMPLE_DESTINATIONS.find((d) => d.slug === slug);
    if (dest && dest.articleSlug) {
      navigateTo('article', dest.articleSlug);
    } else {
      navigateTo('destinations', slug);
    }
  };

  // Render appropriate view
  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomeView
            articles={SAMPLE_ARTICLES}
            destinations={SAMPLE_DESTINATIONS}
            onSelectArticle={handleSelectArticle}
            onSelectDestination={handleSelectDestination}
            onNavigate={navigateTo}
          />
        );

      case 'article': {
        const article = SAMPLE_ARTICLES.find((a) => a.slug === currentParam) || SAMPLE_ARTICLES[0];
        return (
          <ArticleView
            article={article}
            allArticles={SAMPLE_ARTICLES}
            onSelectArticle={handleSelectArticle}
            onBack={() => navigateTo('home')}
            onNavigate={navigateTo}
          />
        );
      }

      case 'destinations':
        return (
          <DestinationsView
            destinations={SAMPLE_DESTINATIONS}
            onSelectDestination={handleSelectDestination}
            onSelectArticle={handleSelectArticle}
          />
        );

      case 'articles':
        return (
          <CategoriesView
            articles={SAMPLE_ARTICLES}
            onSelectArticle={handleSelectArticle}
            initialCategory="Bangladesh"
          />
        );

      case 'categories':
        return (
          <CategoriesView
            articles={SAMPLE_ARTICLES}
            onSelectArticle={handleSelectArticle}
            initialCategory={currentParam || 'Bangladesh'}
          />
        );

      case 'about':
        return <AboutView onNavigate={navigateTo} />;

      case 'contact':
        return <ContactView />;

      case 'privacy':
        return <LegalView initialTab="privacy" />;

      case 'terms':
        return <LegalView initialTab="terms" />;

      case 'disclaimer':
        return <LegalView initialTab="disclaimer" />;

      case 'admin-guide':
        return <AdminCMSGuideView />;

      default:
        return (
          <NotFoundView
            onNavigate={navigateTo}
            onOpenSearch={() => setSearchModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-slate-800 selection:bg-[#0284c7]/20 selection:text-[#0f2942]">
      {/* Top Header */}
      <Header
        currentView={currentView}
        onNavigate={navigateTo}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main View Area */}
      <div className="flex-1">
        {renderCurrentView()}
      </div>

      {/* Polished Editorial Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Global Quick Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        articles={SAMPLE_ARTICLES}
        destinations={SAMPLE_DESTINATIONS}
        onSelectArticle={handleSelectArticle}
        onSelectDestination={handleSelectDestination}
      />

      {/* Adsterra Non-Intrusive Social Bar Component */}
      <AdsterraSocialBar />
    </div>
  );
}
