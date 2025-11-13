
import React from 'react';
import { SUCCESS_CASES } from '../../constants';
import { Page } from '../../types';
import { BookOpen, Users, Compass, Star, Download } from 'lucide-react';

interface SuccessCaseDetailPageProps {
    caseId: number;
    navigate: (page: Page) => void;
}

const DetailSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <div className="text-gray-600 space-y-2 prose max-w-none">
            {children}
        </div>
    </div>
);

const SuccessCaseDetailPage: React.FC<SuccessCaseDetailPageProps> = ({ caseId }) => {
    const caseItem = SUCCESS_CASES.find(c => c.id === caseId);

    if (!caseItem) {
        return <div className="text-center py-20">案例未找到</div>;
    }

    return (
         <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full">{caseItem.award}</span>
                    <h1 className="text-4xl font-extrabold text-gray-800 mt-2">{caseItem.title}</h1>
                    <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">{caseItem.competition} - {caseItem.year}</p>
                </div>
                
                <div className="space-y-8">
                    <DetailSection title="项目背景与解决方案" icon={<BookOpen className="w-6 h-6 mr-3 text-blue-500"/>}>
                        <h4 className="font-semibold">背景</h4>
                        <p>{caseItem.background}</p>
                         <h4 className="font-semibold mt-4">解决方案</h4>
                        <p>{caseItem.solution}</p>
                    </DetailSection>
                    
                     <DetailSection title="团队故事与竞赛历程" icon={<Users className="w-6 h-6 mr-3 text-blue-500"/>}>
                        <h4 className="font-semibold">团队故事</h4>
                        <p>{caseItem.teamStory}</p>
                         <h4 className="font-semibold mt-4">竞赛历程</h4>
                        <p>{caseItem.journey}</p>
                    </DetailSection>

                     <DetailSection title="获奖心得与经验分享" icon={<Star className="w-6 h-6 mr-3 text-blue-500"/>}>
                        <p>{caseItem.learnings}</p>
                    </DetailSection>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <Compass className="w-6 h-6 mr-3 text-blue-500" />
                            可复用资源库
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {caseItem.resources.map((res, index) => (
                                <a key={index} href={res.url} className="group flex items-center bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                                    <Download className="w-5 h-5 mr-3 text-gray-500 group-hover:text-blue-600" />
                                    <span className="text-gray-700 group-hover:text-blue-700 font-medium">{res.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessCaseDetailPage;
