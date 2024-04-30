package com.equipouno.classroombe.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.equipouno.classroombe.dto.CourseDTO;

public interface CourseController {

	public ResponseEntity<List<CourseDTO>> getCourses();

	public ResponseEntity<CourseDTO> getCourse(Long oid);

	public ResponseEntity<Boolean> updateCourse(Long oid, CourseDTO dto);

	public ResponseEntity<Boolean> createCourse(CourseDTO dto);

	public ResponseEntity<Boolean> deleteCourses(List<Long> oids);
}
