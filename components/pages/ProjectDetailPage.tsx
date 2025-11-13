import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../../constants';
import { Page, Comment, User } from '../../types';
import { ThumbsUp, MessageCircle, GitBranch, Award, Target, Settings, Code, Lightbulb, Users, Plus, Send, LogIn } from 'lucide-react';

interface ProjectDetailPageProps {
    projectId: number;
    navigate: (page: Page, id?: number) => void;
    currentUser: User | null;
}

const ProjectSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
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

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projectId, navigate, currentUser }) => {
    const project = PROJECTS.find(p => p.id === projectId);
    const [comments, setComments] = useState<Comment[]>(project?.comments || []);
    const [newCommentText, setNewCommentText] = useState('');
    
    const mostValuableComment = useMemo(() => {
        if (!comments.length) return null;
        return comments.reduce((max, comment) => comment.votes > max.votes ? comment : max, comments[0]);
    }, [comments]);

    const handleVote = (commentId: number) => {
        setComments(comments.map(c => c.id === commentId ? { ...c, votes: c.votes + 1 } : c));
    };
    
    const handleAddComment = (e: React.FormEvent) => {
        e.preventDefault();
        if(!newCommentText.trim() || !currentUser) return;
        const newComment: Comment = {
            id: Date.now(),
            author: currentUser.name,
            avatarUrl: currentUser.avatarUrl,
            text: newCommentText,
            votes: 0,
        };
        setComments([newComment, ...comments]);
        setNewCommentText('');
    };

    if (!project) {
        return <div className="text-center py-20">项目未找到</div>;
    }

    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Project Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{project.category}</span>
                    <h1 className="text-4xl font-extrabold text-gray-800 mt-2">{project.name}</h1>
                    <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">{project.description}</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column: Project Details */}
                    <div className="lg:col-span-2 space-y-8">
                        <ProjectSection title="项目的目的" icon={<Target className="w-6 h-6 mr-3 text-blue-500" />}>
                            <p>{project.purpose}</p>
                        </ProjectSection>
                        <ProjectSection title="项目的实际运用" icon={<Settings className="w-6 h-6 mr-3 text-blue-500" />}>
                           <p>{project.application}</p>
                        </ProjectSection>
                        <ProjectSection title="项目的技术难点" icon={<Code className="w-6 h-6 mr-3 text-blue-500" />}>
                             <p>{project.techDifficulties}</p>
                        </ProjectSection>
                        <ProjectSection title="项目的核心亮点" icon={<Lightbulb className="w-6 h-6 mr-3 text-blue-500" />}>
                            <p>{project.highlights}</p>
                        </ProjectSection>

                        {/* Comments Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center"><MessageCircle className="w-6 h-6 mr-3 text-blue-500"/>评论区与协作改进</h3>
                            
                            {currentUser ? (
                                <form onSubmit={handleAddComment} className="mb-6">
                                    <div className="flex items-start space-x-4">
                                        <img src={currentUser.avatarUrl} alt={currentUser.name} className="w-10 h-10 rounded-full" />
                                        <div className="flex-1">
                                            <textarea
                                                value={newCommentText}
                                                onChange={(e) => setNewCommentText(e.target.value)}
                                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                                rows={3}
                                                placeholder="发表你的建议或评论..."
                                            ></textarea>
                                            <div className="mt-2 flex justify-end items-center">
                                                <button type="button" className="text-gray-500 hover:text-blue-600 p-2 rounded-full">
                                                  <Plus size={20}/>
                                                  <span className="sr-only">添加图片</span>
                                                </button>
                                                <button type="submit" className="ml-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
                                                   <Send size={16} className="mr-2"/> 发表评论
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            ) : (
                                <div className="text-center border-2 border-dashed border-gray-300 rounded-lg p-6 my-6">
                                    <p className="text-gray-600">请登录后发表评论或提出改进建议。</p>
                                    <button onClick={() => navigate(Page.LOGIN)} className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center mx-auto">
                                        <LogIn size={16} className="mr-2"/> 前往登录
                                    </button>
                                </div>
                            )}
                            
                            {/* Comments List */}
                            <div className="space-y-6">
                                {comments.map(comment => (
                                    <div key={comment.id} className={`p-4 rounded-lg transition-all ${mostValuableComment?.id === comment.id ? 'bg-yellow-50 border-2 border-yellow-300' : 'bg-gray-50'}`}>
                                        {mostValuableComment?.id === comment.id && (
                                            <div className="flex items-center text-sm font-bold text-yellow-600 mb-2">
                                                <Award className="w-4 h-4 mr-1" /> 最有价值建议
                                            </div>
                                        )}
                                        <div className="flex items-start space-x-4">
                                            <img src={comment.avatarUrl} alt={comment.author} className="w-10 h-10 rounded-full" />
                                            <div className="flex-1">
                                                <p className="font-semibold text-gray-800">{comment.author}</p>
                                                <p className="text-gray-600 mt-1">{comment.text}</p>
                                                {comment.imageUrl && <img src={comment.imageUrl} alt="comment attachment" className="mt-2 rounded-lg max-w-sm"/>}
                                                <div className="mt-2 flex items-center">
                                                    <button onClick={() => handleVote(comment.id)} className="flex items-center text-sm text-gray-500 hover:text-blue-600">
                                                        <ThumbsUp className="w-4 h-4 mr-1" />
                                                        <span>{comment.votes}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Team & Actions */}
                    <div className="space-y-8">
                         {/* Team Members */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                             <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center"><Users className="w-6 h-6 mr-3 text-blue-500"/>团队成员</h3>
                            <div className="space-y-4">
                                {project.team.map(member => (
                                    <div key={member.id} className="flex items-center space-x-4">
                                        <img src={member.avatarUrl} alt={member.name} className="w-12 h-12 rounded-full" />
                                        <div>
                                            <p className="font-semibold text-gray-800">{member.name}</p>
                                            <p className="text-sm text-gray-500">{member.major}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                             <button 
                                onClick={() => { if(!currentUser) navigate(Page.LOGIN) }}
                                className={`w-full mt-6 font-semibold py-2 px-4 rounded-lg transition duration-300 ${currentUser ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                                disabled={!currentUser}
                             >
                                {currentUser ? '一键申请加入' : '登录后可申请'}
                            </button>
                        </div>
                        
                        {/* Version History */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center"><GitBranch className="w-6 h-6 mr-3 text-blue-500"/>版本改进追踪</h3>
                            <ul className="space-y-4">
                                {project.versions.map(v => (
                                    <li key={v.id}>
                                        <div className="flex justify-between items-baseline">
                                            <p className="font-semibold text-blue-600">{v.version}</p>
                                            <p className="text-sm text-gray-400">{v.date}</p>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-1">{v.changes}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage;