package com.equipouno.classroombe.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.equipouno.classroombe.auth.service.AuthService;

@CrossOrigin(origins = "http://localhost:4200",methods = {RequestMethod.DELETE,RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT})
@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	@Qualifier(AuthService.BEAN_NAME)
	private AuthService authService;
	
	@PostMapping(value = "login")
	public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
		return ResponseEntity.ok(getAuthService().login(request));
	}
	
	@PostMapping(value = "register")
	public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
		return ResponseEntity.ok(getAuthService().register(request));
	}

	public AuthService getAuthService() {
		return authService;
	}
	
}
