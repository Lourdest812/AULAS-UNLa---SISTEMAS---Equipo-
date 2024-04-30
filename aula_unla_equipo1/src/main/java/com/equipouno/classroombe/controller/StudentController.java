package com.equipouno.classroombe.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.equipouno.classroombe.dto.StudentDTO;

public interface StudentController {

	public ResponseEntity<List<StudentDTO>> getStudents();

	public ResponseEntity<StudentDTO> getStudent(Long oid);

	public ResponseEntity<Boolean> updateStudent(Long oid, StudentDTO dto);

	public ResponseEntity<Boolean> createStudent(StudentDTO dto);

	public ResponseEntity<Boolean> deleteStudents(List<Long> oids);
}
