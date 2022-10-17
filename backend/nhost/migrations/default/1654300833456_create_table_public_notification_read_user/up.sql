CREATE TABLE "public"."notification_read_user" ("id" bigserial NOT NULL, "notification_id" integer NOT NULL, "user_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("notification_id") REFERENCES "public"."notification"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON UPDATE cascade ON DELETE cascade);COMMENT ON TABLE "public"."notification_read_user" IS E'Map of notification that has been read by the user';