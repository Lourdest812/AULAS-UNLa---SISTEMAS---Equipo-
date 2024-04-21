package com.example.classroomProject.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.example.classroomProject.dao.ClassroomDAO;
import com.example.classroomProject.exceptions.ServiceException;
import com.example.classroomProject.models.Classroom;
import com.example.classroomProject.services.ClassroomService;

@Service(ClassroomServiceImpl.BEAN_NAME)
public class ClassroomServiceImpl implements ClassroomService {

	public final static String BEAN_NAME = "ClassroomService";

	@Autowired
	private ClassroomDAO classroomDAO;

	@Override
	public List<Classroom> findAll() {
		try {
			return getClassroomDAO().findAll();
		} catch (DataAccessException e) {
			throw e;
		} catch (Exception e) {
			throw new ServiceException("Ocurrio un problema al querer traer todas las aulas", e);
		}
	}

	@Override
	public Optional<Classroom> findByOid(Long oid) {
		try {
			return getClassroomDAO().findById(oid);
		} catch(DataAccessException e) {
			throw e;
		} catch(Exception e) {
			throw new ServiceException("Ocurrio un problema al querer traer el aula", e);
		}
	}

	@Override
	public boolean deleteClassrooms(List<Long> oids) {
		try {
			getClassroomDAO().deleteMultipleClassroom(oids);
			return true;
		} catch(DataAccessException e) {
			throw e;
		} catch(Exception e) {
			throw new ServiceException("Ocurrio un problema al querer eliminar las aulas", e);
		}
	}

	@Override
	public boolean updateClassroom(Classroom entity) {
		try {
			getClassroomDAO().save(entity);
			return true;
		} catch(DataAccessException e) {
			throw e;
		} catch(Exception e) {
			throw new ServiceException("Ocurrio un problema al querer actualizar el aula", e);
		}
	}
	
	public ClassroomDAO getClassroomDAO() {
		return classroomDAO;
	}

}
