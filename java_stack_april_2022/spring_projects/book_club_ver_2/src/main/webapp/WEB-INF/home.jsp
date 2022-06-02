<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>home</title>
</head>
<body>
	<a href="/logout">logout</a>
	<h1>Welcome, ${ loggedInUser.userName }</h1>
	<h2>Books from everyone's shelves:</h2>
	<a href="/books/new">+ Add a to my shelf!</a>
	<table>
		<thead>
			<tr>
				<th>ID</th>
				<th>Title</th>
				<th>Author Name</th>
				<th>Posted by</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="book" items="${books}">
			<tr>
				<th> ${ book.getId() }</th>
				<%-- <td> ${ book.getUser().getId() }</td> --%>
				<td><a href="/books/${ book.getId() }">${ book.getTitle() }</a></td>
				<td>${ book.getAuthor() }</td>
				<td>${ book.getUser().getUserName() }</td>
			</tr>
			</c:forEach>
		</tbody>
	</table>
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