import { relations } from "drizzle-orm";
import { jsonb, pgTable, text, varchar } from "drizzle-orm/pg-core";
import type {
  Coefficient,
  Infiltration,
  PerCapita,
  Population,
  RoadCoating,
} from "@/domain/entities/hydraulic";

export const materialEnum = text("material", {
  enum: ["pvc", "aluminum", "ceramic"] as const,
});

export const users = pgTable("users", {
  id: varchar("id", { length: 36 }).primaryKey(),
});

export const hydraulics = pgTable("hydraulics", {
  id: varchar("id", { length: 36 }).primaryKey(),
  population: jsonb("population").$type<Population>().notNull(),
  perCapita: jsonb("per_capita").$type<PerCapita>().notNull(),
  roadCoating: jsonb("road_coating").$type<RoadCoating>().notNull(),
  coefficient: jsonb("coefficient").$type<Coefficient>().notNull(),
  material: text("material", {
    enum: ["pvc", "aluminum", "ceramic"] as const,
  }).notNull(),
  infiltration: jsonb("infiltration").$type<Infiltration>().notNull(),
  returnCoefficient: text("return_coefficient").notNull(),
});

export const projects = pgTable("projects", {
  id: varchar("id", { length: 36 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  businessName: varchar("business_name", { length: 255 }).notNull(),
  riverBasinName: varchar("river_basin_name", { length: 255 }).notNull(),
  city: varchar("city", { length: 255 }).notNull(),
  state: varchar("state", { length: 2 }).notNull(),
  engineerName: varchar("engineer_name", { length: 255 }).notNull(),
  userId: varchar("user_id", { length: 36 }).notNull(),
  hydraulicId: varchar("hydraulic_id", { length: 36 }).references(
    () => hydraulics.id,
  ),
});

export const usersRelations = relations(users, ({ many }) => ({
  projects: many(projects),
}));

export const hydraulicsRelations = relations(hydraulics, ({ many }) => ({
  projects: many(projects),
}));

export const projectsRelations = relations(projects, ({ one }) => ({
  user: one(users, {
    fields: [projects.userId],
    references: [users.id],
  }),
  hydraulic: one(hydraulics, {
    fields: [projects.hydraulicId],
    references: [hydraulics.id],
  }),
}));

export type ProjectRow = typeof projects.$inferSelect;
export type NewProjectRow = typeof projects.$inferInsert;
export type HydraulicRow = typeof hydraulics.$inferSelect;
export type NewHydraulicRow = typeof hydraulics.$inferInsert;
