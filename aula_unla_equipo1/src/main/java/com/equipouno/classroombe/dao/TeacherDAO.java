package com.equipouno.classroombe.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.equipouno.classroombe.models.Teacher;

public interface TeacherDAO extends JpaRepository<Teacher, Long> {

	@Modifying
	@Query("DELETE Teacher c WHERE c.oid IN :oids")
	public void deleteTeachers(List<Long> oids);
}
