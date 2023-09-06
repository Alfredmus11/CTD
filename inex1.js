
function inequation1() {
    let va = document.getElementById("ax").value
    let vb = document.getElementById("b").value
    let sg0 = document.getElementById("sg0").checked
    let sg1 = document.getElementById("sg1").checked
    let sg2 = document.getElementById("sg2").checked
    let sg3 = document.getElementById("sg3").checked
    sessionStorage.setItem("a", va)
    sessionStorage.setItem("b", vb)
    let vc = document.getElementById("c").value
    sessionStorage.setItem("c", vc)
    sessionStorage.setItem("s", sg0)
    sessionStorage.setItem("i", sg1)
    sessionStorage.setItem("se", sg2)
    sessionStorage.setItem("ie", sg3)
}
let a = sessionStorage.getItem("a")
let b = sessionStorage.getItem("b")
let c = sessionStorage.getItem("c")
let a1 = new Number(a)
console.log(a == 0)
let s = sessionStorage.getItem("s")
let i = sessionStorage.getItem("i")
let se = sessionStorage.getItem("se")
let ie = sessionStorage.getItem("ie")
function decimal(n)
{
    if((n-Math.trunc(n))==0)
    {
        n = n
    }
    else
    {
        n = n.toFixed(3)
        n -= 0
    }

    return n
}
if(s == "true")
{
    var signed = " > "
}
else if(i == "true")
{
    var signed = " < "
}
else if(se == "true")
{
    var signed = " ≥ "
}
else if(ie == "true")
{
    var signed = " ≤ "
}
if (b < 0) {
    var afb = b
}
else {
    var afb = "+ " + b
}
var inequation = a + "x" + " " + afb +" "+ signed +" "+ c
let Mi = document.getElementById("M").innerHTML = c
console.log(b)

if (a == 0) {
        let tt = document.getElementById("ttt").innerHTML = " "
        let mes = document.getElementById("mes").innerHTML = "<br><b class='ble'>Comme a = 0 ce n'est plus une inéquation comme il a été expliqué bien avant</b>"
        console.log(document.getElementById("ttt"))
            }
