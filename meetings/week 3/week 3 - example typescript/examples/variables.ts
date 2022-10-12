let num: number = 1;

if (Math.floor(Math.random() * 10) % 2) {
  num = "1";
}

console.log(num + 1);

/*

    in javascript without types this code has a 50% chance of being 2
    and 50% chance of being 11

    this is obviously not code that would be seen in production but
    if a developer isnt careful about using fully unique variable 
    names. This could come up if a developer is dealing with many nested
    scopes

    let res = ""

    fetch('http://localhost:8080/api')
        .then(response =>{
            let res_json = res.json();

            if res_json.status === 200{
                console.log("success")
            } else {
                console.log("error")
            }
        })

        this will always return error in javascript due to a simple mistake
        of typing res instead of response inside of the new scope.

        by using typescript typing res_json.status would show the developer a
        user saying status does not exist on type string catching the error
        early. Which in the worst case could be left to production if the dev,
        was lazy when testing all possible cases.
*/
