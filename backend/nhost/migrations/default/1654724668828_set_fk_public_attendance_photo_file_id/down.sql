alter table "public"."attendance" drop constraint "attendance_photo_file_id_fkey",
  add constraint "attendance_photo_file_id_fkey"
  foreign key ("photo_file_id")
  references "storage"."files"
  ("id") on update cascade on delete cascade;
