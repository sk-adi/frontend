import React from 'react'
import backgroundImage from "/src/assets/images/background-image.png";



function FormPage() {
  return (
    <>
    <h2>Coding Conf</h2>
    <h1>Your Journey to Coding Conf 2025 Start Here!</h1>
    <p>Secure your spot at next year's biggest coding conference.</p>
    <form action="/">
    <input type="file" name="/" id="/" /><br />
    <label htmlFor="fullName">fullName</label><br />
    <input type="text" /><br />
    <label htmlFor="email">email</label><br />
    <input type="text" /><br />
    <label htmlFor="Github Username">Github Username</label><br />
    <input type="text" /><br />
    <input type="submit" value="Submit" />
    </form>
    </>
  )
}

export default FormPage