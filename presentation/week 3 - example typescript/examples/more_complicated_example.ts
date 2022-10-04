interface HttpResponseType<T> {
  status: number;
  data?: T;
}

class HttpResponse<T> implements HttpResponseType<T> {
  status: number;
  data?: T;
  constructor(status: number, data?: T) {
    this.status = status;
    this.data = data;
  }
}

interface User {
  username: string;
  password: string;
}

let res = new HttpResponse<User>(200, {
  username: "callum",
  password: "password123",
});

/*
    in javascript, we could have usrnam instead of username and not
    have any errors

    implements allows for a guidance of what is missing, if status was missing
    the code would not run.

    interfaces are skeletons for objects or classes. These indicate what an object
    has and allows for notations of what is available. i.e.

    when res.data is typed by the developer username and password are recommended
    as options and if anything else is typed it will show an error.
*/
