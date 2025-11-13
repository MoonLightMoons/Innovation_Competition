
import React, { useState } from 'react';
import { RESOURCES } from '../../constants';
import { Resource } from '../../types';
import { FileText, Download } from 'lucide-react';

const resourceCategories = ['全部', '官方文件', '历年真题', '评审标准'];

const ResourcesPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('全部');

    const filteredResources = activeCategory === '全部'
        ? RESOURCES
        : RESOURCES.filter(r => r.category === activeCategory);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-800">资源中心</h1>
                <p className="mt-2 text-lg text-gray-600">备赛资料一网打尽，助力你的竞赛之路</p>
                <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="mb-8 flex justify-center flex-wrap gap-2">
                {resourceCategories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${activeCategory === category ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-blue-100'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
                {filteredResources.map(resource => (
                    <div key={resource.id} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                               <FileText size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">{resource.title}</h3>
                                <p className="text-gray-600 text-sm">{resource.description}</p>
                            </div>
                        </div>
                        <a href={resource.url} className="ml-4 flex-shrink-0 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center">
                            <Download size={16} className="mr-2" />
                            下载
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResourcesPage;
