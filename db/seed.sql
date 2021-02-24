CREATE TABLE "users" (
	"user_id" SERIAL NOT NULL,
	"username" VARCHAR(255) NOT NULL UNIQUE,
	"email" VARCHAR(60) NOT NULL,
	"hash_pass" VARCHAR(5000),
	"name" VARCHAR(255),
	"ship_to_address" VARCHAR(75),
	"ship_to_city" VARCHAR(50),
	"ship_to_state" VARCHAR(2),
	"ship_to_country" VARCHAR(2),
	"ship_to_zip" INT(5),
	"bill_to_address" VARCHAR(75),
	"bill_to_city" VARCHAR(50),
	"bill_to_state" VARCHAR(2),
	"bill_to_country" VARCHAR(2),
	"bill_to_zip" INT(5),
	CONSTRAINT "users_pk" PRIMARY KEY ("user_id")
);

CREATE TABLE "cart" (
	"cart_id" INTEGER,
	"user_id" INTEGER,
	"active" BOOLEAN NOT NULL,
	"date" SERIAL NOT NULL,
	CONSTRAINT "cart_pk" PRIMARY KEY ("cart_id")
);

CREATE TABLE "items" (
	"item_id" SERIAL PRIMARY KEY NOT NULL,
	CONSTRAINT "items_pk" PRIMARY KEY ("item_id")
);

CREATE TABLE "cart_item" (
	"cart_item_id" INTEGER NOT NULL,
	"item_id" INT NOT NULL,
	"cart_id" INT NOT NULL,
	"qty" INT NOT NULL,
	CONSTRAINT "cart_item_pk" PRIMARY KEY ("cart_item_id")
);

ALTER TABLE "cart" ADD CONSTRAINT "cart_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");

ALTER TABLE "items" ADD CONSTRAINT "items_fk0" FOREIGN KEY ("item_id") REFERENCES "cart"("item_id");

ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_fk0" FOREIGN KEY ("item_id") REFERENCES "items"("item_id");
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_fk1" FOREIGN KEY ("cart_id") REFERENCES "cart"("date");

