<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>editbook</title>
</head>
<body>
	<a href="/home">back to the shelves</a>
	<h1>Change your Entry</h1>
	<form:form action="/books/${ book.getId() }" method="post" modelAttribute="book">
		<input type="hidden" name="_method" value="put">
		<form:label path="title">Title</form:label>
		<br>
		<form:input path="title"/>
		<form:errors path="title"/>
		<br>
		<form:label path="author">Author</form:label>
		<br>
		<form:input path="author"/>
		<form:errors path="author"/>
		<br>
		<form:label path="thought">My thoughts</form:label>
		<br>
		<form:textarea path="thought" rows="3"></form:textarea>
		<form:errors path="thought"/>
		<br>
		<input type="submit" value="Submit" />
	</form:form>
</body>
</html>