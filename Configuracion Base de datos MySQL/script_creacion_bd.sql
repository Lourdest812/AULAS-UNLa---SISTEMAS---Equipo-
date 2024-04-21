-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema proyecto_aula_unla_equipo1
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema proyecto_aula_unla_equipo1
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `proyecto_aula_unla_equipo1` DEFAULT CHARACTER SET utf8 ;
USE `proyecto_aula_unla_equipo1` ;

-- -----------------------------------------------------
-- Table `proyecto_aula_unla_equipo1`.`classroom`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_aula_unla_equipo1`.`classroom` (
  `idAula` INT NOT NULL,
  `name` VARCHAR(50) NULL,
  `capability` INT NULL,
  `hasBlackboard` TINYINT NULL,
  `hasProjector` TINYINT NULL,
  `hascomputers` TINYINT NULL,
  PRIMARY KEY (`idAula`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto_aula_unla_equipo1`.`student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_aula_unla_equipo1`.`student` (
  `idalumno` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `cohort` INT NULL,
  `documentNumber` INT NULL,
  `lastName` VARCHAR(45) NULL,
  PRIMARY KEY (`idalumno`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto_aula_unla_equipo1`.`teacher`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_aula_unla_equipo1`.`teacher` (
  `idteacher` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `documentNumber` INT NULL,
  `lastName` VARCHAR(45) NULL,
  PRIMARY KEY (`idteacher`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto_aula_unla_equipo1`.`course`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_aula_unla_equipo1`.`course` (
  `idcourse` INT NOT NULL,
  `subject` VARCHAR(50) NULL,
  `dictation_year` VARCHAR(20) NULL,
  `schedule` VARCHAR(45) NULL,
  `four_month_period` ENUM("Primer Cuatrimestre", "Segundo Cuatrimestre", "Anual") NULL,
  `student_limit` INT NULL,
  `classroom_idAula` INT NOT NULL,
  PRIMARY KEY (`idcourse`, `classroom_idAula`),
  INDEX `fk_course_classroom1_idx` (`classroom_idAula` ASC) VISIBLE,
  CONSTRAINT `fk_course_classroom1`
    FOREIGN KEY (`classroom_idAula`)
    REFERENCES `proyecto_aula_unla_equipo1`.`classroom` (`idAula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto_aula_unla_equipo1`.`student_has_course`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_aula_unla_equipo1`.`student_has_course` (
  `student_idalumno` INT NOT NULL,
  `course_idcourse` INT NOT NULL,
  PRIMARY KEY (`student_idalumno`, `course_idcourse`),
  INDEX `fk_student_has_course_course1_idx` (`course_idcourse` ASC) VISIBLE,
  INDEX `fk_student_has_course_student_idx` (`student_idalumno` ASC) VISIBLE,
  CONSTRAINT `fk_student_has_course_student`
    FOREIGN KEY (`student_idalumno`)
    REFERENCES `proyecto_aula_unla_equipo1`.`student` (`idalumno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_student_has_course_course1`
    FOREIGN KEY (`course_idcourse`)
    REFERENCES `proyecto_aula_unla_equipo1`.`course` (`idcourse`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto_aula_unla_equipo1`.`teacher_has_course`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto_aula_unla_equipo1`.`teacher_has_course` (
  `teacher_idteacher` INT NOT NULL,
  `course_idcourse` INT NOT NULL,
  PRIMARY KEY (`teacher_idteacher`, `course_idcourse`),
  INDEX `fk_teacher_has_course_course1_idx` (`course_idcourse` ASC) VISIBLE,
  INDEX `fk_teacher_has_course_teacher1_idx` (`teacher_idteacher` ASC) VISIBLE,
  CONSTRAINT `fk_teacher_has_course_teacher1`
    FOREIGN KEY (`teacher_idteacher`)
    REFERENCES `proyecto_aula_unla_equipo1`.`teacher` (`idteacher`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_teacher_has_course_course1`
    FOREIGN KEY (`course_idcourse`)
    REFERENCES `proyecto_aula_unla_equipo1`.`course` (`idcourse`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
