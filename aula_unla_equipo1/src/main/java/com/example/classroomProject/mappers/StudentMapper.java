package com.example.classroomProject.mappers;

import java.util.List;
import java.util.Set;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.classroomProject.dtos.StudentDTO;
import com.example.classroomProject.models.Student;

@Mapper(componentModel = "spring")
public interface StudentMapper {

	@Mapping(target = "oid", source = "entity.oid")
	@Mapping(target = "name", source = "entity.name")
	@Mapping(target = "lastName", source = "entity.lastName")
	@Mapping(target = "cohort", source = "entity.cohort")
	@Mapping(target = "documentNumber", source = "entity.documentNumber")
	public StudentDTO studentToDTO(Student entity);

	@Mapping(target = "oid", source = "dto.oid")
	@Mapping(target = "name", source = "dto.name")
	@Mapping(target = "lastName", source = "dto.lastName")
	@Mapping(target = "cohort", source = "dto.cohort")
	@Mapping(target = "documentNumber", source = "dto.documentNumber")
	public Student studentDTOToEntity(StudentDTO dto);

	public List<StudentDTO> studentsToDTOList(List<Student> listEntity);

	public List<Student> studentsDTOToEntityList(List<StudentDTO> listDTO);

	public Set<StudentDTO> studentsToDTOList(Set<Student> listEntity);

	public Set<Student> studentsDTOToEntityList(Set<StudentDTO> listDTO);
}
