package com.alexbombita.bookclub.models;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class LoginUser {
	//VARIABLES
	@NotNull(message = "Email is required!")
	@Email(message = "Please enter a valid email!")
	private String email;

	@NotNull(message = "Password is required!")
	@Size(min = 8, max = 128, message = "Password must be between 8 and 128 characters")
	private String password;

	//CONSTRUCTOR
	public LoginUser() {
	}

	//GETTERS AND SETTERS
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
