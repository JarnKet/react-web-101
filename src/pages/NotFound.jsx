import { useEffect } from "react";

import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", {
        replace: true,
      });
    }, 3000);
  }, [navigate]);

  return (
    <div>ບໍ່ພົບໜ້າທີ່ທ່ານຄົ້ນຫາ, ລະບົບຈະນຳທ່ານທາງກັບໄປໜ້າຫຼັກໃນ 3 ວິນາທີ</div>
  );
};

export default NotFound;
