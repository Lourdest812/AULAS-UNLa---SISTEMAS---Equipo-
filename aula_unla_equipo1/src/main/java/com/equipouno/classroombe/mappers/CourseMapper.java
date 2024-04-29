package com.equipouno.classroombe.mappers;

import java.util.List;
import java.util.Set;

import org.mapstruct.BeforeMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import com.equipouno.classroombe.dto.CourseDTO;
import com.equipouno.classroombe.models.Course;
import com.equipouno.classroombe.service.ClassroomService;
import com.equipouno.classroombe.service.impl.ClassroomServiceImpl;

@Mapper(componentModel = "spring", uses = { TeacherMapper.class, StudentMapper.class, ClassroomMapper.class })
public abstract class CourseMapper {

	@Autowired
	@Qualifier(ClassroomServiceImpl.BEAN_NAME)
	protected ClassroomService classroomService;

	public ClassroomService getClassroomService() {
		return classroomService;
	}

	@Mapping(target = "oid", source = "dto.oid")
	@Mapping(target = "subject", source = "dto.subject")
	@Mapping(target = "dictationYear", source = "dto.dictationYear")
	@Mapping(target = "endTime", source = "dto.endTime")
	@Mapping(target = "startTime", source = "dto.startTime")
	@Mapping(target = "fourMonthPeriod", source = "dto.fourMonthPeriod")
	@Mapping(target = "student_limit", source = "dto.student_limit")
	@Mapping(target = "students", source = "dto.students")
	@Mapping(target = "teachers", source = "dto.teachers")
	public abstract Course courseDTOToEntity(CourseDTO dto);

	@Mapping(target = "oid", source = "entity.oid")
	@Mapping(target = "subject", source = "entity.subject")
	@Mapping(target = "dictationYear", source = "entity.dictationYear")
	@Mapping(target = "endTime", source = "entity.endTime")
	@Mapping(target = "startTime", source = "entity.startTime")
	@Mapping(target = "fourMonthPeriod", source = "entity.fourMonthPeriod")
	@Mapping(target = "student_limit", source = "entity.student_limit")
	@Mapping(target = "students", source = "entity.students")
	@Mapping(target = "teachers", source = "entity.teachers")
	@Mapping(target = "classroomOid", source = "entity.classroom.oid")
	@Mapping(target = "classroomName", source = "entity.classroom.name")
	public abstract CourseDTO courseToDTO(Course entity);

	@BeforeMapping
	protected void mapClassroom(CourseDTO dto, @MappingTarget Course course) {
		if (dto.getClassroomOid() != null) {
			course.setClassroom(getClassroomService().findByOid(dto.getClassroomOid()).orElseThrow());
		}
	}

	public abstract List<CourseDTO> coursesToDTOList(List<Course> courses);

	public abstract List<Course> courseDTOToEntityList(List<CourseDTO> courseDTOs);

	public abstract Set<CourseDTO> coursesToDTOList(Set<Course> courses);

	public abstract Set<Course> courseDTOsToList(Set<CourseDTO> courseDTOs);

}
