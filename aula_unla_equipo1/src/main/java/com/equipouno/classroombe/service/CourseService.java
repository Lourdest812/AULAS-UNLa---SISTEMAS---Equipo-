package com.equipouno.classroombe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.equipouno.classroombe.models.Course;
import com.equipouno.classroombe.models.Student;
import com.equipouno.classroombe.models.Teacher;

public interface CourseService {

	@Transactional(readOnly = true, rollbackForClassName = { "SQLException.class",
			"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public List<Course> findAll();

	@Transactional(readOnly = true, rollbackForClassName = { "SQLException.class",
			"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public Optional<Course> findByOid(Long oid);

	@Transactional(readOnly = false, rollbackForClassName = { "SQLException.class",
			"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public boolean deleteCourses(List<Long> oids);

	@Transactional(readOnly = false, rollbackForClassName = { "SQLException.class",
			"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public boolean updateCourse(Course entity);
	
	@Transactional(readOnly = true, rollbackForClassName = { "SQLException.class",
	"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public List<Teacher> getTeachersNotAssociated(Long courseOid);
	
	@Transactional(readOnly = true, rollbackForClassName = { "SQLException.class",
	"DataAccessException.class" }, propagation = Propagation.REQUIRED)
	public List<Student> getStudentsNotAssociated(Long courseOid);
	
}
