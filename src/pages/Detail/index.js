import { useParams } from "react-router-dom";

const Detail = () => {
    const params = useParams()
    console.log(params)
  return <h1>Detail</h1>;
};

export default Detail;
