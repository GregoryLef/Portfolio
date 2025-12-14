import { Capture } from './captureTypes';
import { ProjectContext } from './projectContext';
import { Stack } from './stack.type';

export interface Project {
  id: number;
  name: string;
  resume : string;
  description: string;
  context: ProjectContext[];
  role: string;
  activity: string;
  date: string;
  stack: Stack[];
  githubUrl?: string | null;
  demoUrl?: string | null;
  captures : Capture[]
}
