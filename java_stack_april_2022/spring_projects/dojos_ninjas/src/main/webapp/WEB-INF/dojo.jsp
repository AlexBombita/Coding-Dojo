<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Dojo Page</title>
</head>
<body>
	<div class="container">
		<h1><c:out value="${dojo.name}"/> Location Ninjas</h1>
		
		<table class="table table-striped">
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last name</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="ninja" items="${dojo.ninjas}">
					<tr>
						<td><c:out value="${ninja.firstName}"/></td>
						<td><c:out value="${ninja.lastName}"/></td>
						<td><c:out value="${ninja.age}"/></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		
	</div>
</body>
</html>