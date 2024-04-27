package com.example.classroomProject.dtos;

import java.util.List;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class StudentDTO {

	private Long oid;

	@NotBlank
	@Size(max = 45)
	private String name;

	@NotBlank
	@Size(max = 45)
	private String lastName;

	@NotNull
	private Long cohort;

	@NotNull
	private Long documentNumber;

	public StudentDTO(@NotNull Long oid, @NotBlank @Size(max = 45) String name,
			@NotBlank @Size(max = 45) String lastName, @NotNull Long cohort, @NotNull Long documentNumber,
			List<CourseDTO> courses) {
		super();
		this.oid = oid;
		this.name = name;
		this.lastName = lastName;
		this.cohort = cohort;
		this.documentNumber = documentNumber;
	}

	public StudentDTO() {
		super();
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

	public Long getCohort() {
		return cohort;
	}

	public void setCohort(Long cohort) {
		this.cohort = cohort;
	}

	public Long getDocumentNumber() {
		return documentNumber;
	}

	public void setDocumentNumber(Long documentNumber) {
		this.documentNumber = documentNumber;
	}

}
