import { Project } from "../types/projectTypes"
import { prisma } from "@/lib/db"

export class ProjectRepository {

    async getAllProjects() {
        const projects = await prisma.project.findMany({
            include: {
                stacks: {
                    include: {
                        stack: true,
                    },
                },
            },
        })

        return projects.map((project) => ({
            id: project.id,
            name: project.name,
            description: project.description,
            projectUrl: project.demoUrl,
            githubUrl: project.githubUrl,
            stack: project.stacks.map((s) => ({ id: s.stack.id, name: s.stack.name })),
        }))
    }

    async getProjectById(id: number): Promise<Project | null> {
        const project = await prisma.project.findUnique({
            where: { id },
            include: {
                stacks: {
                    include: {
                        stack: true
                    }
                }
            }
        })

        if (!project) {
            return null
        }

        return {
            ...project,
            stack: project.stacks.map((s) => ({ id: s.stack.id, name: s.stack.name }))
        }
    }
}