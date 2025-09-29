CREATE TABLE "hydraulics" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"population" jsonb NOT NULL,
	"per_capita" jsonb NOT NULL,
	"road_coating" jsonb NOT NULL,
	"coefficient" jsonb NOT NULL,
	"material" text NOT NULL,
	"infiltration" jsonb NOT NULL,
	"return_coefficient" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"business_name" varchar(255) NOT NULL,
	"river_basin_name" varchar(255) NOT NULL,
	"city" varchar(255) NOT NULL,
	"state" varchar(2) NOT NULL,
	"engineer_name" varchar(255) NOT NULL,
	"user_id" varchar(36) NOT NULL,
	"hydraulic_id" varchar(36)
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar(36) PRIMARY KEY NOT NULL
);
--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_hydraulic_id_hydraulics_id_fk" FOREIGN KEY ("hydraulic_id") REFERENCES "public"."hydraulics"("id") ON DELETE no action ON UPDATE no action;