package com.alexbombita.interfacedemo;

public interface Dog extends Pet implements Adoptable{

	@Override
	public void actCute() {
		System.out.println("Sits next to you")
	}
	
	@Override
	public void getFed(String food) {
		System.out.println("Wolf down the " + food);
	}
}
