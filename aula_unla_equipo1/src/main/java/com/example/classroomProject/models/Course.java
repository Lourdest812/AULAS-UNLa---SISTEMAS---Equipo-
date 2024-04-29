package com.example.classroomProject.models;

import java.time.LocalTime;
import java.util.Set;

import com.example.classroomProject.enums.FourMonthPeriod;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "course")
public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idcourse", unique = true, nullable = false)
	private Long oid;

	@Size(min = 5, max = 50)
	@NotBlank
	@Column(name = "subject")
	private String subject;

	@Size(max = 50)
	@Column(name = "dictation_year")
	private String dictationYear;

	@Column(name = "endTime")
	private LocalTime endTime;

	@Column(name = "startTime")
	private LocalTime startTime;

	@Enumerated(EnumType.STRING)
	@NotNull
	@Column(name = "four_month_period")
	private FourMonthPeriod fourMonthPeriod;

	@NotNull
	@Column(name = "student_limit")
	private Long student_limit;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "classroom_idAula", referencedColumnName = "idAula")
	private Classroom classroom;

	@ManyToMany() 
    @JoinTable(
        name = "student_has_course",
        joinColumns = @JoinColumn(name = "course_idcourse", referencedColumnName = "idcourse"),
        inverseJoinColumns = @JoinColumn(name = "student_idalumno", referencedColumnName = "idalumno")
    )
	private Set<Student> students;

	@ManyToMany()
	@JoinTable(name = "teacher_has_course", joinColumns = @JoinColumn(name = "course_idcourse", referencedColumnName = "idcourse"), inverseJoinColumns = @JoinColumn(name = "teacher_idteacher", referencedColumnName = "idteacher"))
	private Set<Teacher> teachers;

	public Course() {
		super();
	}

	public Course(Long oid, @Size(min = 5, max = 50) @NotBlank String subject, @Size(max = 50) String dictationYear,
			LocalTime endTime, LocalTime startTime, @NotNull FourMonthPeriod fourMonthPeriod,
			@NotNull Long student_limit, Classroom classroom, Set<Student> students, Set<Teacher> teachers) {
		super();
		this.oid = oid;
		this.subject = subject;
		this.dictationYear = dictationYear;
		this.endTime = endTime;
		this.startTime = startTime;
		this.fourMonthPeriod = fourMonthPeriod;
		this.student_limit = student_limit;
		this.classroom = classroom;
		this.students = students;
		this.teachers = teachers;
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

	public String getDictationYear() {
		return dictationYear;
	}

	public void setDictationYear(String dictationYear) {
		this.dictationYear = dictationYear;
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

	public FourMonthPeriod getFourMonthPeriod() {
		return fourMonthPeriod;
	}

	public void setFourMonthPeriod(FourMonthPeriod fourMonthPeriod) {
		this.fourMonthPeriod = fourMonthPeriod;
	}

	public Long getStudent_limit() {
		return student_limit;
	}

	public void setStudent_limit(Long student_limit) {
		this.student_limit = student_limit;
	}

	public Classroom getClassroom() {
		return classroom;
	}

	public void setClassroom(Classroom classroom) {
		this.classroom = classroom;
	}

	public Set<Student> getStudents() {
		return students;
	}

	public void setStudents(Set<Student> students) {
		this.students = students;
	}

	public Set<Teacher> getTeachers() {
		return teachers;
	}

	public void setTeachers(Set<Teacher> teachers) {
		this.teachers = teachers;
	}

}
