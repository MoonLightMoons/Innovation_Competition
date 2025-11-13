
import React from 'react';
import { Layers3 } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center md:order-1 md:justify-start">
                         <a href="#" className="flex items-center space-x-2 text-blue-600">
                            <Layers3 className="w-8 h-8" />
                            <span className="text-xl font-bold">项目孵化平台</span>
                        </a>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-2">
                        <p className="text-center text-base text-gray-500">
                            &copy; {new Date().getFullYear()} 学科竞赛项目孵化平台. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
