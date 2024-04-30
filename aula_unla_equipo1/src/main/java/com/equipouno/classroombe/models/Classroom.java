package com.equipouno.classroombe.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "classroom")
public class Classroom {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idAula", unique = true, nullable = false)
	private Long oid;

	@Column(name = "name")
	@NotBlank
	@Size(min = 5, max = 50)
	private String name;

	@NotNull
	@Column(name = "capability")
	private Long capability;

	@Column(name = "hasBlackboard")
	private Boolean hasBlackboard;

	@Column(name = "hasProjector")
	private Boolean hasProjector;

	public Classroom() {
		super();
	}

	public Classroom(Long oid, @NotBlank @Size(min = 5, max = 50) String name, @Min(10) Long capability,
			Boolean hasBlackboard, Boolean hasProjector) {
		super();
		this.oid = oid;
		this.name = name;
		this.capability = capability;
		this.hasBlackboard = hasBlackboard;
		this.hasProjector = hasProjector;
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
