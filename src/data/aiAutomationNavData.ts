import {
  Brain,
  Cpu,
  Sparkles,
  Workflow,
  Bot
} from 'lucide-react';

export interface AiAutomationSubmenuCard {
  id: string;
  title: string;
  description: string;
  icon: any;
  path: string;
}

export interface AiAutomationCategory {
  id: string;
  title: string;
  headerTitle: string;
  icon: any;
  items: AiAutomationSubmenuCard[];
}

export const AI_AUTOMATION_CATEGORIES: AiAutomationCategory[] = [
  {
    id: 'ai-and-automation',
    title: 'AI and automation',
    headerTitle: 'AI AND AUTOMATION',
    icon: Sparkles,
    items: [
      {
        id: 'ai-chatbot',
        title: 'AI chatbot development',
        description: 'Assistants trained on your content and policies.',
        icon: Bot,
        path: '/services/ai-automation/ai-agent-development'
      },
      {
        id: 'process-automation',
        title: 'Process automation',
        description: 'Scripts, schedulers, and integrations that run reliably.',
        icon: Cpu,
        path: '/services/ai-automation/process-automation'
      },
      {
        id: 'recommendation-systems',
        title: 'Recommendation systems',
        description: 'Ranking and personalization for users and catalog items.',
        icon: Brain,
        path: '/services/ai-automation/recommendations'
      },
      {
        id: 'ai-integrations',
        title: 'AI integrations',
        description: 'OpenAI and compatible providers embedded in your stack.',
        icon: Sparkles,
        path: '/services/ai-automation/generative-ai-solutions'
      }
    ]
  }
];
