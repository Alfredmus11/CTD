function inequation2() {
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
var a = new Number(sessionStorage.getItem("a"))
var b = new Number(sessionStorage.getItem("b"))
var c = new Number(sessionStorage.getItem("c"))
let a1 = new Number(a)
console.log(a == 0)
var s = sessionStorage.getItem("s")
var i = sessionStorage.getItem("i")
var se = sessionStorage.getItem("se")
var ie = sessionStorage.getItem("ie")
function decimal(n)
{
    if((n-Math.trunc(n))==0)
    {
        n = n
    }
    else
    {
        n = n.toFixed(2)
        n -= 0
    }

    return n
}
a = decimal(a)
b = decimal(b)
c = decimal(c)
var afb
var afc
if (b < 0) {
    var afb = b
}
else {
    var afb = "+ " + b
}
if (c < 0) {
    var afc = c
}
else {
    var afc = "+ " + c
}
//les calcul
var Dela = decimal((Math.pow(b, 2)))
var Delb = decimal((4 * a * c))
var Delta = Dela - Delb
Delta = decimal(Delta)
var racDelta = Math.pow(Delta, (1 / 2))
racDelta = decimal(racDelta)
var X1 = (((-b) + (new Number(racDelta))) / (2 * a))
var X2 = (((-b) - racDelta) / (2 * a))
X1 = decimal(X1)
X2 = decimal(X2)
if(X1 > X2)
{
    let xg = document.getElementById("Xg").innerHTML=X2
    let xp = document.getElementById("Xp").innerHTML=X1
    document.getElementById("ttt1").remove()
    if(a < 0)
    {
        explik = "Pour l'étude de signe donc à droite de "+ X1 + " On aura le signe - et à gauche de "+ X2+ " On aura le signe - et au milieu le signe +"
        let Milieu = document.getElementById("Milieu").innerHTML = "+"
        let gauche = document.getElementById("gauche").innerHTML = "-"
        let droite = document.getElementById("droite").innerHTML = "-"
        if(s == "true")
        {
            var ensesolu = "L'ensemble solution de l'inéquation est <br>] "+ X2 + ", "+ X1 + " ["
            let explique = document.getElementById("explication").innerHTML = "Comme c'est supérieur on pendra l'intervalle avec le signe + avec les x exclus <br>"+ensesolu
        }
        else if(i == "true")
        {
            var ensesolu = "L'ensemble solution de l'inéquation est <br>]-∞, "+ X2 + "[ U ]"+ X1 + ", +∞["
            let explique = document.getElementById("explication").innerHTML = "Comme c'est structement inférieur on prendra les intervalles avec le signe - avec les x exclus <br>"+ensesolu 
        }
        else if(se == "true")
        {
            var ensesolu = "L'ensemble solution de l'inéquation est <br>[ "+ X2 + ", "+ X1 + " ]"
            let explique = document.getElementById("explication").innerHTML = "Comme c'est supérieur ou égal on prendra l'intervalle avec le signe + avec les deux x inclus <br>"+ensesolu
        }
        else if(ie == "true")
        {
            var ensesolu = "L'ensemble solution de l'inéquation est <br>]-∞, "+ X2 + "] U ["+ X1 + ", +∞["
            let explique = document.getElementById("explication").innerHTML = "Comme c'est inférieur ou égal on prendra les intervalles avec le signe - avec les x inclus<br>"+ensesolu
        }


    }
    else
    {
        explik = "Pour l'étude de signe donc à droite de "+ X1 + " On aura le signe + et à gauche de "+ X2+ " On aura le signe + et au milieu le signe -"
        let Milieu = document.getElementById("Milieu").innerHTML = "-"
        let gauche = document.getElementById("gauche").innerHTML = "+"
        let droite = document.getElementById("droite").innerHTML = "+"
        if(s == "true")
        {
            var ensesolu = "L'ensemble solution de l'inéquation est <br>]-∞, "+ X2 + "[ U ]"+ X1 + ", +∞["
            let explique = document.getElementById("explication").innerHTML = "Comme c'est structement supérieur on prendra les intervalle avec le signe + avec les x exclus <br>"+ensesolu
        }
        else if(i == "true")
        {
            var ensesolu = "L'ensemble solution de l'inéquation est <br>] "+ X2 + ", "+ X1 + " [" 
            let explique = document.getElementById("explication").innerHTML = "Comme c'est structement inférieur on prendra l'intervalle avec le signe - avec exclus<br>"+ensesolu
        }
        else if(se == "true")
        {
            var ensesolu = "L'ensemble solution de l'inéquation est <br>]-∞, "+ X2 + "] U ["+ X1 + ", +∞["
            let explique = document.getElementById("explication").innerHTML = "Comme c'est supérieur ou égal on prendra les intervalle avec le signe + et avec les x inclus <br>"+ensesolu
        }
        else if(ie == "true")
        {
            var ensesolu = "L'ensemble solution de l'inéquation est <br>[ "+ X2 + ", "+ X1 + " ]" 
            let explique = document.getElementById("explication").innerHTML = "Comme c'est inférieur ou égal on prendra l'intervalle avec le signe - et avec les x inclus <br>"+ensesolu
        }  
    }
}
else if(X2 > X1)
{
    let xg = document.getElementById("Xg").innerHTML=X1
    let xp = document.getElementById("Xp").innerHTML=X2
    document.getElementById("ttt1").remove()
    if(a < 0)
    {
        explik = "Pour l'étude de signe donc à droite de "+ X2 + " On aura le signe - et à gauche de "+ X1+ " On aura le signe - et au milieu le signe +"
        let Milieu = document.getElementById("Milieu").innerHTML = "+"
        let gauche = document.getElementById("gauche").innerHTML = "-"
        let droite = document.getElementById("droite").innerHTML = "-"
        if(s == "true")
        {
           var ensesolu = "L'ensemble solution de l'inéquation est <br>] "+ X1 + ", "+ X2 + " ["
           let explique = document.getElementById("explication").innerHTML = "Comme c'est structement supérieur on prendra l'intervalle avec le signe - avec les x exclus<br>"+ensesolu
        }
        else if(i == "true")
        {
            var ensesolu = "L'ensemble solution de l'inéquation est <br>]-∞, "+ X1 + "[ U ]"+ X2 + ", +∞["
            let explique = document.getElementById("explication").innerHTML = "Comme c'est structement inférieur on prendra les intervalle avec le signe - avec les x exclus <br>"+ensesolu
        }
        else if(se == "true")
        {
           var ensesolu = "L'ensemble solution de l'inéquation est <br>[ "+ X1 + ", "+ X2 + " ]"
           let explique = document.getElementById("explication").innerHTML = "Comme c'est supérieur ou égal on prendra l'intervalle avec le signe + avec les x inclus <br>"+ensesolu
        }
        else if(ie == "true")
        {
            var ensesolu = "L'ensemble solution de l'inéquation est <br>]-∞, "+ X1 + "] U ["+ X2 + ", +∞["
            let explique = document.getElementById("explication").innerHTML = "Comme c'est inférieur ou égal on prendra les intervalle avec le signe - avec les x inclus<br>"+ensesolu
        }
    }
    else
    {
        explik = "Pour l'étude de signe donc à droite de "+ X2 + " On aura le signe + et à gauche de "+ X1+ " On aura le signe + et au milieu le signe -"
        let Milieu = document.getElementById("Milieu").innerHTML = "-"
        let gauche = document.getElementById("gauche").innerHTML = "+"
        let droite = document.getElementById("droite").innerHTML = "+" 
        if(s == "true")
        {
            var ensesolu = "L'ensemble solution de l'inéquation est <br>]-∞, "+ X1 + "[ U ]"+ X2 + ", +∞["
            let explique = document.getElementById("explication").innerHTML = "Comme c'est structement supérieur on prendra les intervalles avec le signe + avec les x exclus <br>"+ensesolu
        }
        else if(i == "true")
        {
            var ensesolu = "L'ensemble solution de l'inéquation est <br>] "+ X1 + ", "+ X2 + " ["
            let explique = document.getElementById("explication").innerHTML = "Comme c'est structement inférieur on prendra l'intervalle avec le signe - les x exclus <br>"+ensesolu
        }
        else if(se == "true")
        {
            var ensesolu = "L'ensemble solution de l'inéquation est <br>]-∞, "+ X1 + "] U ["+ X2 + ", +∞["
            let explique = document.getElementById("explication").innerHTML = "Comme c'est supérieur ou égal on pendra les intervalles avec le signe + et avec les x inclus <br>"+ensesolu
        }
        else if(ie == "true")
        {
            var ensesolu = "L'ensemble solution de l'inéquation est <br>[ "+ X1 + ", "+ X2 + " ]"
            let explique = document.getElementById("explication").innerHTML = "Comme c'est  inférieur ou égal on pendra l' intervalle avec le signe - et avec les x inclus<br>"+ensesolu
        }
    }
}
else
{
    let x = document.getElementById("X").innerHTML=X1
    document.getElementById("ttt").remove()
    if(a<0)
    {
        explik = "Pour l'étude de signe donc à droite de "+ X2 + " On aura le signe - et à gauche de "+ X1+ " On aura le signe -"
        let gauche = document.getElementById("gauche").innerHTML = "-"
        let droite = document.getElementById("droite").innerHTML = "-" 
        if(s == "true")
        {
            let explique = document.getElementById("explication").innerHTML = "Comme c'est structement supérieur et qu'il n' y a pas d'intervalle avec le signe + Donc L'ensemble solution de l'inéquation est un ensemble vide<br>"
        }
        else if(i == "true")
        {
            if (Delta < 0)
            {
                var ensesolu = "L'ensemble solution de l'inéquation est <br>]-∞, +∞[ = L'ensemble R"
            } 
            else
            {
                var ensesolu = "L'ensemble solution de l'inéquation est <br>]-∞, "+ X2 + "[ U ]"+ X1 + ", +∞[ = L'ensemble R/"+ X1 +""
            }
            let explique = document.getElementById("explication").innerHTML = "Comme c'est structement inférieur on pendra les intervalles avec le signe - et avec les x exclus<br>"+ensesolu 
        }
        else if(se == "true")
        {
            var ensesolu = "L'ensemble solution de l'inéquation est un ensemble vide"
            let explique = document.getElementById("explication").innerHTML = "Comme supérieur ou égal et qu'il n' y a pas d'intervalle avec le signe + Donc L'ensemble solution de l'inéquation est un ensemble vide<br>"
        }
        else if(ie == "true")
        {
            if (Delta < 0)
            {
                ensesolu = "L'ensemble solution de l'inéquation est un ensemble vide"
            } 
            else
            {
                var ensesolu = "L'ensemble solution de l'inéquation est <br>]-∞, "+ X2 + "] U ["+ X1 + ", +∞[ = L'ensemble R"
            }
            let explique = document.getElementById("explication").innerHTML = "Comme c'est inférieur ou égal on pendra les intervalle avec le signe - et avec les x inclus<br>"+ensesolu
        }  
    }
    else
    {
        explik = "Pour l'étude de signe donc à droite de "+ X2 + " On aura le signe + et à gauche de "+ X1+ " On aura le signe +"
        let gauche = document.getElementById("gauche").innerHTML = "+"
        let droite = document.getElementById("droite").innerHTML = "+"
        if(s == "true")
        {
            if (Delta < 0)
            {
                ensesolu = "L'ensemble solution de l'inéquation est <br>]-∞, +∞[ = L'ensemble R"
            }
            else
            {
                var ensesolu = "L'ensemble solution de l'inéquation est <br>]-∞, "+ X2 + "v[ U ]"+ X1 + ", +∞[ = L'ensemble R/"+ X1 +" "
            } 
            let explique = document.getElementById("explication").innerHTML = "Comme c'est structement supérieur on pendra les intervalle avec le signe + et avec les x exclus<br>"+ensesolu
        }
        else if(i == "true")
        {
            var ensesolu = "L'ensemble solution de l'inéquation est un ensemble vide"
            let explique = document.getElementById("explication").innerHTML = "Comme c'est structement inférieur on pendra les intervalle avec le signe - Donc L'ensemble solution de l'inéquation est un ensemble vide<br>"
        }
        else if(se == "true")
        {
            if (Delta < 0)
            {
                ensesolu = "L'ensemble solution de l'inéquation est un ensemble vide"
            }
            else
            {
                var ensesolu = "L'ensemble solution de l'inéquation est <br>]-∞, "+ X2 +" ] U ["+ X1 + ", +∞[ = L'ensemble R/"+ X1 +" "
            } 
            let explique = document.getElementById("explication").innerHTML = "Comme c'est supérieur ou égal on pendra les intervalle avec le signe + et avec les x inclus <br>"+ensesolu
        }
        else if(ie == "true")
        {
            var ensesolu = "L'ensemble solution de l'inéquation est un ensemble vide"
            let explique = document.getElementById("explication").innerHTML = "Comme c'est  inférieur ou égal on pendra les intervalle avec le signe - Donc L'ensemble solution de l'inéquation est un ensemble vide <br>"
        }
    }
    
}
if (Delta > 0) {
    var rep = "<br><br><b class='ble'>SOLUTION</b><br><br>La solution de l'équation est x<sub>1</sub> = "+ X1 + " et x<sub>2</sub> = "+ X2+"<br>"
}
else if (Delta < 0) {
    let x = document.getElementById("X").innerHTML="X"
    if(a < 0)
    {
        let x = document.getElementById("M").innerHTML="-"
    }
    else
    {
        let x = document.getElementById("M").innerHTML="+"
    }
    var rep = "<br><br><b class='ble'>SOLUTION</b><br><br>Votre équation n'a pas de solution car il n'existe pas de racine carrée réelle d'un nombre négatif<br>"
}
else {
    var rep = "<br><br><b class='ble'>SOLUTION</b><br><br>La solution est x = "+ X1 + "<br>"
}
const afDelta = document.createElement("p")
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
var inequation = a + "x<sup>2</sup>" + " " + afb + "x " + afc+" "+ signed + " 0"
var equation = a + "x<sup>2</sup>" + " " + afb + "x " + afc+" = 0"
afDelta.innerHTML = "Votre inéquation est " + inequation +"<br> Pour commencer il faut maitre votre inéquation sous forme d'équation<br> On aura " + a + "x<sup>2</sup>" + " " + afb + "x " + afc+" = 0" + rep+ "<br><b class='jaune'>"+ ensesolu+"</b><br><br><b class='ble'>CALCUL ET EXPLICATION</b><br><br>Pour commencer nous devons chercher la valeur de Delta qui a comme formule<br> b<sup>2</sup> - (4 X a X c)<br> Donc avec notre équation on aura " + b + "<sup>2</sup> - ( 4 X "+ a + " X "+ c + ") = "+ Dela + " - (" + Delb + ") = " + Delta + "<br>Maintenant On doit analyser notre Delta il y a trois possibilités<br><br> 1. Si Delta est supérieur à 0 on aura X<sub>1</sub> et X<sub>2</sub> avec X<sub>1</sub> = ((-b) + la racine carrée de Delta)/(2 X a) et X<sub>2</sub> = ((-b) - la racine carrée de Delta)/(2 X a)<br>Pour l'étude de signe comme on a deux point 0(où l'équation est égal à 0) on devra aligner nos deux X du plus petit au plus grand puis vérifier le signe de a(+ ou -) on mettra le signe de a à gauche du plus petit x et à droit du plus grand puis au milieu de deux x on mettra le signe contraire de a<br>L'intervalle qui aura le signe + le trinôme sera supérieur à 0 et L'intervalle avec le signe - le trinôme sera inférieur à 0 <br><br>2. Si Delta est égal à 0 on aura seulement une variable x car Delta étant égal à 0 X<sub>1</sub> sera égal X<sub>2</sub> car la différence entre leurs formule est que dans la première Delta est additionner mais dans la deuxième Delta est soutrait Donc si Delta égal à 0 il n'y a plus de différence car additionner ou soustraire 0 rien ne va changer dans le deux cas<br>Pour l'étude de signe comme on a une variable x(Qui est notre point 0 ) à gauche de x et à droite de x on mettra le signe de a<br><br>3. Si Delta est inférieur à 0 alors l'équation sera dit impossible car<br><b class='jaune'>NB: il n'existe pas de racine réelle d'indice paire(2,6,4,8,10,...) d'un nombre négatif et comme dans notre cas c'est une racine carrée(indice 2) donc si Delta est inférieur à 0(il est négatif) l'équation sera dit impossible car pas de racine réelle<br>Pour l'étude de signe on mettra le signe de a partout dans R </b> "
afDelta.id = "ff"
console.log(document.getElementById("inex2").innerHTML)
let inexaff = document.getElementById("inex2").innerHTML = equation
console.log(afDelta)
if (Delta > 0) {
    let suit = document.createElement("p")
    suit.innerHTML = "<br><br>Dans notre cas vous l'avait deviner il s'agit de la première possibilité car Deltat est supérieur à 0<br>Donc on va chercher d'abord la racine carrée de Delta comme Delta est égal à " + Delta + " Sa racine carrée est "+ racDelta  + "<br>Comme on a déjà la racine carrée on peut maintenant chercher X<sub>1</sub> et X<sub>2</sub><sub><br> X<sub>1</sub> = (-(b)+racine carrée de Delta)/(2 X a) =  (-(" + b + ") + " + racDelta + ")/ (2 X "+ a + ") = "+ ((-b) + (new Number(racDelta))) + "/"+ (2*a) + " = "+ X1 + "<br> X<sub>2</sub> = (-(b)-racine carrée de Delta)/(2 X a) =  (-(" + b + ") - " + racDelta + ")/ (2 X "+ a + ") = "+ ((-b) - racDelta) + "/"+ (2*a) + " = "+ X2 +"<br>"+ explik
    let aff = document.getElementById("resolutioninexs2").innerHTML = afDelta.innerHTML + suit.innerHTML
    if((a+b+c)== 0)
{
    let r1 = 1
    let r2 = a/c
    let bonus = document.getElementById("bonus").innerHTML = "<br><b class='ble'>BONUS</b><br><br> Pour toute équation du second degré si a + b + c = 0 l'une variable de x sera égal à 1 et l'autre à c/a ce qui est le cas pour nous"
}
else if((a+c) == b)
{
    let r1 = 1
    let r2 = a/c
    let bonus = document.getElementById("bonus").innerHTML = "<br><b class='ble'>BONUS</b><br><br> Pour toute équation du second degré si a + b = c l'une de variable x sera égal à -1 et l'autre à -(c/a) ce qui est le cas pour nous"  
} 
}
else if (Delta < 0) {
    let suit = document.createElement("p")
    suit.innerHTML = "<br><br>Dans Notre cas Deltat est inférieur à 0 Donc l'équation est directement dit impossible comme il est expliquer dans la troisième possible<br>"+explik
    let aff = document.getElementById("resolutioninexs2").innerHTML = afDelta.innerHTML + suit.innerHTML
}
else {
    let suit = document.createElement("p")
    suit.innerHTML = "<br><br>Dans notre cas vous l'avait deviner il s'agit de la deuxième possibilité car Deltat est égale à 0<br>Comme delta est égal à 0 on va cherche directement X comme il est explique ci-dessus<br>avec<br> X = -(b) / (2 X a) <br> = -("+ b +")/" + " (2 X "+ a +") = " + (-( b)) + " / "+ (2*a) + " = " + X1 + "<br>"+explik
    let aff = document.getElementById("resolutioninexs2").innerHTML = afDelta.innerHTML + suit.innerHTML
    if((a+b+c)== 0)
{
    let r1 = 1
    let r2 = a/c
    let bonus = document.getElementById("bonus").innerHTML = "<br><b class='ble'>BONUS</b><br><br> Pour toute équation du second degré si a + b + c = 0 l'une variable de x sera égal à 1 et l'autre à c/a ce qui est le cas pour nous"
}
else if((a+c) == b)
{
    let r1 = 1
    let r2 = a/c
    let bonus = document.getElementById("bonus").innerHTML = "<br><b class='ble'>BONUS</b><br><br> Pour toute équation du second degré si a + b = c l'une de variable x sera égal à -1 et l'autre à -(c/a) ce qui est le cas pour nous"  
} 
}
if(a == 0)
{
    a = 4
    document.getElementById("sect").remove()
    const imposible = document.createElement("h1")
    affimpo = imposible.innerHTML = "<b class='jaune'>Votre inéquation ne pas du second degré mais plutôt du premier degré de forme "+b + "x "+ afc+" "+ signed+" 0 Car a = 0 <br>consultez le deuxième point du menu pour la resolution et l'explication de cette forme<b/>"
    document.getElementById("t").insertAdjacentHTML("beforeend", affimpo)
}