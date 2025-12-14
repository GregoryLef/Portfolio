/*
  Warnings:

  - You are about to drop the column `contextId` on the `Project` table. All the data in the column will be lost.
  - The primary key for the `ProjectContext` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ProjectContext` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `ProjectContext` table. All the data in the column will be lost.
  - Added the required column `resume` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contextId` to the `ProjectContext` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `ProjectContext` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Context" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "githubUrl" TEXT,
    "demoUrl" TEXT
);
INSERT INTO "new_Project" ("date", "demoUrl", "description", "githubUrl", "id", "name") SELECT "date", "demoUrl", "description", "githubUrl", "id", "name" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE TABLE "new_ProjectContext" (
    "projectId" INTEGER NOT NULL,
    "contextId" INTEGER NOT NULL,

    PRIMARY KEY ("projectId", "contextId"),
    CONSTRAINT "ProjectContext_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProjectContext_contextId_fkey" FOREIGN KEY ("contextId") REFERENCES "Context" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
DROP TABLE "ProjectContext";
ALTER TABLE "new_ProjectContext" RENAME TO "ProjectContext";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Context_name_key" ON "Context"("name");
