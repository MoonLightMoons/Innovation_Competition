import { Competition, Project, SuccessCase, Resource, TeamMember, Comment, Version, User } from './types';

export const NAV_ITEMS = [
    { name: '首页', page: 'HOME' },
    { name: '竞赛信息', page: 'COMPETITIONS' },
    { name: '项目广场', page: 'PROJECTS' },
    { name: '成功案例', page: 'SUCCESS_CASES' },
    { name: '资源中心', page: 'RESOURCES' },
];

export const USERS: User[] = [
    { id: 101, name: '林晓东', email: 'user@example.com', major: '软件工程', avatarUrl: 'https://picsum.photos/seed/101/100' },
    { id: 102, name: '王静', email: 'jane.doe@example.com', major: '人工智能', avatarUrl: 'https://picsum.photos/seed/102/100' },
];

export const TEAM_MEMBERS: TeamMember[] = [
    { id: 1, name: '张三', major: '计算机科学', avatarUrl: 'https://picsum.photos/seed/1/100' },
    { id: 2, name: '李四', major: '软件工程', avatarUrl: 'https://picsum.photos/seed/2/100' },
    { id: 3, name: '王五', major: '人工智能', avatarUrl: 'https://picsum.photos/seed/3/100' },
    { id: 4, name: '赵六', major: '数据科学', avatarUrl: 'https://picsum.photos/seed/4/100' }
];

export const COMMENTS: Comment[] = [
    { id: 1, author: '陈教授', avatarUrl: 'https://picsum.photos/seed/10/100', text: '这个项目的技术实现很有新意，但是需要考虑实际应用场景的落地问题。', votes: 15 },
    { id: 2, author: '企业导师A', avatarUrl: 'https://picsum.photos/seed/11/100', text: '建议在用户界面上做得更友好一些，目前的交互逻辑有些复杂。', imageUrl: 'https://picsum.photos/seed/ui/400/200', votes: 8 },
    { id: 3, author: '学长B', avatarUrl: 'https://picsum.photos/seed/12/100', text: '核心算法部分可以尝试用最新的深度学习模型进行优化，性能可能会有提升。', votes: 22 },
];

export const VERSIONS: Version[] = [
    { id: 1, version: 'V1.1', date: '2023-10-15', changes: '根据“最有价值建议”优化了核心算法，性能提升15%。' },
    { id: 2, version: 'V1.0', date: '2023-09-28', changes: '项目初版发布。' },
];

export const COMPETITIONS: Competition[] = [
    {
        id: 1,
        category: '创新大赛',
        name: '中国国际“互联网+”大学生创新创业大赛',
        organizer: '教育部等',
        level: '国家级',
        awards: '金奖、银奖、铜奖',
        pastReviewUrl: '#',
        timeline: [
            { date: '2024-05', event: '校级初赛报名' },
            { date: '2024-06', event: '校级决赛' },
            { date: '2024-08', event: '省级复赛' },
            { date: '2024-10', event: '全国总决赛' },
        ]
    },
    {
        id: 2,
        category: '挑战杯',
        name: '“挑战杯”全国大学生课外学术科技作品竞赛',
        organizer: '共青团中央、中国科协等',
        level: '国家级',
        awards: '特等奖、一等奖、二等奖',
        pastReviewUrl: '#',
        timeline: [
            { date: '2024-03', event: '校内选拔启动' },
            { date: '2024-05', event: '作品提交截止' },
            { date: '2024-07', event: '省级评审' },
            { date: '2024-11', event: '全国终审决赛' },
        ]
    },
    {
        id: 3,
        category: '专业技能竞赛',
        name: '全国大学生电子设计竞赛',
        organizer: '中国电子学会',
        level: '国家级',
        awards: '一等奖、二等奖',
        pastReviewUrl: '#',
        timeline: [
            { date: '2024-06', event: '竞赛报名' },
            { date: '2024-08', event: '集中竞赛（4天3夜）' },
            { date: '2024-09', event: '作品测评' },
            { date: '2024-10', event: '结果公示' },
        ]
    }
];

