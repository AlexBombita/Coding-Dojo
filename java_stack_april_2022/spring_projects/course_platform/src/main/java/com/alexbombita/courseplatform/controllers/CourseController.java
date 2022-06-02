package com.alexbombita.courseplatform.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.alexbombita.courseplatform.models.Course;
import com.alexbombita.courseplatform.models.User;
import com.alexbombita.courseplatform.services.CourseService;
import com.alexbombita.courseplatform.services.UserService;

@Controller
public class CourseController {
	
	@Autowired
	CourseService courseService;
	@Autowired
	UserService userService;
	
	//COURSE VIEW 
	@GetMapping("/courses/new")
	public String newCourseView(@ModelAttribute("course") Course course, Model model, HttpSession session) {
		//Check if User is Logged In
    	if (session.isNew() || session.getAttribute("user_id") == null) {
    		return "redirect:/initial";
    	}
    	//Get the Log In User 
    	User loggedInUser = userService.retrieveUser((Long) session.getAttribute("user_id"));
    	model.addAttribute("loggedInUser", loggedInUser);
		return "newcourse";
	}
	//COURSE POST
	@PostMapping("/courses/new")
	public String createCourse(@Valid @ModelAttribute("course") Course course, BindingResult result, HttpSession session, Model model) {
		if (result.hasErrors()) {
			//Check if User is Logged In
	    	if (session.isNew() || session.getAttribute("user_id") == null) {
	    		return "redirect:/initial";
	    	}
			//Get the Log In User
	    	User loggedInUser = userService.retrieveUser((Long) session.getAttribute("user_id"));
	    	model.addAttribute("loggedInUser", loggedInUser);
			return "newcourse";
		} else {
			//Get the Log In User
	    	User loggedInUser = userService.retrieveUser((Long) session.getAttribute("user_id"));
	    	model.addAttribute("loggedInUser", loggedInUser);
	    	course.setUser(loggedInUser);
	    	courseService.newCourse(course);
			return "redirect:/home";
		}
	}
	//
	@GetMapping("/courses/{id}")
	public String getViewById(@PathVariable("id") Long id, Model model, HttpSession session) {
		//---- Get the Log In User -------------------------------
    	User loggedInUser = userService.retrieveUser((Long) session.getAttribute("user_id"));
    	model.addAttribute("loggedInUser", loggedInUser);
    	//---- Get Course By ID -------------------------------
    	Course course = courseService.getCourseById(id);
    	model.addAttribute("course", course);
		return "showcourse";
	}
	// //// EDIT COURSE /////////////
	@GetMapping("/courses/{id}/edit")
	public String editView(@PathVariable("id") Long id,Model model) {
		Course course = courseService.getCourseById(id);
		model.addAttribute("course", course);
		return "editcourse";
	}
	@PutMapping("/courses/{id}")
	public String update(@PathVariable("id") Long id, @Valid @ModelAttribute("course") Course course, BindingResult result) {
		if (result.hasErrors()) {
			return "editcourse";
		} else {
			courseService.updateCourse(id,course);
			return "redirect:/home";
		}
	}
	// ---------------- DELETE --------------------//
	@DeleteMapping("/courses/{id}/delete")
	  public String destroy(@PathVariable("id") Long id) {
		courseService.deleteCourse(id);
	  	return "redirect:/";
	}
}
