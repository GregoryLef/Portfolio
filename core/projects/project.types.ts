import { Stack } from "../stack/stack.type"

export interface Project {
    id: number
    name: string
    description: string
    stack: Stack[]
    githubUrl?: string | null
    demoUrl?: string | null
}