package com.equipouno.classroombe.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.equipouno.classroombe.dto.ClassroomDTO;

public interface ClassroomController {

	public ResponseEntity<List<ClassroomDTO>> getClassrooms();

	public ResponseEntity<ClassroomDTO> getClassroom(Long oid);

	public ResponseEntity<Boolean> updateClassroom(Long oid, ClassroomDTO dto);

	public ResponseEntity<Boolean> createClassroom(ClassroomDTO dto);

	public ResponseEntity<Boolean> deleteClassrooms(List<Long> oids);
}
