export enum Page {
    HOME = 'HOME',
    COMPETITIONS = 'COMPETITIONS',
    PROJECTS = 'PROJECTS',
    PROJECT_DETAIL = 'PROJECT_DETAIL',
    SUCCESS_CASES = 'SUCCESS_CASES',
    SUCCESS_CASE_DETAIL = 'SUCCESS_CASE_DETAIL',
    RESOURCES = 'RESOURCES',
    LOGIN = 'LOGIN',
    PROFILE = 'PROFILE',
}

export interface View {
    page: Page;
    id?: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
    major: string;
    avatarUrl: string;
}

export interface Competition {
    id: number;
    category: string;
    name: string;
    organizer: string;
    level: string;
    awards: string;
    pastReviewUrl: string;
    timeline: {
        date: string;
        event: string;
    }[];
}

export interface Project {
    id: number;
    name: string;
    category: string;
    description: string;
    purpose: string;
    application: string;
    techDifficulties: string;
    highlights: string;
    team: TeamMember[];
    comments: Comment[];
    versions: Version[];
}

export interface TeamMember {
    id: number;
    name: string;
    major: string;
    avatarUrl: string;
}

export interface Comment {
    id: number;
    author: string;
    avatarUrl: string;
    text: string;
    imageUrl?: string;
    votes: number;
}

export interface Version {
    id: number;
    version: string;
    date: string;
    changes: string;
}

export interface SuccessCase {
    id: number;
    title: string;
    competition: string;
    year: number;
    award: string;
    summary: string;
    background: string;
    solution: string;
    teamStory: string;
    journey: string;
    learnings: string;
    resources: { name: string; url: string }[];
}

export interface Resource {
    id: number;
    category: string;
    title: string;
    description: string;
    url: string;
}