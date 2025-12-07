-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "githubUrl" TEXT,
    "demoUrl" TEXT
);

-- CreateTable
CREATE TABLE "Stack" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProjectStack" (
    "projectId" INTEGER NOT NULL,
    "stackId" INTEGER NOT NULL,

    PRIMARY KEY ("projectId", "stackId"),
    CONSTRAINT "ProjectStack_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProjectStack_stackId_fkey" FOREIGN KEY ("stackId") REFERENCES "Stack" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Stack_name_key" ON "Stack"("name");
