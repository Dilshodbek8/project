import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/context";

export default function Home() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <Link to={"/dashboard"}>dashboard</Link>
      <h1>Lorem ipsum dolor sit amet.</h1>
    </div>
  );
}
