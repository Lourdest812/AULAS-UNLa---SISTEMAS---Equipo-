package com.example.classroomProject.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.example.classroomProject.dao.StudentDAO;
import com.example.classroomProject.exceptions.ServiceException;
import com.example.classroomProject.models.Student;
import com.example.classroomProject.services.StudentService;

@Service(StudentServiceImpl.BEAN_NAME)
public class StudentServiceImpl implements StudentService {

	public final static String BEAN_NAME = "StudentService";

	@Autowired
	private StudentDAO studentDAO;

	@Override
	public List<Student> findAll() {
		try {
			return getStudentDAO().findAll();
		} catch(DataAccessException e) {
			throw e;
		} catch(Exception e) {
			throw new ServiceException("Ocurrio un problema al querer traer todos los estudiantes", e);
		}
	}

	@Override
	public Optional<Student> findByOid(Long oid) {
		try {
			return getStudentDAO().findById(oid);
		} catch(DataAccessException e) {
			throw e;
		} catch(Exception e) {
			throw new ServiceException("Ocurrio un problema al querer traer un estudiante", e);
		}
	}

	@Override
	public boolean deleteStudents(List<Long> oids) {
		try {
			getStudentDAO().deleteStudents(oids);
			return true;
		} catch(DataAccessException e) {
			throw e;
		} catch(Exception e) {
			throw new ServiceException("Ocurrio un problema al querer eliminar los estudiantes",e);
		}
	}

	@Override
	public boolean updateStudent(Student entity) {
		try {
			getStudentDAO().save(entity);
			return true;
		} catch(DataAccessException e) {
			throw e;
		} catch(Exception e) {
			throw new ServiceException("Ocurrio un problema al querer modificar un estudiante", e);
		}
	}

	public StudentDAO getStudentDAO() {
		return studentDAO;
	}

}
