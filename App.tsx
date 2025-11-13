import React, { useState, useCallback } from 'react';
import { Page, View, User } from './types';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import CompetitionsPage from './components/pages/CompetitionsPage';
import ProjectsPage from './components/pages/ProjectsPage';
import SuccessCasesPage from './components/pages/SuccessCasesPage';
import ResourcesPage from './components/pages/ResourcesPage';
import ProjectDetailPage from './components/pages/ProjectDetailPage';
import SuccessCaseDetailPage from './components/pages/SuccessCaseDetailPage';
import LoginPage from './components/pages/LoginPage';
import ProfilePage from './components/pages/ProfilePage';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<View>({ page: Page.HOME });
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    const navigate = useCallback((page: Page, id?: number) => {
        setCurrentView({ page, id });
        window.scrollTo(0, 0);
    }, []);

    const handleLogin = (user: User) => {
        setCurrentUser(user);
        navigate(Page.HOME);
    };

    const handleLogout = () => {
        setCurrentUser(null);
        navigate(Page.HOME);
    };

    const renderContent = () => {
        switch (currentView.page) {
            case Page.HOME:
                return <HomePage navigate={navigate} />;
            case Page.COMPETITIONS:
                return <CompetitionsPage />;
            case Page.PROJECTS:
                return <ProjectsPage navigate={navigate} />;
            case Page.PROJECT_DETAIL:
                return <ProjectDetailPage projectId={currentView.id!} navigate={navigate} currentUser={currentUser} />;
            case Page.SUCCESS_CASES:
                return <SuccessCasesPage navigate={navigate} />;
            case Page.SUCCESS_CASE_DETAIL:
                return <SuccessCaseDetailPage caseId={currentView.id!} navigate={navigate} />;
            case Page.RESOURCES:
                return <ResourcesPage />;
            case Page.LOGIN:
                return <LoginPage onLogin={handleLogin} />;
            case Page.PROFILE:
                return <ProfilePage user={currentUser!} onLogout={handleLogout} />;
            default:
                return <HomePage navigate={navigate} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header navigate={navigate} currentUser={currentUser} onLogout={handleLogout} />
            <main className="flex-grow">
                {renderContent()}
            </main>
            <Footer />
        </div>
    );
};

export default App;