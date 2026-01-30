import { Form, useNavigation, useActionData } from "react-router-dom";

export default function Login() {
  const navigation = useNavigation();
  const error = useActionData() as string;
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="form-group">
      <h2>Login</h2>

      <Form method="post">
        <div className="input-group">
          <input name="username" required />
          <label>Username</label>
        </div>

        <div className="input-group">
          <input type="password" name="password" required />
          <label>Password</label>
        </div>

        <button disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </Form>

      {error && <p>{error}</p>}
    </div>
  );
}