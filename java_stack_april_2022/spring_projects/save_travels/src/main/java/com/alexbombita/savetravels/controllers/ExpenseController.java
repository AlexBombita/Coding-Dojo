package com.alexbombita.savetravels.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.alexbombita.savetravels.models.Expense;
import com.alexbombita.savetravels.services.ExpensesService;

@Controller
public class ExpenseController {

	
	@Autowired
	ExpensesService expensesService;
	
	@GetMapping("/")
	public String newExpense(@ModelAttribute("newExpense") Expense expense,
			Model model) {
		List<Expense> expenses = expensesService.allExpenses();
		model.addAttribute("expenses", expenses);
		return "index.jsp";
	}
	
	@PostMapping("/process")
	public String create(@Valid @ModelAttribute("newExpense") Expense expense,
			BindingResult result, Model model) {
		if (result.hasErrors()) {
			List<Expense> expenses = expensesService.allExpenses();
			model.addAttribute("expenses", expenses);
            return "index.jsp";
        } else {	
            expensesService.createExpense(expense);
            return "redirect:/";
        }
	}
	
	@GetMapping("/expenses/{id}/edit")
    public String edit(@PathVariable("id") Long id,
    		@ModelAttribute("expense") Expense expense,
    		Model model) {
        Expense findExpense = expensesService.findExpense(id);
        model.addAttribute("expense", findExpense);
        return "edit.jsp";
    }
    
    @PostMapping("/expenses/{id}/edit")
    public String update(@Valid @ModelAttribute("expense") Expense expense,
    		BindingResult result) {
        if (result.hasErrors()) {
            return "edit.jsp";
        } else {
            expensesService.updateExpense(expense);
            return "redirect:/";
        }
    }
    
    @GetMapping("/expenses/{id}/show")
    public String show(Model model, @PathVariable("id") Long id) {
    	Expense showExpense = expensesService.findExpense(id);
    	model.addAttribute("expense", showExpense);
    	return "show.jsp";
    }
    
    
//    
//    @GetMapping("/expenses/{id}/delete")
//    public String destroy(@PathVariable("id") Long id) {
//    	expenseService.deleteExpense(id);
//    	return "redirect:/";
//    }
    
	  @PostMapping("/expenses/{id}/delete")
	  public String destroy(@PathVariable("id") Long id) {
	  	expensesService.deleteExpense(id);
	  	return "redirect:/";
	  }
  
}
