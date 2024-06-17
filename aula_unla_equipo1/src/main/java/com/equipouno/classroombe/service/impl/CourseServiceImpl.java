package com.equipouno.classroombe.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.equipouno.classroombe.dao.CourseDAO;
import com.equipouno.classroombe.exceptions.ServiceException;
import com.equipouno.classroombe.models.Course;
import com.equipouno.classroombe.models.Student;
import com.equipouno.classroombe.models.Teacher;
import com.equipouno.classroombe.service.CourseService;

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

	@Override
	public List<Teacher> getTeachersNotAssociated(Long courseOid) {
		try {
			return getCourseDAO().getTeachersAssociated(courseOid);
		} catch(DataAccessException e) {
			throw e;
		} catch(Exception e) {
			throw new ServiceException("Ocurrio un problema al querer trer los profesores asociados al curso " + courseOid);
		}
	}

	@Override
	public List<Student> getStudentsNotAssociated(Long courseOid) {
		try {
			return getCourseDAO().getStudentsAssociated(courseOid);
		} catch(DataAccessException e) {
			throw e;
		} catch(Exception e) {
			throw new ServiceException("Ocurrio un problema al querer trer los estudiantes asociados al curso " + courseOid);
		}
	}

}
