package com.equipouno.classroombe.auth.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.equipouno.classroombe.auth.user.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByUsername(String username);
}
