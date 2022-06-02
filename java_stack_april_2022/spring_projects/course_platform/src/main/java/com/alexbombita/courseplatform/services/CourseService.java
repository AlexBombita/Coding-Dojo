package com.alexbombita.courseplatform.services;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alexbombita.courseplatform.models.Course;
import com.alexbombita.courseplatform.repositories.CourseRepository;

@Service
public class CourseService {
	
	@Autowired
	CourseRepository courseRepository;
	
	//GET ALL COURSE
	public List<Course> allCourses() {
		return courseRepository.findAll();
	}
	
	//CREATE NEW COURSE
	public Course newCourse(Course course) {
		return courseRepository.save(course);
	}

	public Course getCourseById(Long id) {
		Optional<Course> optional = courseRepository.findById(id);
		if (optional.isPresent()) {
			return optional.get();
		} else {
			return null;
		}
	}

	public Course updateCourse(Long id,Course course) {
		Optional<Course> optional = courseRepository.findById(id);
		if (optional.isPresent()) {
			Course data = optional.get();
			data.setTitle(course.getTitle());
			data.setAuthor(course.getAuthor());
			data.setPrice(course.getPrice());
			data.setThought(course.getThought());
			return courseRepository.save(data);
		} else {
			return null;
		}
	}
	// DELETE ONE RECIPE
	public void deleteCourse(Long id) {
		courseRepository.deleteById(id);
	}
}
