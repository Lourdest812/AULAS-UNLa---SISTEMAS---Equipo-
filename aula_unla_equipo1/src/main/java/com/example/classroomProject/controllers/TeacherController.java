package com.example.classroomProject.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.example.classroomProject.dtos.TeacherDTO;

public interface TeacherController {

	public ResponseEntity<List<TeacherDTO>> getTeachers();

	public ResponseEntity<TeacherDTO> getTeacher(Long oid);

	public ResponseEntity<Boolean> updateTeacher(Long oid, TeacherDTO dto);

	public ResponseEntity<Boolean> createTeacher(TeacherDTO dto);

	public ResponseEntity<Boolean> deleteTeachers(List<Long> oids);
}
