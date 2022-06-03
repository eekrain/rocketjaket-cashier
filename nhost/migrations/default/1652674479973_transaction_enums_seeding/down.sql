DELETE FROM transaction_receipt_type_enum WHERE receipt_type='whatsapp';
DELETE FROM transaction_receipt_type_enum WHERE receipt_type='email';

DELETE FROM transaction_payment_type_enum WHERE payment_type='CASH';
DELETE FROM transaction_payment_type_enum WHERE payment_type='EDC_BRI';
DELETE FROM transaction_payment_type_enum WHERE payment_type='EDC_BCA';
DELETE FROM transaction_payment_type_enum WHERE payment_type='EDC_MANDIRI';
DELETE FROM transaction_payment_type_enum WHERE payment_type='EWALLET_LINKAJA';
DELETE FROM transaction_payment_type_enum WHERE payment_type='EWALLET_SHOPEEPAY';
DELETE FROM transaction_payment_type_enum WHERE payment_type='EWALLET_GOPAY';

DELETE FROM transaction_status_enum WHERE transaction_status='success';
DELETE FROM transaction_status_enum WHERE transaction_status='return_all';
DELETE FROM transaction_status_enum WHERE transaction_status='return_part';
DELETE FROM transaction_status_enum WHERE transaction_status='failed';