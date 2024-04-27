package com.example.classroomProject.dtos;

import java.time.LocalTime;
import java.util.List;

import com.example.classroomProject.enums.FourMonthPeriod;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class CourseDTO {

	private Long oid;

	@NotBlank
	@Size(min = 5, max = 50)
	private String subject;

	private LocalTime endTime;

	private LocalTime startTime;

	@NotNull
	private Long student_limit;

	private Long classroomOid;

	private String classroomName;

	private List<StudentDTO> students;

	private List<TeacherDTO> teachers;

	private FourMonthPeriod fourMonthPeriod;

	private String dictationYear;

	public CourseDTO(Long oid, @NotBlank @Size(min = 5, max = 50) String subject, LocalTime endTime,
			LocalTime startTime, @NotNull Long student_limit, Long classroomOid, String classroomName,
			List<StudentDTO> students, List<TeacherDTO> teachers, FourMonthPeriod fourMonthPeriod,
			String dictationYear) {
		super();
		this.oid = oid;
		this.subject = subject;
		this.endTime = endTime;
		this.startTime = startTime;
		this.student_limit = student_limit;
		this.classroomOid = classroomOid;
		this.classroomName = classroomName;
		this.students = students;
		this.teachers = teachers;
		this.fourMonthPeriod = fourMonthPeriod;
		this.dictationYear = dictationYear;
	}

	public CourseDTO() {
		super();
	}

	public Long getOid() {
		return oid;
	}

	public void setOid(Long oid) {
		this.oid = oid;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public LocalTime getEndTime() {
		return endTime;
	}

	public void setEndTime(LocalTime endTime) {
		this.endTime = endTime;
	}

	public LocalTime getStartTime() {
		return startTime;
	}

	public void setStartTime(LocalTime startTime) {
		this.startTime = startTime;
	}

	public Long getStudent_limit() {
		return student_limit;
	}

	public void setStudent_limit(Long student_limit) {
		this.student_limit = student_limit;
	}

	public Long getClassroomOid() {
		return classroomOid;
	}

	public void setClassroomOid(Long classroomOid) {
		this.classroomOid = classroomOid;
	}

	public List<StudentDTO> getStudents() {
		return students;
	}

	public void setStudents(List<StudentDTO> students) {
		this.students = students;
	}

	public List<TeacherDTO> getTeachers() {
		return teachers;
	}

	public void setTeachers(List<TeacherDTO> teachers) {
		this.teachers = teachers;
	}

	public FourMonthPeriod getFourMonthPeriod() {
		return fourMonthPeriod;
	}

	public void setFourMonthPeriod(FourMonthPeriod fourMonthPeriod) {
		this.fourMonthPeriod = fourMonthPeriod;
	}

	public String getDictationYear() {
		return dictationYear;
	}

	public void setDictationYear(String dictationYear) {
		this.dictationYear = dictationYear;
	}

	public String getClassroomName() {
		return classroomName;
	}

	public void setClassroomName(String classroomName) {
		this.classroomName = classroomName;
	}

}
