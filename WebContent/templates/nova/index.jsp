<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html>
<html>
<head>
<base href="${path}"/>
<title>Darou Salam Fashion</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<meta name="keywords" content="Habillements, Jeans, Fashion" />
<link href="https://fonts.googleapis.com/css?family=Exo|Open+Sans" rel="stylesheet" type="text/css" media="all" />
<link href="templates/fashion/css/template.css" rel="stylesheet" type="text/css" media="all" />
<link rel="shortcut icon" href="templates/fashion/images/banner2.jpg"  sizes="32x32"/> 
<meta property="og:type" content="website"/>
 <meta property="og:url" content="${baseUrl}"/>
<meta property="og:title" content="Darou Salam Fashion"/>
<meta property="og:description" content="Cosmétiques, Habillement pour femmes, hommes et enfants | Achats en ligne"/>
<meta property="og:image" content="${baseUrl}/templates/fashion/images/banner2.jpg"/>
</head>
	
<body>
<tiles:insertAttribute name="content"/>	
</body>
</html>