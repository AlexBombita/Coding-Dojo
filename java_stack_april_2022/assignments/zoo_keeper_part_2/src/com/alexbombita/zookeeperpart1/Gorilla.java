package com.alexbombita.zookeeperpart1;

public class Gorilla extends Mammal {
	//MEMBER VARIABLE
	protected int throwSomething = -5;
	protected int eatBananas = 10;
	protected int climb = -10;
	
	//CONSTRUCTOR
	public Gorilla(int energyLevel, int throwSomething, int eatBananas, int climb) {
		super(energyLevel);
		this.throwSomething = throwSomething;
		this.eatBananas = eatBananas;
		this.climb = climb;
	}
	
	
	//METHODS
	public int throwSomething() {
		int energyLevel = getEnergyLevel();
		energyLevel = energyLevel + throwSomething;
		setEnergyLevel(energyLevel);
		System.out.print("The gorilla has thrown something.");
		return energyLevel;
		
	}

	public int eatBananas() {
		int energyLevel = getEnergyLevel();
		energyLevel = energyLevel + eatBananas;
		setEnergyLevel(energyLevel);
		System.out.print("The gorilla ate a banana.");
		return energyLevel;
	}
	
	public int climb() {
		int energyLevel = getEnergyLevel();
		energyLevel = energyLevel + climb;
		setEnergyLevel(energyLevel);
		System.out.print("The gorilla has climbed a tree.");
		return energyLevel;
	}
	

}
