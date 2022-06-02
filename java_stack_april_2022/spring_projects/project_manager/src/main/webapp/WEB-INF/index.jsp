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
<title>index</title>
</head>
<body>
	<h1>Project Manager</h1>
	<p>A place for teams to manage projects.</p>
	<h2>Register</h2>
	<form:form action="/register" method="post" modelAttribute="newUser">
		<form:label path="userName">Name</form:label>
		<br>
		<form:input path="userName"/>
		<form:errors path="userName"/>
		<br>
		<form:label path="email">Email:</form:label>
		<br>
		<form:input path="email"/>
		<form:errors path="email"/>
		<br>
		<form:label path="password">Password:</form:label>
		<br>
		<form:input path="password" type="password" />
		<form:errors path="password"/>
		<br>
		<form:label path="confirm">Confirm PW:</form:label>
		<br>
		<form:input path="confirm" type="password" />
		<form:errors path="confirm"/>
		<br>
		<button type="submit">Submit</button>
	</form:form>
	<h2>Login</h2>
	<form:form action="/login" method="post" modelAttribute="newLogin">
		<form:label path="email">Email:</form:label>
		<br>
		<form:input path="email"/>
		<form:errors path="email"/>
		<br>
		<form:label path="password">Password:</form:label>
		<br>
		<form:input path="password" type="password" />
		<form:errors path="password"/>
		<br>
		<button type="submit">Submit</button>
	</form:form>
</body>
</html>