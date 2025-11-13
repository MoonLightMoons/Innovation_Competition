
import React, { useState } from 'react';
import { PROJECTS } from '../../constants';
import { Page } from '../../types';
import { Filter } from 'lucide-react';

interface ProjectsPageProps {
    navigate: (page: Page, id: number) => void;
}

const projectCategories = ['全部', '创新大赛', '挑战杯', '专业技能竞赛'];

const ProjectsPage: React.FC<ProjectsPageProps> = ({ navigate }) => {
    const [activeCategory, setActiveCategory] = useState('全部');

    const filteredProjects = activeCategory === '全部'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-800">项目广场</h1>
                <p className="mt-2 text-lg text-gray-600">发现创新项目，寻找灵感，加入团队</p>
                <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="mb-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <div className="flex items-center text-gray-700 font-medium">
                    <Filter className="w-5 h-5 mr-2" />
                    <span>筛选项目:</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                    {projectCategories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${activeCategory === category ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-blue-100'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                    <div key={project.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
                        <div className="p-6 flex-grow">
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{project.category}</span>
                            <h3 className="text-xl font-bold text-gray-800 mt-2">{project.name}</h3>
                            <p className="text-gray-600 mt-2 flex-grow">{project.description}</p>
                        </div>
                        <div className="p-6 bg-gray-50 border-t">
                            <button
                                onClick={() => navigate(Page.PROJECT_DETAIL, project.id)}
                                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                查看详情
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
