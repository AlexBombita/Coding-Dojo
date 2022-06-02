<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>newbook</title>

</head>
<body>
	<!-- <a href="/home">back to Course Schedule</a> -->
	
	<h2>Create a Course</h2>
	<form:form action="/courses/new" method="post" modelAttribute="course">
		<form:label path="title">Name</form:label>
		<br>
		<form:input path="title"/>
		<form:errors path="title" />
		<br>
		<form:label path="author">Day of Week</form:label>
		<br>
		<form:input path="author" />
		<form:errors path="author" />
		<br>
		<form:label path="price">Price</form:label>
		<br>
		<form:input path="price" />
		<form:errors path="price" />
		<br>
		<form:label path="thought">Description</form:label>
		<br>
		<form:textarea path="thought"></form:textarea>
		<form:errors path="thought"/>
		<br>
		<a href="/home">Cancel</a>
		<input type="submit" value="Submit" />
	</form:form>
</body>
</html>