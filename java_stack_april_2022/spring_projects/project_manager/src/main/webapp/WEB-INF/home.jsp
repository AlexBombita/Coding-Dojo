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
	<h1>Welcome, ${ loggedInUser.userName }!</h1>
	<h2>All Projects</h2>
	<a href="/books/new">+ new project</a>
	<table>
		<thead>
			<tr>
				<th>Project</th>
				<th>Team Lead</th>
				<th>Due Date</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="book" items="${books}">
			<tr>
				<%-- <th> ${ book.getId() }</th> --%>
				<%-- <td> ${ book.getUser().getId() }</td> --%>
				<td><a href="/books/${ book.getId() }">${ book.getTitle() }</a></td>
				<td>${ book.getUser().getUserName() }</td>
				<td>${ book.getDueDate() }</td>

			</tr>
			</c:forEach>
		</tbody>
	</table>
	<h2>Your Projects</h2>
		<table>
			<thead>
				<tr>
					<th>Project</th>
					<th>Team Lead</th>
					<th>Due Date</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="book" items="${books}">
					<c:if test="${book.getUser().getId()==loggedInUser.id}">
						<tr>
							<%-- <th> ${ book.getId() }</th> --%>
							<%-- <td> ${ book.getUser().getId() }</td> --%>
							<td><a href="/books/${ book.getId() }">${ book.getTitle() }</a></td>
							<td>${ book.getUser().getUserName() }</td>
							<td>${ book.getDueDate() }</td>
						</tr>
					</c:if>
				</c:forEach>
			</tbody>
		</table>

		
<%-- 	</table>
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
	</form:form> --%>
</body>
</html>