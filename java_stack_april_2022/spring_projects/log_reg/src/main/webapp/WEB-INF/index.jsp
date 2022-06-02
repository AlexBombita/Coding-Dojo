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
	<div class="container">
		<h1>Welcome</h1>
		<div>
			<h1>Registration</h1>
			<form:form action="/register" method="" modelAttribute="newUser">
			
			</form:form>
		</div>
		
		<div>
			<h1>Login</h1>
			<form:form action="" method="" modelAttribute="newLogin">
				
			</form:form>	
		</div>
	</div>
</body>
</html>