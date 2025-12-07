import { ProjectRepository } from "../repositories/projectRepository";
import { Project } from "../types/projectTypes";

const projectRepository = new ProjectRepository();

export class ProjectService {
    async getAllProjects() {
        return await projectRepository.getAllProjects();
    };

    async getProjectById(id: number): Promise<Project | null> {
        return await projectRepository.getProjectById(id);
    }
}