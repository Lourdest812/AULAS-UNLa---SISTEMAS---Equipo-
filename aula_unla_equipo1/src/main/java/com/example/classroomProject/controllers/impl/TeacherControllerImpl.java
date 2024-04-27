package com.example.classroomProject.controllers.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.classroomProject.controllers.TeacherController;
import com.example.classroomProject.dtos.TeacherDTO;
import com.example.classroomProject.mappers.TeacherMapper;
import com.example.classroomProject.services.TeacherService;
import com.example.classroomProject.services.impl.TeacherServiceImpl;

import jakarta.validation.Valid;

@RestController(TeacherControllerImpl.BEAN_NAME)
@RequestMapping(path = "teacher")
public class TeacherControllerImpl implements TeacherController {

	public static final String BEAN_NAME = "TeacherControllerImpl ";

	@Autowired
	private TeacherMapper teacherMapper;

	@Autowired
	@Qualifier(TeacherServiceImpl.BEAN_NAME)
	private TeacherService teacherService;

	@Override
	@GetMapping(path = "/all")
	public ResponseEntity<List<TeacherDTO>> getTeachers() {
		List<TeacherDTO> response = getTeacherMapper().teachersToDTOList(getTeacherService().findAll());
		return new ResponseEntity<List<TeacherDTO>>(response, HttpStatus.OK);
	}

	@Override
	@GetMapping(path = "/{oid}")
	public ResponseEntity<TeacherDTO> getTeacher(@PathVariable Long oid) {
		TeacherDTO response = getTeacherMapper().teacherToDTO(getTeacherService().findByOid(oid).get());
		return new ResponseEntity<TeacherDTO>(response, HttpStatus.OK);
	}

	@Override
	@PutMapping(path = "/{oid}")
	public ResponseEntity<Boolean> updateTeacher(@PathVariable Long oid, @RequestBody @Valid TeacherDTO dto) {
		getTeacherService().updateTeacher(getTeacherMapper().teacherDTOToEntity(dto));
		return new ResponseEntity<Boolean>(true, HttpStatus.ACCEPTED);
	}

	@Override
	@PostMapping
	public ResponseEntity<Boolean> createTeacher(@RequestBody @Valid TeacherDTO dto) {
		getTeacherService().updateTeacher(getTeacherMapper().teacherDTOToEntity(dto));
		return new ResponseEntity<Boolean>(true, HttpStatus.CREATED);
	}

	@Override
	@PutMapping(path = "/delete")
	public ResponseEntity<Boolean> deleteTeachers(@RequestBody List<Long> oids) {
		getTeacherService().deleteTeachers(oids);
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}

	public TeacherMapper getTeacherMapper() {
		return teacherMapper;
	}

	public TeacherService getTeacherService() {
		return teacherService;
	}

}
