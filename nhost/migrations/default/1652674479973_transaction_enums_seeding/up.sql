INSERT INTO transaction_receipt_type_enum (receipt_type, title) VALUES ('whatsapp', 'Whatsapp');
INSERT INTO transaction_receipt_type_enum (receipt_type, title) VALUES ('email', 'Email');


INSERT INTO transaction_payment_type_enum (payment_type, title) VALUES ('CASH', 'Cash');
INSERT INTO transaction_payment_type_enum (payment_type, title) VALUES ('EDC_BRI', 'BRI');
INSERT INTO transaction_payment_type_enum (payment_type, title) VALUES ('EDC_BCA', 'BCA');
INSERT INTO transaction_payment_type_enum (payment_type, title) VALUES ('EWALLET_LINKAJA', 'LINKAJA');
INSERT INTO transaction_payment_type_enum (payment_type, title) VALUES ('EWALLET_SHOPEEPAY', 'SHOPEEPAY');
INSERT INTO transaction_payment_type_enum (payment_type, title) VALUES ('EWALLET_GOPAY', 'GOPAY');
INSERT INTO transaction_payment_type_enum (payment_type, title) VALUES ('EDC_MANDIRI', 'MANDIRI');


INSERT INTO transaction_status_enum (transaction_status, title) VALUES ('success', 'Sukses');
INSERT INTO transaction_status_enum (transaction_status, title) VALUES ('refund', 'Refund');
INSERT INTO transaction_status_enum (transaction_status, title) VALUES ('failed', 'Gagal');
INSERT INTO transaction_status_enum (transaction_status, title) VALUES ('refund_part', 'Refund Sebagian');
