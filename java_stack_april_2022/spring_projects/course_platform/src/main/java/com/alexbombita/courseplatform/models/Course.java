package com.alexbombita.courseplatform.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "courses")
public class Course {
	//MEMBER VARIABLES
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	@Size(min = 3, max = 30)
	private String title;

	@NotNull
	@Size(min = 3, max = 30)
	private String author;

	@NotNull
	@Size(min = 3, max = 255)
	private String thought;
	
	@NotNull
	@Min(1)
	private double price;

	@Column(updatable = false)
	private Date createdAt;
	private Date updatedAt;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;

	//CONTRUCTOR

	public Course() {
	}
	
	public Course(Long id, String title, String author,  double price,
   		 String thought, Date createdAt, Date updatedAt) {
   	this.id = id;
   	this.title = title;
   	this.author = author;
   	this.price = price;
   	this.thought = thought;
   	this.createdAt = createdAt;
   	this.updatedAt = updatedAt;
   }

	//GETTERS AND SETTERS
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getThought() {
		return thought;
	}

	public void setThought(String thought) {
		this.thought = thought;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	//OTHER METHODS CONFIGURATION CREATED AT UPDATED AT
	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
}
