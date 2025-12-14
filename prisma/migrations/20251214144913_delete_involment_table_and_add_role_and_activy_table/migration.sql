/*
  Warnings:

  - You are about to drop the `Involvement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `involvementId` on the `Project` table. All the data in the column will be lost.
  - Added the required column `activityId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Involvement_name_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Involvement";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Activity" (
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
    "roleId" INTEGER NOT NULL,
    "activityId" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "githubUrl" TEXT,
    "demoUrl" TEXT,
    CONSTRAINT "Project_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Project_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("date", "demoUrl", "description", "githubUrl", "id", "name", "resume", "status") SELECT "date", "demoUrl", "description", "githubUrl", "id", "name", "resume", "status" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Activity_name_key" ON "Activity"("name");
