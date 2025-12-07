import { ProjectRepository } from "./project.repository";
import { Project } from "./project.types";

const projectRepository = new ProjectRepository();

export class ProjectService {
    async getAllProjects() {
        return await projectRepository.getAllProjects();
    };

    async getProjectById(id: number): Promise<Project | null> {
        return await projectRepository.getProjectById(id);
    }
}