import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

// import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
// import { loginUser, userSelector, clearState } from "./UserSlice";
// import toast from "react-hot-toast";
// import { useHistory } from "react-router-dom";
const Login = ({}) => {
  const currenDate = new Date();
  let daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let MonthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octocber",
    "November",
    "December",
  ];
  let day = new Date().getDay();
  let month = new Date().getMonth();

  let dayName = daysArray[day];
  let MonthName = MonthArray[month];
  console.log(new Date().getYear()); // "Saturday"
  console.log(MonthName); // "Saturday"
  const dispatch = useDispatch();
  //   const history = useHistory();
  //   const { register, errors, handleSubmit } = useForm();
  //   const { isFetching, isSuccess, isError, errorMessage } =
  //     useSelector(userSelector);
  //   const onSubmit = (data) => {
  //     dispatch(loginUser(data));
  //   };

  //   useEffect(() => {
  // return () => {
  //   dispatch(clearState());
  // };
  //   }, []);
  //   useEffect(() => {
  // if (isError) {
  //   toast.error(errorMessage);
  //   dispatch(clearState());
  // }
  // if (isSuccess) {
  //   dispatch(clearState());
  //   history.push("/");
  // }
  //   }, [isError, isSuccess]);
  return (
    <Fragment>
      <form>
        <input type="text" name="search_query" />
        <button type="submit">Submit</button>
        date:{dayName}
        month:{MonthName}
      </form>
      {/* <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              //   onSubmit={handleSubmit(onSubmit)}
              method="POST"
            ></form>
            <div class="mt-6">
              <div class="relative">
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">
                    Or <Link to="signup"> Signup</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};
export default Login;
