package com.mario.daikichi;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	@RequestMapping("/daikichi/travel/{destination}")
	public String showDestination(@PathVariable("destination") String destination) {
		return "Congratulations! You will soon travel to " + destination ;
	}
	
	@RequestMapping("/daikichi/lotto/{id}")
	public String showLotto(@PathVariable("id") int id) {
//		int id = 
		if (id % 2 == 0) {
			return "You will take a grand journey in the near future, but be weary of tempting offers";
		}
		return "you have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.";
	}
}
