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

  const ContextData = [
  { id: 1, name: 'Formation' },
  { id: 2, name: 'Perso' },
  { id: 3, name: 'Stage' },
  { id: 4, name: 'Pro' },
];

for (const context of ContextData) {
  await prisma.context.upsert({
    where: { id: context.id },
    update: {},
    create: context,
  });
}

 const RoleData = [
  { id: 1, name: 'Auteur principal' },
  { id: 2, name: 'Co-auteur' },
  { id: 3, name: 'Contributeur' },
];

for (const roleData of RoleData) {
  await prisma.role.upsert({
    where: { id: roleData.id },
    update: {},
    create: roleData,
  });
}

console.log('Role seeded/updated');

const ActivityData = [
  { id: 1, name: 'En développement actif' },
  { id: 2, name: 'Maintenance' },
  { id: 3, name: 'Maintenance occasionnelle' },
  { id: 4, name: 'En pause' },
  { id: 5, name: 'Terminé' },
];

for (const activityData of ActivityData) {
  await prisma.activity.upsert({
    where: { id: activityData.id },
    update: {},
    create: activityData,
  });
}

console.log('Activity seeded/updated');

  const ProjectData = [
    { id: 1, name: 'Portfolio', resume: 'Portfolio personnel de développeur web présentant mes projets, leurs stacks techniques et leur contexte de réalisation, avec une interface moderne et responsive.', description: 'Ce portfolio a été conçu pour présenter de manière claire et structurée mes projets, qu’ils soient personnels, réalisés en formation ou en contexte professionnel.',roleId : 1, activityId: 1, date: "2025", githubUrl: 'https://github.com/GregoryLef/Portfolio'},
  ];

  for (const projectData of ProjectData) {
    await prisma.project.upsert({
      where: { id: projectData.id },
      update: {},
      create: projectData
    });
  }
  console.log(`ProjetData seeded/updated`);

  const ProjectCaptures = [
  { projectId: 1, url: 'https://res.cloudinary.com/djsfhywia/image/upload/v1765627722/Portfolio_Landing_Page.png', order: 1 },
  { projectId: 1, url: 'https://res.cloudinary.com/djsfhywia/image/upload/v1765632828/Portfolio_About.png', order: 2 },
];

for (const capture of ProjectCaptures) {
  await prisma.projectCapture.create({
    data: capture,
  });
}
console.log(`ProjetCapture seeded/updated`);

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

  const ProjectContextData = [
    {projectId : 1, contextId: 2}
  ]

  for (const projectContextData of ProjectContextData) {
    await prisma.projectContext.upsert({where: {
      projectId_contextId: {
        projectId: projectContextData.projectId,
        contextId: projectContextData.contextId,
      }
    }, 
    update: {},
    create: projectContextData
    });
  }

  console.log('ProjectContext seeded/updated');

 

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