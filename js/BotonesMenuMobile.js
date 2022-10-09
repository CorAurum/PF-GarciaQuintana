
function func1() /*Boton de Menu Seccion Comida*/
{
    if (document.getElementById("ComidaID").classList.contains("ComidaHide")){
        document.getElementById("ComidaID").classList.remove('ComidaHide');
        document.getElementById("ComidaID").classList.add('Comida');
    } else {
    document.getElementById("ComidaID").classList.remove('Comida');
    document.getElementById("ComidaID").classList.add('ComidaHide');
        document.getElementById("DesayunoID").classList.remove('DesayunoHide');
        document.getElementById("DesayunoID").classList.add('Desayuno');
        document.getElementById("PostreID").classList.remove('PostreHide');
        document.getElementById("PostreID").classList.add('Postre');
        document.getElementById("BebidasID").classList.remove('BebidasHide');
        document.getElementById("BebidasID").classList.add('Bebidas');
    } }
function func2() /*Boton de Menu Seccion Desayuno*/
{
    if (document.getElementById("DesayunoID").classList.contains("DesayunoHide")){
        document.getElementById("DesayunoID").classList.remove('DesayunoHide');
        document.getElementById("DesayunoID").classList.add('Desayuno');
    } else {
    document.getElementById("DesayunoID").classList.remove('Desayuno');
    document.getElementById("DesayunoID").classList.add('DesayunoHide');
        document.getElementById("ComidaID").classList.remove('ComidaHide');
        document.getElementById("ComidaID").classList.add('Comida');
        document.getElementById("PostreID").classList.remove('PostreHide');
        document.getElementById("PostreID").classList.add('Postre');
        document.getElementById("BebidasID").classList.remove('BebidasHide');
        document.getElementById("BebidasID").classList.add('Bebidas');
    } }
function func3() /*Boton de Menu Seccion Postre*/
{
    if (document.getElementById("PostreID").classList.contains("PostreHide")){
        document.getElementById("PostreID").classList.remove('PostreHide');
        document.getElementById("PostreID").classList.add('Postre');
    } else {
    document.getElementById("PostreID").classList.remove('Postre');
    document.getElementById("PostreID").classList.add('PostreHide');
    document.getElementById("ComidaID").classList.remove('ComidaHide');
        document.getElementById("ComidaID").classList.add('Comida');
        document.getElementById("DesayunoID").classList.remove('DesayunoHide');
        document.getElementById("DesayunoID").classList.add('Desayuno');
        document.getElementById("BebidasID").classList.remove('BebidasHide');
        document.getElementById("BebidasID").classList.add('Bebidas');
    } }
function func4() /*Boton de Menu Seccion Bebidas*/
{
    if (document.getElementById("BebidasID").classList.contains("BebidasHide")){
        document.getElementById("BebidasID").classList.remove('BebidasHide');
        document.getElementById("BebidasID").classList.add('Bebidas');
    } else {
    document.getElementById("BebidasID").classList.remove('Bebidas');
    document.getElementById("BebidasID").classList.add('BebidasHide');
        document.getElementById("ComidaID").classList.remove('ComidaHide');
        document.getElementById("ComidaID").classList.add('Comida');
        document.getElementById("DesayunoID").classList.remove('DesayunoHide');
        document.getElementById("DesayunoID").classList.add('Desayuno');
        document.getElementById("PostreID").classList.remove('PostreHide');
    document.getElementById("PostreID").classList.add('Postre');
    } }