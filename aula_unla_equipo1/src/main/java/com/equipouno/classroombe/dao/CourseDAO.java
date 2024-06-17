package com.equipouno.classroombe.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.equipouno.classroombe.models.Course;
import com.equipouno.classroombe.models.Student;
import com.equipouno.classroombe.models.Teacher;

public interface CourseDAO extends JpaRepository<Course, Long> {

	@Modifying
	@Query("DELETE Course c WHERE c.oid IN :oids")
	public void deleteCourses(List<Long> oids);
	
	@Query("SELECT s FROM Student s WHERE s NOT IN (SELECT s FROM Course c JOIN c.students s WHERE c.oid = :courseOid)")
	public List<Student> getStudentsAssociated(@Param("courseOid") Long courseOid);
	
	@Query("SELECT t FROM Teacher t WHERE t NOT IN (SELECT t FROM Course c JOIN c.teachers t WHERE c.oid = :courseOid)")
	public List<Teacher> getTeachersAssociated(@Param("courseOid") Long courseOid);
}
