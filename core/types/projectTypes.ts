import { Stack } from './stack.type';

export interface Project {
  id: number;
  name: string;
  description: string;
  stack: Stack[];
  githubUrl?: string | null;
  demoUrl?: string | null;
}
