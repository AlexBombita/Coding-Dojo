package com.alexbombita.courseplatform.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.alexbombita.courseplatform.models.User;

public interface UserRepository extends CrudRepository<User, Long>{
	
	Optional<User> findByEmail(String email);
    
    Optional<User> findByUserName(String userName);
}
