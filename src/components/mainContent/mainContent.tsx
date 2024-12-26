import { Input, Modal } from "antd";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
export const MainContent = () => {
  const { t } = useTranslation();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmCode, setConfirmCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  //   const notify = () => toast.error("The code is not correct!");
  //   const notifySuccess = () => toast.success("The code is correct!");

  //   const handlePhoneSubmit = async () => {
  //     try {
  //       const response = await axios.post("/api/send-confirmation-code", {
  //         phoneNumber,
  //       });
  //       if (response.data.success) {
  //         setIsCodeSent(true);
  //         toast.success("Confirmation code sent!");
  //       } else {
  //         toast.error("Failed to send confirmation code.");
  //       }
  //     } catch (error) {
  //       toast.error("Error sending confirmation code.", error);
  //     }
  //   };

  //   const handleConfirmCodeSubmit = async () => {
  //     try {
  //       const response = await axios.post("/api/verify-code", {
  //         phoneNumber,
  //         confirmCode,
  //       });
  //       if (response.data.success) {
  //         toast.success("Account deleted successfully!");
  //       } else {
  //         toast.error("Invalid confirmation code.");
  //       }
  //     } catch (error) {
  //       toast.error("Error verifying code.", error);
  //     }
  //   };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log("Barcha ma'lumotlar o'chirildi!");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    console.log("Bekor qilindi.");
  };
  const handleSubmit = () => {
    setIsCodeSent(true);
    console.log(phoneNumber);
    console.log(confirmCode);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <div className="mt-32 flex justify-center">
        <div className="flex flex-wrap justify-center gap-5 md:w-full lg:w-[80%] xl:w-[70%]">
          <div>
            <img
              src="/abuSahiy.png"
              alt="Abu Sahiy"
              width={300}
              className="mt-[-40px]"
            />
          </div>
          <div className="w-full px-5 sm:px-10 md:w-[50%] md:px-0 lg:w-[40%] xl:w-[35%] ">
            <p className="text-xl font-bold">{t(`Delete`)}</p>
            <p className="text-[#737373] mt-2">{t(`loginInfo`)}</p>

            {/* Telefon raqam kiritish */}
            <div className="mt-5 flex flex-col">
              <label htmlFor="toggle" className="font-bold">
                {t(`Pnumber`)}
              </label>
              <Input
                type="number"
                id="toggle"
                placeholder="+123456789"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 rounded-md"
              />
            </div>

            {/* Kod kiritish */}
            {isCodeSent && (
              <div className="mt-5 flex flex-col">
                <label htmlFor="confirmCode" className="font-bold">
                  {t(`Enter Confirmation Code`)}
                </label>
                <input
                  type="number"
                  id="confirmCode"
                  value={confirmCode}
                  onChange={(e) => setConfirmCode(e.target.value)}
                  placeholder={t("Confirmation code")}
                  className="mt-1 rounded-md border border-gray-300 p-2"
                />
              </div>
            )}

            <button
              className="mt-5 rounded-xl bg-[#fd521c] px-4 py-2 font-bold text-white hover:bg-[#ff6a2a]"
              onClick={() => {
                if (isCodeSent) {
                  showModal();
                } else {
                  handleSubmit();
                }
              }}
            >
              {isCodeSent ? t(`Delete`) : t("Get Code")}
            </button>
            {/* <Button onClick={notifySuccess}>success</Button> */}
            {/* <Button onClick={notify}>error</Button> */}
            <ToastContainer />
          </div>
        </div>
      </div>
      <Modal
        title={t("Confirmation")}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={t("Yes")}
        cancelText={t("Cancel")}
      >
        <p className="text-base">
          {t(
            `are you sure to delete your account? your data will be deleted permanently and you cannot login and register again with this credentials`
          )}
        </p>
      </Modal>
    </>
  );
};
