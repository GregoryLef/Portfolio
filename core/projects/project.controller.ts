import { NextRequest, NextResponse } from "next/server";
import { ProjectService } from "./project.services";

const projectService = new ProjectService();

export class ProjectController {
    async getAllProjects() {
        const projects = await projectService.getAllProjects();
        return NextResponse.json(projects);
    };

    async getProjectById(id: number) {
        return await projectService.getProjectById(id);
    }
}