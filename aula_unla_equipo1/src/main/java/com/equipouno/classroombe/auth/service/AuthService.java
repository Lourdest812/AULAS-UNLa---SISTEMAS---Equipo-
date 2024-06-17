package com.equipouno.classroombe.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.equipouno.classroombe.auth.AuthResponse;
import com.equipouno.classroombe.auth.LoginRequest;
import com.equipouno.classroombe.auth.RegisterRequest;
import com.equipouno.classroombe.auth.jwt.JwtService;
import com.equipouno.classroombe.auth.user.User;
import com.equipouno.classroombe.auth.user.repository.UserRepository;

@Service(AuthService.BEAN_NAME)
public class AuthService {

	public final static String BEAN_NAME = "authService";

	@Autowired
	private UserRepository userRepository;

	@Autowired
	@Qualifier(JwtService.BEAN_NAME)
	private JwtService jwtService;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private AuthenticationManager authenticationManager;

	public AuthResponse login(LoginRequest request) {
		getAuthenticationManager().authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
		User user = getUserRepository().findByUsername(request.getUsername()).orElseThrow();
		String token = getJwtService().getToken(user);
		return new AuthResponse(token, user.getRole().toString());
	}

	public AuthResponse register(RegisterRequest request) {
		User user = new User(null, request.getUserName(), request.getLastName(), request.getFirstName(),
				passwordEncoder.encode(request.getPassword()), request.getRole());

		getUserRepository().save(user);

		return new AuthResponse(getJwtService().getToken(user));
	}

	public UserRepository getUserRepository() {
		return userRepository;
	}

	public JwtService getJwtService() {
		return jwtService;
	}

	public PasswordEncoder getPasswordEncoder() {
		return passwordEncoder;
	}

	public AuthenticationManager getAuthenticationManager() {
		return authenticationManager;
	}

}
