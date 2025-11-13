
import React, { useState } from 'react';
import { SUCCESS_CASES } from '../../constants';
import { Page } from '../../types';
import { Award, Filter } from 'lucide-react';

interface SuccessCasesPageProps {
    navigate: (page: Page, id: number) => void;
}

const SuccessCasesPage: React.FC<SuccessCasesPageProps> = ({ navigate }) => {
    // For simplicity, we'll just show all cases. Filtering could be added similarly to ProjectsPage.
    const [cases] = useState(SUCCESS_CASES);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-800">成功案例展示</h1>
                <p className="mt-2 text-lg text-gray-600">学习获奖经验，借鉴成功模式</p>
                <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>
            
            {/* Filtering UI could be added here */}

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                {cases.map(caseItem => (
                    <div key={caseItem.id} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
                        <div className="p-6 flex-grow">
                             <div className="flex items-center text-yellow-500 font-bold mb-2">
                                <Award className="w-6 h-6 mr-2" />
                                <span>{caseItem.award}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">{caseItem.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{caseItem.competition} - {caseItem.year}</p>
                            <p className="text-gray-600 mt-4 flex-grow">{caseItem.summary}</p>
                        </div>
                        <div className="p-6 bg-gray-50 border-t">
                            <button
                                onClick={() => navigate(Page.SUCCESS_CASE_DETAIL, caseItem.id)}
                                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                查看完整分享
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuccessCasesPage;
