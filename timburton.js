@import 'https://fonts.googleapis.com/css?family=Raleway:300,400';
@import 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,300';
@import "//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css";

* {
	margin: 0;
	padding: 0;
}

*, *:after, *:before {
	box-sizing: border-box;
}

body, html {
	height: 100%;
}

body {
	overflow-x: hidden;
	color: #181818;
}

header {
	background-image: url("http://mozartcultures.com/wp-content/uploads/2018/02/TIMBURTON-1440x963.jpg");
	background-position: center 0;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	height: 100vh;
}

#efecto {
	height: 100vh;
	background: radial-gradient(circle, rgba(185,185,185,0.2),  rgba(40,40,40, 0.6));
	text-align: center;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	    align-items: center;
	-ms-flex-pack: center;
	    justify-content: center;
}

header h1, header h3, header h4 {
	color: white;
	font-family: 'Raleway', sans-serif;
	text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
}

header h1 {
	font-size: 4.3em;
	letter-spacing: 0.13em;
	padding-bottom: 0.21em;
}

header h3 {
	font-weight: 300;
	font-size: 1.5em;
	letter-spacing: 0.15em;
}

header h4 {
	font-weight: 300;
	font-size: 1.3em;
	letter-spacing: 0.2em;
}

header i {
	text-align: center;
	position: absolute;
	bottom: 1%;
	left: 50%;
	color: #FFF;
	animation: 1.5s bounce infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-20px);}
    60% {transform: translateY(-10px);}
} 

#efecto div {
	display: inline-block;
	vertical-align: middle;
	padding: 1em;
	border-top: 3px solid white;
	border-bottom: 3px solid white;
	margin-top: -5vh;
}

#contenido {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: column;
	    flex-direction: column;
	-ms-flex-align: center;
	    align-items: center;
	margin: auto;
	color: #242424;
	font-family: 'Open Sans', sans-serif;
	font-weight: 400;
}

#about {
	padding: 1em;
	background-color: #F2F2F2;
	position: relative;
}

#about:after {
	content: '';
	display: block;  
	position: absolute;
	left: 0;
	top: 100%;
	width: 0;
	height: 0;
	border-top: 33px solid #F2F2F2;
	border-right: 50vw solid transparent;
	border-bottom: 0 solid transparent;
	border-left: 50vw solid transparent;
}

.seccion {
	text-align: center;
	font-size: 3em;
	margin: auto;
	margin-bottom: 0.4em;
	color: #8F000A;
}

#about p {
	margin: 0 10vw;
	font-size: 1.1em;
	letter-spacing: 0.1em;
	line-height: 1.5em;
}

b {
	font-weight: 600;
	color: #8F000A;
	text-shadow: 0px 1px 1px rgba(0,0,0,0.1);
}

i {
	color: #303030;
}

#cita {
	padding: 60px 0;
	background-color: #8F000A;
	width: 100%;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	    align-items: center;
	-ms-flex-pack: center;
	    justify-content: center;
	color: #F2F2F2;
}

#cita i {
	color: #F2F2F2;
	font-size: 3em;
	padding-right: 10px;
}

#cita p {
	font-size: 1.3em;
	padding-left: 10px;
	border-left: 2px solid #F2F2F2;
	font-weight: 300;
}

#contenidoCita {
	max-width: 60vw;
}

#contenedorTimeline {
	background-color: #F2F2F2;
	width: 100%;
	position: relative;
}

#contenedorTimeline:after {
	content: '';
	display: block;  
	position: absolute;
	left: 0;
	bottom: 100%;
	width: 0;
	height: 0;
	border-bottom: 33px solid #F2F2F2;
	border-right: 50vw solid transparent;
	border-top: 0 solid transparent;
	border-left: 50vw solid transparent;
}

/* 
 * --  Timeline --
 * Basado en: https://codepen.io/itbruno/pen/KwarLp
 */
.timelineItem:after, .timelineItem:before {
	content: '';
	display: block;
	width: 100%;
	clear: both;
}

#timeline {
	width: 100%;
	margin: 30px auto;
	position: relative;
	padding: 0 10px;
}

#timeline:before {
	content: '';
	width: 3px;
	height: 100%;
	background: #8F000A;
	left: 50%;
	top: 0;
	position: absolute;
}

