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
	<h1>Namaste, ${ loggedInUser.userName }.</h1>
	<h2>Course Schedule</h2>
	<table>
		<thead>
			<tr><!-- 
				<th>ID</th> -->
				<th>Class Name</th>
				<th>Instructor</th>
				<th>Weekday</th>
				<th>Price</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="course" items="${courses}">
			<tr>
				<%-- <th> ${ course.getId() }</th> --%>
				<td><a href="/courses/${ course.getId() }">${ course.getTitle() }</a>	
				<c:if test="${course.getUser().getUserName()==loggedInUser.userName}">
				<a href="/courses/${ course.getId() }/edit">edit</a>
				</c:if>
				</td>
				<td>${ course.getUser().getUserName() }</td>
				<td>${ course.getAuthor() }</td>
				<td>$${ course.getPrice() }</td>
				<%-- <td> ${ course.getUser().getId() }</td> --%>
				
				
				
				
			</tr>
			</c:forEach>
		</tbody>
	</table>
	<a href="/courses/new">+ new course</a>
</body>
</html>