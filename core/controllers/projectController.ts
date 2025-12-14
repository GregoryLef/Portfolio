import { ProjectService } from '../services/projectServices';
import { ApiResponse } from '../util/apiResponse';
import { DomainErrors} from '../errors/DomainError';
import { handle } from '../util/controllerHandler';

const projectService = new ProjectService();

export class ProjectController {
  async getAllProjects() {
    const projects = await projectService.getAllProjects();
    return ApiResponse.success("Tous les projets ont etait recupéré", projects)
  };

  async getProjectById(id: number) {
    return handle(async () => {
    const project = await projectService.getProjectById(id);

    if (!project) {
      throw DomainErrors.ProjectNotFound()
    } 

    return ApiResponse.success("Project Récupéré avec succés", project);
  });
};
}
