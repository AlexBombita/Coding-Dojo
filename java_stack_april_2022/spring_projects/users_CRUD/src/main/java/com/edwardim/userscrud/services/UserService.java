package com.edwardim.userscrud.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edwardim.userscrud.models.User;
import com.edwardim.userscrud.repositories.UserRepository;

@Service
public class UserService {
	
	// IMPORTING THE USER REPO TO THE SERVICE
	@Autowired
	private UserRepository userRepo;
	
	
	// CREATE USER
	public User create(User newUser) {
		return userRepo.save(newUser);
	}

	
	// GET ALL USERS
	public List<User> allUsers(){
		return userRepo.findAll();
	}
	
	// GET ONE USER
	public User oneUser(Long id) {
		return userRepo.findById(id).orElse(null);
		
		
//        Optional<User> optionalBook = userRepo.findById(id);
//        if(optionalBook.isPresent()) {
//            return optionalBook.get();
//        } else {
//            return null;
//        }
	}
	
	// UPDATE USER
	public User updateUser(Long id, String firstName, String lastName, String email) {
		User userToUpdate = this.oneUser(id);
		userToUpdate.setFirstName(firstName);
		userToUpdate.setLastName(lastName);
		userToUpdate.setEmail(email);
		return userRepo.save(userToUpdate);
	}
	
	
	// DELETE USER
	public void deleteUser(Long id) {
		userRepo.deleteById(id);
	}
	
}
