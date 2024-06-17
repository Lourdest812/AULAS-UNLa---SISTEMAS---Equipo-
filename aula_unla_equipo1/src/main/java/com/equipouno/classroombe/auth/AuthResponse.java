package com.equipouno.classroombe.auth;

public class AuthResponse {

	private String token;
	private String role;

	public AuthResponse() {
		super();
	}
	
	public AuthResponse(String token) {
		super();
		this.token = token;
	}

	public AuthResponse(String token, String role) {
		super();
		this.token = token;
		this.role = role;
	}

	public String getToken() {
		return token;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public void setToken(String token) {
		this.token = token;
	}

}
