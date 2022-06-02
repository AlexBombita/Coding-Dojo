package com.alexbombita.zookeeperpart1;

public class Bat extends Mammal {
	//MEMBER VARIABLE
	protected int fly = -50;
	protected int eatHumans = 25;
	protected int attackTown = -100;
	
	//CONSTRUCTOR
	public Bat(int energyLevel, int fly, int eatHumans, int attackTown) {
		super(energyLevel);
		this.fly = fly;
		this.eatHumans = eatHumans;
		this.attackTown = attackTown;
	}
	
	
	//METHODS
	public int fly() {
//		int energyLevel = getEnergyLevel();
		energyLevel = energyLevel + fly;
//		setEnergyLevel(energyLevel);
		System.out.println("NaNa-NaNa-NaNa-NaNa-NaNa-NaNa-NaNa-NaNa-Naa-Naa");
		return energyLevel;
		
	}

	public int eatHumans() {
//		int energyLevel = getEnergyLevel();
		energyLevel = energyLevel + eatHumans;
//		setEnergyLevel(energyLevel);
		System.out.println("Lunchtime");
		return energyLevel;
	}
	
	public int attackTown() {
//		int energyLevel = getEnergyLevel();
		energyLevel = energyLevel + attackTown;
//		setEnergyLevel(energyLevel);
		System.out.println("Ba-ba-ba-baa-baa-ba-ba-ba-baa-baa-ba-ba-ba-baaa");
		return energyLevel;
	}
	

}
