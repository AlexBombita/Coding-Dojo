<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>editcourse</title>
</head>
<body>
	<!-- <a href="/home">back to Course Schedule</a> -->
	<h1>${ course.getTitle() }</h1>
	<form:form action="/courses/${ course.getId() }" method="post" modelAttribute="course">
		<input type="hidden" name="_method" value="put">
		<form:label path="title">Name</form:label>
		<br>
		<form:input path="title"/>
		<form:errors path="title"/>
		<br>
		<form:label path="author">Day of Week</form:label>
		<br>
		<form:input path="author"/>
		<form:errors path="author"/>
		<br>
		<form:label path="price">Price</form:label>
		<br>
		<form:input path="price" type="double"/>
		<form:errors path="price" />
		<br>
		<form:label path="thought">Description</form:label>
		<br>
		<form:textarea path="thought" rows="3"></form:textarea>
		<form:errors path="thought"/>
		<br>
		<input type="submit" value="Submit" />
	</form:form>
	<form action="/courses/${course.getId()}/delete" method="post">
    <input type="hidden" name="_method" value="delete">
    <input type="submit" value="Delete">
	</form> 
	<a href="/home">Cancel</a>
</body>
</html>