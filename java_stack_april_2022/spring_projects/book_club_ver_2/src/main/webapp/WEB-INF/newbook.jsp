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
	<a href="/home">back to the shelves</a>
	
	<h2>Add Book to Your Shelf!</h2>
	<form:form action="/books/new" method="post" modelAttribute="book">
		<form:label path="title">Title</form:label>
		<br>
		<form:input path="title"/>
		<form:errors path="title" />
		<br>
		<form:label path="author">Author</form:label>
		<br>
		<form:input path="author" />
		<form:errors path="author" />
		<br>
		<form:label path="thought">My thoughts</form:label>
		<br>
		<form:textarea path="thought"></form:textarea>
		<form:errors path="thought"/>
		<br>
		<input type="submit" value="Submit" />
	</form:form>
</body>
</html>