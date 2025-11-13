import React from 'react';
import { User } from '../../types';
import { Mail, User as UserIcon, Book, LogOut } from 'lucide-react';

interface ProfilePageProps {
    user: User;
    onLogout: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user, onLogout }) => {
    if (!user) {
        return <div className="text-center py-20">请先登录。</div>;
    }
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                    <div className="flex flex-col items-center text-center">
                        <img className="w-24 h-24 rounded-full" src={user.avatarUrl} alt={user.name} />
                        <h1 className="mt-4 text-3xl font-bold text-gray-800">{user.name}</h1>
                    </div>
                    <div className="mt-8 border-t border-gray-200 pt-8">
                        <h2 className="text-lg font-semibold text-gray-700">账户信息</h2>
                        <dl className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <dt className="flex items-center text-sm font-medium text-gray-500 w-24">
                                    <UserIcon className="h-5 w-5 mr-2" />
                                    <span>用户名</span>
                                </dt>
                                <dd className="ml-4 text-sm text-gray-900">{user.name}</dd>
                            </div>
                             <div className="flex items-center">
                                <dt className="flex items-center text-sm font-medium text-gray-500 w-24">
                                    <Mail className="h-5 w-5 mr-2" />
                                    <span>邮箱</span>
                                </dt>
                                <dd className="ml-4 text-sm text-gray-900">{user.email}</dd>
                            </div>
                             <div className="flex items-center">
                                <dt className="flex items-center text-sm font-medium text-gray-500 w-24">
                                    <Book className="h-5 w-5 mr-2" />
                                    <span>专业</span>
                                </dt>
                                <dd className="ml-4 text-sm text-gray-900">{user.major}</dd>
                            </div>
                        </dl>
                    </div>
                     <div className="mt-8">
                        <button
                            onClick={onLogout}
                            className="w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            <LogOut className="h-5 w-5 mr-2" />
                            退出登录
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;