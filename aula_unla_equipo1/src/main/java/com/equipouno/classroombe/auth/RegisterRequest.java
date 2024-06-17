package com.equipouno.classroombe.auth;

import com.equipouno.classroombe.auth.user.Role;

public class RegisterRequest {

	private String userName;
	private String password;
	private Role role;

	public RegisterRequest() {
		super();
	}

	public RegisterRequest(String userName, String password, Role role) {
		super();
		this.userName = userName;
		this.password = password;
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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
}
