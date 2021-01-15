new TypeIt("#eme", {
    speed: 70,
    waitUntilVisible: true
})
.type(" ", {delay: 2000})
.type("CyberSecurity Enthusiast", {delay: 1000})
.delete(24, {delay: 1200})
.type("PenTester", {delay: 3000})
.delete(9, {delay: 1200})
.type("Hacker", {delay: 1000})
.move(-6, {speed: 25, delay: 100})
.type("<b>Ethical</b> ", {delay: 100})
.move('END')
.type(" from Philippines ", {delay: 100})
.go(); 
