package com.example.classroomProject.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class ClassroomDTO {

	@NotNull()
	private Long oid;

	@NotBlank
	@Size(min = 5, max = 50)
	private String name;

	@NotNull
	private Long capability;

	private Boolean hasBlackboard;

	private Boolean hasProjector;

	public ClassroomDTO(@NotNull Long oid, @NotBlank @Size(min = 5, max = 50) String name, @NotNull Long capability,
			Boolean hasBlackboard, Boolean hasProjector) {
		super();
		this.oid = oid;
		this.name = name;
		this.capability = capability;
		this.hasBlackboard = hasBlackboard;
		this.hasProjector = hasProjector;
	}

	public ClassroomDTO() {
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

	public Long getCapability() {
		return capability;
	}

	public void setCapability(Long capability) {
		this.capability = capability;
	}

	public Boolean getHasBlackboard() {
		return hasBlackboard;
	}

	public void setHasBlackboard(Boolean hasBlackboard) {
		this.hasBlackboard = hasBlackboard;
	}

	public Boolean getHasProjector() {
		return hasProjector;
	}

	public void setHasProjector(Boolean hasProjector) {
		this.hasProjector = hasProjector;
	}

}
