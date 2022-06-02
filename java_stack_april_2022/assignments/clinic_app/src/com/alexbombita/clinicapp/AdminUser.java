package com.alexbombita.clinicapp;

import java.util.ArrayList;

public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin{
	
	

	@Override
    abstract ArrayList<String> reportSecurityIncidents();
    
    // DEFAULT IMPLEMENTED METHODS
    // Used to print security incidents. 
	@Override
    public default void printSecurityIncidents() {
        System.out.println(reportSecurityIncidents());
    }
    
    // QA Test, PASS/FAIL of reports against QA expected results
	@Override
    public default boolean adminQATest(ArrayList<String> expectedIncidents) {
        if (reportSecurityIncidents().equals(expectedIncidents)) {
            System.out.println("PASS");
        }
        else {
            System.out.println("FAIL");
        }
        return reportSecurityIncidents().equals(expectedIncidents);
    }
	
	@Override
	public interface HIPAACompliantUser {
	    abstract boolean assignPin(int pin);
	    abstract boolean accessAuthorized(Integer confirmedAuthID);
	}

	@Override
	public boolean assignPin(int pin) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		// TODO Auto-generated method stub
		return false;
	}
}
