package com.example.classroomProject.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.classroomProject.models.Classroom;

public interface ClassroomDAO extends JpaRepository<Classroom, Long> {

	@Modifying
	@Query("DELETE FROM Classroom c WHERE c.oid IN :oids")
	public void deleteMultipleClassroom(List<Long> oids);
}
