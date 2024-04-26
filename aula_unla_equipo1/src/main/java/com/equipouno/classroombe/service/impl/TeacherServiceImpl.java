package com.equipouno.classroombe.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.equipouno.classroombe.dao.TeacherDAO;
import com.equipouno.classroombe.exceptions.ServiceException;
import com.equipouno.classroombe.models.Teacher;
import com.equipouno.classroombe.service.TeacherService;

@Service(TeacherServiceImpl.BEAN_NAME)
public class TeacherServiceImpl implements TeacherService {

	public final static String BEAN_NAME = "TeacherService";

	@Autowired
	private TeacherDAO teacherDAO;

	@Override
	public List<Teacher> findAll() {
		try {
			return getTeacherDAO().findAll();
		} catch (DataAccessException e) {
			throw e;
		} catch (Exception e) {
			throw new ServiceException("Ocurrio un error al querer traer todos los profesores", e);
		}
	}

	@Override
	public Optional<Teacher> findByOid(Long oid) {
		try {
			return getTeacherDAO().findById(oid);
		} catch (DataAccessException e) {
			throw e;
		} catch (Exception e) {
			throw new ServiceException("Ocurrio un error al querer traer el profesor", e);
		}
	}

	@Override
	public boolean deleteTeachers(List<Long> oids) {
		try {
			getTeacherDAO().deleteTeachers(oids);
			return true;
		} catch (DataAccessException e) {
			throw e;
		} catch (Exception e) {
			throw new ServiceException("Ocurrio un error al querer eliminar los profesores", e);
		}
	}

	@Override
	public boolean updateTeacher(Teacher entity) {
		try {
			getTeacherDAO().save(entity);
			return true;
		} catch (DataAccessException e) {
			throw e;
		} catch (Exception e) {
			throw new ServiceException("Ocurrio un error al querer modificar al profesor", e);
		}
	}

	public TeacherDAO getTeacherDAO() {
		return teacherDAO;
	}

}
