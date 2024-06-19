import React from "react";
import AddFixSavingsCard from "./components/addFixedSavings";
import PayBackCard from "./components/payBackCard";
import RequestFixSavingsCard from "./components/requestFixedSavings";
import WithdrawalCard from "./components/withdrawalCard";
// I created a new folder called components so that each card has its own file



const TransactionCard = ({ type, setShowModal,setShowWithdrawalMsg,setShowWithdrawalMsgCont,showWithdrawalMsg }) => {
  return (
    <>
      {type === "Withdrawal" && <WithdrawalCard setShowModal={setShowModal} setShowWithdrawalMsg={setShowWithdrawalMsg} showWithdrawalMsg={showWithdrawalMsg} setShowWithdrawalMsgCont={setShowWithdrawalMsgCont} />}

      {type === "PayBack" && <PayBackCard setShowModal={setShowModal}  />}
      {type === "AddFixedSavings" && <AddFixSavingsCard setShowModal={setShowModal} />}
      {type === "RequestFixedSavings" && <RequestFixSavingsCard setShowModal={setShowModal} />}
    </>
  );
};

export default TransactionCard;
