package com.equipouno.classroombe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.equipouno.classroombe.models.Student;

public interface StudentService {

	@Transactional(readOnly = true, rollbackForClassName = { "SQLException.class",
			"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public List<Student> findAll();

	@Transactional(readOnly = true, rollbackForClassName = { "SQLException.class",
			"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public Optional<Student> findByOid(Long oid);

	@Transactional(readOnly = false, rollbackForClassName = { "SQLException.class",
			"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public boolean deleteStudents(List<Long> oids);

	@Transactional(readOnly = false, rollbackForClassName = { "SQLException.class",
			"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public boolean updateStudent(Student entity);

}
