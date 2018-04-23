CREATE SCHEMA `dgb_db` ;

CREATE TABLE `dgb_db`.`user` (
  `num` INT NOT NULL AUTO_INCREMENT,
  `id` VARCHAR(45) NOT NULL,
  `pw` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL,
  `type` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`num`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `num_UNIQUE` (`num` ASC));

ALTER TABLE `dgb_db`.`user`
ADD COLUMN `phone_number` VARCHAR(45) NULL AFTER `type`;

ALTER TABLE `dgb_db`.`user`
ADD COLUMN `img` VARCHAR(45) NULL AFTER `phone_number`;

ALTER TABLE `dgb_db`.`user`
ADD COLUMN `nickname` VARCHAR(45) NULL AFTER `img`;

ALTER TABLE `dgb_db`.`user`
CHANGE COLUMN `pw` `pw` VARCHAR(100) NOT NULL ;

ALTER TABLE `dgb_db`.`user`
ADD COLUMN `about` LONGTEXT NULL AFTER `nickname`;
