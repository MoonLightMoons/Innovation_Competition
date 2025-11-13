import React, { useState, useRef, useEffect } from 'react';
import { NAV_ITEMS } from '../../constants';
import { Page, User } from '../../types';
import { Layers3, Menu, X, LogIn, User as UserIcon, LogOut } from 'lucide-react';

interface HeaderProps {
    navigate: (page: Page) => void;
    currentUser: User | null;
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ navigate, currentUser, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const profileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
                setIsProfileMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleProfileNavigation = (page: Page) => {
        navigate(page);
        setIsProfileMenuOpen(false);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" onClick={(e) => { e.preventDefault(); navigate(Page.HOME); }} className="flex items-center space-x-2 text-blue-600">
                            <Layers3 className="w-8 h-8" />
                            <span className="text-xl font-bold">项目孵化平台</span>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <nav className="hidden md:flex md:space-x-8">
                            {NAV_ITEMS.map((item) => (
                                <a
                                    key={item.page}
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); navigate(item.page as Page); }}
                                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                        <div className="hidden md:block border-l border-gray-200 ml-6 pl-6">
                            {currentUser ? (
                                <div className="relative" ref={profileMenuRef}>
                                    <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} className="flex items-center focus:outline-none">
                                        <img src={currentUser.avatarUrl} alt={currentUser.name} className="w-9 h-9 rounded-full" />
                                    </button>
                                    {isProfileMenuOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                                            <a href="#" onClick={(e) => { e.preventDefault(); handleProfileNavigation(Page.PROFILE); }} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                <UserIcon className="mr-2 h-4 w-4" /> 个人资料
                                            </a>
                                            <a href="#" onClick={(e) => { e.preventDefault(); onLogout(); setIsProfileMenuOpen(false); }} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                <LogOut className="mr-2 h-4 w-4" /> 退出登录
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button onClick={() => navigate(Page.LOGIN)} className="flex items-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                                    <LogIn size={16} className="mr-2" /> 登录 / 注册
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-blue-600">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.page}
                                href="#"
                                onClick={(e) => { e.preventDefault(); navigate(item.page as Page); setIsMenuOpen(false); }}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-blue-600"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="border-t border-gray-200 mt-2 pt-2">
                             {currentUser ? (
                                <>
                                    <a href="#" onClick={(e) => { e.preventDefault(); navigate(Page.PROFILE); setIsMenuOpen(false); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-blue-600">个人资料</a>
                                    <a href="#" onClick={(e) => { e.preventDefault(); onLogout(); setIsMenuOpen(false); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-blue-600">退出登录</a>
                                </>
                            ) : (
                                <a href="#" onClick={(e) => { e.preventDefault(); navigate(Page.LOGIN); setIsMenuOpen(false); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-blue-600">登录 / 注册</a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;