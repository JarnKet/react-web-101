import { useState, useEffect } from "react";
import { useParams } from "react-router";

const UserDetail = () => {
  const params = useParams();
  const id = params.id;

  //   States
  const [userDetail, setUserDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getUser() {
      try {
        setIsLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/" + id
        );

        const data = await response.json();

        setUserDetail(data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getUser();
  }, [id]);

  useEffect(() => {
    console.log("User Detail Data", userDetail);
  }, [userDetail]);

  if (isLoading) {
    return (
      <div className="user-detail-page">
        <p>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="user-detail-page">
        <p style={{ color: "red" }}>ມີຂໍ້ຜິດພາດເກີດຂຶ້ນໃນການໂຫຼດຂໍ້ມູນ</p>
      </div>
    );
  }

  return (
    <div className="user-detail-page">
      <div className="user-detail-card">
        <div className="user-detail-id">ID: {userDetail.id}</div>
        <div className="user-detail-name">{userDetail.name}</div>
        <div className="user-detail-email">{userDetail.email}</div>
        {userDetail.address && (
          <div className="user-detail-address">
            Address: {userDetail.address.street}, {userDetail.address.city}
          </div>
        )}
        {userDetail.company && (
          <div className="user-detail-company">
            Company: {userDetail.company.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
