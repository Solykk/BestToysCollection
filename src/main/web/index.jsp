<%--
  Created by IntelliJ IDEA.
  User: Solyk
  Date: 09.05.2016
  Time: 16:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html lang="en" ng-app="phonecatApp">
<head>
  <meta charset="utf-8">
  <title>Google Phone Gallery</title>
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/app.css">
  <link rel="stylesheet" href="css/animations.css">

  <script src="bower_components/jquery.js"></script>
  <script src="bower_components/angular.js"></script>
  <script src="bower_components/angular-animate.js"></script>
  <script src="bower_components/angular-route.js"></script>
  <script src="bower_components/angular-resource.js"></script>
  <script src="js/app.js"></script>
  <script src="js/animations.js"></script>
  <script src="js/controllers.js"></script>
  <script src="js/filters.js"></script>
  <script src="js/services.js"></script>
</head>
<body>
<h1 style="align-content: center"> Hello World</h1>

<div class="view-container">
  <div ng-view class="view-frame"></div>
</div>

</body>
</html>

