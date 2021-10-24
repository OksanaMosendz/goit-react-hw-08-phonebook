export const Login = () => {
  return (
    <div>
      <h1>Login</h1>

      <form autoComplete="off">
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

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
