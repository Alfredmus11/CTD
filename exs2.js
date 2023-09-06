function equation2() {
    let va = document.getElementById("a").value
    let vb = document.getElementById("b").value
    sessionStorage.setItem("a", va)
    sessionStorage.setItem("b", vb)
    let vc = document.getElementById("c").value
    sessionStorage.setItem("c", vc)
}
var a = new Number(sessionStorage.getItem("a"))
var b = new Number(sessionStorage.getItem("b"))
var c = new Number(sessionStorage.getItem("c"))

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
console.log(a)
console.log(b)
console.log((a-Math.trunc(a)))
function decimal(n)
{
    if((n-Math.trunc(n))==0)
    {
        n = n
    }
    else
    n = n.toFixed(3)

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
if(a == 0)
{
    document.getElementById("sex2").remove()
    const imposible = document.createElement("h1")
    affimpo = imposible.innerHTML = "<b class='jaune'>Votre équation ne pas du second degré mais plutôt du premier degré de forme "+b + "x "+ afc+" = 0 Car a = 0 <br>consultez le premier point du menu pour la resolution et l'explication de cette forme<b/>"
    document.getElementById("t").insertAdjacentHTML("afterend", affimpo)
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
if (Delta > 0) {
    var rep = "<br><br><b class='ble'>SOLUTION</b><br><br>La solution est x<sub>1</sub> = "+ X1 + " et x<sub>2</sub> = "+ X2+"<br>"
}
else if (Delta < 0) {
    var rep = "<br><br><b class='ble'>SOLUTION</b><br><br>Votre équation n'a pas de solution car il n'existe pas de racine carrée réelle d'un nombre négatif<br>"
}
else {
    var rep = "<br><br><b class='ble'>SOLUTION</b><br><br>La solution est x = "+ X1 + "<br>"
}
const afDelta = document.createElement("p")
afDelta.innerHTML = "Votre équation est " + a + "x<sup>2</sup>" + " " + afb + "x " + afc+" = 0" + rep+"<br><b class='ble'>CALCUL</b><br><br>Pour commencer nous devons chercher la valeur de Delta qui a comme formule<br> b<sup>2</sup> - (4 X a X c)<br> Donc avec notre équation on aura " + b + "<sup>2</sup> - ( 4 X "+ a + " X "+ c + ") = "+ Dela + " - (" + Delb + ") = " + Delta + "<br>Maintenant On doit analyser notre Delta il y a trois possibilité<br><br> 1. si Delta est supérieur à 0 on aura X<sub>1</sub> et X<sub>2</sub> avec X<sub>1</sub> = ((-b) + la racine carrée de Delta)/(2 X a) et X<sub>2</sub> = ((-b) - la racine carrée de Delta)/(2 X a)<br><br>2. Si Delta est égal à 0 on aura seulement une variable x car Delta étant égal à 0 X<sub>1</sub> sera égal X<sub>2</sub> car la différence entre leurs formule est que dans la première Delta est additionner mais dans la deuxième Delta est soutrait Donc si Delta égal à 0 il n'y a plus de différence car additionner ou soustraire 0 rien ne va changer dans le deux cas<br><br>3. Si Delta est inférieur à 0 alors l'équation sera dit impossible car<br><b class='jaune'>NB: il n'existe pas de racine réelle d'indice paire(2,6,4,8,10,...) d'un nombre négatif et comme dans notre cas c'est une racine carrée(indice 2) donc si Delta est inférieur à 0(il est négatif) l'équation sera dit impossible car pas de racine réelle</b> "
afDelta.id = "ff"
console.log(afDelta)
if (Delta > 0) {
    let suit = document.createElement("p")
    suit.innerHTML = "<br><br>Dans notre cas vous l'avait deviner il s'agit de la première possibilité car Deltat est supérieur à 0<br>Donc on va chercher d'abord la racine carrée de Delta comme Delta est égal à " + Delta + " Sa racine carrée est "+ racDelta  + "<br>Comme on a déjà la racine carrée on peut maintenant chercher X<sub>1</sub> et X<sub>2</sub><sub><br> X<sub>1</sub> = (-(b)+racine carrée de Delta)/(2 X a) =  (-(" + b + ") + " + racDelta + ")/ (2 X "+ a + ") = "+ ((-b) + (new Number(racDelta))) + "/"+ (2*a) + " = "+ X1 + "<br> X<sub>2</sub> = (-(b)-racine carrée de Delta)/(2 X a) =  (-(" + b + ") - " + racDelta + ")/ (2 X "+ a + ") = "+ ((-b) - racDelta) + "/"+ (2*a) + " = "+ X2
    let aff = document.getElementById("resolutionexs2").innerHTML = afDelta.innerHTML + suit.innerHTML
}
else if (Delta < 0) {
    let suit = document.createElement("p")
    suit.innerHTML = "<br><br>Dans Notre cas Deltat est inférieur à 0 Donc l'équation est directement dit impossible comme il est expliquer dans la troisième possible"
    let aff = document.getElementById("resolutionexs2").innerHTML = afDelta.innerHTML + suit.innerHTML
}
else {
    let suit = document.createElement("p")
    suit.innerHTML = "<br><br>Dans notre cas vous l'avait deviner il s'agit de la deuxième possibilité car Deltat est égale à 0<br>Comme delta est égal à 0 on va cherche directement X comme il est explique ci-dessus<br>avec<br> X = -(b) / (2 X a) <br> = -("+ b +")/" + " (2 X "+ a +") = " + (-( b)) + " / "+ (2*a) + " = " + X1
    let aff = document.getElementById("resolutionexs2").innerHTML = afDelta.innerHTML + suit.innerHTML
}
 

