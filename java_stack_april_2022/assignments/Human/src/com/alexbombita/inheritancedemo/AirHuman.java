package com.alexbombita.inheritancedemo;

public class AirHuman extends Human {
	protected int airBend;

	public AirHuman(String name, int strength, int health, int intelligence, int airBend) {
		super(name, strength, health, intelligence);
		this.airBend = airBend;
	}
	
	@Override
	public void move() {
		System.out.println("Fly");
	}

	public int getAirBend() {
		return airBend;
	}

	public void setAirBend(int airBend) {
		this.airBend = airBend;
	}
	
	
}
