package com.alexbombita.interfacedemo;

public class Cat extends Pet implements Adoptable{

	
	@Override
	public void actCute() {
		System.out.println("Paw at your face");
	}
	
	@Override
	public void getFed(String food){
		System.out.println("Eat like a cat" + food);
	}
}
