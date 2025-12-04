import { ProjectController } from "@/core/projects/project.controller";

const projectController = new ProjectController();

export async function GET() {
    return await projectController.getAllProjects();
}