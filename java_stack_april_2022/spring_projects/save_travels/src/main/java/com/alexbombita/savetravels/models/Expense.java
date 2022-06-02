package com.alexbombita.savetravels.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="expenses")
public class Expense {
	
	// MEMBER VARIABLES
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	@Size(min = 2, max = 200)
	private String expenseName;
	@NotNull
	@Size(min = 2, max = 200)
	private String vendor;
	@NotNull
	@Min(0)
	private double amount;
	@NotNull
	@Size(min = 2, max = 200)
	private String description;
	@Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
    // CONTRUCTORS
    
    public Expense() {
    }
	
    public Expense(String expenseName, String vendor,
    		double amount, String description) {
		this.expenseName = expenseName;
		this.vendor = vendor;
		this.amount = amount;
		this.description = description;
	}

	public Expense(Long id, String expenseName, String vendor,  double amount,
    		 String description, Date createdAt, Date updatedAt) {
    	this.id = id;
    	this.expenseName = expenseName;
    	this.vendor = vendor;
    	this.amount = amount;
    	this.description = description;
    	this.createdAt = createdAt;
    	this.updatedAt = updatedAt;
    }
	
	//GETTERS/SETTERS/OTHERMETHODS
	
	@Override
	public String toString() {
		return "Expense [id=" + id + ", expenseName=" + expenseName + ", vendor=" + vendor + ", amount=" + amount
				+ ", description=" + description + ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + "]";
	}

	@PrePersist
	protected void onCreate(){
	    this.createdAt = new Date();
	}
	@PreUpdate
	protected void onUpdate(){
	    this.updatedAt = new Date();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getExpenseName() {
		return expenseName;
	}

	public void setExpenseName(String expenseName) {
		this.expenseName = expenseName;
	}

	public String getVendor() {
		return vendor;
	}

	public void setVendor(String vendor) {
		this.vendor = vendor;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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
}
