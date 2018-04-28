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

ALTER TABLE `dgb_db`.`user`
ADD COLUMN `balance` INT NOT NULL DEFAULT 0 AFTER `about`;



CREATE TABLE `dgb_db`.`marketplace` (
  `num` INT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(100) NULL,
  `lat` DOUBLE NULL,
  `lon` DOUBLE NULL,
  `about` VARCHAR(100) NULL,
  `gift` VARCHAR(100) NULL,
  PRIMARY KEY (`num`));


CREATE TABLE `dgb_db`.`shop` (
  `userId` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL,
  `about` VARCHAR(45) NULL,
  `marketplaceId` INT NULL,
  `img` VARCHAR(45) NULL,
  `balance` VARCHAR(45) NULL,
  INDEX `userid_idx` (`userId` ASC),
  PRIMARY KEY (`userId`),
  INDEX `marketplaceId_idx` (`marketplaceId` ASC),
  CONSTRAINT `userid`
    FOREIGN KEY (`userId`)
    REFERENCES `dgb_db`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `marketplaceId`
    FOREIGN KEY (`marketplaceId`)
    REFERENCES `dgb_db`.`marketplace` (`num`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
