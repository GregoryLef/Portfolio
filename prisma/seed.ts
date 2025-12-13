import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  console.log('Seeding metadata...');

  const StackData = [
  { id: 1, name: 'Next.js' },
  { id: 2, name: 'TypeScript' },
  { id: 3, name: 'Laravel' },
  { id: 4, name: 'Express' },
  { id: 5, name: 'MySQL' },
  { id: 6, name: 'SQLite' },
  { id: 7, name: 'PostgreSQL' },
];

  for (const stackData of StackData) {
    await prisma.stack.upsert({
      where: { id: stackData.id },
      update: {},
      create: stackData
    });
  }
  console.log(`Stack seeded/updated`);

  const ProjectContextData = [
  { id: 1, name: 'Formation' },
  { id: 2, name: 'Perso' },
  { id: 3, name: 'Stage' },
  { id: 4, name: 'Pro' },
];

for (const context of ProjectContextData) {
  await prisma.projectContext.upsert({
    where: { name: context.name },
    update: {},
    create: context,
  });
}

  const ProjectData = [
    { id: 1, name: 'Portfolio', description: 'Creation de mon portfolio', contextId: 2, date: "2025", githubUrl: 'https://github.com/GregoryLef/Portfolio', landingUrl: 'https://res.cloudinary.com/djsfhywia/image/upload/v1765627722/Portfolio_Landing_Page.png', capture1Url: 'https://res.cloudinary.com/djsfhywia/image/upload/v1765632828/Portfolio_About.png' },
  ];

  for (const projectData of ProjectData) {
    await prisma.project.upsert({
      where: { id: projectData.id },
      update: {},
      create: projectData
    });
  }
  console.log(`ProjetData seeded/updated`);

  const ProjectStackData = [
    { projectId : 1, stackId: 1 },
    { projectId : 1, stackId: 2 },
    { projectId : 1, stackId: 6 },
  ];

  for (const projectStackData of ProjectStackData) {
    await prisma.projectStack.upsert({where: { 
      projectId_stackId: {
        projectId: projectStackData.projectId,
        stackId: projectStackData.stackId,
      }
    },
      update: {},
      create: projectStackData
    });
  }
  console.log(`ProjectStack seeded/updated`);

  console.log('Data seeding completed!');
}

main()
  .catch((e: Error) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });