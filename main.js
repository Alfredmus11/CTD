function equation1() {
    let va = document.getElementById("ax").value
    let vb = document.getElementById("b").value
    sessionStorage.setItem("a", va)
    sessionStorage.setItem("b", vb)
    let vc = document.getElementById("c").value
    sessionStorage.setItem("c", vc)
}
let a = sessionStorage.getItem("a")
let b = sessionStorage.getItem("b")
let c = sessionStorage.getItem("c")
let w = 0.70
w = w.toFixed(7)
console.log(w)
w = w - 0
console.log(w)
function decimal(n)
{
    if((n-Math.trunc(n))==0)
    {
        n = n
    }
    else
    {
        n = n.toFixed(5)
        n -= 0
    }

    return n
}
let a1 = new Number(a)
console.log(a == 0)

if (a == 0) {
    if (b < 0) {
        let res = document.getElementById("resolutionex1").innerHTML = "Votre équation " + a + "x " + b + " = " + c + " <b class='ble'>EST IMPOSSIBLE</b> <br> Car pour toute equation de forme ax+b = c si a = 0 <br> Alors l'eauation n'aura pas de solution car si on essayait de calculer l'équation on aurait:<br> x = (c-b)/a <br>  et Nous savon que dans l'assemble R il est impossible de diviser un nombre par 0 d'où l'équation est impossible <br> En CONCLUSION <br> Donc pour Toute équation de la forme ax+b = c si a = 0 l'équation sera obligatoirement IMPOSSIBLE"
    }
    else {
        let res = document.getElementById("resolutionex1").innerHTML = "votre équation '" + a + "x + " + b + " = 0' " + "<b class='ble'>EST IMPOSSIBLE</b><br> Car pour equation de forme ax+b = c si a = 0 <br> Alors l'euation n'aura pas de solution car si on essayait de calculer l'équation on aurait:<br> x = (c-b)/a <br>  et Nous savon que dans l'assemble R il est impossible de diviser un nombre par 0 d'où l'équation est impossible <br> En CONCLUSION <br> Donc Toute équation de la forme ax+b = c si a = 0 l'équation sera obligatoirement IMPOSSIBLE"
    }
}
else if ((b-c) == 0) {
    //let res = document.getElementById("resolutionex1").innerHTML = "la reponse est 0" + " Car dans Toute equation de forme ax+b=0 si b=0 alors la semble solution sera egale a 0"
    let d = c - b
    let res = decimal((d/a))
    if (b < 0) {
        let aff = document.getElementById("resolutionex1").innerHTML = "Votre équation " + a + "x " + b + " = " + c + " a comme solution x = " + res + "<br><br><b class='ble'>CALCUL</b>" + "<br><br>" + a + "x" + b + " = " + c + "<br> =>" + a + "x = " + c + "+" + (-b) + "<br> ici on voit que b change de signe comme on le dit changement de membre changent de signe <br>=> "+ a + "x = "+ d + "<br>=>" + "x = "+ d +"/"+ a + "<br> Qui nous donne x = "+ res + "<br>La reponse est 0" + "<br><br><b>NB</b>:Toute équation de forme ax+b=c si c - b = 0 alors l'ensemble solution sera égale à 0<br>En plus cela si a = 0 et (c-b) = 0 Alors l'équation sera directement dit indetermine car dans R 0/0 est une forme indeterminer "
    }
    else {
        let aff = document.getElementById("resolutionex1").innerHTML = "Votre équation " + a + "x +" + b + " = " + c + " a comme solution x = " + res + "<br><br><b class='ble'>CALCUL</b>" + "<br><br>" + a + "x + " + b + " = " + c + "<br> =>" + a + "x = " + c + "" + (-b) + "<br> ici on voit que b change de signe comme on le dit changement de membre changent de signe <br>=> "+ a + "x = "+ d + "<br>=>" + "x = "+ d +"/"+ a + "<br> Qui nous donne x = "+ res + "<br>La reponse est 0" + "<br><br><b>NB</b>: Toute équation de forme ax+b=c si c - b = 0 alors l'ensemble solution sera égale à 0<br>En plus cela si a = 0 et (c-b) = 0 Alors l'équation sera directement dit indetermine car dans R 0/0 est une forme indeterminer"
    }
}
else 
{
    let d = c - b
    let res = decimal((d/a))
    if (b < 0) {
        let aff = document.getElementById("resolutionex1").innerHTML = "Votre équation " + a + "x " + b + " = " + c + " a comme solution x = " + res + "<br><br><b class='ble'>CALCUL</b>" + "<br><br>" + a + "x" + b + " = " + c + "<br> =>" + a + "x = " + c + "+" + (-b) + "<br> ici on voit que b change de signe comme on le dit changement de membre changent de signe <br>=> "+ a + "x = "+ d + "<br>=>" + "x = "+ d +"/"+ a + "<br> Qui nous donne x = "+ res
    }
    else {
        let aff = document.getElementById("resolutionex1").innerHTML = "Votre équation " + a + "x +" + b + " = " + c + " a comme solution x = " + res + "<br><br><b class='ble'>CALCUL</b>" + "<br><br>" + a + "x + " + b + " = " + c + "<br> =>" + a + "x = " + c + "" + (-b) + "<br> ici on voit que b change de signe comme on le dit changement de membre changent de signe <br>=> "+ a + "x = "+ d + "<br>=>" + "x = "+ d +"/"+ a + "<br> Qui nous donne x = "+ res
    }
}
