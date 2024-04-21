package com.example.classroomProject.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.classroomProject.models.Student;

public interface StudentDAO extends JpaRepository<Student, Long> {

	@Modifying
	@Query("DELETE Student c WHERE c.oid IN :oids")
	public void deleteStudents(List<Long> oids);
}
