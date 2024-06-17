package com.equipouno.classroombe.auth;

import com.equipouno.classroombe.auth.user.Role;

public class RegisterRequest {

	private String userName;
	private String password;
	private String firstName;
	private String lastName;
	private Role role;

	public RegisterRequest() {
		super();
	}

	public RegisterRequest(String userName, String password, String firstName, String lastName, Role role) {
		super();
		this.userName = userName;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

}
