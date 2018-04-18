CREATE SCHEMA `dbg_db` ;

CREATE TABLE `dbg_db`.`user` (
  `num` INT NOT NULL AUTO_INCREMENT,
  `id` VARCHAR(45) NOT NULL,
  `pw` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL,
  `type` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`num`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `num_UNIQUE` (`num` ASC));

ALTER TABLE `dbg_db`.`user`
ADD COLUMN `phone_number` VARCHAR(45) NULL AFTER `type`;
