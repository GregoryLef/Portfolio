/*
  Warnings:

  - You are about to drop the column `Capture1Url` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `Capture2Url` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `Capture3Url` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `Capture4Url` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `Capture5Url` on the `Project` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "githubUrl" TEXT,
    "demoUrl" TEXT,
    "landingUrl" TEXT,
    "capture1Url" TEXT,
    "capture2Url" TEXT,
    "capture3Url" TEXT,
    "capture4Url" TEXT,
    "capture5Url" TEXT
);
INSERT INTO "new_Project" ("demoUrl", "description", "githubUrl", "id", "landingUrl", "name") SELECT "demoUrl", "description", "githubUrl", "id", "landingUrl", "name" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
