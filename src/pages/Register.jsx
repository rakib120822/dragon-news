import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

function Register() {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((err) => {
            alert(err.message);
            setUser(user);
          });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* userName */}
            <label className="label">Name</label>
            <input
              type="text"
              required
              name="name"
              className="input"
              placeholder="Your name"
            />

            {/* photoURL */}
            <label className="label">Photo Url</label>
            <input
              type="text"
              required
              name="photo"
              className="input"
              placeholder="photo url"
            />

            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              required
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              required
              name="password"
              className="input"
              placeholder="Password"
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="text-center pt-5">
              Already have An Account ?{" "}
              <Link to={"/auth/login"} className="text-secondary ">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Register;
