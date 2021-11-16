/*1. Erstelle eine Variable mit dem Namen isLoggedIn und fülle sie mit dem Wert false (abgemeldet). */
let isLoggedIn = false;
if (isLoggedIn) {
    console.log("herzlich willkommen");
} else {
    console.log("du bist abgemeldet");
}
/*2. Erstelle eine Fallabfrage. */
let isLoggedOut = true;
if (isLoggedOut) {
    console.log("du bist abgemeldet");    
} else {
    console.log("herzlich willkommen");
}
/*3. Falls der Nutzer abgemeldet ist, schreibe eine Konsolenausgabe mit dem Text "Bitte melde dich an".  */
if (isLoggedOut) {
    console.log("Bitte melde dich an");
}
/*4. Falls der Nutzer angemeldet ist, schreibe eine Konsolenausgabe mit dem Text "Du bist erfolgreich angemeldet".
 */

if (isLoggedIn) {
    console.log("Du bist erfolgreich angemeldet.");
}
/* ## Aufgabenstellung Teil 2
Ändere nun den Wert deiner Variable zu true (angemeldet) und prüfe, ob deine Fallabfrage nun die zweite Konsolenausgabe schreibt.*/

let loggedIn = true;
if (loggedIn) {
    console.log("Du bist erfolgreich angemeldet.")
}