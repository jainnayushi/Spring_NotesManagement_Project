<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><c:out value="${page}"></c:out></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  </head>
  <body>

  <div class="container mt-4">
    <h1 class="text-center"> Welcome to Notes Manager</h1>

    <c:if test="${not empty msg}">
        <div class="alert alert-success">
            <b><c:out value="${msg}"></c:out></b>
        </div>
    </c:if>

    <div class="row mt-5">
        <!--Left Column-->
        <div class="col-md-2">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action active" aria-current="true">Menu</a>
              <a href="<c:url value='/add'></c:url>" class="list-group-item list-group-item-action ">Add Notes</a>
              <a href="<c:url value='/home'></c:url>" class="list-group-item list-group-item-action">View Notes</a>
            </div>
        </div>
        <!--Right Column-->
        <div class="col-md-10">
            <c:if test="${page=='view'}">
                <!-- Print Notes -->
                <c:forEach items="${todos}" var="x">
                    <div class="card">
                        <div class="card-body">
                            <h5><c:out value="${x.noteTitle}"></c:out></h5>
                            <p><c:out value="${x.noteContent}"></c:out></p>
                            <h6><c:out value="${x.noteDate}"></c:out></h6>
                        </div>
                    </div>
                    <br>
                </c:forEach>
            </c:if>
            <c:if test="${page=='add'}">
                <form:form action="saveNotes" method="post"  modelAttribute="notes">
                    <div class="form-group">
                        <form:input path="noteTitle" cssClass="form-control" placeholder="Enter your Note Title"/>
                    </div><br>
                    <div class="form-group">
                        <form:input path="noteContent" cssClass="form-control" placeholder="Enter your Note Content" cssStyle="height:200px;"/>
                    </div>
                    <br>
                    <div class="container text-center">
                        <button class="btn btn-outline-success">Add Note</button>
                    </div>
                </form:form>
            </c:if>

        </div>
    </div>
  </div>









    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
  </body>
</html>