package com.alexbombita.zookeeperpart1;

public class Mammal {
	//MEMBER VARIABLES
	protected int energyLevel = 100;

	
	//CONSTRUCTORS
	
	public Mammal() {

	}
	
	
	public Mammal(int energyLevel) {
		super();
		this.energyLevel = energyLevel;
	}


	//GETTER / SETTERS / METHODS
	public int getEnergyLevel() {
		System.out.println(energyLevel);
		return energyLevel;
	}


	public void setEnergyLevel(int energyLevel) {
		this.energyLevel = energyLevel;
	}
	

	public int displayEnergy() {
		return energyLevel;
	}


	
	
}




