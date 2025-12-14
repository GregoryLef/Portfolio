import { Capture } from '../types/captureTypes';
import { Project } from '../types/projectTypes';
import { prisma } from '@/lib/db';

export class ProjectRepository {
  async getAllProjects(): Promise<Project[]> {
  const projects = await prisma.project.findMany({
    include: {
      stacks: { include: { stack: true } },
      contexts: {include: {context: true} },
      captures: { orderBy: { order: 'asc' } },
      role : true,
      activity: true,
    },
  });

    return projects.map((project) => ({
      id: project.id,
      name: project.name,
      resume: project.resume,
      description: project.description,
      context: project.contexts.map((c) => ({id: c.context.id, name: c.context.name})),
      role: project.role.name,
      activity : project.activity.name,
      date: project.date,
      projectUrl: project.demoUrl,
      githubUrl: project.githubUrl,
      stack: project.stacks.map((s) => ({ id: s.stack.id, name: s.stack.name })),
      captures: project.captures.map((c): Capture => ({
      id: c.id,
      url: c.url,
      type: c.type ?? null,
    })),
    }));
  }

  async getProjectById(id: number): Promise<Project | null> {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        stacks: { include: { stack: true } },
        contexts: {include: {context: true} },
        captures: { orderBy: { order: 'asc' } }, // inclure les captures
        role : true,
        activity: true,
      },
    });

    if (!project) return null;

    return {
      id: project.id,
      name: project.name,
      resume: project.resume,
      description: project.description,
      context: project.contexts.map((c) => ({id: c.context.id, name: c.context.name})),
      role: project.role.name,
      activity : project.activity.name,
      date: project.date, // déjà string
      githubUrl: project.githubUrl ?? null,
      demoUrl: project.demoUrl ?? null,
      stack: project.stacks.map((s) => ({ id: s.stack.id, name: s.stack.name })),
      captures: project.captures.map((c): Capture => ({
        id: c.id,
        url: c.url,
        type: c.type ?? null,
      })),
    };
  }
}
