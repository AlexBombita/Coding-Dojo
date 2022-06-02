package com.alexbombita.bookclub.services;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alexbombita.bookclub.models.Book;
import com.alexbombita.bookclub.repositories.BookRepository;

@Service
public class BookService {
	
	@Autowired
	BookRepository bookRepository;
	
	//GET ALL BOOKS
	public List<Book> allBooks() {
		return bookRepository.findAll();
	}
	
	//CREATE NEW BOOK
	public Book newBook(Book book) {
		return bookRepository.save(book);
	}

	public Book getBookById(Long id) {
		Optional<Book> optional = bookRepository.findById(id);
		if (optional.isPresent()) {
			return optional.get();
		} else {
			return null;
		}
	}

	public Book updateBook(Long id,Book book) {
		Optional<Book> optional = bookRepository.findById(id);
		if (optional.isPresent()) {
			Book data = optional.get();
			data.setTitle(book.getTitle());
			data.setAuthor(book.getAuthor());
			data.setThought(book.getThought());
			return bookRepository.save(data);
		} else {
			return null;
		}
	}
}
