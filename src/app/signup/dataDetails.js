"use client";
import React, { useState, useEffect } from "react";

export default function DataDetails({ onNext, data }) {
  const [email, setEmail] = useState(data?.email || "");
  const [password, setPassword] = useState(data?.password || "");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [checkPassword, setCheckPassword] = useState([
    { text: "Minimum 8 characters", isValid: false },
    { text: "Contains at least one uppercase letter", isValid: false },
    { text: "Contains at least one number", isValid: false },
  ]);

  useEffect(() => {
    validatePassword(password);
  }, [password]);

  const validatePassword = (password) => {
    setCheckPassword((prevState) => {
      const newState = [...prevState];

      newState[0].isValid = password.length >= 8;

      newState[1].isValid = /[A-Z]/.test(password);

      newState[2].isValid = /\d/.test(password);

      return newState;
    });
  };

  const validateConfirmPassword = (pass) => {
    setPasswordConfirm(pass);
    pass === password ? setConfirmPassword(true) : setConfirmPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ email, password });
  };

  return (
    <div className="sm:mx-auto sm:w-[25%] px-6">
      <form action="" className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label>Email address</label>
          <input
            type="text"
            className="px-2 py-1.5 border-black border-2 rounded-md"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col">
          <label>Password</label>
          <input
            type="password"
            className="px-2 py-1.5 border-black border-2 rounded-md"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {password.length > 0 && (
            <div className="mt-2">
              <ul>
                {checkPassword.map((password, index) => {
                  return (
                    <li key={index} className="flex items-center gap-2">
                      {password.isValid ? (
                        <span style={{ color: "green" }}>&#x2713;</span>
                      ) : (
                        <span style={{ color: "red" }}>&#x2717;</span>
                      )}
                      <p className={password.isValid ? "" : "text-red-500"}>
                        {password.text}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <label>Confirm Password</label>
          <input
            type="password"
            className="px-2 py-1.5 border-black border-2 rounded-md"
            value={passwordConfirm}
            onChange={(e) => {
              validateConfirmPassword(e.target.value);
            }}
          />
          {!confirmPassword & (passwordConfirm.length > 0) ? (
            <p className="mt-2">Passwords do not match</p>
          ) : null}
        </div>

        <button
          id="next-button"
          className="w-full bg-[#FF753A] shadow-md hover:bg-[#FF8C42]  transition all duration-300 font-medium text-white text-sm px-8 py-2 rounded-md"
          disabled={
            !confirmPassword ||
            checkPassword.some((password) => !password.isValid) ||
            email.trim() === "" ||
            password.trim() === "" ||
            passwordConfirm.trim() === ""
          }
          onClick={handleSubmit}
        >
          Next
        </button>
      </form>
    </div>
  );
}
