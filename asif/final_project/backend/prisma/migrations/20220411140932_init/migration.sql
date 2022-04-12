/*
  Warnings:

  - You are about to drop the column `product_id_quantity_list_string` on the `Order` table. All the data in the column will be lost.
  - Added the required column `product_id_quantity_price_list_string` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Order` DROP COLUMN `product_id_quantity_list_string`,
    ADD COLUMN `product_id_quantity_price_list_string` VARCHAR(191) NOT NULL,
    MODIFY `status` VARCHAR(191) NULL DEFAULT 'pending';
