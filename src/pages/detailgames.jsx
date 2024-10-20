import { useParams } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import DetailGame from "../hooks/detailGame";
import AuthLayout from "../components/layouts/AuthLayout";
import Header from "../components/elements/Header";

const DetailGames = () => {
  const { id } = useParams();
  const dataDetail = DetailGame(id);

  console.log(dataDetail);

  return (
    <>
      <Navbar />
      <AuthLayout background="bg-dark" className="pt-32 pb-10">
        <Header className="text-primary">Nama span</Header>
      </AuthLayout>
      <AuthLayout background="bg-dark">
        
      </AuthLayout>
    </>
  );
};

export default DetailGames;
