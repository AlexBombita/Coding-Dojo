<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
				<form:label path="name">Name </form:label>
				<form:errors path="name"/>
        		<form:input type="text" path="name"/>
        		<br>
				<form:label path="email">Email </form:label>
				<form:errors path="email"/>
        		<form:input path="email"/>
        		<br>
				<form:label path="password">Password </form:label>
				<form:errors path="password"/>
        		<form:input path="password"/>
        		<br>
				<form:label path="confirmPassword">Confirm Password </form:label>
				<form:errors path="confirmPassword"/>
        		<form:input path="confirmPassword"/>
        			
        		<input type="submit" value="Submit" />	
			</form:form>
		</div>
		
		<div>
			<h1>Login</h1>
			<form:form action="" method="" modelAttribute="newLogin">
				<form:label path="email">Email </form:label>
				<form:errors path="email"/>
        		<form:input type="text" path="email"/>
        		<br>
				<form:label path="password">Password </form:label>
				<form:errors path="password"/>
        		<form:input path="password"/>
        		
				<input type="submit" value="Submit" />	
			</form:form>	
		</div>
	</div>
</body>
</html>