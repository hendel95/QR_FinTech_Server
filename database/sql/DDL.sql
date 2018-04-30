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


CREATE TABLE `dgb_db`.`product` (
  `num` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `price` INT NULL,
  `img` VARCHAR(100) NULL,
  `init_date` DATETIME NULL,
  `del_date` DATETIME NULL,
  `owner_id` VARCHAR(45) NULL,
  PRIMARY KEY (`num`),
  INDEX `user_id_idx` (`owner_id` ASC),
  CONSTRAINT `user_id`
    FOREIGN KEY (`owner_id`)
    REFERENCES `dgb_db`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `dgb_db`.`new_table` (
  `num` INT NOT NULL AUTO_INCREMENT,
  `shop_id` VARCHAR(45) NOT NULL,
  `buyer_id` VARCHAR(45) NOT NULL,
  `price` VARCHAR(45) NULL,
  `amount` VARCHAR(45) NULL,
  `date` DATETIME NULL,
  PRIMARY KEY (`num`),
  INDEX `shop_FK_idx` (`shop_id` ASC),
  INDEX `buyer_FK_idx` (`buyer_id` ASC),
  CONSTRAINT `shop_FK`
    FOREIGN KEY (`shop_id`)
    REFERENCES `dgb_db`.`shop` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `buyer_FK`
    FOREIGN KEY (`buyer_id`)
    REFERENCES `dgb_db`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