#timeline:after {
	content: '':
	;clear:; both;
	display: table;
	width: 100%;
}

.timelineItem {
	margin-bottom: 50px;
	position: relative;
}

.timelineIcon {
	background: #8F000A;
	width: 50px;
	height: 50px;
	position: absolute;
	top: 0;
	left: 50%;
	overflow: hidden;
	margin-left: -23px;
	border-radius: 50%;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	    align-items: center;
	-ms-flex-pack: center;
	    justify-content: center;
}

.timelineIcon i {
	font-size: 25px;
	color: white;
	text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
}

.timelineContent {
	width: 45%;
	background: #FFFFFF;
	padding: 20px;
	box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
	border-radius: 5px;
}

.timelineContent h2 {
	padding: 15px;
	background: #8F000A;
	color: #FFF;
	margin: -20px -20px 0 -20px;
	border-radius: 3px 3px 0 0;
	text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
}

.timelineContent h3 {
	font-weight: 300;
	color: #434343;
	padding: 8px 0;
	font-size: 1em;
}

.timelineContent div {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	    align-items: center;
	-ms-flex-pack: center;
	    justify-content: center;
}

.timelineContent img {
	width: 50%;
	height: auto !important;
	max-height: 200px;
	padding: .5em;
	object-fit: contain;
}

.timelineContent p {
	line-height: 1.45em;
}

.timelineContent:before {
	content: '';
	position: absolute;
	left: 45%;
	top: 20px;
	width: 0;
	height: 0;
	border-top: 7px solid transparent;
	border-bottom: 7px solid transparent;
	border-left: 7px solid #8F000A;
}

.timelineContent.right {
	float: right;
}

.timelineContent.right:before {
	content: '';
	right: 45%;
	left: inherit;
	border-left: 0;
	border-right: 7px solid #8F000A;
}

@media (max-width: 768px) {
	#timeline {
		margin: 30px;
		padding: 0;
		width: 90%;
	}
	#timeline:before {
		left: 0;
	}
	.timelineContent {
		width: 90%;
		float: right;
	}
	.timelineContent:before, .timelineContent.right:before {
		left: 10%;
		margin-left: -6px;
		border-left: 0;
		border-right: 7px solid #8F000A;
	}
	.timelineIcon {
		left: 0;
	}
	.timelineContent div {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		    align-items: center;
		-ms-flex-pack: center;
		    justify-content: center;
		-ms-flex-direction: column;
		    flex-direction: column;
	}
	.timelineContent img {
		width: 80%;
		height: auto !important;
		display: block;
		padding: .5em;
	}
}

#borde {
	display: block;
	left: 0;
	bottom: 100%;
	width: 0;
	height: 0;
	border-top: 33px solid #F2F2F2;
	border-right: 50vw solid transparent;
	border-bottom: 0 solid transparent;
	border-left: 50vw solid transparent;
	z-index: 3;
}

#miiverse {
	background-color: #8F000A;
	width: 100%;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	    align-items: center;
	-ms-flex-pack: center;
	    justify-content: center;
	position: relative;
	margin-top: -33px;
	padding-top: 50px;
	padding-bottom: 50px;
	color: #F2F2F2;
}

#miiverse p {
	font-size: 1.3em;
	padding-left: 10px;
	border-left: 2px solid #F2F2F2;
	font-weight: 300;
}

#contenidoMiiverse {
	padding-right: 10px; 
}

footer {
	background-color: #420005;
	width: 100%;
	position: relative;
	color: #F2F2F2;
	text-align: center;
	padding-bottom: 1.7em;
}

footer:before {
	content: '';
	display: block;  
	position: absolute;
	left: 0;
	bottom: 100%;
	width: 0;
	height: 0;
	border-bottom: 33px solid #420005;
	border-right: 50vw solid transparent;
	border-top: 0 solid transparent;
	border-left: 50vw solid transparent;
}

footer h1 {
	padding: 0.3em 0.7em;
	font-weight: 300;
	font-size: 2.5em;
}

footer h2 {
	text-align: center;
	padding: 0.1em 0.7em;
	font-weight: 300;
	font-size: 1.5em;
}

footer a {
	color: #F2F2F2;
}

footer a:hover {
	color: #F48484;
	transition: 0.3s ease;
}

footer p {
	font-size: 0.8em;
	padding-top: 0.6em;
}