package com.equipouno.classroombe.mappers;

import java.util.List;
import java.util.Set;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.equipouno.classroombe.dto.TeacherDTO;
import com.equipouno.classroombe.models.Teacher;

@Mapper(componentModel = "spring")
public interface TeacherMapper {

	@Mapping(target = "oid", source = "entity.oid")
	@Mapping(target = "name", source = "entity.name")
	@Mapping(target = "lastName", source = "entity.lastName")
	@Mapping(target = "documentNumber", source = "entity.documentNumber")
	public TeacherDTO teacherToDTO(Teacher entity);

	@Mapping(target = "oid", source = "dto.oid")
	@Mapping(target = "name", source = "dto.name")
	@Mapping(target = "lastName", source = "dto.lastName")
	@Mapping(target = "documentNumber", source = "dto.documentNumber")
	public Teacher teacherDTOToEntity(TeacherDTO dto);

	public List<TeacherDTO> teachersToDTOList(List<Teacher> listEntity);

	public List<Teacher> teachersDTOToEntityList(List<TeacherDTO> listDTO);

	public Set<TeacherDTO> teachersToDTOList(Set<Teacher> listEntity);

	public Set<Teacher> teachersDTOToEntityList(Set<TeacherDTO> listDTO);
}
