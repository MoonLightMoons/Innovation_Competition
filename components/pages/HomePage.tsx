
import React from 'react';
import { Page } from '../../types';
import { Rocket, Lightbulb, Users } from 'lucide-react';

interface HomePageProps {
    navigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative bg-blue-600 text-white overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="absolute inset-0 pattern-bg"></div>
                    <div className="relative z-10">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight animate-fade-in-down">
                            科创启航新程，青春逐梦未来
                        </h1>
                        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-blue-100 animate-fade-in-up">
                            一个专为大学生打造的学科竞赛项目孵化与协作平台
                        </p>
                        <div className="mt-10">
                            <button
                                onClick={() => navigate(Page.PROJECTS)}
                                className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300 transform hover:scale-105"
                            >
                                探索项目
                            </button>
                        </div>
                    </div>
                </div>
                {/* Fix: Removed non-standard 'jsx' prop from the <style> tag. The `jsx` prop is specific to styled-jsx (commonly used with Next.js) and is not a valid attribute for a style element in a standard React application. */}
                <style>{`
                    .pattern-bg {
                        background-image: radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px);
                        background-size: 20px 20px;
                        animation: pulse 10s infinite;
                    }
                    @keyframes pulse {
                        0% { opacity: 0.5; }
                        50% { opacity: 1; }
                        100% { opacity: 0.5; }
                    }
                    @keyframes fade-in-down {
                        0% { opacity: 0; transform: translateY(-20px); }
                        100% { opacity: 1; transform: translateY(0); }
                    }
                     @keyframes fade-in-up {
                        0% { opacity: 0; transform: translateY(20px); }
                        100% { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
                    .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.5s forwards; opacity: 0; }
                `}</style>
            </div>

            {/* Mission Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">平台使命</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-8"></div>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600">
                        我们致力于构建一个集竞赛信息、项目展示、团队协作、资源共享于一体的综合性服务平台，旨在激发大学生的创新精神，提升实践能力，为优秀竞赛项目的孵化与成长提供全方位的支持与引导，助力青年学子在科创道路上行稳致远。
                    </p>
                </div>
            </div>

            {/* Features Section */}
             <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold text-gray-800">核心功能</h2>
                         <p className="text-gray-600 mt-2">一站式满足你的竞赛需求</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                                <Rocket size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">项目孵化</h3>
                            <p className="text-gray-600">从一个想法到成熟作品，我们提供全周期支持。</p>
                        </div>
                        <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                               <Lightbulb size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">资源共享</h3>
                            <p className="text-gray-600">海量竞赛资料、成功案例，助你高效备赛。</p>
                        </div>
                         <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">团队协作</h3>
                            <p className="text-gray-600">寻找志同道合的伙伴，共同协作，实现创意。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
