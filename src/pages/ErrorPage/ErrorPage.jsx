import { Link } from "react-router";

import "./ErrorPage.scss";
function ErrorPage() {
  return (
    <main className="error-page">
      <h1>404</h1>
      <h2>страница не найдена</h2>
      <Link to="/">На главную</Link>
    </main>
  );
}

export default ErrorPage;
