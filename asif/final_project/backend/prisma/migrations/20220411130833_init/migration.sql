/*
  Warnings:

  - Made the column `status` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Order` MODIFY `status` VARCHAR(191) NOT NULL DEFAULT 'pending';
