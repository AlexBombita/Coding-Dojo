<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div id="main_container">
		<h1>Expense Details</h1>
		<h3><a href="/">Go Back</a></h3>
		<h3>${expense.expenseName}</h3>
		<h3>${expense.description}</h3>
		<h3>${expense.vendor}</h3>
		<h3>${expense.amount}</h3>
	</div>
</body>
</html>