package com.alexbombita.clinicapp;
import java.util.ArrayList;


public class Physician extends User implements HIPAACompliantUser{

		//MEMBER VARIABLE
	
	@Override
	public interface HIPAACompliantUser {
	    abstract boolean assignPin(int pin);
	    abstract boolean accessAuthorized(Integer confirmedAuthID);
	}
	
	
//... imports class definition...
	
    
    // Inside class:    
    private ArrayList<String> patientNotes;
	
    // TO DO: Constructor that takes an ID
    
    
    // TO DO: Implement HIPAACompliantUser!
	@Override
    public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }
	
    // TO DO: Setters & Getters
}