else
{
    if ((b-c) == 0) {
        //let res = document.getElementById("resolutionex1").innerHTML = "la reponse est 0" + " Car dans Toute equation de forme ax+b=0 si b=0 alors la semble solution sera egale a 0"
        let d = c - b
        let n = (d/a)
        let res = new Number(n)
        res = decimal(res)
        if (b < 0) {
            let aff = document.getElementById("resolutionex1").innerHTML = "Votre inéquation est "+inequation+"<br> On doit mettre votre inéquation sous forme d'équation pour commencer ce qui nous donne: " + a + "x " + b + " = " + c + " a comme solution x = " + res + "<br><br><b>CALCUL</b>" + "<br><br>" + a + "x" + b + "=" + c + "<br> =>" + a + "x = " + c + "+" + (-b) + " ici on voit que b change de signe comme on le dit changement de membre changent de signe <br>=> "+ a + "x = "+ d + "<br>=>" + "x = "+ d +"/"+ a + " Qui nous donne x = "+ res + "<br>La reponse est 0" + "<br><br><b>NB</b>:Toute équation de forme ax+b=c si c - b = 0 alors l'ensemble solution sera égale à 0<br>En plus cela si a = 0 et (c-b) = 0 Alors l'équation sera directement dit indetermine car dans R 0/0 est une forme indeterminer "
            let inex = document.getElementById("inex").innerHTML =  a + "x " + b + " = " + c
        }
        else {
           let aff = document.getElementById("resolutionex1").innerHTML = "Votre inéquation est "+inequation+"<br>On doit mettre votre inéquation sous forme d'équation pour commencer ce qui nous donne: " + a + "x +" + b + " = " + c + " a comme solution x = " + res + "<br><br><b>CALCUL</b>" + "<br><br>" + a + "x + " + b + "=" + c + "<br> =>" + a + "x = " + c + "" + (-b) + " ici on voit que b change de signe comme on le dit changement de membre changent de signe <br>=> "+ a + "x = "+ d + "<br>=>" + "x = "+ d +"/"+ a + " Qui nous donne x = "+ res + "<br>La reponse est 0" + "<br><br><b>NB</b>: Toute équation de forme ax+b=c si c - b = 0 alors l'ensemble solution sera égale à 0<br>En plus cela si a = 0 et (c-b) = 0 Alors l'équation sera directement dit indetermine car dans R 0/0 est une forme indeterminer"
           let inex = document.getElementById("inex").innerHTML =  a + "x +" + b + " = " + c
        }
    }
    else 
    {
        let d = c - b
        let n = (d/a)
        let res = new Number(n)
        res = decimal(res)
        if (b < 0) {
            let aff = document.getElementById("resolutionex1").innerHTML = "Votre inéquation est "+inequation+"<br>On doit mettre votre inéquation sous forme d'équation pour commencer ce qui nous donne:<br> " + a + "x " + b + " = " + c + "<br> Pour le faire il faut seulement changer le signe de comparaison en signe d'égalité"+"<br><br><b class='ble'>Calcul de l'équation</b>" + "<br><br>" + a + "x" + b + "=" + c + "<br> =>" + a + "x = " + c + "+" + (-b) + " ici on voit que b change de signe comme on le dit changement de membre changement de signe <br>=> "+ a + "x = "+ d + "<br>=>" + "x = "+ d +"/"+ a + " Qui nous donne x = "+ res
            let inex = document.getElementById("inex").innerHTML =  a + "x " + b + " = " + c
        }
        else {
            let aff = document.getElementById("resolutionex1").innerHTML = "Votre inéquation est "+inequation+"<br>On doit mettre votre inéquation sous forme d'équation pour commencer ce qui nous donne:<br> " + a + "x +" + b + " = " + c + "<br> Pour le faire il faut seulement changer le signe de comparaison en signe d'égalité"+ "<br><br><b class='ble'>Calcul de l'équation</b>" + "<br><br>" + a + "x + " + b + "=" + c + "<br> =>" + a + "x = " + c + "" + (-b) + " ici on voit que b change de signe comme on le dit changement de membre changement de signe <br>=> "+ a + "x = "+ d + "<br>=>" + "x = "+ d +"/"+ a + " Qui nous donne x = "+ res
            let inex = document.getElementById("inex").innerHTML =  a + "x +" + b + " = " + c
        }
    }
    if(a > 0)
    {
        let d = c - b
        let n = (d/a)
        let res = new Number(n)
        res = decimal(res)
        let affi = document.getElementById("resol").innerHTML = res
        let etude = document.getElementById("droite").innerHTML = "+ + "
        let gauche = document.getElementById("gauche").innerHTML = "- - "
        let explication = document.getElementById("explication").innerHTML = "Ici maitenant pour faire l'étude de signe on prend x dans notre cas c'est " + res + " comme point " + c + " de notre inéquation(le point ou les deux parties sont égaux) maitenant pour savoir dans quel intervalle notre binome(ax + b) est supérieur ou dans le quel il est inférieur à "  + c + " on aura besoin de savoir le signe de a si a est positif(nombre supérieur à 0) ou s'il est négatif(nombre inférieur à 0)<br>si a est positif on mettra le signe + à droite de "+ c + "(le nombre qui sont supérieur à x pour c'est " + res +"  donc de " + res +" exclus jusqu'a  +∞ ) et à sa gauche"+"(l'intervalle de nombre qui sont inférieur à X pour nous c'est " + res +" donc de " + res +" exclus jusqu'a  -∞) le signe - "+ "<br> si a est négatif on fait le contraire(signe - à droite et signe + à gauche)<br> A la fin l'intervalle qui aura le signe + sera l'intervalle où le binome sera supérieur à "+ c + " (avec x exclus de cet intervalle) et l'intervalle avec le signe - le binome sera inférieur à " + c + " (avec x exclus de cet intervalle) Pour le cas de supérieur ou égal et inférieur ou égal il faudra seulement inclure x dans l'intervalle"
        if(s == "true")
        {
            let interval = document.getElementById("intervale").innerHTML = "Comme Dans notre cas a( " + a +") " +" est positif à droite de " + c + " on aura le signe + (le signe de a) et à gauche le signe -(le signe contraire de a) et comme c'est structement supérieur donc on prendra l'intervalle avec le signe + qui est l'intervalle à droit avec " + res + " exclus de l'intervalle<br><b>L'ensemble solution est alors ] " + res +", +∞[</b> c'est qui est lu de " + res + " exclu(d'où le crocher est ouvert) jusqu'a +∞ qui aussi exclus(+∞ ou -∞ sont toujours exclus de l'intervalle) <br>Cet intervalle on peut encore le noter:<br>X > " + res + " ce qui est plus simple"
            let ens = document.getElementById("ens").innerHTML = "<b>L'ensemble solution est ] " + res +", +∞[ ou encore X > " + res +" </b>"
        }
        else if(i == "true")
        {
            let interval = document.getElementById("intervale").innerHTML = "Comme Dans notre cas a( " + a +") " +" est positif à droite de " + c + " on aura le signe + (le signe de a) et à gauche le signe -(le signe contraire de a) et comme c'est structement inférieur donc on prendra l'intervalle avec le signe - qui est l'intervalle à gauche avec " + res + " exclus de l'intervalle<br><b>L'ensemble solution est ]-∞, " + res +" [</b> c'est qui est lu de moins l'infinie exclu(d'où le crocher est ouvert NB: +∞ ou -∞ sont toujours exclus de l'intervalle) jusqu'a " + res + " qui aussi exclus(d'où le crocher est ouvert) <br>Cet intervalle on peut encore le noter:<br>X < " + res + " ce qui est plus simple"
            let ens = document.getElementById("ens").innerHTML = "<b>L'ensemble solution est ]-∞, " + res +" [ ou encore X < " + res +" </b>"
        }
        else if(se == "true")
        {
            let interval = document.getElementById("intervale").innerHTML = "Comme Dans notre cas a( " + a +") " +" est positif à droite de " + c + " on aura le signe + (le signe de a) et à gauche le signe -(le signe contraire de a) et comme c'est  supérieur ou égal donc on prendra l'intervalle avec le signe + qui est l'intervalle à droit avec " + res + " inclus de l'intervalle<br><b>L'ensemble solution est [" + res +", +∞[</b> c'est qui est lu de " + res + " inclus(d'où le crocher est fermer) jusqu'a +∞ qui est exclus(+∞ ou -∞ sont toujours exclus de l'intervalle d'où le crocher est ouvert) <br>Cet intervalle on peut encore le noter:<br>X ≥ " + res + " ce qui est plus simple"
            let ens = document.getElementById("ens").innerHTML = "<b>L'ensemble solution est [" + res +", +∞[ ou encore X ≥ " + res +" </b>"
        }
        else if(ie == "true")
        {
            let interval = document.getElementById("intervale").innerHTML = "Comme Dans notre cas a( " + a +") " +" est positif à droite de " + c + " on aura le signe + (le signe de a) et à gauche le signe -(le signe contraire de a) et comme c'est inférieur ou égal donc on prendra l'intervalle avec le signe - qui est l'intervalle à gauche avec " + res + " inclus de l'intervalle<br><b>L'ensemble solution est ]-∞, " + res +" ]</b>c'est qui est lu de moins l'infinie exclu(d'où le crocher est ouvert NB: +∞ ou -∞ sont toujours exclus de l'intervalle) jusqu'a " + res + " qui inclus(d'où le crocher est fermer) <br>Cet intervalle on peut encore le noter:<br>X ≤ " + res + " ce qui est plus simple"
            let ens = document.getElementById("ens").innerHTML = "<b>L'ensemble solution est ]-∞, " + res +" ] ou encore X ≤ " + res +"</b>"
        }
    }
    else
    {
        let d = c - b
        let n = (d/a)
        let res = new Number(n)
        res = decimal(res)
        let affi = document.getElementById("resol").innerHTML = res
        let etude = document.getElementById("gauche").innerHTML = "+ + "
        let gauche = document.getElementById("droite").innerHTML = "- - "
        let explication = document.getElementById("explication").innerHTML = "Ici maitenant pour faire l'étude de signe on prend x dans notre cas c'est " + res + " comme point " + c + " de notre inéquation(le point ou les deux parties sont égaux) maitenant pour savoir dans quel intervalle notre binome(ax + b) est supérieur ou dans le quel il est inférieur à "  + c + " on aura besoin de savoir le signe de a si a est positif(nombre supérieur à 0) ou s'il est négatif(nombre inférieur à 0)<br>si a est positif on mettra le signe + à droite de "+ c + ""+"(l'intervalle de nombre qui sont supérieur à x pour nous c'est " + res +" donc de " + res +" exclus jusqu'a  +∞) et à gauche"+"(l'intervalle de nombre qui sont inférieur à X pour nous c'est " + res +" donc de " + res +" exclus jusqu'a  -∞) le signe - "+ "<br>Si a est négatif on fait le contraire<br> A la fin l'intervalle qui aura le signe + sera l'interval où le binome sera supérieur à "+ c + " (avec x exclus de cet intervalle) et l'intervalle avec le signe - le binome sera inférieur à " + c + " (avec x exclus de cet intervalle) Pour le cas de supérieur ou égal et inférieur ou égal il faudra seulement inclure x dans l'intervalle"
        if(s == "true")
        {
            let interval = document.getElementById("intervale").innerText = "Comme Dans notre cas a( " + a +") " +" est négatif à droite de " + c + " on aura le signe - (le signe de a) et à gauche le signe +(le signe contraire de a) et comme c'est structement supérieur donc on prendra l'intervalle avec le signe + qui est l'intervalle à gauche avec " + res + " exclus de l'intervalle<br></b>L'ensemble solution est ]-, " + res +" [</b>c'est qui est lu de moins l'infinie exclu(d'où le crocher est ouvert NB: +∞ ou -∞ sont toujours exclus de l'intervalle) jusqu'a " + res + " qui aussi exclus(d'où le crocher est ouvert) <br>Cet intervalle on peut encore le noter:<br>X < " + res + " ce qui est plus simple"
            let ens = document.getElementById("ens").innerHTML = "<b>L'ensemble solution est ]-∞, " + res +" ] ou encore X > " + res +"</b>"
        }
        else if(i == "true")
        {
            let interval = document.getElementById("intervale").innerText = "Comme Dans notre cas a( " + a +") " +" est négatif à droite de " + c + " on aura le signe - (le signe de a) et à gauche le signe + (le signe contraire de a) et comme c'est structement inférieur donc on prendra l'intervalle avec le signe - qui est l'intervalle à droite avec " + res + " exclus de l'intervalle<br></b>L'ensemble solution est  ] " + res +", +[</b>c'est qui est lu de " + res + " exclu(d'où le crocher est ouvert) jusqu'a +∞ qui aussi exclus(+∞ ou -∞ sont toujours exclus de l'intervalle) <br>Cet intervalle on peut encore le noter:<br>X > " + res + " ce qui est plus simple"
            let ens = document.getElementById("ens").innerHTML = "<b>L'ensemble solution est ]-∞, " + res +" ] ou encore X > " + res +"</b>"
        }
        else if(se == "true")
        {
            let interval = document.getElementById("intervale").innerText = "Comme Dans notre cas a( " + a +") " +" est négatif à droite de " + c + " on aura le signe - (le signe de a) et à gauche le signe + (le signe contraire de a) et comme c'est structement inférieur donc on prendra l'intervalle avec le signe + qui est l'intervalle à gauche avec " + res + " inclus de l'intervalle<br><b>L'ensemble solution est ]-," + res +" ]</b>c'est qui est lu de moins l'infinie exclu(d'où le crocher est ouvert NB: +∞ ou -∞ sont toujours exclus de l'intervalle) jusqu'a " + res + " qui inclus(d'où le crocher est fermer) <br>Cet intervalle on peut encore le noter:<br>X ≤ " + res + " ce qui est plus simple"
            let ens = document.getElementById("ens").innerHTML = "<b>L'ensemble solution est ]-∞, " + res +" ] ou encore X > " + res +"</b>"
        }
        else if(ie == "true")
        {
            let interval = document.getElementById("intervale").innerText = "Comme Dans notre cas a( " + a +") " +" est négatif à droite de " + c + " on aura le signe - (le signe de a) et à gauche le signe + (le signe contraire de a) et comme c'est structement inférieur donc on prendra l'intervalle avec le signe - qui est l'intervalle à droite avec " + res + " inclus de l'intervalle<br><b>L'ensemble solution est [ " + res +", +[</b>c'est qui est lu de " + res + " inclus(d'où le crocher est fermer) jusqu'a +∞ qui est exclus(+∞ ou -∞ sont toujours exclus de l'intervalle d'où le crocher est ouvert) <br>Cet intervalle on peut encore le noter:<br>X ≥ " + res + " ce qui est plus simple"
            let ens = document.getElementById("ens").innerHTML = "<b>L'ensemble solution est ]-∞, " + res +" ] ou encore X > " + res +"</b>"
        }
    }

 
}


