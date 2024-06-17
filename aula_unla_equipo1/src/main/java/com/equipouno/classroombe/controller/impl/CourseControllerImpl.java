package com.equipouno.classroombe.controller.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.equipouno.classroombe.controller.CourseController;
import com.equipouno.classroombe.dto.CourseDTO;
import com.equipouno.classroombe.dto.StudentDTO;
import com.equipouno.classroombe.dto.TeacherDTO;
import com.equipouno.classroombe.mappers.CourseMapper;
import com.equipouno.classroombe.mappers.StudentMapper;
import com.equipouno.classroombe.mappers.TeacherMapper;
import com.equipouno.classroombe.models.Student;
import com.equipouno.classroombe.models.Teacher;
import com.equipouno.classroombe.service.CourseService;
import com.equipouno.classroombe.service.impl.CourseServiceImpl;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200", methods = { RequestMethod.DELETE, RequestMethod.GET, RequestMethod.POST,
		RequestMethod.PUT })
@RestController(CourseControllerImpl.BEAN_NAME)
@RequestMapping(path = "course")
public class CourseControllerImpl implements CourseController {

	public static final String BEAN_NAME = "CourseControllerImpl";

	@Autowired
	@Qualifier(CourseServiceImpl.BEAN_NAME)
	private CourseService courseService;

	@Autowired
	private CourseMapper courseMapper;

	@Autowired
	private StudentMapper studentMapper;

	@Autowired
	private TeacherMapper teacherMapper;

	@Override
	@GetMapping(path = "/all")
	public ResponseEntity<List<CourseDTO>> getCourses() {
		List<CourseDTO> response = getCourseMapper().coursesToDTOList(getCourseService().findAll());
		return new ResponseEntity<List<CourseDTO>>(response, HttpStatus.OK);
	}

	@Override
	@GetMapping(path = "/{oid}")
	public ResponseEntity<CourseDTO> getCourse(@PathVariable Long oid) {
		CourseDTO response = getCourseMapper().courseToDTO(getCourseService().findByOid(oid).get());
		return new ResponseEntity<CourseDTO>(response, HttpStatus.OK);
	}

	@Override
	@PutMapping(path = "/{oid}")
	public ResponseEntity<Boolean> updateCourse(@PathVariable Long oid, @RequestBody @Valid CourseDTO dto) {
		getCourseService().updateCourse(getCourseMapper().courseDTOToEntity(dto));
		return new ResponseEntity<Boolean>(true, HttpStatus.ACCEPTED);
	}

	@Override
	@PostMapping
	public ResponseEntity<Boolean> createCourse(@RequestBody @Valid CourseDTO dto) {
		getCourseService().updateCourse(getCourseMapper().courseDTOToEntity(dto));
		return new ResponseEntity<Boolean>(true, HttpStatus.CREATED);
	}

	@Override
	@DeleteMapping(path = "/delete")
	public ResponseEntity<Boolean> deleteCourses(@RequestBody List<Long> oids) {
		getCourseService().deleteCourses(oids);
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}

	@Override
	@GetMapping(path = "/studentNoAssociated/{courseOid}")
	public ResponseEntity<List<StudentDTO>> getStudentNotAssociated(@PathVariable Long courseOid) {
		List<StudentDTO> response = getStudentMapper().studentsToDTOList(getCourseService().getStudentsNotAssociated(courseOid));
		return new ResponseEntity<List<StudentDTO>>(response, HttpStatus.OK);
	}

	@Override
	@GetMapping(path = "/teacherNoAssociated/{courseOid}")
	public ResponseEntity<List<TeacherDTO>> getTeachersNotAssociated(@PathVariable Long courseOid) {
		List<TeacherDTO> response = getTeacherMapper().teachersToDTOList(getCourseService().getTeachersNotAssociated(courseOid));
		return new ResponseEntity<List<TeacherDTO>>(response, HttpStatus.OK);
	}

	public CourseService getCourseService() {
		return courseService;
	}

	public CourseMapper getCourseMapper() {
		return courseMapper;
	}

	public StudentMapper getStudentMapper() {
		return studentMapper;
	}

	public TeacherMapper getTeacherMapper() {
		return teacherMapper;
	}

}
