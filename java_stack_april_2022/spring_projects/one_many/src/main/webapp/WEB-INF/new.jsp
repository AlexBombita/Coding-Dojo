<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
	<div class="container">
		<h1>New Sales</h1>
		<form:form action="/sales/new" method="post" modelAttribute="sale">
			<p>
				Client:
				<form:input path="client" />
				<form:errors path="client" />
			</p>
			<p>
				Purchase Amount:
				<form:input path="purchaseAmount" />
				<form:errors path="purchaseAmount" />
			</p>
			<p>
				Sales Person:
				<form:select path="salesPerson">
					<c:forEach var="user" items="${users }">
						<form:option value="${user.id}">
							<c:out value="${user.firstName }" /> <c:out value="${user.lastName }" />
						</form:option>
					</c:forEach>
				</form:select>
			</p>
			<button>Submit</button>
		</form:form>
	</div>
</body>
</html>