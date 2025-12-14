/*
  Warnings:

  - You are about to drop the column `capture1Url` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `capture2Url` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `capture3Url` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `capture4Url` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `capture5Url` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `landingUrl` on the `Project` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "ProjectCapture" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "type" TEXT,
    CONSTRAINT "ProjectCapture_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contextId" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "githubUrl" TEXT,
    "demoUrl" TEXT,
    CONSTRAINT "Project_contextId_fkey" FOREIGN KEY ("contextId") REFERENCES "ProjectContext" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("contextId", "date", "demoUrl", "description", "githubUrl", "id", "name") SELECT "contextId", "date", "demoUrl", "description", "githubUrl", "id", "name" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
