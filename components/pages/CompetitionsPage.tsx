
import React, { useState } from 'react';
import { COMPETITIONS } from '../../constants';
import { Competition } from '../../types';
import { Calendar, Award, Building, BarChart } from 'lucide-react';

const competitionCategories = ['全部', '创新大赛', '挑战杯', '专业技能竞赛'];

const CompetitionCard: React.FC<{ competition: Competition }> = ({ competition }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="p-6">
            <h3 className="text-xl font-bold text-blue-600">{competition.name}</h3>
            <div className="mt-4 space-y-3 text-gray-600">
                <p className="flex items-center"><Building className="w-5 h-5 mr-2 text-blue-500" />主办方: {competition.organizer}</p>
                <p className="flex items-center"><BarChart className="w-5 h-5 mr-2 text-blue-500" />级别: {competition.level}</p>
                <p className="flex items-center"><Award className="w-5 h-5 mr-2 text-blue-500" />奖项设置: {competition.awards}</p>
            </div>
             <div className="mt-4">
                <a href={competition.pastReviewUrl} className="text-sm font-medium text-blue-600 hover:underline">查看往届回顾 →</a>
            </div>
        </div>
        <div className="bg-gray-50 p-6 border-t">
            <h4 className="font-semibold text-gray-700 mb-4 flex items-center"><Calendar className="w-5 h-5 mr-2 text-blue-500"/>关键时间节点</h4>
            <div className="relative border-l-2 border-blue-200 ml-10">
                {competition.timeline.map((item, index) => (
                    <div key={index} className="mb-6 ml-4 timeline-item">
                        <div className="font-semibold text-blue-700">{item.event}</div>
                        <div className="text-sm text-gray-500">{item.date}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const CompetitionsPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('全部');

    const filteredCompetitions = activeCategory === '全部'
        ? COMPETITIONS
        : COMPETITIONS.filter(c => c.category === activeCategory);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-800">重要竞赛信息</h1>
                <p className="mt-2 text-lg text-gray-600">掌握最新竞赛动态，规划你的参赛时间表</p>
                 <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="mb-8 flex justify-center flex-wrap gap-2">
                {competitionCategories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${activeCategory === category ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-blue-100'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredCompetitions.map(competition => (
                    <CompetitionCard key={competition.id} competition={competition} />
                ))}
            </div>
        </div>
    );
};

export default CompetitionsPage;
