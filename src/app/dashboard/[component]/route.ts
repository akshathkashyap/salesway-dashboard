import { NextRequest, NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

const dbTableNames: string[] = [
	"dashboard_component_2",
	"dashboard_component_4",
	"dashboard_component_6",
];

// Open database connection
async function openDb() {
	return open({
		filename: path.join(process.cwd(), "salesway_db.sqlite"),
		driver: sqlite3.Database,
	});
}

// Handle GET requests
export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ component: string }> }
): Promise<NextResponse> {
	const db = await openDb();
	const tableName: string = (await params).component;

	if (!dbTableNames.includes(tableName)) {
		console.error("Bad Request @/dashboard: component name does not exist");
		return NextResponse.json([], { status: 400 });
	}

	const data = await db.all(`SELECT * FROM '${tableName}'`);
	return NextResponse.json(data);
}
