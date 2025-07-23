import { useContext } from "react";
import userContext from "../contexts/usserContext";

const useUser = () => useContext(userContext);

export default useUser;
