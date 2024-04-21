package com.example.classroomProject.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.example.classroomProject.dtos.StudentDTO;

public interface StudentController {

	public ResponseEntity<List<StudentDTO>> getStudents();

	public ResponseEntity<StudentDTO> getStudent(Long oid);

	public ResponseEntity<Boolean> updateStudent(Long oid, StudentDTO dto);

	public ResponseEntity<Boolean> createStudent(StudentDTO dto);

	public ResponseEntity<Boolean> deleteStudents(List<Long> oids);
}
