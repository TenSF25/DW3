const jBasquet = ["Jordan Poole", "Lebron James", "Stephen Curry", "Luka Dončić", "Manu Ginóbili"]
const copyArr = ["Kevin Durant", "Giannis", ...jBasquet, "Jayson Tatum"]

copyArr.map(nombres => {
    console.log(nombres);
})