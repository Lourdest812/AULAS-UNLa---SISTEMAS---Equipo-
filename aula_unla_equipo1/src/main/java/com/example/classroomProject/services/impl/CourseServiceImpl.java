package com.example.classroomProject.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.example.classroomProject.dao.CourseDAO;
import com.example.classroomProject.exceptions.ServiceException;
import com.example.classroomProject.models.Course;
import com.example.classroomProject.services.CourseService;

@Service(CourseServiceImpl.BEAN_NAME)
public class CourseServiceImpl implements CourseService {

	public final static String BEAN_NAME = "CourseService";

	@Autowired
	private CourseDAO courseDAO;

	@Override
	public List<Course> findAll() {
		try {
			return getCourseDAO().findAll();
		} catch (DataAccessException e) {
			throw e;
		} catch (Exception e) {
			throw new ServiceException("Ocurrio un problema al querer traer los cursos", e);
		}
	}

	@Override
	public Optional<Course> findByOid(Long oid) {
		try {
			return getCourseDAO().findById(oid);
		} catch (DataAccessException e) {
			throw e;
		} catch (Exception e) {
			throw new ServiceException("Ocurrio un problema al querer traer el curso", e);
		}
	}

	@Override
	public boolean deleteCourses(List<Long> oids) {
		try {
			getCourseDAO().deleteCourses(oids);
			return true;
		} catch (DataAccessException e) {
			throw e;
		} catch (Exception e) {
			throw new ServiceException("Ocurrio un problema al querer eliminar los cursos", e);
		}
	}

	@Override
	public boolean updateCourse(Course entity) {
		try {
			getCourseDAO().save(entity);
			return true;
		} catch (DataAccessException e) {
			throw e;
		} catch (Exception e) {
			throw new ServiceException("Ocurrio un problema al querer hacer una modificacion en el curso", e);
		}
	}

	public CourseDAO getCourseDAO() {
		return courseDAO;
	}

}
