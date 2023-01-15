import NavigationBar from "./components/NavigationBar/NavigationBar";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    function checkUserLogin() {
      if (window.location.pathname === "/") navigate("/login");
    }
    checkUserLogin();
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default App;

/*
Process flow:
1. When normal user is not logged in :-
- Header will have Login and Signup navlinks
- By default the login page will be open in case user is not logged in

2. When normal user logs in :-
- Header will have home navlink and logout button
- Product page will be displayed with all the filters

3. When admin user logs in :-
- Header will have Home, Add Product navlinks and Logout button
- Product page will be displayed with an additional edit and delete button
- If admin clicks on edit of any of the product, an edit form will appear using which admin can edit details of the existing product
- If admin clicks on delete on any of the product, a confirmation popup appears post which admin can delete the selected product
*/

/*
User schema parameters:
1. id
2. role (admin/customer)
3. firstname
4. lastname
5. email
6. password
7. contact
8. street
9. city
10. state
11. landmark
12. pincode
13. orders
14. address = {[name, contact, street, city, state, landmark, pincode]}

Product schema parameters:
1. id
2. name
3. category
4. manufacturer
5. available items
6. price
7. image url
8. product description
*/