export const PROJECTS: Project[] = [
    {
        id: 1,
        name: '基于AI的智能助农系统',
        category: '创新大赛',
        description: '利用无人机和图像识别技术，实现对农作物的病虫害智能监测与精准施药。',
        purpose: '提高农业生产效率，减少农药使用，保障粮食安全。',
        application: '可广泛应用于大型农场、农业合作社，为现代农业提供智能化解决方案。',
        techDifficulties: '复杂田间环境下的图像识别准确率、无人机自主导航与避障算法。',
        highlights: '算法模型创新，实现了95%以上的病虫害识别准确率；软硬件一体化设计，成本可控。',
        team: TEAM_MEMBERS.slice(0, 3),
        comments: COMMENTS,
        versions: VERSIONS,
    },
    {
        id: 2,
        name: '虚拟现实（VR）红色文化教育平台',
        category: '挑战杯',
        description: '通过VR技术沉浸式体验红色历史场景，增强爱国主义教育的生动性和感染力。',
        purpose: '创新思政教育模式，激发青年学生的爱国热情和历史责任感。',
        application: '可用于高校思政课、中小学历史课、党建活动以及各类主题教育基地。',
        techDifficulties: '高精度历史场景三维重建、VR交互的自然性与流畅度、跨平台内容适配。',
        highlights: '将前沿科技与红色文化深度融合，内容丰富，体验感强，具有良好的社会效益。',
        team: TEAM_MEMBERS.slice(1, 4),
        comments: [],
        versions: [],
    },
    {
        id: 3,
        name: '高精度室内定位与导航系统',
        category: '专业技能竞赛',
        description: '融合多种传感器数据，实现厘米级室内定位，为大型商场、机场提供导航服务。',
        purpose: '解决GPS在室内失效的问题，提升用户在大型室内场所的体验。',
        application: '可用于大型购物中心、交通枢纽、博物馆、医院等复杂室内环境。',
        techDifficulties: '多传感器数据融合算法（IMU/Wi-Fi/Bluetooth）、信号干扰处理、地图自动构建。',
        highlights: '定位精度高，响应速度快，部署成本低，具有广阔的商业应用前景。',
        team: TEAM_MEMBERS.slice(0, 2),
        comments: [],
        versions: [],
    }
];

export const SUCCESS_CASES: SuccessCase[] = [
    {
        id: 1,
        title: 'AI助农系统：从创意到国赛金奖',
        competition: '“互联网+”大学生创新创业大赛',
        year: 2023,
        award: '国家级金奖',
        summary: '本项目通过精准的AI算法和软硬件结合，解决了农业生产中的痛点，最终获得了评委的高度认可。',
        background: '团队成员来自农村，深感传统农业的辛劳与不易，希望用所学知识改变现状。',
        solution: '我们自主研发了基于YOLOv5的轻量级病虫害识别模型，并设计了低成本的无人机挂载方案。',
        teamStory: '从实验室的无数次熬夜调试，到田间地头的实地测试，我们团队凝聚一心，攻克了重重难关。',
        journey: '经历了校赛、省赛的层层选拔，我们不断打磨项目，最终在国赛舞台上展现了风采。',
        learnings: '一个好的项目不仅要有技术创新，更要关注市场需求和社会价值。团队协作至_关重要。',
        resources: [
            { name: '商业计划书模板.pdf', url: '#' },
            { name: '核心算法代码片段.zip', url: '#' },
            { name: '路演PPT模板.pptx', url: '#' },
        ]
    },
    {
        id: 2,
        title: 'VR红色教育：科技点亮信仰之光',
        competition: '“挑战杯”全国大学生课外学术科技作品竞赛',
        year: 2022,
        award: '国家级一等奖',
        summary: '项目将VR技术与思政教育结合，打造了沉浸式学习新模式，获得了广泛好评。',
        background: '针对传统思政教育形式较为单一的问题，我们希望用科技手段提升其吸引力。',
        solution: '利用Unity引擎和高精度建模技术，我们复现了多个重要历史场景，并设计了互动环节。',
        teamStory: '团队成员跨越了计算机、历史、设计等多个专业，正是这种跨学科的碰撞，才诞生了优秀的作品。',
        journey: '从最初一个简单的想法，到形成完整的作品，再到走上全国赛场，每一步都凝聚了团队的心血。',
        learnings: '跨学科合作能够产生1+1>2的效果。在项目中要始终明确作品的核心价值和目标用户。',
        resources: [
            { name: '项目申报书范例.doc', url: '#' },
            { name: '3D模型资源包.rar', url: '#' },
        ]
    }
];

export const RESOURCES: Resource[] = [
    {
        id: 1,
        category: '官方文件',
        title: '“互联网+”大赛评审规则（最新版）',
        description: '详细解读大赛的评分标准、网评和会评流程。',
        url: '#'
    },
    {
        id: 2,
        category: '历年真题',
        title: '2023年全国大学生电子设计竞赛赛题回顾',
        description: '包含2023年所有赛题的详细要求和技术指标。',
        url: '#'
    },
    {
        id: 3,
        category: '评审标准',
        title: '“挑战杯”作品评审核心要点分析',
        description: '深度分析“挑战杯”竞赛对作品科学性、先进性、现实意义等方面的考察重点。',
        url: '#'
    },
    {
        id: 4,
        category: '官方文件',
        title: '各类竞赛官方通知及报名入口汇总',
        description: '实时更新各大主流赛事的官方通知、章程及报名链接。',
        url: '#'
    }
];