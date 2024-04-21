package com.example.classroomProject.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.example.classroomProject.dtos.ClassroomDTO;

public interface ClassroomController {

	public ResponseEntity<List<ClassroomDTO>> getClassrooms();

	public ResponseEntity<ClassroomDTO> getClassroom(Long oid);

	public ResponseEntity<Boolean> updateClassroom(Long oid, ClassroomDTO dto);

	public ResponseEntity<Boolean> createClassroom(ClassroomDTO dto);

	public ResponseEntity<Boolean> deleteClassrooms(List<Long> oids);
}
