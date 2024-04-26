package com.equipouno.classroombe.controller.impl;

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

import com.equipouno.classroombe.controller.StudentController;
import com.equipouno.classroombe.dto.StudentDTO;
import com.equipouno.classroombe.mappers.StudentMapper;
import com.equipouno.classroombe.service.StudentService;
import com.equipouno.classroombe.service.impl.StudentServiceImpl;

import jakarta.validation.Valid;

@RestController(StudentControllerImpl.BEAN_NAME)
@RequestMapping(path = "student")
public class StudentControllerImpl implements StudentController {

	public static final String BEAN_NAME = "StudentControllerImpl";

	@Autowired
	private StudentMapper studentMapper;

	@Autowired
	@Qualifier(StudentServiceImpl.BEAN_NAME)
	private StudentService studentService;

	@Override
	@GetMapping(path = "/all")
	public ResponseEntity<List<StudentDTO>> getStudents() {
		List<StudentDTO> response = getStudentMapper().studentsToDTOList(getStudentService().findAll());
		return new ResponseEntity<List<StudentDTO>>(response, HttpStatus.OK);
	}

	@Override
	@GetMapping(path = "/{oid}")
	public ResponseEntity<StudentDTO> getStudent(@PathVariable Long oid) {
		StudentDTO response = getStudentMapper().studentToDTO(getStudentService().findByOid(oid).get());
		return new ResponseEntity<StudentDTO>(response, HttpStatus.OK);
	}

	@Override
	@PutMapping(path = "/{oid}")
	public ResponseEntity<Boolean> updateStudent(@PathVariable Long oid, @RequestBody @Valid StudentDTO dto) {
		getStudentService().updateStudent(getStudentMapper().studentDTOToEntity(dto));
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}

	@Override
	@PostMapping
	public ResponseEntity<Boolean> createStudent(@RequestBody @Valid StudentDTO dto) {
		getStudentService().updateStudent(getStudentMapper().studentDTOToEntity(dto));
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}

	@Override
	@PutMapping
	public ResponseEntity<Boolean> deleteStudents(List<Long> oids) {
		getStudentService().deleteStudents(oids);
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}

	public StudentMapper getStudentMapper() {
		return studentMapper;
	}

	public StudentService getStudentService() {
		return studentService;
	}

}
