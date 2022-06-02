package com.alexbombita.booksAPI.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alexbombita.booksAPI.models.Book;
import com.alexbombita.booksAPI.repositories.BookRepository;

@Service
public class BookService {

		@Autowired
		private BookRepository bookRepo;
		
		//CREATE USER
		public Book create(Book newBook) {
			return bookRepo.save(newBook);
		}
		
		//GET ALL USERS
		public List<Book> allBooks(){
			return bookRepo.findAll();
		}
		
		
		//GET ONE USER
		public Book oneBook(Long id) {
			return bookRepo.findById(id).orElse(null);
		}
//        Optional<Book> optionalBook = bookRepo.findById(id);
//        if(optionalBook.isPresent()) {
//            return optionalBook.get();
//        } else {
//            return null;
//	}
		
}
