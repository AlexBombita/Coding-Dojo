package com.alexbombita.interfacedemo;

public class Pet implements Adoptable{
	//MEMBER VARIABLES
	protected String name;
	protected int age;
	//CONSTRUCTORS
	public Pet(){
		super();

	}
	
	public Pet(String name, int age) {
		super();
		this.name = name;
		this.age = age;
	}
	
	//GETTER/SETTERS/OTHER METHODS
	
	
	
	
	//IMPLEMENT THE INTERFACE METHODS
	public void actCute() {
		
		
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}


}
