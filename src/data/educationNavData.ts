import {
  GraduationCap,
  Sparkles,
  Users
} from 'lucide-react';

export interface EducationSubmenuCard {
  id: string;
  title: string;
  description: string;
  icon: any;
  path: string;
}

export interface EducationCategory {
  id: string;
  title: string;
  headerTitle: string;
  headerSubtitle: string;
  icon: any;
  items: EducationSubmenuCard[];
}

export const EDUCATION_CATEGORIES: EducationCategory[] = [
  {
    id: 'institute-launch',
    title: 'Institute launch',
    headerTitle: 'INSTITUTE LAUNCH',
    headerSubtitle: 'Our educational institute is launching soon — programs, intake dates, and enrollment will be published on the Education page first.',
    icon: GraduationCap,
    items: [
      {
        id: 'aayaamx-institute',
        title: 'AayaamX educational institute',
        description: 'A dedicated tech institute for AI, fintech, and full-stack programs launching soon. Join the collective as we open enrollment.',
        icon: GraduationCap,
        path: '/education'
      },
      {
        id: 'planned-tracks',
        title: 'Planned tracks',
        description: 'AI engineering, trading technology, MERN and cloud, and career-ready capstones.',
        icon: Sparkles,
        path: '/education/academy'
      },
      {
        id: 'waitlist-updates',
        title: 'Waitlist and updates',
        description: 'Be notified when registration and campus details go live via our Education updates.',
        icon: Users,
        path: '/education/learning-center'
      }
    ]
  }
];
