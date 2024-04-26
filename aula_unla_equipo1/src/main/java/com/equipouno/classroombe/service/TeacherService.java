package com.equipouno.classroombe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.equipouno.classroombe.models.Teacher;

public interface TeacherService {

	@Transactional(readOnly = true, rollbackForClassName = { "SQLException.class",
			"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public List<Teacher> findAll();

	@Transactional(readOnly = true, rollbackForClassName = { "SQLException.class",
			"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public Optional<Teacher> findByOid(Long oid);

	@Transactional(readOnly = false, rollbackForClassName = { "SQLException.class",
			"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public boolean deleteTeachers(List<Long> oids);

	@Transactional(readOnly = false, rollbackForClassName = { "SQLException.class",
			"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public boolean updateTeacher(Teacher entity);
}
