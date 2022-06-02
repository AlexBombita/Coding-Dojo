package com.alexbombita.bookclub.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.alexbombita.bookclub.models.Book;
import com.alexbombita.bookclub.models.User;
import com.alexbombita.bookclub.services.BookService;
import com.alexbombita.bookclub.services.UserService;

@Controller
public class BookController {
	
	@Autowired
	BookService bookService;
	@Autowired
	UserService userService;
	
	//BOOK VIEW 
	@GetMapping("/books/new")
	public String newBookView(@ModelAttribute("book") Book book, Model model, HttpSession session) {
		//Check if User is Logged In
    	if (session.isNew() || session.getAttribute("user_id") == null) {
    		return "redirect:/initial";
    	}
    	//Get the Log In User 
    	User loggedInUser = userService.retrieveUser((Long) session.getAttribute("user_id"));
    	model.addAttribute("loggedInUser", loggedInUser);
		return "newbook";
	}
	//BOOK POST
	@PostMapping("/books/new")
	public String createBook(@Valid @ModelAttribute("book") Book book, BindingResult result, HttpSession session, Model model) {
		if (result.hasErrors()) {
			//Check if User is Logged In
	    	if (session.isNew() || session.getAttribute("user_id") == null) {
	    		return "redirect:/initial";
	    	}
			//Get the Log In User
	    	User loggedInUser = userService.retrieveUser((Long) session.getAttribute("user_id"));
	    	model.addAttribute("loggedInUser", loggedInUser);
			return "newbook";
		} else {
			//Get the Log In User
	    	User loggedInUser = userService.retrieveUser((Long) session.getAttribute("user_id"));
	    	model.addAttribute("loggedInUser", loggedInUser);
	    	book.setUser(loggedInUser);
			bookService.newBook(book);
			return "redirect:/home";
		}
	}
	//
	@GetMapping("/books/{id}")
	public String getViewById(@PathVariable("id") Long id, Model model, HttpSession session) {
		//---- Get the Log In User -------------------------------
    	User loggedInUser = userService.retrieveUser((Long) session.getAttribute("user_id"));
    	model.addAttribute("loggedInUser", loggedInUser);
    	//---- Get Book By ID -------------------------------
    	Book book = bookService.getBookById(id);
    	model.addAttribute("book", book);
		return "showbook";
	}
	// //// EDIT BOOK /////////////
	@GetMapping("/books/{id}/edit")
	public String editView(@PathVariable("id") Long id,Model model) {
		Book book = bookService.getBookById(id);
		model.addAttribute("book", book);
		return "editbook";
	}
	@PutMapping("/books/{id}")
	public String update(@PathVariable("id") Long id, @Valid @ModelAttribute("book") Book book, BindingResult result) {
		if (result.hasErrors()) {
			return "editbook";
		} else {
			bookService.updateBook(id,book);
			return "redirect:/home";
		}
	}
}
