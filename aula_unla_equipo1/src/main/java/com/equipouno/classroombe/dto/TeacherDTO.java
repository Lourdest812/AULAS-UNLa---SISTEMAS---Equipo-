package com.equipouno.classroombe.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class TeacherDTO {

	@NotNull
	private Long oid;

	@NotBlank
	@Size(max = 45)
	private String name;

	@NotBlank
	@Size(max = 45)
	private String lastName;

	@NotNull
	private Long documentNumber;

	public TeacherDTO(@NotNull Long oid, @NotBlank @Size(max = 45) String name,
			@NotBlank @Size(max = 45) String lastName, @NotNull Long documentNumber) {
		super();
		this.oid = oid;
		this.name = name;
		this.lastName = lastName;
		this.documentNumber = documentNumber;
	}

	public TeacherDTO() {
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

	public Long getDocumentNumber() {
		return documentNumber;
	}

	public void setDocumentNumber(Long documentNumber) {
		this.documentNumber = documentNumber;
	}

}
