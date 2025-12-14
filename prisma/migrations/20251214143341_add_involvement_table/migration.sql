/*
  Warnings:

  - Added the required column `involvementId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Involvement" (
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
    "involvementId" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "githubUrl" TEXT,
    "demoUrl" TEXT,
    CONSTRAINT "Project_involvementId_fkey" FOREIGN KEY ("involvementId") REFERENCES "Involvement" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("date", "demoUrl", "description", "githubUrl", "id", "name", "resume", "status") SELECT "date", "demoUrl", "description", "githubUrl", "id", "name", "resume", "status" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Involvement_name_key" ON "Involvement"("name");
