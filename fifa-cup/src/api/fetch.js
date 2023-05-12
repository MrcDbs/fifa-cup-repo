let http = new XMLHttpRequest();

http.open('get', 'players.json', true);

http.send();

http.onload = () => {

}