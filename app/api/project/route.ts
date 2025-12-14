import { ProjectController } from '@/core/controllers/projectController';

const projectController = new ProjectController();

export async function GET() {
  return await projectController.getAllProjects();
}
