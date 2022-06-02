package com.alexbombita.courseplatform.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.alexbombita.courseplatform.models.Course;
import com.alexbombita.courseplatform.models.LoginUser;
import com.alexbombita.courseplatform.models.User;
import com.alexbombita.courseplatform.services.CourseService;
import com.alexbombita.courseplatform.services.UserService;

@Controller
public class HomeController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private CourseService courseService;
	
	@GetMapping("/")
	public String init(HttpSession session) {
		return "redirect:/home";
	}
	
	
	// USER AND REGISTER
	@GetMapping("/initial")
	public String index(Model model, HttpSession session) {
		if (session.getAttribute("user_id") != null) { // If user is in session
			return "redirect:/home"; 
		}
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "index";
	}

	//REGISTER USER
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model,
			HttpSession session) {
		userService.register(newUser, result);

		if (result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "index";
		}
		session.setAttribute("user_id", newUser.getId());
		return "redirect:/home";
	}

	//LOGIN 
	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult result, Model model,
			HttpSession session) {
		User user = userService.login(newLogin, result);

		if (result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "index";
		}
		
		session.setAttribute("user_id", user.getId());
		return "redirect:/home";
	}
	
	//HOME
	@GetMapping("/home")
	//VERIFIES IF CURRENTLY LOGGED IN
	public String dashboard(Model model, HttpSession session) {
		System.out.println("value ccreated session: " + session.getAttribute("user_id"));
		if (session.isNew() || session.getAttribute("user_id") == null) {
			return "redirect:/courses/new";
		} else {
			
			// USER NAME
			User loggedInUser = userService.retrieveUser((Long) session.getAttribute("user_id"));
			model.addAttribute("loggedInUser", loggedInUser);
			
			// ALL COURSES
			List<Course> courses = courseService.allCourses();
//			System.out.println(courses.getUser());
			model.addAttribute("courses", courses);
			return "home";
		}
	}
	//LOGOUT
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/";
	}
}
