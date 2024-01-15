CREATE TABLE IF NOT EXISTS "scores" (
	"studentId" varchar(25) NOT NULL,
	"subjectId" varchar(25) NOT NULL,
	"firstComponentScore" real,
	"secondComponentScore" real,
	"examScore" real,
	"averageScore" real,
	"alphabetScore" varchar(2),
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp,
	CONSTRAINT "scores_studentId_subjectId_pk" PRIMARY KEY("studentId","subjectId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "students" (
	"id" varchar(25) PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"class" varchar(10) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "subjects" (
	"id" varchar(25) PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"numberOfCredits" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp
);
