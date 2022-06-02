package com.alexbombita.dojosninjas.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alexbombita.dojosninjas.models.Dojo;
import com.alexbombita.dojosninjas.models.Ninja;
import com.alexbombita.dojosninjas.services.MainService;

@Controller
public class MainController {
	@Autowired
	private MainService mainServ;
	
	
	@RequestMapping("dojos/new")
	public String newDojo(@ModelAttribute("dojo") Dojo emptyDojo) {
		return "newDojo.jsp";
	}
	
	@PostMapping("dojos/new")
	public String createDojo(@Valid @ModelAttribute("dojo") Dojo filledDojo, BindingResult results) {
		//VALIDATE
		if(results.hasErrors()) {
			return "newDojo.jsp";
		}
		else {
			mainServ.createDojo(filledDojo);
			return "redirect:/dojos/new";
		}
	}
	
	@RequestMapping("ninjas/new")
	public String newNinja(@ModelAttribute("ninja") Ninja emptyNinja, Model model) {
		// GET ALL DOJOS FROM DATABASE
		List<Dojo> allDojos = mainServ.getAllDojos();
		
		// PASS DOJOS TO JSP
		model.addAttribute("dojos", allDojos);
		
		return "newNinja.jsp";
	}
	
	@PostMapping("ninjas/new")
	public String createNinja(@Valid @ModelAttribute("ninja") Ninja filledNinja, BindingResult results, Model model) {
		//VALIDATE
		if(results.hasErrors()) {
			// GET ALL DOJOS FROM DATABASE
			List<Dojo> allDojos = mainServ.getAllDojos();
			
			// PASS DOJOS TO JSP
			model.addAttribute("dojos", allDojos);
			return "newNinja.jsp";
		}
		else {
			mainServ.createNinja(filledNinja);
			return "redirect:/ninjas/new";
		}
	}
	
	@RequestMapping("dojos/{id}")
	public String roster(@PathVariable("id") Long id, Model model) {
		//GET DOJO
		Dojo oneDojo = mainServ.getOneDojo(id);
		
		//ADD DOJO TO MODEL
		model.addAttribute("dojo", oneDojo);
		
		return "dojo.jsp";
		
	}
}
