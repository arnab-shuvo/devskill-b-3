/*
  Warnings:

  - You are about to drop the column `price` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `product_id_quantity_price_list_string` on the `Order` table. All the data in the column will be lost.
  - Added the required column `product_info` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_price` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Order` DROP COLUMN `price`,
    DROP COLUMN `product_id_quantity_price_list_string`,
    ADD COLUMN `product_info` VARCHAR(191) NOT NULL,
    ADD COLUMN `total_price` INTEGER NOT NULL;
