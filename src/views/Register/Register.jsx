export const Register = () => {
  return (
    <div>
      <h1>Registration</h1>

      <form autoComplete="off">
        <label>
          Name
          <input
            type="text"
            name="name"
            //   value={}
            //   onChange={}
          />
        </label>

        <label>
          E-mail
          <input
            type="email"
            name="email"
            //   value={}
            //   onChange={}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            //   value={}
            //   onChange={}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
