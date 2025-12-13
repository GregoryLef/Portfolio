/*
  Warnings:

  - Added the required column `contextId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "ProjectContext" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contextId" INTEGER NOT NULL,
    "date" INTEGER NOT NULL,
    "githubUrl" TEXT,
    "demoUrl" TEXT,
    "landingUrl" TEXT,
    "capture1Url" TEXT,
    "capture2Url" TEXT,
    "capture3Url" TEXT,
    "capture4Url" TEXT,
    "capture5Url" TEXT,
    CONSTRAINT "Project_contextId_fkey" FOREIGN KEY ("contextId") REFERENCES "ProjectContext" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("capture1Url", "capture2Url", "capture3Url", "capture4Url", "capture5Url", "demoUrl", "description", "githubUrl", "id", "landingUrl", "name") SELECT "capture1Url", "capture2Url", "capture3Url", "capture4Url", "capture5Url", "demoUrl", "description", "githubUrl", "id", "landingUrl", "name" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "ProjectContext_name_key" ON "ProjectContext"("name");
