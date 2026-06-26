/**
 * database safety utility module.
 * 
 * Prepares whitelist utilities for dynamic queries. 
 * Since SQL parameters can only bind query literals and not identifiers (table or column names),
 * any dynamic naming must be verified against hardcoded lists before execution.
 */

/**
 * Whitelists allowed column names for sorting dynamic queries.
 * Prevents SQL injection by refusing unlisted values.
 *
 * @param selectedColumn User-controlled column parameter.
 * @returns A safe, validated column name string.
 */
export function getSafeOrderColumn(selectedColumn: string): string {
  const allowedColumns = ["createdAt", "name", "email"];

  if (allowedColumns.includes(selectedColumn)) {
    return selectedColumn;
  }

  // Default fallback column to prevent errors
  return "createdAt";
}

/**
 * Whitelists allowed table names for raw SQL queries.
 * Useful for scenarios where table names cannot be parameterized.
 * 
 * In standard Prisma usage:
 * 1. Import Prisma from "@prisma/client"
 * 2. Return Prisma.raw(`"${tableName}"`)
 *
 * @param tableName User-controlled table parameter.
 * @param prismaRaw The Prisma.raw helper function passed from the query execution context.
 * @returns A safe, raw SQL segment of the verified table name.
 */
export function getSafeTableSql(tableName: string, prismaRaw?: (text: string) => any): any {
  const allowedTables = ["Cohort", "User", "Mentor"];

  if (!allowedTables.includes(tableName)) {
    throw new Error(`Access Denied: Unregistered table query execution: ${tableName}`);
  }

  // If Prisma context is active, wrap in Prisma.raw to mark as query-safe
  if (prismaRaw) {
    return prismaRaw(`"${tableName}"`);
  }

  // Fallback to standard safe string
  return `"${tableName}"`;
}
