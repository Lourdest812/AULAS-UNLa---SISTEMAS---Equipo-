package com.example.classroomProject.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.classroomProject.models.Course;

public interface CourseDAO extends JpaRepository<Course, Long> {

	@Modifying
	@Query("DELETE Course c WHERE c.oid IN :oids")
	public void deleteCourses(List<Long> oids);
}
