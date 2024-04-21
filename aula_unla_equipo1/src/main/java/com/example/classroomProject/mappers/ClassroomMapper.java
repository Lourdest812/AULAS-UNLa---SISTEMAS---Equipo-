package com.example.classroomProject.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.classroomProject.dtos.ClassroomDTO;
import com.example.classroomProject.models.Classroom;

@Mapper(componentModel = "spring")
public interface ClassroomMapper {

	@Mapping(target = "oid", source = "entity.oid")
	@Mapping(target = "name", source = "entity.name")
	@Mapping(target = "capability", source = "entity.capability")
	@Mapping(target = "hasBlackboard", source = "entity.hasBlackboard")
	@Mapping(target = "hasProjector", source = "entity.hasProjector")
	public ClassroomDTO classroomToDTO(Classroom entity);

	@Mapping(target = "oid", source = "dto.oid")
	@Mapping(target = "name", source = "dto.name")
	@Mapping(target = "capability", source = "dto.capability")
	@Mapping(target = "hasBlackboard", source = "dto.hasBlackboard")
	@Mapping(target = "hasProjector", source = "dto.hasProjector")
	public Classroom classroomtoEntity(ClassroomDTO dto);

	public List<ClassroomDTO> classroomToDTOList(List<Classroom> classrooms);

	public List<Classroom> classroomDTOToEntityList(List<ClassroomDTO> classrooms);
}
