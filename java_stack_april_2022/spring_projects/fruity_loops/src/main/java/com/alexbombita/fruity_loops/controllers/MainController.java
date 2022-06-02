package com.alexbombita.fruity_loops.controllers;

import org.springframework.stereotype.Controller;

@Controller
public class MainController {

	@RequestMapping("/")
	public String Index() {
		return "index.jsp";
	}
	
}
