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
		<div class="table">
			<table>
				<tr>
					<th>Expense</th>
					<th>Vendor</th>
					<th>Amount</th>
					<th>Actions</th>
				</tr>
				<c:forEach var="expense" items="${expenses}">				
				<tr>
					<td><a href="/expenses/${expense.id}/show">${expense.expenseName}</a></td>
					<td>${expense.vendor}</td>
					<td>${expense.amount}</td>
					<td><a href="/expenses/${expense.id}/edit">Edit</a></td>
<%-- 				<td><a href="/expenses/${expense.id}/delete">Delete</a></td> --%>
					<td>
					<form action="/expenses/${expense.id}/delete" method="post">
					    <input type="hidden" name="_method" value="delete">
					    <input type="submit" value="Delete">
					</form> 
					</td>
				</tr>
				</c:forEach>
			</table>
		</div>
		<div class="form">
			<form:form action="/process" method="post" modelAttribute="newExpense">
				
				<form:label path="expenseName">Expense Name: </form:label>
				<form:errors path="expenseName"/>
        		<form:input type="text" path="expenseName"/>
        		<br>
				<form:label path="vendor">Vendor: </form:label>
				<form:errors path="vendor"/>
        		<form:input path="vendor"/>
        		<br>
				<form:label path="amount">Amount: </form:label>
				<form:errors path="amount"/>
        		<form:input path="amount"/>
        		<br>
				<form:label path="description">Description: </form:label>
				<form:errors path="description"/>
        		<form:input path="description"/>
        		
        		<input type="submit" value="Submit" />		
			</form:form>
			
		</div>
	</div>
</body>
</html>