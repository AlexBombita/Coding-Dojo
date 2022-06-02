package com.alexbombita.savetravels.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.alexbombita.savetravels.models.Expense;
import com.alexbombita.savetravels.repositories.ExpenseRepository;
@Service
public class ExpensesService {
	private final ExpenseRepository expenseRepository;
	
	public ExpensesService(ExpenseRepository expenseRepository) {
		this.expenseRepository = expenseRepository;
	}
	
	// returns all expenses
	public List<Expense> allExpenses(){
		return expenseRepository.findAll();
	}
	// creates an expense / updates
	public Expense createExpense(Expense expense) {
		return expenseRepository.save(expense);
	}
	// retrieves an expense
	public Expense findExpense(Long id) {
		Optional<Expense> optionalExpense = expenseRepository.findById(id);
		if(optionalExpense.isPresent()) {
			return optionalExpense.get();
		} else {
			return null;
		}
	}
	public void deleteExpense(Long id) {
		expenseRepository.deleteById(id);
	}
	public Expense updateExpense(Expense expense) {
		return expenseRepository.save(expense);
	}
}
