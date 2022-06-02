<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title> showcourse </title>
</head>
<body>
	<a href="/home">back to Course Schedule</a>
	<h1>Gentle ${ course.getTitle() } with ${ course.getUser().getUserName() }</h1>
	<%-- <p>${ book.getUser().getUserName() } read ${ book.getTitle() } by ${ book.getAuthor() }</p> --%>
	<p>Day: ${ course.getAuthor() }</p>
	<p>Cost: $${ course.getPrice() }</p>
	<%-- <p>Here are ${ book.getUser().getUserName() }'s thoughts</p> --%>
	<p>${ course.getThought() }</p>
<%-- 	<c:if test="${book.getUser().getUserName()==loggedInUser.userName}">
		<a href="/books/${ book.getId() }/edit">edit</a>
	</c:if> --%>

</body>
</html>