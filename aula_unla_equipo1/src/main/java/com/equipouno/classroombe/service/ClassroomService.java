package com.equipouno.classroombe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.equipouno.classroombe.models.Classroom;

public interface ClassroomService {

	@Transactional(readOnly = true, rollbackForClassName = { "SQLException.class",
			"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public List<Classroom> findAll();

	@Transactional(readOnly = true, rollbackForClassName = { "SQLException.class",
			"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public Optional<Classroom> findByOid(Long oid);

	@Transactional(readOnly = false, rollbackForClassName = { "SQLException.class",
			"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public boolean deleteClassrooms(List<Long> oids);

	@Transactional(readOnly = false, rollbackForClassName = { "SQLException.class",
			"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public boolean updateClassroom(Classroom entity);

}
