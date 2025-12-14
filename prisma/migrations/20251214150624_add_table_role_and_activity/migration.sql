/*
  Warnings:

  - You are about to drop the column `status` on the `Project` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,
    "activityId" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "githubUrl" TEXT,
    "demoUrl" TEXT,
    CONSTRAINT "Project_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Project_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("activityId", "date", "demoUrl", "description", "githubUrl", "id", "name", "resume", "roleId") SELECT "activityId", "date", "demoUrl", "description", "githubUrl", "id", "name", "resume", "roleId" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
