import { RiLoader4Line } from "react-icons/ri";
import styleLoading from "./Loading.module.css";

function Loading() {
  return (
    <div className={styleLoading.loader}>
      <RiLoader4Line className={styleLoading.loading} />
    </div>
  );
}

export default Loading;
