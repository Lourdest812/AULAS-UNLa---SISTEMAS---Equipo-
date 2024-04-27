package com.example.classroomProject.models;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "teacher")
public class Teacher {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idteacher", unique = true, nullable = false)
	private Long oid;

	@NotBlank
	@Size(max = 45)
	@Column(name = "name")
	private String name;

	@NotBlank
	@Size(max = 45)
	@Column(name = "lastName")
	private String lastName;

	@NotNull
	@Column(name = "documentNumber")
	private Long documentNumber;

	@ManyToMany(mappedBy = "teachers")
	private Set<Course> courses;

	public Teacher() {
		super();
	}

	public Teacher(Long oid, @NotBlank @Size(max = 45) String name, @NotBlank @Size(max = 45) String lastName,
			@NotNull Long documentNumber) {
		super();
		this.oid = oid;
		this.name = name;
		this.lastName = lastName;
		this.documentNumber = documentNumber;
	}

	public Long getOid() {
		return oid;
	}

	public void setOid(Long oid) {
		this.oid = oid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Long getDocumentNumber() {
		return documentNumber;
	}

	public void setDocumentNumber(Long documentNumber) {
		this.documentNumber = documentNumber;
	}

	public Set<Course> getCourses() {
		return courses;
	}

	public void setCourses(Set<Course> courses) {
		this.courses = courses;
	}

}
