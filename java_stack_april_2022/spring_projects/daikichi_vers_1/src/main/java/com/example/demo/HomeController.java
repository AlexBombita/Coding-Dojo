package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/daikichi")
//@RequestMapping("/")
public class HomeController {
//    @RequestMapping("")
//    public String hello() {
//            return "Hello World!";
//    }
//	
//	@RequestMapping("/today")
//	public String today() {
//		return "Today you will find luck in all your endeavours!";
//	}
//	
//	@RequestMapping("/tomorrow")
//	public String tomorrow() {
//		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
//	}
//    @RequestMapping("/")
//    public String index(@RequestParam(value="q") String searchQuery) {
//        return "You searched for: " + searchQuery;
//    }
	
//    @RequestMapping("/")
//    public String index(@RequestParam(value="q", required=false) String searchQuery) {
//        return "You searched for: " + searchQuery;
//    }
//	  @RequestMapping("")
//	  public String hello() {
//	          return "Hello Human";
//	  }
    
//    @RequestMapping("/")
//    public String index(@RequestParam(value="name", required=false) String searchQuery) {
//        return "Hello " + searchQuery;
//    }
    
//    @RequestMapping("m/{track}/{module}/{lesson}")
//    public String showLesson(@PathVariable("track") String track, @PathVariable("module") String module, @PathVariable("lesson") String lesson) {
//    	return "Track: " + track + ", Module: " + module + ", Lesson: " + lesson;
//    }

    @RequestMapping("m/{track}/{module}/{lesson}")
    public String showLesson(@PathVariable("track") String track, @PathVariable("module") String module, @PathVariable("lesson") String lesson) {
    	return "Congratulations! You will soon" + track + "to " + module + ", Lesson: " + lesson;
    }
    
  @RequestMapping("/travel/")
  public String index(@RequestParam(value="name", required=false) String searchQuery) {
      return "Congratulations! You will soon travel to " + searchQuery +"!";
  }
  
  @RequestMapping("/lotto/")
  public String even(@RequestParam(value="name", required=false) String searchQuery) {
	  if (<int> searchQuery % 2 = 0) {
	  return "You will take a grand journey in the near future, but be weary of tempting offers " + searchQuery +"!";
	  } else {
      return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends. " + searchQuery +"!";
  }
	
}