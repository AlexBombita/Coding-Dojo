<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Edit Expense</h1>
	<h3><a href="/">Go Back</a></h3>
	<div id="main_container">
		<form:form action="/expenses/${expense.id}/edit" method="post" modelAttribute="expense">
<!-- 				<input type="hidden" name="_method" value="put"> -->
				<form:label path="expenseName">Expense Name: </form:label>
				<form:errors path="expenseName"/>
        		<form:input type="text" path="expenseName"/>
        		
				<form:label path="vendor">Vendor: </form:label>
				<form:errors path="vendor"/>
        		<form:input path="vendor"/>
        		
				<form:label path="amount">Amount: </form:label>
				<form:errors path="amount"/>
        		<form:input path="amount"/>
        		
				<form:label path="description">Description: </form:label>
				<form:errors path="description"/>
        		<form:input path="description"/>
        		
        		<input type="submit" value="Submit" />		
		</form:form>
	</div>
</body>
</html>