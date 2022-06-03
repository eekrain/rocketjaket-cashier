import React, {useState} from 'react';

export const useCartModal = () => {
  const [paymentTypeModalOpen, setPaymentTypeModalOpen] = useState(false);
  const [paymentLandingModalOpen, setPaymentLandingModalOpen] = useState(false);

  const [returnTypeModalOpen, setReturnTypeModalOpen] = useState(false);
  const [returnLandingModalOpen, setReturnLandingModalOpen] = useState(false);

  return {
    paymentTypeModalOpen,
    paymentLandingModalOpen,
    setPaymentTypeModalOpen,
    setPaymentLandingModalOpen,
    returnTypeModalOpen,
    returnLandingModalOpen,
    setReturnTypeModalOpen,
    setReturnLandingModalOpen,
  };
};
